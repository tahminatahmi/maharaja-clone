import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const articles = [
  {
    category: 'Kitchen Notes',
    title: 'Why charcoal cooking changes flavour',
    excerpt:
      'A closer look at smoke, heat and why live-fire cooking gives certain dishes their distinctive character.',
    date: '14 August 2026',
    image:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'Ingredients',
    title: 'The role of spice beyond heat',
    excerpt:
      'Spices can add aroma, sweetness, bitterness and depth. Heat is only one part of the story.',
    date: '03 August 2026',
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'Aurum Journal',
    title: 'Designing a modern Indian dining room',
    excerpt:
      'How lighting, materials, spacing and sound can shape a restaurant experience before the first dish arrives.',
    date: '22 July 2026',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
  },
]

function LatestNews() {
  return (
    <section className="bg-[#fffaf3] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#9b6f3f]">
              Latest stories
            </p>

            <h2 className="text-4xl font-normal leading-tight text-[#211d19] md:text-5xl lg:text-6xl">
              From the kitchen,
              <span className="block italic text-[#8b6b4b]">
                dining room and beyond.
              </span>
            </h2>
          </div>

          <Link
            to="/news"
            className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#7f6043] transition hover:text-[#211d19]"
          >
            View all stories
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.title} className="group">
              <div className="mb-6 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[360px]"
                />
              </div>

              <div className="mb-4 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.16em]">
                <span className="text-[#9b6f3f]">
                  {article.category}
                </span>

                <time className="text-[#9b9187]">
                  {article.date}
                </time>
              </div>

              <h3 className="mb-4 text-2xl font-normal leading-snug text-[#211d19]">
                {article.title}
              </h3>

              <p className="mb-6 leading-7 text-[#6d645c]">
                {article.excerpt}
              </p>

              <Link
                to="/news"
                className="group/link inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#7f6043] transition hover:text-[#211d19]"
              >
                Read article
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestNews
