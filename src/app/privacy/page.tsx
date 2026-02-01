export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none text-neutral-300 space-y-6">
          <p className="text-lg">
            Last updated: January 2025
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">Information We Collect</h2>
          <p>
            When you visit MeatLover.com, we automatically collect certain information about your 
            device, including information about your web browser, IP address, time zone, and some 
            of the cookies that are installed on your device.
          </p>
          <p>
            Additionally, as you browse the Site, we collect information about the individual web 
            pages or products that you view, what websites or search terms referred you to the Site, 
            and information about how you interact with the Site.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and improve our website and services</li>
            <li>Send you our newsletter (if you&apos;ve subscribed)</li>
            <li>Respond to your comments and questions</li>
            <li>Analyze how you use our site to improve it</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8">Cookies</h2>
          <p>
            We use cookies to remember your preferences and understand how you use our site. 
            You can control cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">Third-Party Services</h2>
          <p>
            We use the following third-party services:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Google Analytics</strong> - to understand how visitors use our site</li>
            <li><strong>Amazon Associates</strong> - to provide product links and earn commissions</li>
            <li><strong>Various affiliate networks</strong> - for product recommendations</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8">Your Rights</h2>
          <p>
            If you are a European resident, you have the right to access personal information we 
            hold about you and to ask that your personal information be corrected, updated, or deleted.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">Contact Us</h2>
          <p>
            For more information about our privacy practices, if you have questions, or if you would 
            like to make a complaint, please contact us by email at{' '}
            <a href="mailto:privacy@meatlover.com" className="text-orange-500 hover:text-orange-400">
              privacy@meatlover.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  )
}
