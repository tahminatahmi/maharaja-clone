import { ArrowRight, Users, UtensilsCrossed, Wine } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const experiences = [
  {
    icon: Users,
    title: 'Private Celebrations',
    text: 'A refined setting for birthdays, anniversaries and special gatherings with family and friends.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Business Dining',
    text: 'Private spaces designed for lunches, dinners and professional events that require a little more privacy.',
  },
  {
    icon: Wine,
    title: 'Bespoke Menus',
    text: 'Choose from curated group menus or work with our team to shape a dining experience around your occasion.',
  },
]

function PrivateDining() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-[#171512] text-white">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1800&q=85"
            alt="Private restaurant dining room"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-36 sm:px-6 md:pb-20 lg:px-8 lg:pb-24">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#d8b37d]">
              Private Dining
            </p>

            <h1 className="max-w-4xl text-5xl font-normal leading-[0.92] sm:text-6xl md:text-7xl lg:text-8xl">
              Your occasion,
              <span className="block italic text-[#e4d4bd]">
                made more memorable.
              </span>
            </h1>

            <p className="mt-7 max-w-xl leading-8 text-white/65">
              From intimate celebrations to business dinners, Aurum offers
              private dining experiences shaped around your guests.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-[#f4efe7] py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#9b6f3f]">
                Gather around the table
              </p>

              <h2 className="text-4xl font-normal leading-tight text-[#211d19] md:text-5xl lg:text-6xl">
                A space designed
                <span className="block italic text-[#8b6b4b]">
                  around your event.
                </span>
              </h2>

              <p className="mt-7 leading-8 text-[#655d55]">
                Our private dining spaces offer the atmosphere of Aurum with
                greater privacy and flexibility for your group.
              </p>

              <p className="mt-5 leading-8 text-[#655d55]">
                Whether you are planning a family celebration, client dinner or
                milestone event, our team can help with menus, seating and the
                details that make the evening feel personal.
              </p>

              <Link
                to="/contact"
                className="group mt-9 inline-flex items-center gap-3 bg-[#211d19] px-7 py-4 text-xs font-medium uppercase tracking-[0.16em] text-white hover:bg-[#342d27]"
              >
                Make an Enquiry

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85"
                alt="Elegant dining table"
                className="h-[500px] w-full object-cover md:h-[620px]"
              />
            </div>
          </div>
        </section>

        {/* EXPERIENCES */}
        <section className="bg-[#211d19] py-20 text-white md:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mb-14 max-w-3xl md:mb-20">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#c8a46b]">
                Designed for you
              </p>

              <h2 className="text-4xl font-normal leading-tight md:text-5xl lg:text-6xl">
                Flexible dining,
                <span className="block italic text-[#d9c7ab]">
                  thoughtful hospitality.
                </span>
              </h2>
            </div>

            <div className="grid border-y border-white/10 md:grid-cols-3">
              {experiences.map((experience, index) => {
                const Icon = experience.icon

                return (
                  <article
                    key={experience.title}
                    className={`py-10 md:px-8 md:py-14 lg:px-10 ${
                      index !== experiences.length - 1
                        ? 'border-b border-white/10 md:border-b-0 md:border-r'
                        : ''
                    }`}
                  >
                    <Icon
                      size={25}
                      strokeWidth={1.3}
                      className="mb-8 text-[#c8a46b]"
                    />

                    <h3 className="text-2xl font-normal">
                      {experience.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/55">
                      {experience.text}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* ROOM */}
        <section className="bg-[#f4efe7] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid overflow-hidden bg-white lg:grid-cols-2">
              <div className="min-h-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1500&q=85"
                  alt="Private dining room"
                  className="h-full min-h-[420px] w-full object-cover"
                />
              </div>

              <div className="flex items-center p-8 md:p-12 lg:p-16">
                <div>
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#9b6f3f]">
                    The Private Room
                  </p>

                  <h2 className="text-4xl font-normal leading-tight text-[#211d19] md:text-5xl">
                    Intimate dining for
                    <span className="block italic text-[#8b6b4b]">
                      up to 20 guests.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-lg leading-8 text-[#655d55]">
                    A dedicated dining space with its own atmosphere, ideal for
                    smaller celebrations and private dinners.
                  </p>

                  <div className="mt-8 grid gap-5 border-y border-[#ded5ca] py-7 sm:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#9b6f3f]">
                        Seated
                      </p>
                      <p className="mt-2 text-xl text-[#211d19]">
                        Up to 20 guests
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#9b6f3f]">
                        Location
                      </p>
                      <p className="mt-2 text-xl text-[#211d19]">
                        Mayfair
                      </p>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="group mt-8 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-[#7f6043] hover:text-[#211d19]"
                  >
                    Enquire About This Room

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#171512] py-20 text-center text-white md:py-28">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c8a46b]">
              Plan your event
            </p>

            <h2 className="text-4xl font-normal leading-tight md:text-5xl lg:text-6xl">
              Tell us what
              <span className="block italic text-[#d9c7ab]">
                you have in mind.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-white/55">
              Share your preferred date, group size and occasion and our team
              will help you plan the details.
            </p>

            <Link
              to="/contact"
              className="group mt-9 inline-flex items-center gap-3 bg-[#f4efe7] px-7 py-4 text-xs font-medium uppercase tracking-[0.16em] text-[#211d19] hover:bg-white"
            >
              Private Dining Enquiry

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default PrivateDining