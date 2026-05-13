import ZAI from 'z-ai-web-dev-sdk'

const SYSTEM_PROMPT = `You are a helpful assistant for Aristocrat IAS Academy, a premium UPSC & KAS coaching institute in Chandralayout, Bengaluru. Answer questions about courses, admissions, faculty, fee structure, and preparation tips. Be professional and encouraging. Key facts: GS Foundation ₹1,20,000 (12 months), KAS Coaching ₹85,000 (8 months), Test Series ₹15,000 (6 months), 200+ selections, 12+ expert faculty, 15+ years experience. Address: Chandralayout, Bengaluru 560040. Phone: +91 80 XXXX XXXX. Email: info@aristocratiasacademy.in`

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return Response.json({ error: 'Messages are required' }, { status: 400 })
    }

    // Limit to last 10 messages for context
    const recentMessages = messages.slice(-10)

    const zai = await ZAI.create()
    const response = await zai.chat.completions.create({
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...recentMessages,
      ],
      thinking: { type: 'disabled' },
    })

    const message = response.choices[0]?.message?.content || 'I apologize, but I could not generate a response. Please try again.'

    return Response.json({ message })
  } catch (error) {
    console.error('Chat API error:', error)
    return Response.json(
      { message: 'I apologize, but I am currently unavailable. Please try again later or contact us directly at info@aristocratiasacademy.in' },
      { status: 500 }
    )
  }
}
