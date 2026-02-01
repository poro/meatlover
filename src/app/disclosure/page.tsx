import { AlertCircle } from 'lucide-react'

export default function DisclosurePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <AlertCircle className="h-10 w-10 text-orange-500" />
          <h1 className="text-4xl font-bold text-white">Affiliate Disclosure</h1>
        </div>
        
        <div className="prose prose-invert max-w-none text-neutral-300 space-y-6">
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
            <p className="text-lg text-white font-medium mb-0">
              MeatLover.com is a participant in various affiliate advertising programs designed to 
              provide a means for sites to earn advertising fees by advertising and linking to 
              partner websites.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8">What This Means</h2>
          <p>
            When you click on a product link on our site and make a purchase, we may receive a 
            commission from the retailer or brand. This is at no additional cost to you — the price 
            you pay is the same whether you use our links or go directly to the site.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">Our Affiliate Partnerships</h2>
          <p>
            We participate in the following affiliate programs:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Amazon Associates Program</strong> - We earn from qualifying purchases on Amazon</li>
            <li><strong>ButcherBox Affiliate Program</strong> - Commission on new subscriptions</li>
            <li><strong>Crowd Cow Affiliate Program</strong> - Commission on purchases</li>
            <li><strong>Snake River Farms Affiliate Program</strong> - Commission on purchases</li>
            <li><strong>Various other BBQ and meat delivery affiliates</strong></li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8">Our Promise to You</h2>
          <p>
            <strong>Our reviews are not influenced by affiliate relationships.</strong> We only 
            recommend products we genuinely believe are valuable. If a product sucks, we&apos;ll tell 
            you — even if it would have earned us a nice commission.
          </p>
          <p>
            We buy and test the products ourselves. Our opinions are our own, based on real-world 
            testing and experience.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">Why We Use Affiliate Links</h2>
          <p>
            Running a website costs money — hosting, equipment for testing, our team&apos;s time. 
            Affiliate commissions help us keep MeatLover.com running and allow us to continue 
            providing free, high-quality content.
          </p>
          <p>
            We appreciate your support when you choose to use our links!
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">Questions?</h2>
          <p>
            If you have any questions about our affiliate relationships or how we make money, 
            please don&apos;t hesitate to{' '}
            <a href="/contact" className="text-orange-500 hover:text-orange-400">
              contact us
            </a>.
          </p>
        </div>
      </div>
    </div>
  )
}
