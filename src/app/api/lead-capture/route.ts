import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { fullName, email, phone } = body

    // Validation
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields: fullName, email, phone' },
        { status: 400 }
      )
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Save to database
    const lead = await db.leadCapture.create({
      data: {
        fullName,
        email,
        phone,
        source: 'study-plan-pdf',
      },
    })

    console.log('✅ Lead Captured:', lead.id, email)

    return NextResponse.json(
      {
        message: 'Study plan will be sent to your email',
        id: lead.id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('❌ Lead Capture Error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
