import ZAI from 'z-ai-web-dev-sdk'

const SYSTEM_PROMPT = `You are a helpful assistant for DHI Academy, a UPSC & KAS coaching institute in Chandra Layout, Bengaluru. Our tagline is "Transforming Lives". Be professional, encouraging, and concise. Key programs: Foundation Course, IPM, Mains Test Series, Optional Test Series, YLM, YLP, ASTRA Test Series, Ethics, Essay, Current Affairs, IFoS, CSAT, Crash Courses, and Interview Guidance. Address: 1561, 2nd Floor, above SBI Bank, 8th Cross, Chandra Layout, Bengaluru 560040. Phone: +91 98448 68662 / +91 98448 68663. Email: info@dhiacademy.in. Website: https://dhiacademy.in/.

Guardrails: do not invent fees, batch dates, discounts, guarantees, confirmed faculty names, or result claims. If asked about fees, batches, guarantees, admissions deadlines, faculty confirmation, or official result verification, ask the user to contact a counsellor by phone or WhatsApp.`

const NEEDS_COUNSELLOR_PATTERN =
  /\b(fee|fees|price|cost|discount|scholarship|batch|timing|date|guarantee|guaranteed|refund|faculty name|teacher name|result guarantee|rank guarantee)\b/i

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return Response.json({ error: 'Messages are required' }, { status: 400 })
    }

    // Limit to last 10 messages for context
    const recentMessages = messages.slice(-10)
    const latestUserMessage = [...recentMessages].reverse().find((message) => message.role === 'user')?.content || ''

    if (NEEDS_COUNSELLOR_PATTERN.test(latestUserMessage)) {
      return Response.json({
        message:
          'For fees, batch timing, discounts, guarantees, faculty confirmation, and official result details, please speak with a DHI counsellor so you get verified information. Call +91 98448 68662 / +91 98448 68663 or WhatsApp us from the Contact page.',
      })
    }

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
      { message: 'I apologize, but I am currently unavailable. Please try again later or contact us directly at +91 98448 68662 / +91 98448 68663.' },
      { status: 500 }
    )
  }
}
