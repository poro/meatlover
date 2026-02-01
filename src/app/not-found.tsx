import Link from 'next/link'
import { Flame, Home, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mx-auto bg-orange-500/20 p-6 rounded-full w-fit mb-8">
          <Flame className="h-16 w-16 text-orange-500" />
        </div>
        
        <h1 className="text-6xl font-black text-white mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-neutral-400 mb-8">
          Looks like this page got a little too crispy! The page you&apos;re looking for 
          doesn&apos;t exist or may have been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
          <Link href="/grills">
            <Button size="lg" variant="outline" className="border-neutral-700 hover:bg-neutral-800">
              <Search className="mr-2 h-5 w-5" />
              Browse Grills
            </Button>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800">
          <p className="text-sm text-neutral-500 mb-4">Popular Categories:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/grills" className="text-orange-500 hover:text-orange-400 text-sm">Grills</Link>
            <span className="text-neutral-700">•</span>
            <Link href="/smokers" className="text-orange-500 hover:text-orange-400 text-sm">Smokers</Link>
            <span className="text-neutral-700">•</span>
            <Link href="/accessories" className="text-orange-500 hover:text-orange-400 text-sm">Accessories</Link>
            <span className="text-neutral-700">•</span>
            <Link href="/meat-delivery" className="text-orange-500 hover:text-orange-400 text-sm">Meat Delivery</Link>
            <span className="text-neutral-700">•</span>
            <Link href="/guides" className="text-orange-500 hover:text-orange-400 text-sm">Guides</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
