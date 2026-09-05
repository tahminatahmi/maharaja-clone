const reviewLinks = [
  {
    label: 'Read on TripAdvisor',
    href: 'https://www.tripadvisor.co.uk/Restaurant_Review-d784337',
  },
  {
    label: 'Read on SquareMeal',
    href: 'https://www.squaremeal.co.uk/restaurants/maharaja-of-india_26971',
  },
]

export default function Reviews() {
  return (
    <section
      aria-labelledby="reviews-heading"
      className="bg-[#f5f0e8] px-6 pt-16 pb-24 text-center lg:pt-[74px] lg:pb-[160px]"
    >
      <div className="mx-auto max-w-[640px]">
        <p className="text-[12px] font-semibold uppercase tracking-[0.38em] text-[#c9a451]">
          What Guests Say
        </p>

        <h2
          id="reviews-heading"
          className="mt-5 font-qasira text-[40px] font-normal leading-none tracking-[-0.02em] text-[#173728] sm:text-[50px]"
        >
          Read Our Reviews
        </h2>

        <p className="mx-auto mt-6 max-w-[620px] text-[18px] leading-[32px] text-[#4b4b48] sm:text-[19px]">
          Read what guests have said across six decades of service – on
          TripAdvisor, SquareMeal, and Google. We read every review, the good
          and the honest.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-[14px] sm:flex-row">
          {reviewLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[53px] w-full items-center justify-center rounded-[2px] border border-[#293e2e] px-7 py-3.5 text-[14px] font-semibold uppercase tracking-[0.2em] text-[#293e2e] hover:bg-[#293e2e] hover:text-[#f5f0e8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#293e2e] sm:w-auto"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
