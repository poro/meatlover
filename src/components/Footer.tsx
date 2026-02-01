import Link from 'next/link'
import { Flame } from 'lucide-react'

const footerLinks = {
  products: [
    { name: 'Grills', href: '/grills' },
    { name: 'Smokers', href: '/smokers' },
    { name: 'Thermometers', href: '/accessories?category=thermometer' },
    { name: 'Accessories', href: '/accessories' },
  ],
  resources: [
    { name: 'Meat Delivery', href: '/meat-delivery' },
    { name: 'Buying Guides', href: '/guides' },
    { name: 'Best Grills 2025', href: '/guides/best-grills-2025' },
    { name: 'Beginner BBQ Tips', href: '/guides/beginner-bbq-tips' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Affiliate Disclosure', href: '/disclosure' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <Flame className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-black text-white tracking-tight">
                MEAT<span className="text-orange-500">LOVER</span>
              </span>
            </Link>
            <p className="text-neutral-400 text-sm">
              Your trusted source for BBQ gear reviews, meat subscription comparisons, 
              and everything you need to master the flame.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-orange-500 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-orange-500 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-orange-500 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="bg-neutral-900 rounded-lg p-4 mb-6">
            <p className="text-neutral-400 text-xs">
              <strong className="text-neutral-300">Affiliate Disclosure:</strong> MeatLover.com is a participant in various 
              affiliate advertising programs, including the Amazon Services LLC Associates Program. 
              We earn commissions from qualifying purchases made through links on this site at no 
              additional cost to you. Our reviews are independent and not influenced by affiliate relationships.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} MeatLover.com. All rights reserved.
            </p>
            <p className="text-neutral-500 text-sm">
              🔥 Built for carnivores, by carnivores.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
