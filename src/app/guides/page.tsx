import Link from 'next/link'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const guides = [
  {
    slug: 'best-grills-2025',
    title: 'Best Grills of 2025',
    description: 'Our comprehensive guide to the top grills of 2025. We tested over 20 models to find the best for every budget and cooking style.',
    category: 'Buying Guide',
    readTime: '15 min read',
    date: 'January 2025',
    featured: true,
  },
  {
    slug: 'beginner-bbq-tips',
    title: 'BBQ Tips for Beginners',
    description: 'New to grilling? Learn the fundamentals of BBQ, from fire management to internal temperatures, in this beginner-friendly guide.',
    category: 'Tutorial',
    readTime: '10 min read',
    date: 'January 2025',
    featured: true,
  },
  {
    slug: 'pellet-vs-charcoal',
    title: 'Pellet vs. Charcoal Grills',
    description: 'The great debate settled. We break down the pros and cons of pellet and charcoal grills to help you choose the right one.',
    category: 'Comparison',
    readTime: '8 min read',
    date: 'December 2024',
    featured: false,
  },
  {
    slug: 'smoking-your-first-brisket',
    title: 'Smoking Your First Brisket',
    description: 'A step-by-step guide to smoking a perfect brisket. Learn the techniques pros use to get that perfect smoke ring.',
    category: 'Recipe',
    readTime: '20 min read',
    date: 'December 2024',
    featured: false,
  },
  {
    slug: 'meat-subscription-comparison',
    title: 'Meat Subscription Box Comparison',
    description: 'We tested the top meat delivery services so you don\'t have to. See how ButcherBox, Crowd Cow, and others stack up.',
    category: 'Comparison',
    readTime: '12 min read',
    date: 'November 2024',
    featured: false,
  },
  {
    slug: 'thermometer-guide',
    title: 'Complete Thermometer Guide',
    description: 'From instant-read to wireless probes, learn which thermometer is right for your cooking style and budget.',
    category: 'Buying Guide',
    readTime: '7 min read',
    date: 'November 2024',
    featured: false,
  },
]

export default function GuidesPage() {
  const featuredGuides = guides.filter(g => g.featured)
  const otherGuides = guides.filter(g => !g.featured)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-neutral-900 to-blue-950/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">📚 BBQ Guides</h1>
          <p className="text-neutral-300 max-w-2xl">
            Expert guides, tutorials, and comparisons to help you become a better pitmaster. 
            From beginner tips to advanced smoking techniques.
          </p>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredGuides.map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`}>
                <Card className="bg-neutral-900 border-neutral-800 hover:border-orange-500/50 transition-all h-full group">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/50">
                        {guide.category}
                      </Badge>
                      <Badge variant="outline" className="border-neutral-700 text-neutral-400">
                        Featured
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors">
                      {guide.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-400 mb-4">{guide.description}</p>
                    <div className="flex items-center gap-4 text-sm text-neutral-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {guide.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {guide.date}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Guides */}
      <section className="py-12 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">All Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherGuides.map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`}>
                <Card className="bg-neutral-800 border-neutral-700 hover:border-orange-500/50 transition-all h-full group">
                  <CardHeader>
                    <Badge className="w-fit bg-neutral-700 text-neutral-300 border-neutral-600 mb-2">
                      {guide.category}
                    </Badge>
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors">
                      {guide.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-400 text-sm mb-4 line-clamp-2">{guide.description}</p>
                    <div className="flex items-center gap-4 text-xs text-neutral-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {guide.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {guide.date}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Looking for Gear?</h2>
          <p className="text-neutral-400 mb-6">
            Check out our product reviews and find the perfect equipment for your BBQ setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/grills">
              <span className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Browse Grills
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link href="/smokers">
              <span className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-neutral-700">
                Browse Smokers
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
