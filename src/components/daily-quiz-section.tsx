'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Check, X, ArrowRight, Lightbulb } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ─── Quiz Questions Data ─── */
const quizQuestions = [
  {
    id: 1,
    subject: 'Polity',
    question:
      'Which Article of the Indian Constitution empowers the President to promulgate Ordinances during the recess of Parliament?',
    options: [
      'Article 121',
      'Article 123',
      'Article 125',
      'Article 127',
    ],
    correctIndex: 1,
    explanation:
      'Article 123 of the Indian Constitution empowers the President to promulgate Ordinances when both Houses of Parliament are not in session, subject to certain conditions. An Ordinance has the same force as an Act of Parliament but must be approved by Parliament within six weeks of reassembly.',
  },
  {
    id: 2,
    subject: 'History',
    question:
      'The famous "Dandi March" by Mahatma Gandhi in 1930 was primarily a protest against which British policy?',
    options: [
      'The Rowlatt Act',
      'The Salt Tax',
      'The Vernacular Press Act',
      'The Government of India Act',
    ],
    correctIndex: 1,
    explanation:
      'The Dandi March (Salt March) of 1930 was a direct action campaign against the British salt monopoly and salt tax. Gandhi and his followers walked 385 km from Sabarmati Ashram to Dandi to make salt, which was a powerful symbol of India\'s refusal to live under British-made laws.',
  },
  {
    id: 3,
    subject: 'Geography',
    question:
      'Which of the following rivers does NOT flow into the Bay of Bengal?',
    options: [
      'Godavari',
      'Narmada',
      'Krishna',
      'Mahanadi',
    ],
    correctIndex: 1,
    explanation:
      'The Narmada River flows westward into the Arabian Sea, while the Godavari, Krishna, and Mahanadi all flow eastward into the Bay of Bengal. The Narmada is one of the major west-flowing rivers of Peninsular India.',
  },
  {
    id: 4,
    subject: 'Economy',
    question:
      'The concept of "Fiscal Deficit" in the Union Budget refers to:',
    options: [
      'Total expenditure minus total receipts',
      'Total expenditure minus revenue receipts and non-debt capital receipts',
      'Revenue expenditure minus revenue receipts',
      'Capital expenditure minus capital receipts',
    ],
    correctIndex: 1,
    explanation:
      'Fiscal Deficit is defined as the excess of total expenditure over total receipts excluding borrowings and other liability-creating receipts. In other words, it is the total borrowing requirement of the government. It indicates the total borrowing requirements of the government from all sources.',
  },
  {
    id: 5,
    subject: 'Science',
    question:
      'Which of the following is NOT a greenhouse gas as identified by the Kyoto Protocol?',
    options: [
      'Carbon Dioxide (CO₂)',
      'Methane (CH₄)',
      'Nitrogen (N₂)',
      'Nitrous Oxide (N₂O)',
    ],
    correctIndex: 2,
    explanation:
      'Nitrogen (N₂) makes up about 78% of the atmosphere but is NOT a greenhouse gas. The Kyoto Protocol identifies six main greenhouse gases: Carbon Dioxide (CO₂), Methane (CH₄), Nitrous Oxide (N₂O), Hydrofluorocarbons (HFCs), Perfluorocarbons (PFCs), and Sulphur Hexafluoride (SF₆).',
  },
  {
    id: 6,
    subject: 'Polity',
    question:
      'The concept of "Basic Structure" of the Constitution was established by which landmark judgment?',
    options: [
      'Golaknath case (1967)',
      'Kesavananda Bharati case (1973)',
      'Minerva Mills case (1980)',
      'Maneka Gandhi case (1978)',
    ],
    correctIndex: 1,
    explanation:
      'The Kesavananda Bharati v. State of Kerala (1973) established the "Basic Structure" doctrine, holding that Parliament can amend any part of the Constitution but cannot alter its basic structure. This includes features like supremacy of the Constitution, rule of law, separation of powers, judicial review, and federalism.',
  },
  {
    id: 7,
    subject: 'History',
    question:
      'Who among the following was NOT a member of the Constituent Assembly of India?',
    options: [
      'Dr. B.R. Ambedkar',
      'Jawaharlal Nehru',
      'Mahatma Gandhi',
      'Rajendra Prasad',
    ],
    correctIndex: 2,
    explanation:
      'Mahatma Gandhi was NOT a member of the Constituent Assembly. He believed that the Constituent Assembly should be formed by the people\'s representatives and chose not to participate. Dr. Ambedkar was the Chairman of the Drafting Committee, Nehru was a key member, and Rajendra Prasad was the President of the Assembly.',
  },
  {
    id: 8,
    subject: 'Geography',
    question:
      'The "Indian Standard Time" is based on the longitude of:',
    options: [
      '80°30\' East',
      '82°30\' East',
      '84°30\' East',
      '78°30\' East',
    ],
    correctIndex: 1,
    explanation:
      'Indian Standard Time (IST) is based on the longitude 82°30\' East, which passes through Allahabad (Prayagraj), Uttar Pradesh. This is 5 hours 30 minutes ahead of GMT. The meridian was chosen as it roughly bisects the country from east to west.',
  },
  {
    id: 9,
    subject: 'Economy',
    question:
      'The Monetary Policy Committee (MPC) of RBI has how many members?',
    options: [
      '4 members',
      '5 members',
      '6 members',
      '8 members',
    ],
    correctIndex: 2,
    explanation:
      'The Monetary Policy Committee (MPC) has 6 members — 3 from RBI (Governor as Chairperson, Deputy Governor in charge of monetary policy, and one RBI officer) and 3 external members appointed by the Central Government. Decisions are taken by majority vote, with the Governor having a casting vote in case of a tie.',
  },
  {
    id: 10,
    subject: 'Science',
    question:
      'Which Indian space mission successfully placed a spacecraft in the orbit of Mars in its very first attempt?',
    options: [
      'Chandrayaan-1',
      'Mangalyaan (MOM)',
      'Chandrayaan-2',
      'Aditya-L1',
    ],
    correctIndex: 1,
    explanation:
      'Mars Orbiter Mission (Mangalyaan), launched on November 5, 2013, successfully entered Mars orbit on September 24, 2014. India became the first country to achieve this in its maiden attempt and the first Asian nation to reach Mars orbit. It cost only $74 million, making it the most cost-effective Mars mission ever.',
  },
]

