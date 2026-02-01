import Link from 'next/link'
import { ArrowRight, Flame, Star, Truck, Shield, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ProductCard from '@/components/ProductCard'
import SubscriptionCard from '@/components/SubscriptionCard'
import { getFeaturedProducts, subscriptions } from '@/data/products'

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()
  const topSubscriptions = subscriptions.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-950 via-neutral-900 to-orange-950/20 py-20 lg:py-32 overflow-hidden">
        {/* Fire pattern background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/50 mb-6 px-4 py-1">
              🔥 New Reviews Added Weekly
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              Master the
              <span className="text-orange-500"> Flame</span>
            </h1>
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              Expert reviews on grills, smokers, and meat delivery services. 
              Find the perfect gear for your backyard BBQ setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/grills">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold">
                  Browse Grills
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/meat-delivery">
                <Button size="lg" variant="outline" className="border-neutral-700 hover:bg-neutral-800 px-8 py-6 text-lg">
                  Compare Meat Subscriptions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-neutral-900 border-y border-neutral-800 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Award className="h-8 w-8 text-orange-500" />
              <span className="text-sm text-neutral-300">Expert Reviews</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Star className="h-8 w-8 text-orange-500" />
              <span className="text-sm text-neutral-300">Unbiased Ratings</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="h-8 w-8 text-orange-500" />
              <span className="text-sm text-neutral-300">Delivery Comparison</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="h-8 w-8 text-orange-500" />
              <span className="text-sm text-neutral-300">Trusted Since 2020</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Featured Gear</h2>
              <p className="text-neutral-400">Hand-picked by our BBQ experts</p>
            </div>
            <Link href="/grills" className="hidden sm:flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium">
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link href="/grills">
              <Button variant="outline" className="border-neutral-700">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Shop by Category</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Grills', icon: '🔥', href: '/grills', description: 'Pellet, Gas & Charcoal' },
              { name: 'Smokers', icon: '💨', href: '/smokers', description: 'Offset, Vertical & Electric' },
              { name: 'Meat Delivery', icon: '🥩', href: '/meat-delivery', description: 'Premium Subscriptions' },
              { name: 'Accessories', icon: '🌡️', href: '/accessories', description: 'Thermometers, Tools & More' },
            ].map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="bg-neutral-800 hover:bg-neutral-750 border border-neutral-700 hover:border-orange-500/50 rounded-xl p-6 text-center transition-all group"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-neutral-400 mt-1">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Meat Subscriptions */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-red-500/20 text-red-400 border-red-500/50 mb-4">
              🥩 Premium Meat Delivered
            </Badge>
            <h2 className="text-3xl font-bold text-white mb-4">Top Meat Subscriptions</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Skip the grocery store. Get premium, humanely-raised meat delivered to your door. 
              We&apos;ve tested and compared the best services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topSubscriptions.map((subscription, index) => (
              <SubscriptionCard 
                key={subscription.id} 
                subscription={subscription} 
                rank={index + 1}
              />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link href="/meat-delivery">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                Compare All Meat Subscriptions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Flame className="h-12 w-12 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Fire Up?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a weekend warrior or a seasoned pitmaster, we&apos;ve got the gear and guides 
            to take your BBQ game to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/guides/best-grills-2025">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-neutral-100 px-8">
                Best Grills of 2025
              </Button>
            </Link>
            <Link href="/guides/beginner-bbq-tips">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                BBQ Tips for Beginners
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
