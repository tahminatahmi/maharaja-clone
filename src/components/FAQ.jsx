import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'

const faqs = [
  {
    question: 'How do I book a table at Maharaja of India?',
    answer:
      'Bookings are taken via SevenRooms – the Book A Table button at the top of every page opens our reservation system. For same-day tables, call Charing Cross on 020 3091 3500 or Soho on 07477 107546.',
  },
  {
    question: 'Do you serve a pre-theatre menu?',
    answer:
      'Yes – both restaurants run a three-course pre-theatre menu from £25. It’s available daily and is the most popular choice before a West End curtain at the Coliseum, the Palace, or the Prince Edward Theatre.',
  },
  {
    question: 'Do you cater for vegetarians, vegans, and dietary requirements?',
    answer:
      'Absolutely. We have a full vegetarian menu, a separate vegan menu, and gluten-free options on request. Please flag any allergies when you book and the kitchen will adapt – we keep dairy-free, nut-free, and gluten-free variants of most dishes ready to go.',
  },
  {
    question: 'Where are your two London restaurants?',
    answer:
      'Maharaja of India Charing Cross sits at 19A Charing Cross Road, London WC2H 0ET, a minute from Leicester Square tube. Soho is at 63 Old Compton Street, London W1D 6HT, three minutes from Tottenham Court Road.',
  },
  {
    question: 'How late are you open?',
    answer:
      'Charing Cross is open every day from noon until midnight. Soho serves until 1am Monday to Thursday, 2am on Friday and Saturday, and midnight on Sunday – one of the latest proper Indian kitchens in central London.',
  },
  {
    question: 'Do you offer Click & Collect or delivery?',
    answer:
      'Click & Collect is available at Charing Cross via maharajacharingcross.co.uk – order ahead, collect when you arrive. For private dining and events, please use the enquiry form on the Private Dining page.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-[#f5f0e8] px-6 pt-20 pb-20 lg:pt-[96px] lg:pb-[88px]"
    >
      <div className="mx-auto max-w-[740px]">
        <div className="text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.38em] text-[#c9a451]">
            Frequently Asked
          </p>
          <h2
            id="faq-heading"
            className="mt-5 font-qasira text-[38px] font-normal leading-none tracking-[-0.02em] text-[#173728] sm:text-[50px]"
          >
            Questions, Answered
          </h2>
        </div>

        <div className="mt-12 border-t border-[#dedbd2] sm:mt-14">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const Icon = isOpen ? Minus : Plus

            return (
              <div key={faq.question} className="border-b border-[#dedbd2]">
                <h3>
                  <button
                    id={`faq-question-${index}`}
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex w-full cursor-pointer items-center justify-between gap-5 py-7 text-left text-[#173728] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a451] sm:py-[36px]"
                  >
                    <span className="font-qasira text-[21px] font-normal leading-[1.2] tracking-normal sm:text-[23px]">
                      {faq.question}
                    </span>
                    <Icon aria-hidden="true" size={14} strokeWidth={1.5} className="shrink-0 text-[#c9a451]" />
                  </button>
                </h3>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  hidden={!isOpen}
                >
                  <p className="max-w-[660px] pb-8 text-[17px] leading-[1.7] text-[#30302d] sm:pb-[34px] sm:text-[19px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
