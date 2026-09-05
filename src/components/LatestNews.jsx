const newsItems = [
  {
    date: "24 June 2026",
    title: "How to Order at an Indian Restaurant: A First-Timer’s Guide",
    excerpt:
      "New to Indian food? A simple, no-pressure guide to building a balanced order - what to get, how much, and how to pace it.",
    image: "src/assets/maharaja/photography/agatanowetastudio-08000.webp",
    href: "/how-to-order-indian-food/",
  },
  {
    date: "23 June 2026",
    title: "A Guide to Pre-Theatre Dining Near Leicester Square",
    excerpt:
      "How to eat well before a West End show: the right timing, what to order, and why a three-course set menu beats a rushed bite.",
    image: "src/assets/maharaja/photography/agatanowetastudio-07939.webp",
    href: "/pre-theatre-dining-leicester-square/",
  },
  {
    date: "22 June 2026",
    title: "Regional Indian Cuisine: A Tour from Punjab to the Coast",
    excerpt:
      "There is no single Indian cuisine. A short tour of the regions behind the menu, from the tandoors of Punjab to the coconut curries of the south.",
    image: "src/assets/maharaja/photography/agatanowetastudio-07928.webp",
    href: "/regional-indian-cuisine-guide/",
  },
];

export default function LatestNews() {
  return (
    <section className="bg-[#f5f0e8] px-6 py-24 lg:py-[110px]">
      <div className="mx-auto max-w-[1360px]">
        <div className="text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.38em] text-[#c9a451]">
            From The Kitchen
          </p>

          <h2 className="mt-5 font-qasira text-[44px] font-normal leading-none tracking-[-0.02em] text-[#173728] sm:text-[50px] lg:text-[54px]">
            Latest News
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[3px] bg-white"
            >
              <a href={item.href} className="block overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[285px] w-full object-cover lg:h-[320px]"
                />
              </a>

              <div className="px-7 py-8 lg:px-8 lg:py-8">
                <p className="text-[12px] font-semibold uppercase tracking-[0.26em] text-[#9b7628]">
                  {item.date}
                </p>

                <h3 className="mt-4 font-qasira text-[25px] font-normal leading-[1.18] text-[#173728] lg:text-[27px]">
                  <a href={item.href}>{item.title}</a>
                </h3>

                <p className="mt-5 text-[17px] leading-[1.7] text-[#46423e]">
                  {item.excerpt}
                </p>

                <a
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-2 border-b border-[#b28a37] pb-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#9b7628]"
                >
                  Read More
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/news"
            className="inline-flex min-h-[56px] items-center justify-center border border-[#173728] px-8 text-[13px] font-semibold uppercase tracking-[0.22em] text-[#173728]"
          >
            All Stories
          </a>
        </div>
      </div>
    </section>
  );
}