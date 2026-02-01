'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Filter, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ProductCard from '@/components/ProductCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import { products, type Product } from '@/data/products'

const subcategories = [
  { id: 'all', name: 'All Accessories' },
  { id: 'instant-read', name: 'Instant-Read' },
  { id: 'wireless', name: 'Wireless Probes' },
  { id: 'tools', name: 'Tools' },
  { id: 'rubs', name: 'Rubs & Seasoning' },
  { id: 'grates', name: 'Grates' },
  { id: 'fuel', name: 'Fuel' },
  { id: 'supplies', name: 'Supplies' },
  { id: 'cover', name: 'Covers' },
]

const brands = ['All', 'ThermoWorks', 'MEATER', 'Inkbird', 'Weber', 'Meat Church', 'FireBoard']

export default function AccessoriesPage() {
  const [selectedSubcategory, setSelectedSubcategory] = useState('all')
  const [selectedBrand, setSelectedBrand] = useState('All')
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'rating'>('rating')

  // Get both accessories and thermometers
  const allAccessories = products.filter(p => 
    p.category === 'accessory' || p.category === 'thermometer'
  )
  
  let filteredAccessories = allAccessories.filter((product) => {
    const matchesSubcategory = selectedSubcategory === 'all' || product.subcategory === selectedSubcategory
    const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand
    return matchesSubcategory && matchesBrand
  })

  // Sort
  filteredAccessories = [...filteredAccessories].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price
    if (sortBy === 'price-desc') return b.price - a.price
    return b.rating - a.rating
  })

  const clearFilters = () => {
    setSelectedSubcategory('all')
    setSelectedBrand('All')
  }

  const hasFilters = selectedSubcategory !== 'all' || selectedBrand !== 'All'

  // Group by type for display
  const thermometers = filteredAccessories.filter(p => p.category === 'thermometer')
  const otherAccessories = filteredAccessories.filter(p => p.category === 'accessory')

  return (
    <div className="min-h-screen">
      <Breadcrumbs items={[{ label: 'Accessories' }]} />

      {/* Header */}
      <section className="bg-gradient-to-r from-neutral-900 to-green-950/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
              {allAccessories.length} Products
            </Badge>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">🛠️ Accessories & Thermometers</h1>
          <p className="text-neutral-300 max-w-2xl">
            From precision thermometers to quality rubs and tools, these accessories will 
            take your BBQ game to the next level. Every serious cook needs the right gear.
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
              Showing <span className="text-white font-medium">{filteredAccessories.length}</span> products
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

          {/* Thermometers Section */}
          {thermometers.length > 0 && selectedSubcategory === 'all' && (
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">🌡️ Thermometers</h2>
                <Link href="/guides/thermometer-guide" className="text-orange-500 hover:text-orange-400 text-sm">
                  Buying Guide →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {thermometers.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}

          {/* Other Accessories */}
          {(selectedSubcategory === 'all' ? otherAccessories : filteredAccessories).length > 0 && (
            <div>
              {selectedSubcategory === 'all' && thermometers.length > 0 && (
                <h2 className="text-2xl font-bold text-white mb-6">🛠️ Tools & Supplies</h2>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(selectedSubcategory === 'all' ? otherAccessories : filteredAccessories).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}

          {filteredAccessories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-400 text-lg">No accessories match your filters.</p>
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
              <h2 className="text-2xl font-bold text-white mb-4">Complete Thermometer Guide</h2>
              <p className="text-neutral-400 mb-6">
                A good thermometer is the most important tool for BBQ success. 
                Learn which type is right for your cooking style in our comprehensive guide.
              </p>
              <Link href="/guides/thermometer-guide">
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Read the Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neutral-800 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">⚡</div>
                <p className="text-sm text-neutral-400">Best Instant-Read</p>
                <p className="font-bold text-white">Thermapen ONE</p>
              </div>
              <div className="bg-neutral-800 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">📡</div>
                <p className="text-sm text-neutral-400">Best Wireless</p>
                <p className="font-bold text-white">MEATER Plus</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