/* ─── Subject Color Map ─── */
const subjectColors: Record<string, string> = {
  Polity: '#0F1F4B',
  History: '#8B1A1A',
  Geography: '#0D6E6E',
  Economy: '#C8960C',
  Science: '#1A2E6B',
}

/* ─── Option Letter ─── */
const optionLetters = ['A', 'B', 'C', 'D']

/* ─── Main Section ─── */
export default function DailyQuizSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [showExplanation, setShowExplanation] = useState(false)

  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const currentQuestion = quizQuestions[currentIndex]
  const subjectColor = subjectColors[currentQuestion.subject] || '#0F1F4B'

  function handleSelectOption(index: number) {
    if (isAnswered) return

    setSelectedOption(index)
    setIsAnswered(true)
    setTotalAnswered((prev) => prev + 1)

    if (index === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1)
    }

    // Show explanation with slight delay
    setTimeout(() => setShowExplanation(true), 600)
  }

  function handleNextQuestion() {
    setShowExplanation(false)
    setSelectedOption(null)
    setIsAnswered(false)

    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      // Loop back to first question
      setCurrentIndex(0)
    }
  }

  function getOptionStyle(index: number) {
    if (!isAnswered) {
      return cn(
        'border border-[#E8E8E4] dark:border-[#1C2541]',
        'bg-white dark:bg-[#111827]',
        'hover:border-[#C8960C]/50 dark:hover:border-[#E8B830]/50',
        'hover:-translate-y-0.5',
        'cursor-pointer',
      )
    }

    const isCorrect = index === currentQuestion.correctIndex
    const isSelected = index === selectedOption

    if (isCorrect) {
      return cn(
        'border border-green-400 dark:border-green-500',
        'bg-green-50 dark:bg-green-900/30',
      )
    }

    if (isSelected && !isCorrect) {
      return cn(
        'border border-red-400 dark:border-red-500',
        'bg-red-50 dark:bg-red-900/30',
      )
    }

    return cn(
      'border border-[#E8E8E4] dark:border-[#1C2541]',
      'bg-white/60 dark:bg-[#111827]/60',
      'opacity-60',
    )
  }

  function getOptionIcon(index: number) {
    if (!isAnswered) return null

    const isCorrect = index === currentQuestion.correctIndex
    const isSelected = index === selectedOption

    if (isCorrect) {
      return (
        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
          <Check className="w-3.5 h-3.5 text-white" />
        </span>
      )
    }

    if (isSelected && !isCorrect) {
      return (
        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
          <X className="w-3.5 h-3.5 text-white" />
        </span>
      )
    }

    return null
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      aria-labelledby="daily-quiz-heading"
    >
      {/* Cream gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #FAFAF7 0%, rgba(253,244,220,0.2) 50%, #FAFAF7 100%)',
        }}
      />
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          background: 'linear-gradient(180deg, #FAFAF7 0%, rgba(253,244,220,0.2) 50%, #FAFAF7 100%)',
        }}
      />
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background: 'linear-gradient(180deg, #0D1525 0%, rgba(26,26,16,0.2) 50%, #0D1525 100%)',
        }}
      />

      {/* Pattern dots overlay */}
      <div
        className="absolute inset-0 pointer-events-none pattern-dots opacity-40"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14 text-center"
        >
          {/* Section Label */}
          <p className="section-label ui-label section-label-diamond mb-4 text-[#C8960C] dark:text-[#E8B830]">
            DAILY CHALLENGE
          </p>

          {/* Heading */}
          <h2
            id="daily-quiz-heading"
            className={cn(
              'font-serif section-heading text-[36px] leading-tight text-[#0F1F4B] dark:text-[#FAFAF7] md:text-[44px]',
            )}
          >
            UPSC Question of the Day
          </h2>

          {/* Gold Separator */}
          <div className="mx-auto mt-5 h-[2px] w-10 bg-[#C8960C]" />
        </motion.div>

        {/* Quiz Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            'rounded-xl p-6 sm:p-8',
            'bg-white dark:bg-[#111827]',
            'border border-[#E8E8E4] dark:border-[#1C2541]',
            'premium-shadow',
            'relative overflow-hidden',
          )}
        >
          {/* Subject Badge + Question Counter */}
          <div className="flex items-center justify-between mb-5">
            <span
              className="inline-flex items-center px-3 py-1 rounded-full font-sans text-[11px] font-semibold tracking-wide text-white"
              style={{ backgroundColor: subjectColor }}
            >
              {currentQuestion.subject}
            </span>
            <span className="font-mono text-[12px] text-[#737370] dark:text-[#A0A0A0]">
              Q{currentIndex + 1}/{quizQuestions.length}
            </span>
          </div>

          {/* Question Text */}
          <h3
            className={cn(
              'font-serif text-[18px] sm:text-[20px] leading-relaxed mb-6',
              'text-[#0F1F4B] dark:text-[#FAFAF7]',
            )}
          >
            {currentQuestion.question}
          </h3>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <motion.button
                key={`${currentIndex}-${index}`}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                onClick={() => handleSelectOption(index)}
                disabled={isAnswered}
                className={cn(
                  'w-full flex items-center gap-3 p-4 rounded-lg',
                  'transition-all duration-300',
                  'text-left',
                  getOptionStyle(index),
                )}
              >
                {/* Letter Badge */}
                <span
                  className={cn(
                    'flex-shrink-0 w-8 h-8 rounded-full',
                    'flex items-center justify-center',
                    'font-sans text-[13px] font-bold',
                    'transition-colors duration-300',
                    isAnswered && index === currentQuestion.correctIndex
                      ? 'bg-green-500 text-white'
                      : isAnswered && index === selectedOption && index !== currentQuestion.correctIndex
                        ? 'bg-red-500 text-white'
                        : 'bg-[#0F1F4B]/10 dark:bg-[#E8B830]/10 text-[#0F1F4B] dark:text-[#E8B830]',
                  )}
                >
                  {optionLetters[index]}
                </span>

                {/* Option Text */}
                <span
                  className={cn(
                    'flex-1 font-sans text-[14px] sm:text-[15px]',
                    'text-[#3D3D3A] dark:text-[#E8E8E4]',
                  )}
                >
                  {option}
                </span>

                {/* Status Icon */}
                {getOptionIcon(index)}
              </motion.button>
            ))}
          </div>

          {/* Explanation Section */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <div
                  className={cn(
                    'mt-6 p-5 rounded-lg',
                    'bg-[#FDF4DC]/60 dark:bg-[#1A2E6B]/30',
                    'border border-[#C8960C]/20 dark:border-[#E8B830]/20',
                  )}
                >
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-[#C8960C] dark:text-[#E8B830] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sans ui-label text-[11px] mb-2 text-[#C8960C] dark:text-[#E8B830]">
                        EXPLANATION
                      </p>
                      <p className="font-sans body-text text-[14px] text-[#3D3D3A] dark:text-[#E8E8E4]/80">
                        {currentQuestion.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer: Score + Next Button */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Score Display */}
            <div className="flex items-center gap-2">
              <span className="font-sans text-[13px] text-[#737370] dark:text-[#A0A0A0]">
                Your Score:
              </span>
              <span className="font-serif stat-number text-[18px] gold-gradient-text">
                {score}/{totalAnswered}
              </span>
            </div>

            {/* Next Question Button */}
            {isAnswered && (
              <motion.button
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                onClick={handleNextQuestion}
                className={cn(
                  'inline-flex items-center gap-2',
                  'px-6 py-3 rounded-lg',
                  'font-sans text-[13px] font-semibold tracking-wide',
                  'transition-all duration-300',
                  'btn-gold-shimmer',
                  'bg-gradient-to-r from-[#C8960C] to-[#E8B830]',
                  'text-[#0F1F4B]',
                )}
              >
                {currentIndex < quizQuestions.length - 1 ? 'Next Question' : 'Start Over'}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
