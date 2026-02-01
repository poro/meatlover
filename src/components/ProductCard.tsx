import Link from 'next/link'
import { Star, ExternalLink, ShieldCheck, Award } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
  showBestFor?: boolean
  compact?: boolean
}

export default function ProductCard({ product, showBestFor = true, compact = false }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const formatReviews = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`
    }
    return count.toString()
  }

  return (
    <Card className="bg-neutral-900 border-neutral-800 overflow-hidden group hover:border-orange-500/50 transition-colors h-full flex flex-col">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-neutral-800 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-neutral-600">
          <div className="text-center">
            <div className="text-4xl mb-2">
              {product.category === 'grill' ? '🔥' : 
               product.category === 'smoker' ? '💨' :
               product.category === 'thermometer' ? '🌡️' : '🛠️'}
            </div>
            <span className="text-sm">{product.brand}</span>
          </div>
        </div>
        
        {/* Badges overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.best_for && showBestFor && (
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
              <Award className="h-3 w-3 mr-1" />
              {product.best_for}
            </Badge>
          )}
          {product.featured && !product.best_for && (
            <Badge className="bg-orange-500 hover:bg-orange-600">
              Featured
            </Badge>
          )}
        </div>

        {product.expert_tested && (
          <div className="absolute top-3 right-3">
            <Badge variant="outline" className="bg-neutral-900/80 border-green-500/50 text-green-400">
              <ShieldCheck className="h-3 w-3 mr-1" />
              Expert Tested
            </Badge>
          </div>
        )}
      </div>

      <CardContent className={`p-4 flex-1 ${compact ? 'pb-2' : ''}`}>
        {/* Brand & Category */}
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="text-xs border-neutral-700 text-neutral-400">
            {product.brand}
          </Badge>
          <Badge variant="outline" className="text-xs border-neutral-700 text-neutral-400 capitalize">
            {product.subcategory}
          </Badge>
        </div>

        {/* Name */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(product.rating)
                  ? 'text-yellow-500 fill-yellow-500'
                  : i < product.rating
                  ? 'text-yellow-500 fill-yellow-500/50'
                  : 'text-neutral-600'
              }`}
            />
          ))}
          <span className="text-sm text-neutral-400 ml-1">
            {product.rating} ({formatReviews(product.reviews_count)} reviews)
          </span>
        </div>

        {/* Description */}
        {!compact && (
          <p className="text-neutral-400 text-sm line-clamp-2 mb-4">
            {product.description}
          </p>
        )}

        {/* Price */}
        <div className="text-2xl font-bold text-white">
          {formatPrice(product.price)}
        </div>
      </CardContent>

      <CardFooter className={`p-4 pt-0 flex gap-2 ${compact ? 'flex-col' : ''}`}>
        <Link href={`/products/${product.id}`} className={compact ? 'w-full' : 'flex-1'}>
          <Button variant="outline" className="w-full border-neutral-700 hover:bg-neutral-800 hover:border-orange-500">
            View Details
          </Button>
        </Link>
        <a
          href={product.affiliate_url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={compact ? 'w-full' : 'flex-1'}
        >
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            Check Price
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  )
}
