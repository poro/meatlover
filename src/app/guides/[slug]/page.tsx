import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const guides: Record<string, {
  title: string
  description: string
  category: string
  readTime: string
  date: string
  content: string
}> = {
  'best-grills-2025': {
    title: 'Best Grills of 2025',
    description: 'Our comprehensive guide to the top grills of 2025.',
    category: 'Buying Guide',
    readTime: '15 min read',
    date: 'January 2025',
    content: `
## Our Top Picks for 2025

After extensive testing of over 20 grills, here are our top recommendations for 2025.

### Best Overall: Traeger Pro 780

The Traeger Pro 780 continues to dominate the pellet grill market. With WiFIRE technology, you can monitor and control your grill from anywhere. The 780 square inches of cooking space is perfect for families.

**Price:** $1,299.99

### Best Value: Weber Original Kettle Premium 22"

You can't beat the classics. The Weber Kettle has been perfected over decades and remains one of the best value propositions in grilling. Simple, reliable, and produces incredible flavor.

**Price:** $189.00

### Best for Enthusiasts: Kamado Joe Classic III

If budget isn't a concern and you want the best, the Kamado Joe Classic III is unmatched. The ceramic construction provides exceptional heat retention, and the SloRoller technology distributes smoke evenly.

**Price:** $2,499.00

### Best Gas Grill: Weber Genesis E-335

For those who prefer the convenience of gas, the Weber Genesis E-335 sets the standard. Three powerful burners, a sear station, and Weber Connect technology make this a backyard powerhouse.

**Price:** $1,149.00

## What to Consider When Buying a Grill

1. **Fuel Type** - Pellet, charcoal, or gas each have pros and cons
2. **Cooking Space** - Consider how many people you typically cook for
3. **Temperature Range** - Important if you want to both smoke and sear
4. **Build Quality** - Look for heavy-gauge steel and quality components
5. **Features** - WiFi connectivity, thermometers, and accessories

## Conclusion

The best grill for you depends on your cooking style, budget, and how much time you want to spend managing fire. For set-it-and-forget-it convenience, go pellet. For authentic flavor and the joy of fire management, go charcoal. For quick weeknight dinners, gas is hard to beat.
    `,
  },
  'beginner-bbq-tips': {
    title: 'BBQ Tips for Beginners',
    description: 'New to grilling? Learn the fundamentals of BBQ.',
    category: 'Tutorial',
    readTime: '10 min read',
    date: 'January 2025',
    content: `
## Getting Started with BBQ

Welcome to the world of BBQ! Whether you just got your first grill or you're looking to improve your skills, these tips will set you on the path to becoming a backyard pitmaster.

### Tip 1: Invest in a Good Thermometer

The single most important tool for BBQ success is a reliable thermometer. Don't rely on the built-in thermometer on your grill — they're often inaccurate. Get an instant-read thermometer like the ThermoWorks Thermapen.

**Target temperatures:**
- Chicken: 165°F
- Pork: 145°F (chops), 195-205°F (pulled)
- Beef: 135°F (medium), 195-205°F (brisket)

### Tip 2: Learn the Two-Zone Setup

Create a hot zone and a cool zone on your grill. This gives you flexibility to sear meat over high heat and then move it to the cooler side to finish cooking gently.

### Tip 3: Let Your Meat Rest

After cooking, let your meat rest for 5-15 minutes (depending on size). This allows the juices to redistribute throughout the meat. Cut too early and those juices end up on your cutting board instead of in your food.

### Tip 4: Start Simple

Don't try to smoke a brisket on your first day. Start with burgers, hot dogs, and chicken. As you get comfortable with temperature control, work your way up to longer cooks.

### Tip 5: Keep It Clean

A clean grill is a happy grill. Brush your grates before each cook and do a deep clean regularly. Built-up grease and carbon can affect flavor and cause flare-ups.

### Tip 6: Don't Lift the Lid

Every time you open the lid, you lose heat and extend your cooking time. Trust your thermometer and resist the urge to peek.

## Common Mistakes to Avoid

1. **Cooking cold meat** - Let it sit at room temperature for 30-60 minutes before cooking
2. **Not preheating** - Give your grill time to come up to temperature
3. **Moving meat too much** - Let it develop a crust before flipping
4. **Cutting into meat to check doneness** - Use a thermometer instead

Happy grilling! 🔥
    `,
  },
}

interface GuidePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }))
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params
  const guide = guides[slug]

  if (!guide) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-neutral-900 to-blue-950/30 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Guides
          </Link>
          
          <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/50 mb-4">
            {guide.category}
          </Badge>
          
          <h1 className="text-4xl font-bold text-white mb-4">{guide.title}</h1>
          
          <div className="flex items-center gap-4 text-neutral-400">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {guide.readTime}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {guide.date}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-invert prose-orange max-w-none">
            <div 
              className="text-neutral-300 leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: guide.content
                  .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-white mt-8 mb-4">$1</h2>')
                  .replace(/### (.*)/g, '<h3 class="text-xl font-bold text-white mt-6 mb-3">$1</h3>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                  .replace(/\n\n/g, '</p><p class="mb-4">')
                  .replace(/^\d\. (.*)/gm, '<li class="ml-4 mb-2">$1</li>')
                  .replace(/^- (.*)/gm, '<li class="ml-4 mb-2">$1</li>')
              }}
            />
          </article>

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-neutral-800">
            <div className="flex items-center justify-between">
              <Link href="/guides">
                <Button variant="outline" className="border-neutral-700">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  All Guides
                </Button>
              </Link>
              <Button variant="outline" className="border-neutral-700">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
