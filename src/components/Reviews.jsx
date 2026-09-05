import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Amelia R.',
    location: 'London',
    quote:
      'Beautiful atmosphere, thoughtful service and dishes that felt refined without being overcomplicated.',
  },
  {
    name: 'Daniel K.',
    location: 'Canary Wharf',
    quote:
      'The tasting menu was balanced from start to finish. The charcoal dishes were the highlight for us.',
  },
  {
    name: 'Priya S.',
    location: 'Mayfair',
    quote:
      'A warm, elegant restaurant with excellent attention to detail. Ideal for a special evening.',
  },
]

function Reviews() {
  return (
    <section className="bg-[#211d19] py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mb-14 max-w-3xl md:mb-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#c8a46b]">
            Guest experiences
          </p>

          <h2 className="text-4xl font-normal leading-tight md:text-5xl lg:text-6xl">
            Words from
            <span className="block italic text-[#d9c7ab]">
              around the table.
            </span>
          </h2>
        </div>

        {/* Reviews */}
        <div className="grid border-y border-white/10 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className={`group px-2 py-10 md:px-8 md:py-14 lg:px-10 ${
                index !== testimonials.length - 1
                  ? 'border-b border-white/10 lg:border-b-0 lg:border-r'
                  : ''
              }`}
            >
              <div className="mb-10 flex items-center justify-between">
                <Quote
                  size={32}
                  strokeWidth={1}
                  className="text-[#c8a46b]"
                />

                <div className="flex gap-1 text-[#c8a46b]">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={13}
                      fill="currentColor"
                      strokeWidth={1}
                    />
                  ))}
                </div>
              </div>

              <blockquote className="min-h-[150px] text-xl font-light leading-8 text-white/80 md:text-2xl md:leading-9">
                “{testimonial.quote}”
              </blockquote>

              <div className="mt-10">
                <p className="text-sm font-medium">
                  {testimonial.name}
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/35">
                  {testimonial.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
