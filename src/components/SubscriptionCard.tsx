import Image from 'next/image'
import { Star, ExternalLink, Check, X } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Subscription } from '@/data/products'

interface SubscriptionCardProps {
  subscription: Subscription
  rank?: number
}

export default function SubscriptionCard({ subscription, rank }: SubscriptionCardProps) {
  return (
    <Card className="bg-neutral-900 border-neutral-800 overflow-hidden hover:border-orange-500/50 transition-colors">
      <CardHeader className="relative pb-0">
        {rank && (
          <div className="absolute -top-1 -left-1 bg-orange-500 text-white font-bold px-3 py-1 text-sm rounded-br-lg">
            #{rank}
          </div>
        )}
        
        {/* Service image */}
        <div className="aspect-[3/1] bg-neutral-800 rounded-lg overflow-hidden mb-4 relative">
          {subscription.image_url ? (
            <img
              src={subscription.image_url}
              alt={subscription.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-2xl font-bold text-neutral-600">{subscription.name}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">{subscription.name}</h3>
          <div className="flex items-center gap-1">
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            <span className="text-white font-semibold">{subscription.rating}</span>
          </div>
        </div>
        
        <Badge className="w-fit bg-green-900 text-green-400 border-green-700">
          {subscription.price_range}
        </Badge>
      </CardHeader>

      <CardContent className="pt-4">
        <p className="text-neutral-400 text-sm mb-4">
          {subscription.description}
        </p>

        {/* Pros */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-green-500 mb-2">Pros</h4>
          <ul className="space-y-1">
            {subscription.pros.slice(0, 3).map((pro, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
                <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                {pro}
              </li>
            ))}
          </ul>
        </div>

        {/* Cons */}
        <div>
          <h4 className="text-sm font-semibold text-red-500 mb-2">Cons</h4>
          <ul className="space-y-1">
            {subscription.cons.slice(0, 2).map((con, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                {con}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <a
          href={subscription.affiliate_url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-6">
            Try {subscription.name}
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  )
}
