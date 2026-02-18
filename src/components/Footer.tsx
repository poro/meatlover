import Link from 'next/link'
import { Flame } from 'lucide-react'

const footerLinks = {
  products: [
    { name: 'Grills', href: '/grills' },
    { name: 'Smokers', href: '/smokers' },
    { name: 'Thermometers', href: '/accessories' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'Meat Delivery', href: '/meat-delivery' },
  ],
  guides: [
    { name: 'Best Grills 2025', href: '/guides/best-grills-2025' },
    { name: 'Weber vs Traeger', href: '/guides/weber-vs-traeger' },
    { name: 'Best Smokers Under $500', href: '/guides/best-smokers-under-500' },
    { name: 'BBQ Tips for Beginners', href: '/guides/beginner-bbq-tips' },
    { name: 'Thermometer Guide', href: '/guides/thermometer-guide' },
    { name: 'All Guides', href: '/guides' },
  ],
  comparisons: [
    { name: 'Pellet vs Charcoal', href: '/guides/pellet-vs-charcoal' },
    { name: 'Kamado Buying Guide', href: '/guides/kamado-buying-guide' },
    { name: 'Meat Subscriptions', href: '/guides/meat-subscription-comparison' },
    { name: 'Smoking Your First Brisket', href: '/guides/smoking-your-first-brisket' },
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <Flame className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-black text-white tracking-tight">
                MEAT<span className="text-orange-500">LOVER</span>
              </span>
            </Link>
            <p className="text-neutral-400 text-sm">
              Expert BBQ reviews and guides to help you master the flame.
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

          {/* Guides */}
          <div>
            <h3 className="text-white font-semibold mb-4">Buying Guides</h3>
            <ul className="space-y-2">
              {footerLinks.guides.map((link) => (
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

          {/* Comparisons */}
          <div>
            <h3 className="text-white font-semibold mb-4">Comparisons</h3>
            <ul className="space-y-2">
              {footerLinks.comparisons.map((link) => (
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

        {/* From Our Network */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <h3 className="text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-3">From Our Network</h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
            <a href="https://stereos.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-orange-500 text-sm transition-colors">🎧 Stereos — Audio Equipment Reviews</a>
            <a href="https://odds.cn" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-orange-500 text-sm transition-colors">🏈 Odds.cn — Sports Betting Odds</a>
            <a href="https://cmnn.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-orange-500 text-sm transition-colors">📰 CMNN — Conservative News</a>
            <a href="https://ai-spend.vercel.app" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-orange-500 text-sm transition-colors">🤖 AI Spend — AI Subscription Tracker</a>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="pt-8 border-t border-neutral-800">
          <div className="bg-neutral-900 rounded-lg p-4 mb-6">
            <p className="text-neutral-400 text-xs">
              <strong className="text-neutral-300">Affiliate Disclosure:</strong> MeatLover is a participant in various 
              affiliate advertising programs, including the Amazon Services LLC Associates Program. 
              We earn commissions from qualifying purchases at no additional cost to you. 
              Our reviews are independent and not influenced by affiliate relationships.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} MeatLover. All rights reserved.
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
