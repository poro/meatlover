import { notFound } from 'next/navigation'
import Link from 'next/link'
import Script from 'next/script'
import { ArrowLeft, Star, Check, X, ExternalLink, ShieldCheck, Award, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductCard from '@/components/ProductCard'
import { getProductById, products, getRelatedProducts } from '@/data/products'
import type { Metadata } from 'next'

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params
  const product = getProductById(id)
  
  if (!product) {
    return { title: 'Product Not Found | MeatLover' }
  }

  const title = `${product.name} Review (2025) - Is It Worth It? | MeatLover`
  const description = `${product.name} review: ${product.rating}/5 stars from ${product.reviews_count.toLocaleString()} reviews. ${product.description.slice(0, 120)}...`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const relatedProducts = getRelatedProducts(product.id, 3)

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: product.affiliate_url,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviews_count,
      bestRating: 5,
      worstRating: 1,
    },
  }

  const categoryLabel = product.category === 'grill' ? 'Grills' :
                        product.category === 'smoker' ? 'Smokers' :
                        product.category === 'thermometer' ? 'Accessories' : 'Accessories'
  
  const categoryPath = product.category === 'grill' ? '/grills' :
                       product.category === 'smoker' ? '/smokers' : '/accessories'

  return (
    <>
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen">
        <Breadcrumbs 
          items={[
            { label: categoryLabel, href: categoryPath },
            { label: product.name }
          ]} 
        />

        {/* Product Details */}
        <section className="py-8 lg:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Image */}
              <div className="relative">
                <div className="aspect-square bg-neutral-800 rounded-2xl flex items-center justify-center sticky top-24">
                  <div className="text-center">
                    <div className="text-8xl mb-4">
                      {product.category === 'grill' ? '🔥' : 
                       product.category === 'smoker' ? '💨' :
                       product.category === 'thermometer' ? '🌡️' : '🛠️'}
                    </div>
                    <span className="text-neutral-500">{product.brand}</span>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.best_for && (
                      <Badge className="bg-orange-500 text-white">
                        <Award className="h-3 w-3 mr-1" />
                        {product.best_for}
                      </Badge>
                    )}
                    {product.expert_tested && (
                      <Badge variant="outline" className="bg-neutral-900/80 border-green-500/50 text-green-400">
                        <ShieldCheck className="h-3 w-3 mr-1" />
                        Expert Tested
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="border-neutral-700 text-neutral-400">
                    {product.brand}
                  </Badge>
                  <Badge variant="outline" className="border-neutral-700 text-neutral-400 capitalize">
                    {product.subcategory}
                  </Badge>
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-500 fill-yellow-500'
                            : i < product.rating
                            ? 'text-yellow-500 fill-yellow-500/50'
                            : 'text-neutral-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-white font-semibold">{product.rating}</span>
                  <span className="text-neutral-500">({product.reviews_count.toLocaleString()} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-4xl font-bold text-white">
                    {formatPrice(product.price)}
                  </span>
                  {product.price > 500 && (
                    <Badge variant="outline" className="border-green-500/50 text-green-400">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Free Shipping
                    </Badge>
                  )}
                </div>

                {/* Description */}
                <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
                  {product.description}
                </p>

                {/* CTAs */}
                <div className="flex flex-col gap-4 mb-8">
                  <a
                    href={product.affiliate_url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <Button size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg">
                      Check Price on Amazon
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <Link href={categoryPath}>
                    <Button size="lg" variant="outline" className="w-full border-neutral-700 hover:bg-neutral-800 py-6">
                      Compare with Other {categoryLabel}
                    </Button>
                  </Link>
                </div>

                <p className="text-neutral-500 text-sm">
                  * As an Amazon Associate, we earn from qualifying purchases. Prices may vary.
                </p>

                {/* Quick Specs */}
                <div className="mt-8 p-4 bg-neutral-900 rounded-xl border border-neutral-800">
                  <h3 className="font-bold text-white mb-3">Quick Specs</h3>
                  <dl className="grid grid-cols-2 gap-3">
                    {Object.entries(product.specs).slice(0, 4).map(([key, value]) => (
                      <div key={key}>
                        <dt className="text-neutral-500 text-sm">{key}</dt>
                        <dd className="text-white font-medium">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pros & Cons + Full Specs */}
        <section className="py-12 bg-neutral-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Our Expert Review</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Pros */}
              <Card className="bg-neutral-800 border-neutral-700">
                <CardHeader>
                  <h3 className="text-lg font-bold text-green-500 flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    What We Love
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-neutral-300">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Cons */}
              <Card className="bg-neutral-800 border-neutral-700">
                <CardHeader>
                  <h3 className="text-lg font-bold text-red-500 flex items-center gap-2">
                    <X className="h-5 w-5" />
                    Could Be Better
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-neutral-400">
                        <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Specs */}
              <Card className="bg-neutral-800 border-neutral-700">
                <CardHeader>
                  <h3 className="text-lg font-bold text-white">📋 Full Specifications</h3>
                </CardHeader>
                <CardContent>
                  <dl className="space-y-3">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between gap-2">
                        <dt className="text-neutral-400 text-sm">{key}</dt>
                        <dd className="text-white font-medium text-right text-sm">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Buy the {product.name}?
              </h2>
              <p className="text-neutral-300 mb-6 max-w-xl mx-auto">
                Click below to check the current price and availability on Amazon. 
                Prices may vary, and orders over $35 typically qualify for free shipping.
              </p>
              <a
                href={product.affiliate_url}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 text-lg">
                  Check Price on Amazon
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-12 bg-neutral-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">Similar Products</h2>
                <Link href={categoryPath} className="text-orange-500 hover:text-orange-400 text-sm font-medium">
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back Navigation */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href={categoryPath}
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to {categoryLabel}
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
