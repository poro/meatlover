'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X, ArrowRight } from 'lucide-react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { searchProducts, guides, type Product } from '@/data/products'

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Product[]>([])
  const [guideResults, setGuideResults] = useState<typeof guides>([])
  const router = useRouter()

  const handleSearch = useCallback((searchQuery: string) => {
    if (searchQuery.length < 2) {
      setResults([])
      setGuideResults([])
      return
    }

    const productResults = searchProducts(searchQuery).slice(0, 5)
    const matchingGuides = guides.filter(g => 
      g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.description.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 3)

    setResults(productResults)
    setGuideResults(matchingGuides)
  }, [])

  useEffect(() => {
    const debounce = setTimeout(() => {
      handleSearch(query)
    }, 200)

    return () => clearTimeout(debounce)
  }, [query, handleSearch])

  const handleSelect = (url: string) => {
    onOpenChange(false)
    setQuery('')
    router.push(url)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-neutral-900 border-neutral-800 sm:max-w-2xl p-0 gap-0 overflow-hidden">
        <div className="flex items-center border-b border-neutral-800 px-4">
          <Search className="h-5 w-5 text-neutral-400 flex-shrink-0" />
          <Input
            type="text"
            placeholder="Search products, guides..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border-0 focus-visible:ring-0 bg-transparent text-white placeholder:text-neutral-500 text-lg py-6"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-neutral-400 hover:text-white p-1"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {query.length < 2 ? (
            <div className="p-6 text-center text-neutral-500">
              <Search className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>Start typing to search...</p>
            </div>
          ) : results.length === 0 && guideResults.length === 0 ? (
            <div className="p-6 text-center text-neutral-500">
              <p>No results found for &quot;{query}&quot;</p>
            </div>
          ) : (
            <>
              {/* Products */}
              {results.length > 0 && (
                <div className="p-4">
                  <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
                    Products
                  </h3>
                  <div className="space-y-1">
                    {results.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => handleSelect(`/products/${product.id}`)}
                        className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-800 transition-colors text-left"
                      >
                        <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                          {product.category === 'grill' ? '🔥' : 
                           product.category === 'smoker' ? '💨' :
                           product.category === 'thermometer' ? '🌡️' : '🛠️'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-white font-medium truncate">{product.name}</span>
                            {product.best_for && (
                              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/50 text-xs">
                                Top Pick
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-neutral-400">
                            <span>{product.brand}</span>
                            <span>•</span>
                            <span>{formatPrice(product.price)}</span>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-neutral-500" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Guides */}
              {guideResults.length > 0 && (
                <div className="p-4 border-t border-neutral-800">
                  <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
                    Guides
                  </h3>
                  <div className="space-y-1">
                    {guideResults.map((guide) => (
                      <button
                        key={guide.slug}
                        onClick={() => handleSelect(`/guides/${guide.slug}`)}
                        className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-800 transition-colors text-left"
                      >
                        <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                          📚
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-white font-medium truncate block">{guide.title}</span>
                          <div className="flex items-center gap-2 text-sm text-neutral-400">
                            <Badge variant="outline" className="border-neutral-700 text-xs">
                              {guide.category}
                            </Badge>
                            <span>{guide.readTime}</span>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-neutral-500" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        <div className="p-3 border-t border-neutral-800 bg-neutral-950">
          <div className="flex items-center justify-between text-xs text-neutral-500">
            <span>Press ESC to close</span>
            <span>⌘K to open search</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
