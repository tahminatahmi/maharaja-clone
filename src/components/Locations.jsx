const locations = [
  {
    name: "Charing Cross",
    address: "19A Charing Cross Road, London WC2H 0ET",
    phone: "020 3091 3500",
    hours: "Monday to Sunday, 12:00 - 00:00",
    directions: "#",
  },
  {
    name: "Soho",
    address: "63 Old Compton Street, London W1D 6HT",
    phone: "07477 107546",
    hours: "Mon-Thu 12:00 - 01:00 · Fri-Sat 12:00 - 02:00 · Sun 12:00 - 00:00",
    directions: "#",
  },
];

export default function Locations() {
  return (
    <section className="bg-[#173728] px-6 py-24 text-white lg:py-28">
      <div className="mx-auto max-w-[1360px]">
        <div className="text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.38em] text-[#d5b15f]">
            Find Us
          </p>

          <h2 className="mt-5 font-qasira text-[42px] font-normal leading-none tracking-[-0.02em] text-[#f5efe7] sm:text-[48px] lg:text-[52px]">
            Two London Locations
          </h2>
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-2">
          {locations.map((location) => (
            <article
              key={location.name}
              className="rounded-[8px] border border-[#c9a451]/45 px-10 py-12 lg:px-12 lg:py-12"
            >
              <h3 className="font-qasira text-[33px] font-normal leading-none text-[#d5b15f]">
                {location.name}
              </h3>

              <div className="mt-8 space-y-2 text-[18px] leading-[1.7] text-white/90">
                <p>{location.address}</p>
                <p>{location.phone}</p>
                <p>{location.hours}</p>
              </div>

              <a
                href={location.directions}
                className="mt-8 inline-flex items-center gap-2 border-b border-[#d5b15f] pb-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#d5b15f]"
              >
                Get Directions
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}