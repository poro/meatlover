'use client'

import { useState } from 'react'
import { Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ProductCard from '@/components/ProductCard'
import { getProductsByCategory, type Product } from '@/data/products'

const subcategories = [
  { id: 'all', name: 'All Grills' },
  { id: 'pellet', name: 'Pellet' },
  { id: 'charcoal', name: 'Charcoal' },
  { id: 'gas', name: 'Gas' },
]

const brands = ['All', 'Traeger', 'Weber', 'Kamado Joe', 'Char-Broil']

export default function GrillsPage() {
  const [selectedSubcategory, setSelectedSubcategory] = useState('all')
  const [selectedBrand, setSelectedBrand] = useState('All')
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'rating'>('rating')

  const allGrills = getProductsByCategory('grill')
  
  let filteredGrills = allGrills.filter((product) => {
    const matchesSubcategory = selectedSubcategory === 'all' || product.subcategory === selectedSubcategory
    const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand
    return matchesSubcategory && matchesBrand
  })

  // Sort
  filteredGrills = [...filteredGrills].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price
    if (sortBy === 'price-desc') return b.price - a.price
    return b.rating - a.rating
  })

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-neutral-900 to-orange-950/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">🔥 Grills</h1>
          <p className="text-neutral-300 max-w-2xl">
            From pellet smokers to classic charcoal kettles, find the perfect grill for your backyard. 
            All reviews are based on hands-on testing and real-world performance.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-neutral-900 border-b border-neutral-800 py-4 sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            {/* Type Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-neutral-400" />
              <span className="text-sm text-neutral-400">Type:</span>
              <div className="flex gap-1">
                {subcategories.map((sub) => (
                  <Button
                    key={sub.id}
                    size="sm"
                    variant={selectedSubcategory === sub.id ? 'default' : 'outline'}
                    onClick={() => setSelectedSubcategory(sub.id)}
                    className={selectedSubcategory === sub.id 
                      ? 'bg-orange-500 hover:bg-orange-600' 
                      : 'border-neutral-700 hover:bg-neutral-800'}
                  >
                    {sub.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Brand Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-neutral-400">Brand:</span>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="bg-neutral-800 border border-neutral-700 rounded-md px-3 py-1.5 text-sm text-white focus:border-orange-500 focus:outline-none"
              >
                {brands.map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2 ml-auto">
              <span className="text-sm text-neutral-400">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="bg-neutral-800 border border-neutral-700 rounded-md px-3 py-1.5 text-sm text-white focus:border-orange-500 focus:outline-none"
              >
                <option value="rating">Top Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <p className="text-neutral-400">
              Showing <span className="text-white font-medium">{filteredGrills.length}</span> grills
            </p>
            {(selectedSubcategory !== 'all' || selectedBrand !== 'All') && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSelectedSubcategory('all')
                  setSelectedBrand('All')
                }}
                className="text-orange-500 hover:text-orange-400"
              >
                Clear Filters
              </Button>
            )}
          </div>

          {filteredGrills.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGrills.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-400 text-lg">No grills match your filters.</p>
              <Button
                variant="outline"
                className="mt-4 border-neutral-700"
                onClick={() => {
                  setSelectedSubcategory('all')
                  setSelectedBrand('All')
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Buying Guide CTA */}
      <section className="py-12 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Not Sure Which Grill to Choose?</h2>
          <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
            Check out our comprehensive buying guide to find the perfect grill for your needs, 
            budget, and cooking style.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600">
            Read Our Grill Buying Guide
          </Button>
        </div>
      </section>
    </div>
  )
}
