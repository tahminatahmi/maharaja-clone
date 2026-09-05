import { ArrowRight, Flame, Leaf, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const values = [
  {
    icon: Flame,
    title: 'Respect for Craft',
    text: 'We combine classic Indian techniques with a modern approach to presentation, balance and flavour.',
  },
  {
    icon: Leaf,
    title: 'Seasonal Ingredients',
    text: 'Our menus are shaped around quality produce, fresh herbs and ingredients chosen for flavour first.',
  },
  {
    icon: Heart,
    title: 'Warm Hospitality',
    text: 'We want every visit to feel considered, relaxed and genuinely welcoming from the moment you arrive.',
  },
]

function About() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-[#171512] text-white">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=85"
            alt="Elegant restaurant dining room"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-36 sm:px-6 md:pb-20 lg:px-8 lg:pb-24">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#d8b37d]">
              About Aurum
            </p>

            <h1 className="max-w-4xl text-5xl font-normal leading-[0.92] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Rooted in tradition,
              <span className="block italic text-[#e4d4bd]">
                made for today.
              </span>
            </h1>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="bg-[#f4efe7] py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#9b6f3f]">
                Our story
              </p>

              <h2 className="text-4xl font-normal leading-tight text-[#211d19] md:text-5xl lg:text-6xl">
                Indian cooking with
                <span className="block italic text-[#8b6b4b]">
                  a contemporary point of view.
                </span>
              </h2>

              <p className="mt-7 leading-8 text-[#655d55]">
                Aurum is a fictional restaurant created for this React learning
                project. Its concept is inspired by the richness and diversity
                of Indian cuisine while taking a clean, modern approach to
                dining.
              </p>

              <p className="mt-5 leading-8 text-[#655d55]">
                The idea is simple: carefully prepared food, confident flavours,
                thoughtful interiors and hospitality that feels personal without
                becoming formal.
              </p>

              <p className="mt-5 leading-8 text-[#655d55]">
                From charcoal cooking and slow-cooked sauces to seasonal
                vegetables and delicate desserts, each part of the menu is
                designed to feel familiar while offering something new.
              </p>
            </div>

            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=85"
                alt="Chef preparing a restaurant dish"
                className="h-[520px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[620px]"
              />
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="bg-[#211d19] py-20 text-white md:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mb-14 max-w-3xl md:mb-20">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#c8a46b]">
                Our philosophy
              </p>

              <h2 className="text-4xl font-normal leading-tight md:text-5xl lg:text-6xl">
                Simple principles,
                <span className="block italic text-[#d9c7ab]">
                  carefully considered.
                </span>
              </h2>
            </div>

            <div className="grid border-y border-white/10 md:grid-cols-3">
              {values.map((value, index) => {
                const Icon = value.icon

                return (
                  <article
                    key={value.title}
                    className={`py-10 md:px-8 md:py-14 lg:px-10 ${
                      index !== values.length - 1
                        ? 'border-b border-white/10 md:border-b-0 md:border-r'
                        : ''
                    }`}
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.3}
                      className="mb-8 text-[#c8a46b]"
                    />

                    <h3 className="text-2xl font-normal">
                      {value.title}
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">
                      {value.text}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* IMAGE STORY */}
        <section className="bg-[#f4efe7] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2">
              <img
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1400&q=85"
                alt="Indian food being prepared"
                className="h-[420px] w-full object-cover md:h-[600px]"
              />

              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1400&q=85"
                alt="Restaurant chef at work"
                className="h-[420px] w-full object-cover md:h-[600px]"
              />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#171512] py-20 text-center text-white md:py-28">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#c8a46b]">
              Experience Aurum
            </p>

            <h2 className="text-4xl font-normal leading-tight md:text-5xl lg:text-6xl">
              Come and discover
              <span className="block italic text-[#d9c7ab]">
                the story for yourself.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-white/55">
              Join us for contemporary Indian cooking, thoughtful hospitality
              and an evening designed around the table.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-[#f4efe7] px-7 py-4 text-xs font-medium uppercase tracking-[0.16em] text-[#211d19] hover:bg-white"
              >
                Book a Table
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/menu"
                className="inline-flex items-center border border-white/25 px-7 py-4 text-xs font-medium uppercase tracking-[0.16em] text-white hover:border-white hover:bg-white hover:text-[#211d19]"
              >
                Explore Menu
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default About
