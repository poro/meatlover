import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://pkqtljqhlinbjefkrgqn.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrcXRsanFobGluYmplZmtyZ3FuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4Njk2ODAsImV4cCI6MjA4NTQ0NTY4MH0.MWh3j7lSE_4sJjSm5gKJ43ubL3oU66lyEjNUfR8rOxs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
