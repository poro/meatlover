'use client'

import { useState, useEffect } from 'react'
import { X, Flame } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // In production, this would call your Supabase API
    console.log('Email submitted:', email)
    
    setSubmitted(true)
    setLoading(false)
    localStorage.setItem('meatlover-popup-seen', 'true')
    
    // Close popup after 3 seconds
    setTimeout(() => {
      setIsOpen(false)
    }, 3000)
  }

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('meatlover-popup-seen', 'true')
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-neutral-900 border-neutral-800 sm:max-w-md">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        
        <DialogHeader className="text-center">
          <div className="mx-auto bg-orange-500/20 p-3 rounded-full w-fit mb-4">
            <Flame className="h-8 w-8 text-orange-500" />
          </div>
          <DialogTitle className="text-2xl font-bold text-white">
            🔥 Get Exclusive BBQ Deals
          </DialogTitle>
        </DialogHeader>

        {!submitted ? (
          <div className="space-y-4">
            <p className="text-neutral-400 text-center">
              Join 10,000+ meat lovers! Get weekly deals, new product alerts, and 
              exclusive discounts on grills, smokers, and premium meat subscriptions.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-orange-500"
              />
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-6"
              >
                {loading ? 'Joining...' : 'Join the Pit Crew 🥩'}
              </Button>
            </form>
            
            <p className="text-neutral-500 text-xs text-center">
              No spam. Unsubscribe anytime. We respect your inbox.
            </p>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-xl font-bold text-white mb-2">Welcome to the Crew!</h3>
            <p className="text-neutral-400">
              Check your inbox for your welcome email with exclusive deals.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
