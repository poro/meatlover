'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Flame, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SearchDialog from '@/components/SearchDialog'

const navigation = [
  { name: 'Grills', href: '/grills' },
  { name: 'Smokers', href: '/smokers' },
  { name: 'Meat Delivery', href: '/meat-delivery' },
  { name: 'Accessories', href: '/accessories' },
  { name: 'Guides', href: '/guides' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  // Handle keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <nav className="bg-neutral-950 border-b border-neutral-800 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2 group">
                <Flame className="h-8 w-8 text-orange-500 group-hover:text-orange-400 transition-colors" />
                <span className="text-2xl font-black text-white tracking-tight">
                  MEAT<span className="text-orange-500">LOVER</span>
                </span>
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Search button */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSearchOpen(true)}
                className="hidden sm:flex items-center gap-2 text-neutral-400 hover:text-white hover:bg-neutral-800 px-3"
              >
                <Search className="h-4 w-4" />
                <span className="text-sm">Search</span>
                <kbd className="ml-2 pointer-events-none hidden lg:inline-flex h-5 select-none items-center gap-1 rounded border border-neutral-700 bg-neutral-800 px-1.5 font-mono text-xs font-medium text-neutral-400">
                  ⌘K
                </kbd>
              </Button>

              {/* Mobile search button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                className="sm:hidden text-white hover:bg-neutral-800"
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-white hover:bg-neutral-800"
                >
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-neutral-900 border-t border-neutral-800">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Search Dialog */}
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  )
}
