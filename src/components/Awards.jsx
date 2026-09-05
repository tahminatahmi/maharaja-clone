const awards = [
  {
    year: '2026',
    title: 'Dining Award',
    subtitle: 'Contemporary Indian Dining',
  },
  {
    year: '2026',
    title: "Editor’s Pick",
    subtitle: 'Modern Indian Restaurant',
  },
  {
    year: '2025',
    title: 'Guest Choice',
    subtitle: 'Hospitality Recognition',
  },
]

function Awards() {
  return (
    <section className="bg-[#1b1815] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#c8a46b]">
            Recognition
          </p>

          <h2 className="text-4xl font-normal leading-tight md:text-5xl lg:text-6xl">
            Recognised for an
            <span className="block italic text-[#d9c7ab]">
              exceptional dining experience.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-white/50">
            Placeholder recognition created for this learning project. These
            awards are fictional and are not linked to real organisations.
          </p>
        </div>

        <div className="grid border-y border-white/10 md:grid-cols-3">
          {awards.map((award, index) => (
            <article
              key={award.title}
              className={`px-6 py-10 text-center md:px-10 md:py-14 ${
                index !== awards.length - 1
                  ? 'border-b border-white/10 md:border-b-0 md:border-r'
                  : ''
              }`}
            >
              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#c8a46b]">
                {award.year}
              </p>

              <h3 className="text-2xl font-normal md:text-3xl">
                {award.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/45">
                {award.subtitle}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards
