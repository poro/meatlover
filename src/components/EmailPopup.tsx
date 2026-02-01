'use client'

import { useState, useEffect } from 'react'
import { X, Flame, Gift, BookOpen, ChefHat } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog'

export default function EmailPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem('meatlover-popup-seen')
    if (!hasSeenPopup) {
      // Show popup after 8 seconds or on scroll
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 8000)

      const handleScroll = () => {
        if (window.scrollY > 500 && !localStorage.getItem('meatlover-popup-seen')) {
          setIsOpen(true)
          window.removeEventListener('scroll', handleScroll)
        }
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
        clearTimeout(timer)
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call - in production, this would call your backend
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Email submitted:', email)
    
    setSubmitted(true)
    setLoading(false)
    localStorage.setItem('meatlover-popup-seen', 'true')
    
    // Close popup after 4 seconds
    setTimeout(() => {
      setIsOpen(false)
    }, 4000)
  }

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('meatlover-popup-seen', 'true')
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-neutral-900 border-neutral-800 sm:max-w-lg p-0 overflow-hidden">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-neutral-400 hover:text-white transition-colors z-10"
        >
          <X className="h-5 w-5" />
        </button>
        
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 text-center">
          <div className="mx-auto bg-white/20 p-3 rounded-full w-fit mb-4">
            <Gift className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Free BBQ Recipe eBook!
          </h2>
          <p className="text-white/80">
            Join 25,000+ pitmasters and get our exclusive guide
          </p>
        </div>

        <div className="p-6">
          {!submitted ? (
            <div className="space-y-4">
              {/* What you get */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-neutral-300">
                  <BookOpen className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span>50+ competition-winning recipes</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-300">
                  <ChefHat className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span>Pro tips from award-winning pitmasters</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-300">
                  <Flame className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span>Exclusive deals & new product alerts</span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-orange-500 py-6"
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-6"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Get My Free eBook 📖'
                  )}
                </Button>
              </form>
              
              <p className="text-neutral-500 text-xs text-center">
                No spam, ever. Unsubscribe anytime with one click.
              </p>
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-white mb-2">Check Your Inbox!</h3>
              <p className="text-neutral-400">
                Your free BBQ Recipe eBook is on its way. Welcome to the pit crew!
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
