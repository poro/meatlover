import { Star, Check, X, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import SubscriptionCard from '@/components/SubscriptionCard'
import { subscriptions } from '@/data/products'

export default function MeatDeliveryPage() {
  const sortedSubscriptions = [...subscriptions].sort((a, b) => b.rating - a.rating)
  const topPick = sortedSubscriptions[0]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-neutral-900 via-red-950/30 to-neutral-900 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge className="bg-red-500/20 text-red-400 border-red-500/50 mb-4">
            Updated February 2026
          </Badge>
          <h1 className="text-4xl font-bold text-white mb-4">🥩 Best Meat Delivery Services</h1>
          <p className="text-neutral-300 max-w-2xl">
            We&apos;ve tested and compared the top meat subscription boxes to help you find premium, 
            ethically-sourced meat delivered right to your door. No more grocery store disappointment.
          </p>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-12 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="text-left py-4 px-4 text-neutral-400 font-medium">Service</th>
                  <th className="text-left py-4 px-4 text-neutral-400 font-medium">Price Range</th>
                  <th className="text-left py-4 px-4 text-neutral-400 font-medium">Rating</th>
                  <th className="text-left py-4 px-4 text-neutral-400 font-medium">Best For</th>
                  <th className="text-left py-4 px-4 text-neutral-400 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {sortedSubscriptions.map((sub, index) => (
                  <tr key={sub.id} className="border-b border-neutral-800 hover:bg-neutral-800/50">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        {index === 0 && (
                          <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50 text-xs">
                            #1
                          </Badge>
                        )}
                        <span className="font-medium text-white">{sub.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-neutral-300">{sub.price_range}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-white">{sub.rating}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-neutral-400">
                      {sub.name === 'Crowd Cow' && 'Variety & Choice'}
                      {sub.name === 'ButcherBox' && 'Curated Boxes'}
                      {sub.name === 'Snake River Farms' && 'Premium Wagyu'}
                      {sub.name === 'Porter Road' && 'Small Farm Focus'}
                      {sub.name === 'Omaha Steaks' && 'Gift Giving'}
                    </td>
                    <td className="py-4 px-4">
                      <a
                        href={sub.affiliate_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                          Try It
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Editor's Pick */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8">
            <Badge className="bg-orange-500 text-white mb-4">
              🏆 Editor&apos;s Pick
            </Badge>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">{topPick.name}</h2>
                <p className="text-neutral-300 mb-6">{topPick.description}</p>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(topPick.rating)
                            ? 'text-yellow-500 fill-yellow-500'
                            : 'text-neutral-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-white font-bold">{topPick.rating}/5</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={topPick.affiliate_url} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 w-full sm:w-auto">
                      Try {topPick.name}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <span className="text-neutral-400 text-sm flex items-center">
                    {topPick.price_range}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-green-500 font-semibold mb-3">What We Love</h4>
                  <ul className="space-y-2">
                    {topPick.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-red-500 font-semibold mb-3">Could Be Better</h4>
                  <ul className="space-y-2">
                    {topPick.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                        <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Subscriptions */}
      <section className="py-12 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">All Meat Subscription Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedSubscriptions.map((subscription, index) => (
              <SubscriptionCard 
                key={subscription.id} 
                subscription={subscription}
                rank={index + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: 'How does meat subscription delivery work?',
                a: 'Most services ship frozen meat in insulated boxes with dry ice. Deliveries typically arrive on a set schedule (monthly, bi-monthly) and you can skip or cancel anytime.'
              },
              {
                q: 'Is subscription meat better than grocery store meat?',
                a: 'Generally yes. Most subscription services offer grass-fed, pasture-raised, and antibiotic-free options that are hard to find in stores. The meat is also typically fresher and better cut.'
              },
              {
                q: 'Can I choose my own cuts?',
                a: 'It depends on the service. Crowd Cow lets you pick individual items, while ButcherBox offers curated boxes. Most services have some customization options.'
              },
              {
                q: 'How long does the meat stay frozen during shipping?',
                a: 'Most services guarantee meat stays frozen for 12-24 hours after delivery. Dry ice and insulated packaging keeps everything at safe temperatures.'
              },
            ].map((faq, i) => (
              <Card key={i} className="bg-neutral-900 border-neutral-800">
                <CardHeader>
                  <h3 className="font-semibold text-white">{faq.q}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-400 text-sm">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
