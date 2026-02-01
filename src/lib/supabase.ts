import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Product = {
  id: string
  name: string
  brand: string
  category: 'grill' | 'smoker' | 'accessory' | 'thermometer'
  subcategory: string
  description: string
  image_url: string
  price: number
  rating: number
  pros: string[]
  cons: string[]
  specs: Record<string, string>
  affiliate_url: string
  created_at: string
}

export type Subscription = {
  id: string
  name: string
  description: string
  image_url: string
  price_range: string
  rating: number
  pros: string[]
  cons: string[]
  affiliate_url: string
  commission: string
}

export type EmailSubscriber = {
  id: string
  email: string
  subscribed_at: string
  is_active: boolean
}
