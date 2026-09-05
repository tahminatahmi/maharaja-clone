import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Do I need to book in advance?',
    answer:
      'Booking is recommended, especially for evenings and weekends. Walk-in guests are welcome when tables are available.',
  },
  {
    question: 'Do you offer vegetarian and vegan dishes?',
    answer:
      'Yes. Our menu includes a selection of vegetarian and plant-based dishes, and our team can help you choose suitable options.',
  },
  {
    question: 'Can you accommodate food allergies?',
    answer:
      'Please tell us about any allergies or dietary requirements when booking. Our team will explain which dishes may be suitable for you.',
  },
  {
    question: 'Do you offer private dining?',
    answer:
      'Yes. Selected spaces can be reserved for celebrations, business dinners and private events. Visit our Private Dining page for more information.',
  },
  {
    question: 'Is there a dress code?',
    answer:
      'We recommend smart casual dress, but our priority is that guests feel comfortable while enjoying their visit.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-[#f4efe7] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#9b6f3f]">
              Before you visit
            </p>

            <h2 className="text-4xl font-normal leading-tight text-[#211d19] md:text-5xl lg:text-6xl">
              Frequently asked
              <span className="block italic text-[#8b6b4b]">
                questions.
              </span>
            </h2>

            <p className="mt-6 max-w-md leading-7 text-[#6d645c]">
              A few useful details to help make your visit to Aurum as smooth
              and enjoyable as possible.
            </p>
          </div>

          <div className="border-t border-[#d8cec1]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <div
                  key={faq.question}
                  className="border-b border-[#d8cec1]"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left md:py-7"
                  >
                    <span className="text-lg font-light text-[#211d19] md:text-xl">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[#8b6b4b] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 pr-10 leading-7 text-[#6d645c]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
