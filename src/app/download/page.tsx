'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Download, CheckCircle, ArrowRight, Flame, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DownloadPage() {
  const [downloaded, setDownloaded] = useState(false)

  useEffect(() => {
    // Auto-start download after a brief delay
    const timer = setTimeout(() => {
      const link = document.createElement('a')
      link.href = '/pitmaster-recipe-book.pdf'
      link.download = 'Pitmaster-Recipe-Book-Meatlover.pdf'
      link.click()
      setDownloaded(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Success Animation */}
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mx-auto animate-pulse">
              {downloaded ? (
                <CheckCircle className="w-12 h-12 text-white" />
              ) : (
                <Download className="w-12 h-12 text-white animate-bounce" />
              )}
            </div>
            <div className="absolute -top-2 -right-2 text-4xl">🔥</div>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {downloaded ? "You're All Set!" : 'Preparing Your Download...'}
        </h1>
        
        <p className="text-xl text-neutral-400 mb-8">
          {downloaded 
            ? 'Your Pitmaster Recipe Book is downloading now. Welcome to the pit crew!' 
            : 'Hold tight, your recipe book is on its way...'}
        </p>

        {/* Manual Download Button */}
        <div className="mb-12">
          <a href="/pitmaster-recipe-book.pdf" download="Pitmaster-Recipe-Book-Meatlover.pdf">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 px-8 text-lg">
              <Download className="mr-2 h-5 w-5" />
              Download Again
            </Button>
          </a>
          <p className="text-neutral-500 text-sm mt-3">
            Download not starting? Click the button above.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 my-12"></div>

        {/* Upsell Section */}
        <div className="text-left bg-neutral-900 rounded-2xl p-8 border border-neutral-800">
          <div className="flex items-center gap-2 mb-4">
            <Flame className="h-6 w-6 text-orange-500" />
            <h2 className="text-2xl font-bold text-white">Ready to Upgrade Your Setup?</h2>
          </div>
          
          <p className="text-neutral-400 mb-6">
            Now that you've got the recipes, make sure you have the right equipment to execute them perfectly.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Link href="/smokers" className="group block bg-neutral-800 rounded-xl p-5 hover:bg-neutral-700 transition-colors">
              <div className="text-3xl mb-3">🔥</div>
              <h3 className="font-bold text-white group-hover:text-orange-400 transition-colors">Best Smokers</h3>
              <p className="text-sm text-neutral-400">From offset to pellet</p>
            </Link>
            
            <Link href="/grills" className="group block bg-neutral-800 rounded-xl p-5 hover:bg-neutral-700 transition-colors">
              <div className="text-3xl mb-3">🥩</div>
              <h3 className="font-bold text-white group-hover:text-orange-400 transition-colors">Top Grills</h3>
              <p className="text-sm text-neutral-400">Expert-reviewed picks</p>
            </Link>
            
            <Link href="/accessories" className="group block bg-neutral-800 rounded-xl p-5 hover:bg-neutral-700 transition-colors">
              <div className="text-3xl mb-3">🌡️</div>
              <h3 className="font-bold text-white group-hover:text-orange-400 transition-colors">Accessories</h3>
              <p className="text-sm text-neutral-400">Must-have tools</p>
            </Link>
          </div>

          <Link href="/">
            <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white py-6">
              Explore All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Social Proof */}
        <div className="mt-12 flex items-center justify-center gap-2 text-neutral-500">
          <div className="flex">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
            ))}
          </div>
          <span>Trusted by 25,000+ pitmasters</span>
        </div>
      </div>
    </div>
  )
}
