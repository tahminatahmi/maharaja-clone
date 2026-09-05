import { ArrowUpRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const articles = [
  {
    category: 'Kitchen Notes',
    title: 'Why charcoal cooking changes flavour',
    excerpt:
      'Live-fire cooking changes texture, aroma and colour in ways that conventional heat cannot easily reproduce.',
    date: '14 August 2026',
    image:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=85',
  },
  {
    category: 'Ingredients',
    title: 'The role of spice beyond heat',
    excerpt:
      'Spices can bring fragrance, bitterness, sweetness, warmth and depth. Heat is only one part of the story.',
    date: '03 August 2026',
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1400&q=85',
  },
  {
    category: 'Aurum Journal',
    title: 'Designing a modern Indian dining room',
    excerpt:
      'Lighting, sound, furniture and spacing all influence how a restaurant feels long before the first plate arrives.',
    date: '22 July 2026',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85',
  },
  {
    category: 'Kitchen Notes',
    title: 'How slow cooking builds depth',
    excerpt:
      'Time allows sauces, spices and ingredients to develop a richer and more rounded flavour profile.',
    date: '10 July 2026',
    image:
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1400&q=85',
  },
  {
    category: 'Ingredients',
    title: 'Cooking with seasonal produce',
    excerpt:
      'Working with ingredients at their best can shape both the flavour and structure of an entire menu.',
    date: '28 June 2026',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=85',
  },
  {
    category: 'Aurum Journal',
    title: 'What makes hospitality feel personal',
    excerpt:
      'The smallest details often shape the strongest memories, from the welcome at the door to the final goodbye.',
    date: '15 June 2026',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85',
  },
]

function News() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="bg-[#211d19] pb-16 pt-36 text-white md:pb-20 md:pt-44">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#c8a46b]">
              Aurum Journal
            </p>

            <h1 className="max-w-4xl text-5xl font-normal leading-[0.92] sm:text-6xl md:text-7xl lg:text-8xl">
              Stories from the
              <span className="block italic text-[#d9c7ab]">
                kitchen and dining room.
              </span>
            </h1>

            <p className="mt-7 max-w-xl leading-8 text-white/55">
              Notes on food, ingredients, technique, design and the ideas that
              shape the Aurum dining experience.
            </p>
          </div>
        </section>

        {/* FEATURED ARTICLE */}
        <section className="bg-[#f4efe7] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <article className="grid overflow-hidden bg-white lg:grid-cols-2">
              <div className="min-h-[420px] overflow-hidden">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="h-full min-h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 lg:min-h-[600px]"
                />
              </div>

              <div className="flex items-center p-8 md:p-12 lg:p-16">
                <div>
                  <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#9b6f3f]">
                    Featured · {articles[0].category}
                  </p>

                  <h2 className="text-4xl font-normal leading-tight text-[#211d19] md:text-5xl">
                    {articles[0].title}
                  </h2>

                  <p className="mt-6 max-w-lg leading-8 text-[#655d55]">
                    {articles[0].excerpt}
                  </p>

                  <p className="mt-5 text-xs uppercase tracking-[0.16em] text-[#9b9187]">
                    {articles[0].date}
                  </p>

                  <button
                    type="button"
                    className="group mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#7f6043] hover:text-[#211d19]"
                  >
                    Read Article
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ARTICLE GRID */}
        <section className="bg-[#fffaf3] pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mb-12 border-b border-[#d8cec1] pb-8">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#9b6f3f]">
                Latest Stories
              </p>
            </div>

            <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {articles.slice(1).map((article) => (
                <article key={article.title} className="group">
                  <div className="overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#9b6f3f]">
                      {article.category}
                    </p>

                    <time className="text-xs text-[#9b9187]">
                      {article.date}
                    </time>
                  </div>

                  <h2 className="mt-4 text-2xl font-normal leading-snug text-[#211d19]">
                    {article.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#6d645c]">
                    {article.excerpt}
                  </p>

                  <button
                    type="button"
                    className="group/link mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#7f6043] hover:text-[#211d19]"
                  >
                    Read Article

                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="bg-[#211d19] py-20 text-white md:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c8a46b]">
                  Stay in touch
                </p>

                <h2 className="text-4xl font-normal leading-tight md:text-5xl">
                  News from
                  <span className="block italic text-[#d9c7ab]">
                    Aurum.
                  </span>
                </h2>

                <p className="mt-5 max-w-lg leading-7 text-white/50">
                  Receive occasional updates about new menus, events and stories
                  from our restaurants.
                </p>
              </div>

              <form
                onSubmit={(event) => event.preventDefault()}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Your email address"
                  className="min-h-[54px] flex-1 border border-white/20 bg-transparent px-5 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#c8a46b]"
                />

                <button
                  type="submit"
                  className="min-h-[54px] bg-[#f4efe7] px-7 text-xs font-medium uppercase tracking-[0.16em] text-[#211d19] hover:bg-white"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default News
