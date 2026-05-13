import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { name, phone, email, message } = body

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, phone, message' },
        { status: 400 }
      )
    }

    const contact = await db.contactMessage.create({
      data: {
        name,
        phone,
        email: email || '',
        message,
      },
    })

    console.log('✅ Contact Message Saved:', contact.id)

    return NextResponse.json(
      { message: 'Message received. We will get back to you shortly.', id: contact.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('❌ Contact Message Error:', error)
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    )
  }
}
