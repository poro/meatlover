'use client'

import { useState } from 'react'
import { Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/ProductCard'
import { getProductsByCategory } from '@/data/products'

const subcategories = [
  { id: 'all', name: 'All Smokers' },
  { id: 'offset', name: 'Offset' },
  { id: 'vertical', name: 'Vertical' },
  { id: 'electric', name: 'Electric' },
  { id: 'pellet', name: 'Pellet' },
]

const brands = ['All', 'Oklahoma Joe\'s', 'Weber', 'Masterbuilt', 'Traeger']

export default function SmokersPage() {
  const [selectedSubcategory, setSelectedSubcategory] = useState('all')
  const [selectedBrand, setSelectedBrand] = useState('All')
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'rating'>('rating')

  const allSmokers = getProductsByCategory('smoker')
  
  let filteredSmokers = allSmokers.filter((product) => {
    const matchesSubcategory = selectedSubcategory === 'all' || product.subcategory === selectedSubcategory
    const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand
    return matchesSubcategory && matchesBrand
  })

  filteredSmokers = [...filteredSmokers].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price
    if (sortBy === 'price-desc') return b.price - a.price
    return b.rating - a.rating
  })

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-neutral-900 to-red-950/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">💨 Smokers</h1>
          <p className="text-neutral-300 max-w-2xl">
            Low and slow is the way to go. Whether you&apos;re looking for a traditional offset or 
            a set-it-and-forget-it electric, we&apos;ve got you covered.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-neutral-900 border-b border-neutral-800 py-4 sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-neutral-400" />
              <span className="text-sm text-neutral-400">Type:</span>
              <div className="flex gap-1 flex-wrap">
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
              Showing <span className="text-white font-medium">{filteredSmokers.length}</span> smokers
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

          {filteredSmokers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSmokers.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-400 text-lg">No smokers match your filters.</p>
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

      {/* Info Section */}
      <section className="py-12 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">🔥 Offset Smokers</h3>
              <p className="text-neutral-400 text-sm">
                Traditional barrel-style smokers with a side firebox. Requires more attention but 
                delivers authentic BBQ flavor. Best for purists who want full control.
              </p>
            </div>
            <div className="bg-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">⚡ Electric Smokers</h3>
              <p className="text-neutral-400 text-sm">
                Set-and-forget convenience with digital temperature control. Great for beginners 
                and apartment dwellers. Less intense smoke flavor.
              </p>
            </div>
            <div className="bg-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">📊 Vertical Smokers</h3>
              <p className="text-neutral-400 text-sm">
                Compact design with multiple racks for maximum capacity. Works with charcoal, 
                wood, or water. Weber Smokey Mountain is the gold standard.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
