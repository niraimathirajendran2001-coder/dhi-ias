import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { fullName, phone, email, course, city, referral, whatsapp } = body

    // Basic validation
    if (!fullName || !phone || !email || !course || !city) {
      return NextResponse.json(
        { error: 'Missing required fields: fullName, phone, email, course, city' },
        { status: 400 }
      )
    }

    // Save to database
    const inquiry = await db.admissionInquiry.create({
      data: {
        fullName,
        phone,
        email,
        course,
        city,
        referral: referral || 'N/A',
        whatsapp: whatsapp || false,
      },
    })

    console.log('✅ Admission Inquiry Saved:', inquiry.id)

    return NextResponse.json(
      { message: 'Inquiry submitted successfully', id: inquiry.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('❌ Admission Inquiry Error:', error)
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    )
  }
}
