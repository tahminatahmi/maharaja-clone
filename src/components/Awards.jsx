export default function Awards() {
  return (
    <section className="bg-[#f5f0e8] px-6 pt-20 pb-16 text-center lg:pt-[88px] lg:pb-[72px]">
      <div className="mx-auto max-w-[760px]">
        {/* Label */}
        <p className="text-[12px] font-semibold uppercase tracking-[0.38em] text-[#c9a451]">
          Recognised By
        </p>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-[620px] text-[18px] leading-[1.75] text-[#35322f] sm:text-[19px]">
          Featured by London's leading restaurant guides and trusted by
          <br className="hidden sm:block" />
          diners across six decades of service.
        </p>

        {/* Recognition cards */}
        <div className="mx-auto mt-10 flex max-w-[490px] flex-col justify-center gap-6 sm:flex-row">
          {/* SquareMeal */}
          <div className="flex h-[120px] flex-1 flex-col items-center justify-center rounded-[8px] border border-[#d5b15f]/45 bg-white">
            <p className="font-qasira text-[25px] leading-none text-[#173728]">
              SquareMeal
            </p>

            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a47d2d]">
              Restaurant Guide
            </p>
          </div>

          {/* TripAdvisor */}
          <div className="flex h-[120px] flex-1 flex-col items-center justify-center rounded-[8px] border border-[#d5b15f]/45 bg-white">
            <p className="font-qasira text-[25px] leading-none text-[#173728]">
              TripAdvisor
            </p>

            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a47d2d]">
              Diner Reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}