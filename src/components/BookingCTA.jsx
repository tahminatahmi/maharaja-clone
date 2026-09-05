import { Link } from 'react-router-dom'

export default function BookingCTA() {
  return (
    <section
      aria-labelledby="booking-heading"
      className="border-b border-[#c5a65c]/15 bg-[#192f20] px-6 pt-20 pb-24 text-center lg:pt-[112px] lg:pb-[176px]"
    >
      <div className="mx-auto max-w-[680px]">
        <p className="text-[12px] font-semibold uppercase tracking-[0.38em] text-[#c5a65c]">
          Reserve
        </p>

        <h2
          id="booking-heading"
          className="mt-5 font-qasira text-[40px] font-normal leading-none tracking-[-0.02em] text-[#f5f0e8] sm:text-[52px]"
        >
          Your Table Awaits
        </h2>

        <p className="mx-auto mt-7 max-w-[640px] text-[18px] leading-[32px] text-[#cecfc3] sm:text-[19px]">
          Whether for a quiet supper, a celebration, or pre-theatre dining, we'd be
          delighted to host you.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-[14px] sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex min-h-[53px] w-full items-center justify-center rounded-[2px] bg-[#c5a65c] px-8 py-3.5 text-[14px] font-semibold uppercase tracking-[0.2em] text-[#192f20] hover:bg-[#d4b771] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c5a65c] sm:w-auto"
          >
            Book A Table
          </Link>

          <Link
            to="/contact"
            className="inline-flex min-h-[53px] w-full items-center justify-center rounded-[2px] border border-[#f5f0e8] px-8 py-3.5 text-[14px] font-semibold uppercase tracking-[0.2em] text-[#f5f0e8] hover:bg-[#f5f0e8] hover:text-[#192f20] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5f0e8] sm:w-auto"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
