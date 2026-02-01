'use client'

import { useState } from 'react'
import { Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

const subcategories = [
  { id: 'all', name: 'All' },
  { id: 'thermometer', name: 'Thermometers' },
  { id: 'cover', name: 'Covers' },
  { id: 'tools', name: 'Tools' },
  { id: 'rubs', name: 'Rubs & Sauces' },
]

export default function AccessoriesPage() {
  const [selectedSubcategory, setSelectedSubcategory] = useState('all')
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'rating'>('rating')

  // Get accessories and thermometers
  const allAccessories = products.filter(
    p => p.category === 'accessory' || p.category === 'thermometer'
  )
  
  let filteredAccessories = allAccessories.filter((product) => {
    if (selectedSubcategory === 'all') return true
    if (selectedSubcategory === 'thermometer') return product.category === 'thermometer'
    return product.subcategory === selectedSubcategory
  })

  filteredAccessories = [...filteredAccessories].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price
    if (sortBy === 'price-desc') return b.price - a.price
    return b.rating - a.rating
  })

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-neutral-900 to-yellow-950/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">🌡️ Accessories</h1>
          <p className="text-neutral-300 max-w-2xl">
            The right accessories make all the difference. From precision thermometers to 
            competition-winning rubs, upgrade your BBQ game.
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
              Showing <span className="text-white font-medium">{filteredAccessories.length}</span> accessories
            </p>
            {selectedSubcategory !== 'all' && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedSubcategory('all')}
                className="text-orange-500 hover:text-orange-400"
              >
                Clear Filter
              </Button>
            )}
          </div>

          {filteredAccessories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAccessories.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-400 text-lg">No accessories match your filter.</p>
              <Button
                variant="outline"
                className="mt-4 border-neutral-700"
                onClick={() => setSelectedSubcategory('all')}
              >
                Show All
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Essentials Guide */}
      <section className="py-12 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">BBQ Essentials Checklist</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: '🌡️',
                title: 'Instant-Read Thermometer',
                desc: 'Non-negotiable. Know exactly when your meat is done.',
              },
              {
                icon: '🧤',
                title: 'Heat-Resistant Gloves',
                desc: 'Protect your hands when handling hot grates and meat.',
              },
              {
                icon: '🧂',
                title: 'Quality Rub',
                desc: 'A good all-purpose rub is the foundation of flavor.',
              },
              {
                icon: '🧹',
                title: 'Grill Brush',
                desc: 'Keep your grates clean for better searing and flavor.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-neutral-800 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-neutral-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
