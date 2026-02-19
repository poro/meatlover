#!/usr/bin/env node
/**
 * v2: Fetch product images via Amazon search using ScraperAPI
 */
import fs from 'fs';
import path from 'path';

const SCRAPER_API_KEY = '6ee7d4d212143dfc8511dbcadd47af68';
const PRODUCTS_FILE = path.join(import.meta.dirname, '..', 'src', 'data', 'products.ts');

const content = fs.readFileSync(PRODUCTS_FILE, 'utf-8');
const lines = content.split('\n');

// Extract all products still using unsplash
const products = [];
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('unsplash.com')) {
    let name = null, brand = null;
    for (let j = Math.max(0, i - 10); j < Math.min(lines.length, i + 5); j++) {
      const nm = lines[j].match(/name:\s*'([^']+)'/);
      if (nm) name = nm[1];
      const br = lines[j].match(/brand:\s*'([^']+)'/);
      if (br) brand = br[1];
    }
    if (name) products.push({ lineIndex: i, name, brand: brand || '', line: lines[i] });
  }
}

console.log(`${products.length} products still need images\n`);

async function searchImage(name) {
  const query = encodeURIComponent(name + ' product');
  const url = `https://www.amazon.com/s?k=${query}`;
  const apiUrl = `http://api.scraperapi.com?api_key=${SCRAPER_API_KEY}&url=${encodeURIComponent(url)}&render=true`;
  
  const res = await fetch(apiUrl, { signal: AbortSignal.timeout(45000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const html = await res.text();
  
  // Find first product image from search results
  const imgPattern = /https:\/\/m\.media-amazon\.com\/images\/I\/[A-Za-z0-9+%-]+\._AC_[^"'\s]+\.jpg/g;
  const matches = [...html.matchAll(imgPattern)];
  
  if (matches.length > 0) {
    // Get the first decent-sized image, normalize to 600px
    let imgUrl = matches[0][0];
    imgUrl = imgUrl.replace(/\._AC_[^.]+\./, '._AC_SL600_.');
    return imgUrl;
  }
  
  return null;
}

// Process 2 at a time
const results = {};
for (let i = 0; i < products.length; i += 2) {
  const batch = products.slice(i, i + 2);
  console.log(`Batch ${Math.floor(i/2) + 1}/${Math.ceil(products.length/2)}:`);
  
  await Promise.all(batch.map(async (p) => {
    try {
      const imgUrl = await searchImage(p.name);
      if (imgUrl) {
        console.log(`  ✅ ${p.name}`);
        results[p.lineIndex] = imgUrl;
      } else {
        console.log(`  ❌ ${p.name}: no image`);
      }
    } catch (e) {
      console.log(`  ❌ ${p.name}: ${e.message}`);
    }
  }));
  
  if (i + 2 < products.length) await new Promise(r => setTimeout(r, 3000));
}

// Apply
let updated = content;
for (const [idx, url] of Object.entries(results)) {
  updated = updated.replace(lines[idx], lines[idx].replace(/https:\/\/images\.unsplash\.com\/[^']+/, url));
}

fs.writeFileSync(PRODUCTS_FILE, updated);
console.log(`\nDone! Replaced ${Object.keys(results).length}/${products.length} images`);
