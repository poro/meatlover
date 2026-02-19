#!/usr/bin/env node
/**
 * Fetch real product images from Amazon using ScraperAPI
 * Updates src/data/products.ts with actual product image URLs
 */

import fs from 'fs';
import path from 'path';

const SCRAPER_API_KEY = '6ee7d4d212143dfc8511dbcadd47af68';
const PRODUCTS_FILE = path.join(import.meta.dirname, '..', 'src', 'data', 'products.ts');

// Read products file and extract ASINs with their line positions
const content = fs.readFileSync(PRODUCTS_FILE, 'utf-8');
const lines = content.split('\n');

// Find all products with unsplash images and ASINs
const products = [];
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('unsplash.com')) {
    // Look nearby for ASIN and name
    let asin = null;
    let name = null;
    for (let j = Math.max(0, i - 10); j < Math.min(lines.length, i + 10); j++) {
      const asinMatch = lines[j].match(/asin:\s*'([^']+)'/);
      if (asinMatch) asin = asinMatch[1];
      const nameMatch = lines[j].match(/name:\s*'([^']+)'/);
      if (nameMatch) name = nameMatch[1];
    }
    if (asin) {
      products.push({ lineIndex: i, asin, name: name || 'Unknown' });
    }
  }
}

console.log(`Found ${products.length} products with Unsplash images and ASINs`);

// Fetch Amazon page and extract main product image
async function fetchProductImage(asin) {
  const url = `https://www.amazon.com/dp/${asin}`;
  const apiUrl = `http://api.scraperapi.com?api_key=${SCRAPER_API_KEY}&url=${encodeURIComponent(url)}`;
  
  const res = await fetch(apiUrl, { signal: AbortSignal.timeout(30000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const html = await res.text();
  
  // Try multiple patterns for Amazon product images
  const patterns = [
    // Main image in data-old-hires attribute (high-res)
    /data-old-hires="(https:\/\/m\.media-amazon\.com\/images\/I\/[^"]+)"/,
    // Main image in landingImage
    /id="landingImage"[^>]*src="(https:\/\/m\.media-amazon\.com\/images\/I\/[^"]+)"/,
    // hiRes in image data JSON
    /"hiRes"\s*:\s*"(https:\/\/m\.media-amazon\.com\/images\/I\/[^"]+)"/,
    // large in image data JSON
    /"large"\s*:\s*"(https:\/\/m\.media-amazon\.com\/images\/I\/[^"]+)"/,
    // Any main product image
    /https:\/\/m\.media-amazon\.com\/images\/I\/[A-Za-z0-9]+\._AC_SL1500_\.jpg/,
  ];
  
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) {
      let imgUrl = match[1] || match[0];
      // Normalize to a clean 600px version
      imgUrl = imgUrl.replace(/\._[^.]+_\./, '._AC_SL600_.');
      return imgUrl;
    }
  }
  
  // Fallback: any media-amazon image that looks like a product
  const fallback = html.match(/https:\/\/m\.media-amazon\.com\/images\/I\/[A-Za-z0-9+%-]+\.jpg/);
  if (fallback) {
    return fallback[0].replace(/\._[^.]+_\./, '._AC_SL600_.');
  }
  
  return null;
}

// Process in batches of 3 to avoid rate limits
const results = {};
for (let i = 0; i < products.length; i += 3) {
  const batch = products.slice(i, i + 3);
  console.log(`\nBatch ${Math.floor(i/3) + 1}/${Math.ceil(products.length/3)}:`);
  
  const promises = batch.map(async (p) => {
    try {
      console.log(`  Fetching ${p.name} (${p.asin})...`);
      const imgUrl = await fetchProductImage(p.asin);
      if (imgUrl) {
        console.log(`  ✅ ${p.name}: ${imgUrl.substring(0, 60)}...`);
        results[p.lineIndex] = imgUrl;
      } else {
        console.log(`  ❌ ${p.name}: no image found`);
      }
    } catch (e) {
      console.log(`  ❌ ${p.name}: ${e.message}`);
    }
  });
  
  await Promise.all(promises);
  
  // Small delay between batches
  if (i + 3 < products.length) {
    await new Promise(r => setTimeout(r, 2000));
  }
}

// Apply replacements
const successCount = Object.keys(results).length;
console.log(`\n\nReplacing ${successCount}/${products.length} images...`);

let updatedContent = content;
for (const [lineIdx, newUrl] of Object.entries(results)) {
  const oldLine = lines[lineIdx];
  const newLine = oldLine.replace(/https:\/\/images\.unsplash\.com\/[^']+/, newUrl);
  updatedContent = updatedContent.replace(oldLine, newLine);
}

fs.writeFileSync(PRODUCTS_FILE, updatedContent);
console.log('Done! Updated products.ts');
