export default function About() {
  return (
    <section
      className="bg-[#f4efe7] px-6 py-20 text-center sm:py-24 lg:pt-20 lg:pb-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[900px]">
        {/* Decorative top divider */}
        <div className="mb-12 flex items-center justify-center gap-6 text-[#d5b15f]">
          <span className="h-px w-40 bg-[#d5b15f]/35 sm:w-52" />

          <span className="font-qasira text-[18px] leading-none">
            ❖
          </span>

          <span className="h-px w-40 bg-[#d5b15f]/35 sm:w-52" />
        </div>

        {/* Welcome label */}
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#d5b15f]/60" />

          <p className="text-[12px] font-semibold uppercase tracking-[0.35em] text-[#c9a451]">
            Welcome
          </p>
        </div>

        {/* Heading */}
        <h2
          id="about-heading"
          className="font-qasira text-[42px] font-normal leading-[1] tracking-[-0.02em] text-[#173728] sm:text-[48px] lg:text-[52px]"
        >
          Welcome To Maharaja Of India
        </h2>

        {/* Main copy */}
        <p className="mx-auto mt-8 max-w-[760px] text-[18px] leading-[1.75] text-[#2a2722] sm:text-[19px]">
          Two London restaurants - Charing Cross and Soho - and one
          uncompromising kitchen. From the courts of Delhi to the spice routes
          of Kashmir, our chefs draw on regional traditions passed down through
          generations.
        </p>

        {/* Quote */}
        <div className="mx-auto mt-14 max-w-[700px] border-y border-[#d5b15f]/55 py-10">
          <p className="font-qasira text-[25px] leading-[1.35] tracking-[-0.015em] text-[#173728] sm:text-[29px]">
            ”Authentic Indian cuisine in the heart of London - exquisite
            flavours, timeless traditions.”
          </p>
        </div>
      </div>
    </section>
  );
}