import { Flame, Users, Award, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-neutral-900 to-orange-950/30 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Flame className="h-16 w-16 text-orange-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">About MeatLover</h1>
          <p className="text-xl text-neutral-300">
            We&apos;re a team of BBQ enthusiasts dedicated to helping you find the perfect gear 
            and premium meat for your backyard cooking adventures.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <div className="text-neutral-300 space-y-4">
            <p>
              MeatLover started in 2020 when a group of friends couldn&apos;t find reliable, 
              unbiased reviews for BBQ equipment. Every &quot;review&quot; site seemed to be pushing 
              whatever product paid them the most commission.
            </p>
            <p>
              We decided to do something different. We actually buy and test the products we 
              review. We cook hundreds of meals on each grill. We subscribe to the meat delivery 
              services and evaluate them over months, not days.
            </p>
            <p>
              Yes, we earn affiliate commissions when you purchase through our links — that&apos;s 
              how we keep the lights on. But our reviews are honest. If a product sucks, we&apos;ll 
              tell you. If it&apos;s great, we&apos;ll tell you that too.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-neutral-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Honest Reviews</h3>
              <p className="text-neutral-400">
                We test everything ourselves and tell you the truth, even when it&apos;s not pretty.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Community First</h3>
              <p className="text-neutral-400">
                We&apos;re building a community of meat lovers who share tips, recipes, and passion.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ethical Sourcing</h3>
              <p className="text-neutral-400">
                We prioritize humanely-raised, sustainable meat options in our recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Questions?</h2>
          <p className="text-neutral-400 mb-6">
            We&apos;d love to hear from you. Reach out anytime.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}
