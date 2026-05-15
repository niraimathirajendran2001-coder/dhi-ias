'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

/** DHI Academy Logo Icon — stylized "D" with accent */
function DHILogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer gold ring */}
      <circle cx="20" cy="20" r="18" stroke="#E31837" strokeWidth="1.5" opacity="0.9" />
      {/* Inner ring */}
      <circle cx="20" cy="20" r="15" stroke="#E31837" strokeWidth="0.5" opacity="0.4" />
      {/* Stylized "D" letterform */}
      <path
        d="M20 8L12 28H16L17.5 24H22.5L24 28H28L20 8ZM18.5 21L20 16L21.5 21H18.5Z"
        fill="#FF2D4B"
      />
      {/* Small chakra dot at apex */}
      <circle cx="20" cy="7" r="1.2" fill="#E31837" />
    </svg>
  )
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! Welcome to DHI Academy. How can I help you today? Ask me about our courses, admissions, fee structure, or UPSC preparation tips.',
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

  // Show "Ask your doubts" tooltip after a delay
  useEffect(() => {
    if (isOpen) return
    const showTimer = setTimeout(() => setShowTooltip(true), 3000)
    const hideTimer = setTimeout(() => setShowTooltip(false), 8000)
    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
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
          content: 'I apologize, but I am currently unavailable. Please try again later or contact us at info@dhiacademy.in',
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

  const handleOpenChat = () => {
    setShowTooltip(false)
    setIsOpen(true)
  }

  return (
    <>
      {/* Chat Bubble Button with Logo Icon */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
            className="fixed bottom-[1.5rem] right-5 sm:right-6 z-50 group/chat"
          >
            <Button
              onClick={handleOpenChat}
              className={cn(
                'w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300',
                'bg-navy dark:bg-[#0F0F11] text-ivory-cream',
                'gold-ring-btn chatbot-gold-ring-pulse',
                'hover:scale-110',
              )}
              aria-label="Open chat assistant"
            >
              <DHILogoIcon className="w-8 h-8" />
            </Button>

            {/* "Ask your doubts to me" Popup Tooltip */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, x: 10, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={cn(
                    'absolute right-full mr-3 top-1/2 -translate-y-1/2',
                    'whitespace-nowrap',
                    'px-4 py-2.5 rounded-xl',
                    'bg-navy dark:bg-[#0F0F11]',
                    'border border-[rgba(227,24,55,0.3)] dark:border-[rgba(255,45,75,0.3)]',
                    'shadow-[0_4px_20px_rgba(0,0,0,0.25)]',
                    'cursor-pointer',
                  )}
                  onClick={handleOpenChat}
                >
                  {/* Arrow pointing right */}
                  <div
                    className={cn(
                      'absolute right-[-6px] top-1/2 -translate-y-1/2',
                      'w-3 h-3 rotate-45',
                      'bg-navy dark:bg-[#0F0F11]',
                      'border-r border-t',
                      'border-[rgba(227,24,55,0.3)] dark:border-[rgba(255,45,75,0.3)]',
                    )}
                  />
                  <p className="font-sans text-[13px] font-medium text-ivory-cream">
                    Ask your doubts to me
                  </p>
                  <p className="font-sans text-[11px] text-[#E31837] dark:text-champagne-gold mt-0.5">
                    Click to start chatting →
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
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
            className="fixed z-50 bottom-[1.5rem] right-3 sm:right-6 w-[calc(100vw-1.5rem)] sm:w-[400px] max-h-[70vh] flex flex-col rounded-xl overflow-hidden shadow-2xl border border-light-gray dark:border-[#1C2541] bg-ivory-cream dark:bg-[#0D1525]"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3 shrink-0 bg-navy dark:bg-[#0F0F11]"
            >
              <div className="flex items-center gap-2.5">
                {/* Logo icon instead of green dot */}
                <DHILogoIcon className="w-6 h-6" />
                <h3
                  className="font-serif text-[18px] font-medium text-ivory-cream"
                >
                  Ask DHI
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
                          ? 'rounded-br-sm bg-sovereign-gold dark:bg-champagne-gold text-navy dark:text-[#0F0F11]'
                          : 'rounded-bl-sm bg-navy dark:bg-[#0F0F11] text-ivory-cream'
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
                      className="px-4 py-2.5 rounded-xl rounded-bl-sm text-[14px] font-sans bg-navy dark:bg-[#0F0F11] text-ivory-cream"
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
                    ? 'bg-sovereign-gold dark:bg-champagne-gold text-navy dark:text-[#0F0F11]'
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
