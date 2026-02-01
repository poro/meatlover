import Link from 'next/link'
import { ArrowRight, Flame, Star, Truck, Shield, Award, Trophy, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import ProductCard from '@/components/ProductCard'
import SubscriptionCard from '@/components/SubscriptionCard'
import { getFeaturedProducts, subscriptions, guides, products } from '@/data/products'

// Best Of picks - manually curated top picks per category
const bestOfPicks = [
  {
    category: 'Best Pellet Grills',
    href: '/grills',
    products: products.filter(p => p.subcategory === 'pellet' && p.best_for).slice(0, 3)
  },
  {
    category: 'Best Smokers',
    href: '/smokers', 
    products: products.filter(p => p.category === 'smoker' && p.best_for).slice(0, 3)
  },
  {
    category: 'Best Thermometers',
    href: '/accessories',
    products: products.filter(p => p.category === 'thermometer').slice(0, 3)
  }
]

export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 6)
  const topSubscriptions = subscriptions.slice(0, 3)
  const featuredGuides = guides.filter(g => g.featured).slice(0, 4)

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
              🔥 Over 40+ Expert Reviews
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
              <Link href="/guides/best-grills-2025">
                <Button size="lg" variant="outline" className="border-neutral-700 hover:bg-neutral-800 px-8 py-6 text-lg">
                  Read Buying Guide
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
              <span className="text-sm text-neutral-300">Expert Tested</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Star className="h-8 w-8 text-orange-500" />
              <span className="text-sm text-neutral-300">Unbiased Reviews</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="h-8 w-8 text-orange-500" />
              <span className="text-sm text-neutral-300">Free Shipping Deals</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="h-8 w-8 text-orange-500" />
              <span className="text-sm text-neutral-300">Trusted Since 2020</span>
            </div>
          </div>
        </div>
      </section>

      {/* Best Of Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50 mb-4">
              <Trophy className="h-3 w-3 mr-1" />
              Our Top Picks
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Best Of 2025</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Our experts tested dozens of products to find the absolute best in each category.
            </p>
          </div>

          <div className="space-y-12">
            {bestOfPicks.map((section) => (
              <div key={section.category}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">{section.category}</h3>
                  <Link href={section.href} className="flex items-center gap-1 text-orange-500 hover:text-orange-400 text-sm font-medium">
                    View All
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {section.products.map((product, idx) => (
                    <div key={product.id} className="relative">
                      {idx === 0 && (
                        <div className="absolute -top-3 -left-3 z-10 bg-yellow-500 text-black font-bold text-xs px-2 py-1 rounded-full">
                          #1 Pick
                        </div>
                      )}
                      <ProductCard product={product} compact />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Shop by Category</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Grills', icon: '🔥', href: '/grills', description: 'Pellet, Gas & Charcoal', count: products.filter(p => p.category === 'grill').length },
              { name: 'Smokers', icon: '💨', href: '/smokers', description: 'Offset, Vertical & Electric', count: products.filter(p => p.category === 'smoker').length },
              { name: 'Meat Delivery', icon: '🥩', href: '/meat-delivery', description: 'Premium Subscriptions', count: subscriptions.length },
              { name: 'Accessories', icon: '🌡️', href: '/accessories', description: 'Thermometers, Tools & More', count: products.filter(p => p.category === 'accessory' || p.category === 'thermometer').length },
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
                <Badge variant="outline" className="mt-3 border-neutral-600 text-neutral-400">
                  {category.count} products
                </Badge>
              </Link>
            ))}
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

      {/* Buying Guides */}
      <section className="py-16 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50 mb-4">
              📚 Expert Guides
            </Badge>
            <h2 className="text-3xl font-bold text-white mb-4">Buying Guides & Comparisons</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Not sure what to buy? Our in-depth guides help you make the right choice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGuides.map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`}>
                <Card className="bg-neutral-800 border-neutral-700 hover:border-orange-500/50 transition-all h-full group">
                  <CardHeader className="pb-2">
                    <Badge className="w-fit bg-neutral-700 text-neutral-300 border-neutral-600 mb-2">
                      {guide.category}
                    </Badge>
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2">
                      {guide.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-400 text-sm line-clamp-2">{guide.description}</p>
                    <p className="text-xs text-neutral-500 mt-3">{guide.readTime}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/guides">
              <Button variant="outline" className="border-neutral-700">
                View All Guides
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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

      {/* Comparison CTA */}
      <section className="py-16 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Weber vs Traeger: Which Should You Buy?
                </h2>
                <p className="text-neutral-300 mb-6">
                  The two biggest names in grilling go head-to-head. We compare build quality, 
                  features, price, and real-world performance to help you decide.
                </p>
                <Link href="/guides/weber-vs-traeger">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Read the Comparison
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-800 rounded-xl p-4 text-center">
                  <div className="text-4xl mb-2">🔴</div>
                  <h3 className="font-bold text-white">Weber</h3>
                  <p className="text-sm text-neutral-400">Since 1952</p>
                </div>
                <div className="bg-neutral-800 rounded-xl p-4 text-center">
                  <div className="text-4xl mb-2">🟠</div>
                  <h3 className="font-bold text-white">Traeger</h3>
                  <p className="text-sm text-neutral-400">Since 1985</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
