import ZAI from 'z-ai-web-dev-sdk'

const SYSTEM_PROMPT = `You are a helpful assistant for DHI Academy, a UPSC & KAS coaching institute in Chandralayout, Bengaluru. Our tagline is "Transforming Lives". Answer questions about courses, admissions, faculty, fee structure, and preparation tips. Be professional and encouraging. Key facts: Foundation Course, IPM (Integrated Prelims & Mains), Mains Test Series 2025, Optional Test Series (Sociology, PSIR, Geography), YLM, YLP, ASTRA Test Series, Ethics, Essay Paper, Current Affairs, IFoS, CSAT, Crash Courses, Interview Guidance. 500+ students trained, 12+ expert faculty, 10+ years experience. Address: Bus Stand, 1561, 2nd Floor, 8th Cross Rd, above SBI Bank, opposite Chandra Layout, Bengaluru 560040. Phone: +91 91083 33136. Email: info@dhiacademy.in. Website: https://dhiacademy.in/`

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
      { message: 'I apologize, but I am currently unavailable. Please try again later or contact us directly at info@dhiacademy.in' },
      { status: 500 }
    )
  }
}
