import { Flame, Users, Award, Heart, BookOpen, Search, ThermometerSun, ShieldCheck } from 'lucide-react'

export const metadata = {
  title: 'About MeatLover - Our Story, Mission & Editorial Team',
  description: 'MeatLover is an independent BBQ resource built by pitmasters and grill enthusiasts. Learn about our editorial process, testing methodology, and the team behind our reviews.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-neutral-900 to-orange-950/30 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Flame className="h-16 w-16 text-orange-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">About MeatLover</h1>
          <p className="text-xl text-neutral-300">
            Independent BBQ reviews, in-depth guides, and honest gear recommendations &mdash;
            built by pitmasters, for pitmasters.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <div className="text-neutral-300 space-y-4 text-lg leading-relaxed">
            <p>
              MeatLover exists to help people master the art of outdoor cooking. Whether you&apos;re
              lighting your first charcoal chimney or dialing in competition-grade brisket, we want
              to be the resource you trust for straightforward, expert advice.
            </p>
            <p>
              The BBQ world is full of opinions &mdash; everyone has a &quot;right way&quot; to smoke a
              brisket or season a rack of ribs. We cut through the noise with tested techniques,
              real-world gear reviews, and content written by people who actually spend their weekends
              standing over a smoker at 5 AM. Our goal is simple: help you cook better food, choose
              the right equipment, and enjoy every minute at the grill.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-neutral-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <div className="text-neutral-300 space-y-4 leading-relaxed">
            <p>
              MeatLover started in 2020 when a group of friends got fed up with unreliable BBQ gear
              reviews online. Every &quot;review&quot; site seemed to rank products based on which ones
              paid the highest affiliate commission, not which ones actually performed best. We&apos;d
              buy a grill rated &quot;#1 Best Overall&quot; only to find warped grates and inconsistent
              temperatures after a few months.
            </p>
            <p>
              So we started doing our own testing. We pooled money, bought grills and smokers out of
              pocket, and cooked hundreds of meals on each one. We subscribed to meat delivery services
              for months at a time, not just one box. We tracked temperature accuracy, build quality
              over time, ease of cleaning, customer support responsiveness, and dozens of other details
              that quick &quot;unboxing reviews&quot; completely miss.
            </p>
            <p>
              What started as a shared spreadsheet among friends turned into a full editorial
              site. Today MeatLover covers grills, smokers, thermometers, accessories, meat delivery
              services, cooking techniques, regional BBQ traditions, and recipes &mdash; all grounded
              in hands-on experience rather than spec sheets and press releases.
            </p>
            <p>
              Yes, we earn affiliate commissions when you purchase through our links &mdash; that&apos;s
              how we fund our testing and keep the site running without paywalls. But our editorial
              recommendations are independent. We&apos;ve turned down sponsorship deals from brands
              whose products didn&apos;t meet our standards, and we&apos;ve given honest negative reviews
              to products from companies that advertise with us. If a grill is great, we&apos;ll tell
              you. If it&apos;s not worth the money, we&apos;ll tell you that too.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Process */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">How We Review &amp; Test</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
              <Search className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Research &amp; Selection</h3>
              <p className="text-neutral-400 leading-relaxed">
                We survey the market, read owner forums, analyze customer complaints, and identify
                the products people are actually choosing between. We prioritize testing products
                in competitive price brackets where the buying decision is hardest.
              </p>
            </div>
            <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
              <ThermometerSun className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Hands-On Testing</h3>
              <p className="text-neutral-400 leading-relaxed">
                Every product we recommend has been used in real cooking sessions. For grills, that
                means at least 15-20 cooks across different styles &mdash; burgers, steaks, low-and-slow
                smoking, and high-heat searing. We measure temperature accuracy at grate level, not
                just the lid thermometer.
              </p>
            </div>
            <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
              <BookOpen className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Long-Term Evaluation</h3>
              <p className="text-neutral-400 leading-relaxed">
                A grill that&apos;s great on day one might fall apart after six months. We revisit
                our reviews and update them based on durability, rust resistance, part availability,
                and how the product holds up through rain, snow, and heavy use. Meat delivery services
                are evaluated over multiple orders spanning weeks.
              </p>
            </div>
            <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
              <ShieldCheck className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Independent Ratings</h3>
              <p className="text-neutral-400 leading-relaxed">
                Our ratings are never influenced by affiliate payouts or brand relationships.
                Products earn their scores based on performance, build quality, value for money,
                and user experience. We disclose affiliate relationships transparently and
                separate editorial from commercial decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-neutral-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                MR
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Mike Reynolds</h3>
              <p className="text-orange-400 text-sm mb-3">Editor-in-Chief &amp; Head Pitmaster</p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Former competition BBQ cook with 12 years of experience on the circuit. Mike oversees
                all editorial content and leads our grill and smoker testing. His brisket has placed
                top 10 at the American Royal multiple times.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                SP
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Sarah Park</h3>
              <p className="text-orange-400 text-sm mb-3">Equipment Editor</p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Mechanical engineer turned BBQ nerd. Sarah runs our testing methodology and is
                responsible for the temperature accuracy data, build quality assessments, and
                comparison reviews. She owns more thermometers than anyone should.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                JT
              </div>
              <h3 className="text-xl font-bold text-white mb-1">James Torres</h3>
              <p className="text-orange-400 text-sm mb-3">Recipe Developer &amp; Meat Editor</p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Culinary school graduate who left restaurant kitchens for backyard smoke. James
                develops all our recipes, tests meat delivery services, and writes our regional
                BBQ guides. He&apos;s visited over 200 BBQ joints across the South.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
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
                Our revenue comes from affiliate commissions, but our recommendations come from experience.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Community First</h3>
              <p className="text-neutral-400">
                BBQ is a community tradition. We&apos;re building a resource that helps everyone &mdash;
                from first-time grillers to seasoned competition cooks &mdash; improve their craft
                and share the joy of cooking over fire.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quality Sourcing</h3>
              <p className="text-neutral-400">
                We believe great BBQ starts with great meat. We prioritize reviewing services that
                offer humanely raised, sustainably sourced options and are transparent about where
                their animals come from.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Questions or Feedback?</h2>
          <p className="text-neutral-400 mb-6 max-w-xl mx-auto">
            We read every message. Whether you want to suggest a product for review, point out
            something we got wrong, or just talk BBQ &mdash; we&apos;d love to hear from you.
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
