import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pkqtljqhlinbjefkrgqn.supabase.co'
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrcXRsanFobGluYmplZmtyZ3FuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTg2OTY4MCwiZXhwIjoyMDg1NDQ1NjgwfQ.nCROhg_YMx6nEP60JUmWiqepfqMKRFzrht91chHB7nk'

const supabase = createClient(supabaseUrl, supabaseServiceKey)

export async function POST(request: NextRequest) {
  try {
    const { email, source = 'recipe-book' } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Insert email into subscribers table
    const { data, error } = await supabase
      .from('meatlover_subscribers')
      .upsert(
        { email: email.toLowerCase().trim(), source },
        { onConflict: 'email' }
      )
      .select()

    if (error) {
      console.error('Supabase error:', error)
      // If it's a duplicate, that's fine - still give them the download
      if (error.code === '23505') {
        return NextResponse.json({
          success: true,
          message: 'Welcome back! Here\'s your download.',
          downloadUrl: '/pitmaster-recipe-book.pdf'
        })
      }
      throw error
    }

    return NextResponse.json({
      success: true,
      message: 'Thanks for subscribing!',
      downloadUrl: '/pitmaster-recipe-book.pdf'
    })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
