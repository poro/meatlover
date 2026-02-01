'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Filter, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ProductCard from '@/components/ProductCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getProductsByCategory, type Product } from '@/data/products'

const subcategories = [
  { id: 'all', name: 'All Grills' },
  { id: 'pellet', name: 'Pellet' },
  { id: 'charcoal', name: 'Charcoal' },
  { id: 'gas', name: 'Gas' },
]

const brands = ['All', 'Traeger', 'Weber', 'Kamado Joe', 'Pit Boss', 'Char-Broil', 'Napoleon', 'RecTeq']
const priceRanges = [
  { id: 'all', name: 'All Prices' },
  { id: 'under-500', name: 'Under $500' },
  { id: '500-1000', name: '$500 - $1,000' },
  { id: '1000-2000', name: '$1,000 - $2,000' },
  { id: 'over-2000', name: '$2,000+' },
]

export default function GrillsPage() {
  const [selectedSubcategory, setSelectedSubcategory] = useState('all')
  const [selectedBrand, setSelectedBrand] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'rating'>('rating')

  const allGrills = getProductsByCategory('grill')
  
  let filteredGrills = allGrills.filter((product) => {
    const matchesSubcategory = selectedSubcategory === 'all' || product.subcategory === selectedSubcategory
    const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand
    
    let matchesPrice = true
    if (selectedPrice === 'under-500') matchesPrice = product.price < 500
    else if (selectedPrice === '500-1000') matchesPrice = product.price >= 500 && product.price <= 1000
    else if (selectedPrice === '1000-2000') matchesPrice = product.price >= 1000 && product.price <= 2000
    else if (selectedPrice === 'over-2000') matchesPrice = product.price > 2000
    
    return matchesSubcategory && matchesBrand && matchesPrice
  })

  // Sort
  filteredGrills = [...filteredGrills].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price
    if (sortBy === 'price-desc') return b.price - a.price
    return b.rating - a.rating
  })

  const clearFilters = () => {
    setSelectedSubcategory('all')
    setSelectedBrand('All')
    setSelectedPrice('all')
  }

  const hasFilters = selectedSubcategory !== 'all' || selectedBrand !== 'All' || selectedPrice !== 'all'

  return (
    <div className="min-h-screen">
      <Breadcrumbs items={[{ label: 'Grills' }]} />

      {/* Header */}
      <section className="bg-gradient-to-r from-neutral-900 to-orange-950/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/50">
              {allGrills.length} Products
            </Badge>
          </div>
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
            <div className="flex items-center gap-2 flex-wrap">
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

            {/* Price Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-neutral-400">Price:</span>
              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="bg-neutral-800 border border-neutral-700 rounded-md px-3 py-1.5 text-sm text-white focus:border-orange-500 focus:outline-none"
              >
                {priceRanges.map((range) => (
                  <option key={range.id} value={range.id}>{range.name}</option>
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
            {hasFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
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
                onClick={clearFilters}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Buying Guide CTA */}
      <section className="py-12 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Not Sure Which Grill to Choose?</h2>
              <p className="text-neutral-400 mb-6">
                Check out our comprehensive buying guide to find the perfect grill for your needs, 
                budget, and cooking style.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/guides/best-grills-2025">
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    Best Grills 2025
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/guides/weber-vs-traeger">
                  <Button variant="outline" className="border-neutral-700 hover:bg-neutral-800">
                    Weber vs Traeger
                  </Button>
                </Link>
                <Link href="/guides/pellet-vs-charcoal">
                  <Button variant="outline" className="border-neutral-700 hover:bg-neutral-800">
                    Pellet vs Charcoal
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neutral-800 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🏆</div>
                <p className="text-sm text-neutral-400">Best Overall</p>
                <p className="font-bold text-white">Traeger Pro 780</p>
              </div>
              <div className="bg-neutral-800 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">💰</div>
                <p className="text-sm text-neutral-400">Best Value</p>
                <p className="font-bold text-white">Weber Kettle 22&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
