'use client'

import { useEffect } from 'react'
import type { Product } from '@/data/products'

interface Props {
  products: Product[]
  listName: string
  baseUrl?: string
}

export default function ProductListJsonLd({ products, listName, baseUrl = 'https://meatlover.com' }: Props) {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'product-list-jsonld'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: listName,
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: product.name,
          url: `${baseUrl}/products/${product.id}`,
          image: product.image_url.startsWith('http') ? product.image_url : undefined,
          brand: { '@type': 'Brand', name: product.brand },
          offers: {
            '@type': 'Offer',
            price: product.price,
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: product.rating,
            reviewCount: product.reviews_count,
          },
        },
      })),
    })
    document.head.appendChild(script)
    return () => { script.remove() }
  }, [products, listName, baseUrl])

  return null
}
