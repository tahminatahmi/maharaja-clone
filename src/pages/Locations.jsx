import {
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  TrainFront,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const locations = [
  {
    name: 'Mayfair',
    area: 'Central London',
    address: '18 Brook Street, London W1',
    phone: '020 7946 0182',
    transport: '5 minutes from Bond Street',
    description:
      'An intimate dining room in the heart of Mayfair, combining warm materials, soft lighting and a relaxed approach to contemporary Indian dining.',
    hours: [
      'Mon – Thu: 12:00 – 23:00',
      'Fri – Sat: 12:00 – 00:00',
      'Sunday: 12:00 – 22:30',
    ],
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85',
  },
  {
    name: 'Canary Wharf',
    area: 'East London',
    address: '7 Harbour Square, London E14',
    phone: '020 7946 0214',
    transport: '6 minutes from Canary Wharf station',
    description:
      'A contemporary waterside restaurant created for long lunches, evening dinners, celebrations and private gatherings.',
    hours: [
      'Mon – Thu: 12:00 – 23:00',
      'Fri – Sat: 12:00 – 00:00',
      'Sunday: 12:00 – 22:30',
    ],
    image:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=85',
  },
]

function Locations() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="bg-[#211d19] pb-16 pt-36 text-white md:pb-20 md:pt-44">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#c8a46b]">
              Find us
            </p>

            <h1 className="max-w-4xl text-5xl font-normal leading-[0.92] sm:text-6xl md:text-7xl lg:text-8xl">
              Two restaurants,
              <span className="block italic text-[#d9c7ab]">
                one shared philosophy.
              </span>
            </h1>

            <p className="mt-7 max-w-xl leading-8 text-white/55">
              Discover Aurum in two distinctive London neighbourhoods, each
              shaped by the same approach to food and hospitality.
            </p>
          </div>
        </section>

        {/* LOCATIONS */}
        <section className="bg-[#f4efe7] py-20 md:py-28">
          <div className="mx-auto max-w-7xl space-y-20 px-5 sm:px-6 lg:px-8">
            {locations.map((location, index) => (
              <article
                key={location.name}
                className="grid overflow-hidden bg-white lg:grid-cols-2"
              >
                <div
                  className={`min-h-[400px] overflow-hidden ${
                    index % 2 !== 0 ? 'lg:order-2' : ''
                  }`}
                >
                  <img
                    src={location.image}
                    alt={`${location.name} restaurant`}
                    className="h-full min-h-[400px] w-full object-cover transition-transform duration-700 hover:scale-105 lg:min-h-[650px]"
                  />
                </div>

                <div
                  className={`flex items-center p-7 sm:p-10 lg:p-14 ${
                    index % 2 !== 0 ? 'lg:order-1' : ''
                  }`}
                >
                  <div className="w-full">
                    <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#9b6f3f]">
                      {location.area}
                    </p>

                    <h2 className="text-4xl font-normal text-[#211d19] md:text-5xl">
                      {location.name}
                    </h2>

                    <p className="mt-6 max-w-lg leading-8 text-[#6d645c]">
                      {location.description}
                    </p>

                    <div className="mt-9 space-y-5 border-y border-[#ded5ca] py-7">
                      <div className="flex gap-4">
                        <MapPin
                          size={19}
                          className="mt-1 shrink-0 text-[#9b6f3f]"
                        />

                        <p className="text-sm leading-6 text-[#655d55]">
                          {location.address}
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <Phone
                          size={19}
                          className="shrink-0 text-[#9b6f3f]"
                        />

                        <p className="text-sm text-[#655d55]">
                          {location.phone}
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <TrainFront
                          size={19}
                          className="shrink-0 text-[#9b6f3f]"
                        />

                        <p className="text-sm text-[#655d55]">
                          {location.transport}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="mb-4 flex items-center gap-3">
                        <Clock size={18} className="text-[#9b6f3f]" />

                        <h3 className="text-xl font-normal text-[#211d19]">
                          Opening Hours
                        </h3>
                      </div>

                      <div className="space-y-2">
                        {location.hours.map((hours) => (
                          <p
                            key={hours}
                            className="text-sm text-[#776d63]"
                          >
                            {hours}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="mt-9 flex flex-wrap gap-3">
                      <Link
                        to="/contact"
                        className="group inline-flex items-center gap-3 bg-[#211d19] px-6 py-4 text-xs font-medium uppercase tracking-[0.16em] text-white hover:bg-[#342d27]"
                      >
                        Book a Table

                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </Link>

                      <button
                        type="button"
                        disabled
                        aria-label={`Get directions to ${location.name} (demo only)`}
                        title="Directions are unavailable in this demo"
                        className="inline-flex cursor-not-allowed items-center border border-[#cfc3b5] px-6 py-4 text-xs font-medium uppercase tracking-[0.16em] text-[#211d19]/55"
                      >
                        Get Directions · Demo
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PRIVATE DINING PROMO */}
        <section className="bg-[#211d19] py-20 text-white md:py-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#c8a46b]">
                Celebrating something?
              </p>

              <h2 className="text-4xl font-normal md:text-5xl">
                Discover our
                <span className="italic text-[#d9c7ab]">
                  {' '}private dining.
                </span>
              </h2>
            </div>

            <Link
              to="/private-dining"
              className="group inline-flex w-fit items-center gap-3 border border-white/25 px-6 py-4 text-xs font-medium uppercase tracking-[0.16em] hover:bg-white hover:text-[#211d19]"
            >
              Private Dining

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

export default Locations
