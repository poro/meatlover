import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, Share2, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductCard from '@/components/ProductCard'
import { guideContent } from '@/data/guide-content'
import { guides, getProductById } from '@/data/products'
import type { Metadata } from 'next'

interface GuidePageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params
  const guide = guideContent[slug]
  
  if (!guide) {
    return { title: 'Guide Not Found | MeatLover' }
  }

  return {
    title: guide.metaTitle || `${guide.title} | MeatLover`,
    description: guide.metaDescription || guide.description,
    openGraph: {
      title: guide.metaTitle || guide.title,
      description: guide.metaDescription || guide.description,
      type: 'article',
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(guideContent).map((slug) => ({ slug }))
}

// Simple markdown-like renderer
function renderContent(content: string): string {
  return content
    // Headers
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-white mt-10 mb-4">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold text-white mt-8 mb-3">$1</h3>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-orange-500 hover:text-orange-400 underline" target="_blank" rel="noopener noreferrer">$1</a>')
    // Horizontal rules
    .replace(/^---$/gm, '<hr class="border-neutral-800 my-8" />')
    // Tables
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim())
      if (cells.every(c => c.trim().match(/^-+$/))) {
        return '' // Skip separator row
      }
      const isHeader = cells.some(c => c.includes('**') || match.includes('Factor') || match.includes('Feature') || match.includes('Service') || match.includes('Model') || match.includes('Smoker') || match.includes('Meat') || match.includes('Time'))
      const cellTag = isHeader ? 'th' : 'td'
      const cellClass = isHeader 
        ? 'px-4 py-2 text-left text-white font-semibold bg-neutral-800' 
        : 'px-4 py-2 text-neutral-300 border-t border-neutral-800'
      return `<tr>${cells.map(c => `<${cellTag} class="${cellClass}">${c.trim()}</${cellTag}>`).join('')}</tr>`
    })
    // Wrap tables
    .replace(/(<tr>.*<\/tr>)/gs, (match) => {
      if (!match.includes('<table')) {
        return `<div class="overflow-x-auto my-6"><table class="w-full border border-neutral-800 rounded-lg overflow-hidden">${match}</table></div>`
      }
      return match
    })
    // Lists
    .replace(/^- (.*$)/gm, '<li class="ml-4 mb-2 text-neutral-300 flex gap-2"><span class="text-orange-500">•</span><span>$1</span></li>')
    .replace(/^(\d+)\. (.*$)/gm, '<li class="ml-4 mb-2 text-neutral-300 flex gap-2"><span class="text-orange-500 font-semibold">$1.</span><span>$2</span></li>')
    // Checkboxes
    .replace(/- \[ \] (.*$)/gm, '<li class="ml-4 mb-2 text-neutral-300 flex gap-2"><span class="text-neutral-500">☐</span><span>$1</span></li>')
    // Paragraphs
    .replace(/^(?!<[hpuoltd]|<li|<hr|<div|<table|<tr)(.*$)/gm, (match) => {
      if (match.trim() === '') return ''
      return `<p class="mb-4 text-neutral-300 leading-relaxed">${match}</p>`
    })
    // Emojis in headers (keep them)
    .replace(/class="text-2xl font-bold text-white mt-10 mb-4">([🏆💰🔥⛽💨🥁🌡️⏰🍖🧹🚫❌⭐🥩📚✅])/g, 
      'class="text-2xl font-bold text-white mt-10 mb-4 flex items-center gap-2"><span>$1</span><span>')
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params
  const guide = guideContent[slug]
  const guideData = guides.find(g => g.slug === slug)

  if (!guide) {
    notFound()
  }

  // Get related products
  const relatedProducts = guideData?.relatedProducts
    ?.map(id => getProductById(id))
    .filter(Boolean)
    .slice(0, 3) || []

  // Get related guides
  const relatedGuides = guides
    .filter(g => g.slug !== slug && g.category === guide.category)
    .slice(0, 2)

  return (
    <div className="min-h-screen">
      <Breadcrumbs 
        items={[
          { label: 'Guides', href: '/guides' },
          { label: guide.title }
        ]} 
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-neutral-900 to-blue-950/30 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/50 mb-4">
            {guide.category}
          </Badge>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">{guide.title}</h1>
          
          <p className="text-neutral-400 text-lg mb-6">{guide.description}</p>
          
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
          <article 
            className="prose prose-invert prose-orange max-w-none"
            dangerouslySetInnerHTML={{ __html: renderContent(guide.content) }}
          />

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-neutral-800">
              <h2 className="text-2xl font-bold text-white mb-6">Products Mentioned</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedProducts.map((product) => (
                  product && <ProductCard key={product.id} product={product} compact />
                ))}
              </div>
            </div>
          )}

          {/* Related Guides */}
          {relatedGuides.length > 0 && (
            <div className="mt-12 pt-8 border-t border-neutral-800">
              <h2 className="text-2xl font-bold text-white mb-6">Related Guides</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {relatedGuides.map((g) => (
                  <Link key={g.slug} href={`/guides/${g.slug}`}>
                    <Card className="bg-neutral-900 border-neutral-800 hover:border-orange-500/50 transition-all h-full group">
                      <CardContent className="p-4">
                        <Badge className="bg-neutral-800 text-neutral-400 border-neutral-700 mb-2">
                          {g.category}
                        </Badge>
                        <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors">
                          {g.title}
                        </h3>
                        <p className="text-sm text-neutral-400 mt-2">{g.readTime}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-neutral-800">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <Link href="/guides">
                <Button variant="outline" className="border-neutral-700">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  All Guides
                </Button>
              </Link>
              <div className="flex gap-2">
                <Button variant="outline" className="border-neutral-700">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Link href="/grills">
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    Shop Grills
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
