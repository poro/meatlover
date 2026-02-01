import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Star, Check, X, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import ProductCard from '@/components/ProductCard'
import { getProductById, products } from '@/data/products'

interface ProductPageProps {
  params: Promise<{ id: string }>
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
    }).format(price)
  }

  // Get related products (same category, different id)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-neutral-900 py-4 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-neutral-400 hover:text-white">Home</Link>
            <span className="text-neutral-600">/</span>
            <Link href={`/${product.category}s`} className="text-neutral-400 hover:text-white capitalize">
              {product.category}s
            </Link>
            <span className="text-neutral-600">/</span>
            <span className="text-white">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${product.category}s`}
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {product.category}s
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="aspect-square bg-neutral-800 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🔥</div>
                <span className="text-neutral-500">{product.brand} {product.name}</span>
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
                {product.featured && (
                  <Badge className="bg-orange-500">Featured</Badge>
                )}
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-500 fill-yellow-500'
                          : 'text-neutral-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-white font-semibold">{product.rating}</span>
                <span className="text-neutral-500">/ 5</span>
              </div>

              {/* Price */}
              <div className="text-4xl font-bold text-white mb-6">
                {formatPrice(product.price)}
              </div>

              {/* Description */}
              <p className="text-neutral-300 text-lg mb-8">
                {product.description}
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={product.affiliate_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg">
                    Buy on Amazon
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>

              <p className="text-neutral-500 text-sm">
                * Price may vary. We earn a commission on qualifying purchases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pros & Cons + Specs */}
      <section className="py-12 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pros */}
            <Card className="bg-neutral-800 border-neutral-700">
              <CardHeader>
                <h3 className="text-lg font-bold text-green-500">✓ What We Love</h3>
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
                <h3 className="text-lg font-bold text-red-500">✗ Could Be Better</h3>
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
                <h3 className="text-lg font-bold text-white">📋 Specifications</h3>
              </CardHeader>
              <CardContent>
                <dl className="space-y-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <dt className="text-neutral-400">{key}</dt>
                      <dd className="text-white font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Similar Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
