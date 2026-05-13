'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! Welcome to Aristocrat IAS Academy. How can I help you today? Ask me about our courses, admissions, fee structure, or UPSC preparation tips.',
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSend = async () => {
    const trimmed = input.trim()
    if (!trimmed || isLoading) return

    const userMessage: Message = { role: 'user', content: trimmed }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      const data = await res.json()
      const botMessage: Message = {
        role: 'assistant',
        content: data.message || 'I apologize, but I could not process your request. Please try again.',
      }
      setMessages((prev) => [...prev, botMessage])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'I apologize, but I am currently unavailable. Please try again later or contact us at info@aristocratiasacademy.in',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat Bubble Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="fixed bottom-[3rem] right-5 sm:right-6 z-50 group/chat"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-shadow bg-navy dark:bg-[#0A1428] text-ivory-cream chatbot-gold-ring-pulse"
              aria-label="Open chat assistant"
            >
              <MessageCircle className="w-6 h-6" />
            </Button>
            {/* Gold ring pulse — replaces green dot */}
            <span className="absolute inset-0 rounded-full pointer-events-none border-2 border-sovereign-gold dark:border-champagne-gold animate-ping opacity-20" />
            {/* Tooltip */}
            <span className="tooltip-left">
              Chat with us
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed z-50 bottom-[3rem] right-3 sm:right-6 w-[calc(100vw-1.5rem)] sm:w-[400px] max-h-[70vh] flex flex-col rounded-xl overflow-hidden shadow-2xl border border-light-gray dark:border-[#1C2541] bg-ivory-cream dark:bg-[#0D1525]"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3 shrink-0 bg-navy dark:bg-[#0A1428]"
            >
              <div className="flex items-center gap-2">
                {/* Gold ring instead of green dot */}
                <div
                  className="w-2.5 h-2.5 rounded-full bg-sovereign-gold dark:bg-champagne-gold"
                  style={{ boxShadow: '0 0 6px rgba(200,150,12,0.5)' }}
                />
                <h3
                  className="font-serif text-[18px] font-medium text-ivory-cream"
                >
                  Ask Aristocrat
                </h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 hover:bg-white/10 text-ivory-cream"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4" style={{ maxHeight: 'calc(70vh - 120px)' }}>
              <div ref={scrollRef} className="space-y-3">
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={cn(
                        'max-w-[80%] px-4 py-2.5 rounded-xl text-[14px] font-sans leading-relaxed',
                        msg.role === 'user'
                          ? 'rounded-br-sm bg-sovereign-gold dark:bg-champagne-gold text-navy dark:text-[#0A1428]'
                          : 'rounded-bl-sm bg-navy dark:bg-[#0A1428] text-ivory-cream'
                      )}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div
                      className="px-4 py-2.5 rounded-xl rounded-bl-sm text-[14px] font-sans bg-navy dark:bg-[#0A1428] text-ivory-cream"
                    >
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Typing...
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div
              className="flex items-center gap-2 px-4 py-3 border-t shrink-0 border-light-gray dark:border-[#1C2541] bg-ivory-cream dark:bg-[#0D1525]"
            >
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about courses, fees..."
                disabled={isLoading}
                className="flex-1 font-sans text-[14px] h-10 border-none bg-white/80 dark:bg-[#111827] focus-visible:ring-1 focus-visible:ring-sovereign-gold dark:focus-visible:ring-champagne-gold"
              />
              <Button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                size="icon"
                className={cn(
                  'h-10 w-10 shrink-0 rounded-lg',
                  input.trim()
                    ? 'bg-sovereign-gold dark:bg-champagne-gold text-navy dark:text-[#0A1428]'
                    : 'bg-light-gray dark:bg-[#1C2541] text-mid-gray dark:text-ivory-cream/50'
                )}
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
