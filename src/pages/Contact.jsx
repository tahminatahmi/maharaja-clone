import { useState } from 'react'
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="bg-[#211d19] pb-16 pt-36 text-white md:pb-20 md:pt-44">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#c8a46b]">
              Contact & Reservations
            </p>

            <h1 className="max-w-4xl text-5xl font-normal leading-[0.92] sm:text-6xl md:text-7xl lg:text-8xl">
              Plan your
              <span className="block italic text-[#d9c7ab]">
                next visit.
              </span>
            </h1>

            <p className="mt-7 max-w-xl leading-8 text-white/55">
              Reserve a table, ask about private dining or speak to our team
              about your upcoming visit.
            </p>
          </div>
        </section>

        {/* CONTACT + FORM */}
        <section className="bg-[#f4efe7] py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
            {/* CONTACT DETAILS */}
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#9b6f3f]">
                Get in touch
              </p>

              <h2 className="text-4xl font-normal leading-tight text-[#211d19] md:text-5xl">
                We would be delighted
                <span className="block italic text-[#8b6b4b]">
                  to hear from you.
                </span>
              </h2>

              <p className="mt-6 max-w-lg leading-8 text-[#655d55]">
                For reservations, private dining enquiries or general
                questions, send us a message using the form.
              </p>

              <div className="mt-10 space-y-7 border-y border-[#d8cec1] py-8">
                <div className="flex gap-4">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-[#9b6f3f]"
                  />

                  <div>
                    <p className="font-medium text-[#211d19]">
                      Mayfair
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#776d63]">
                      18 Brook Street
                      <br />
                      London W1
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-[#9b6f3f]"
                  />

                  <div>
                    <p className="font-medium text-[#211d19]">
                      Canary Wharf
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#776d63]">
                      7 Harbour Square
                      <br />
                      London E14
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone
                    size={20}
                    className="shrink-0 text-[#9b6f3f]"
                  />

                  <div className="text-sm leading-6 text-[#776d63]">
                    <p>Mayfair: 020 7946 0182</p>
                    <p>Canary Wharf: 020 7946 0214</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail
                    size={20}
                    className="shrink-0 text-[#9b6f3f]"
                  />

                  <p className="text-sm text-[#776d63]">
                    reservations@aurum.example
                  </p>
                </div>

                <div className="flex gap-4">
                  <Clock
                    size={20}
                    className="shrink-0 text-[#9b6f3f]"
                  />

                  <div className="text-sm leading-6 text-[#776d63]">
                    <p>Monday – Thursday: 12:00 – 23:00</p>
                    <p>Friday – Saturday: 12:00 – 00:00</p>
                    <p>Sunday: 12:00 – 22:30</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="bg-white p-6 shadow-sm sm:p-8 md:p-10 lg:p-12">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#9b6f3f]">
                Reservation enquiry
              </p>

              <h2 className="text-3xl font-normal text-[#211d19] md:text-4xl">
                Request a table
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#776d63]">
                Complete the form and our team will get back to you.
              </p>

              {submitted ? (
                <div className="mt-10 border border-[#d8cec1] bg-[#f4efe7] p-8">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#9b6f3f]">
                    Thank you
                  </p>

                  <h3 className="mt-3 text-3xl font-normal text-[#211d19]">
                    Your enquiry has been received.
                  </h3>

                  <p className="mt-4 leading-7 text-[#655d55]">
                    This is a demonstration form for the learning project, so no
                    message has actually been sent.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-7 text-xs font-medium uppercase tracking-[0.16em] text-[#7f6043] hover:text-[#211d19]"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-9 space-y-6"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[#655d55]"
                      >
                        First Name
                      </label>

                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="w-full border border-[#d8cec1] bg-transparent px-4 py-3.5 text-sm text-[#211d19] outline-none transition focus:border-[#9b6f3f]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[#655d55]"
                      >
                        Last Name
                      </label>

                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="w-full border border-[#d8cec1] bg-transparent px-4 py-3.5 text-sm text-[#211d19] outline-none transition focus:border-[#9b6f3f]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[#655d55]"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full border border-[#d8cec1] bg-transparent px-4 py-3.5 text-sm text-[#211d19] outline-none transition focus:border-[#9b6f3f]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[#655d55]"
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full border border-[#d8cec1] bg-transparent px-4 py-3.5 text-sm text-[#211d19] outline-none transition focus:border-[#9b6f3f]"
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="location"
                        className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[#655d55]"
                      >
                        Restaurant
                      </label>

                      <select
                        id="location"
                        name="location"
                        required
                        defaultValue=""
                        className="w-full border border-[#d8cec1] bg-white px-4 py-3.5 text-sm text-[#211d19] outline-none transition focus:border-[#9b6f3f]"
                      >
                        <option value="" disabled>
                          Select location
                        </option>
                        <option value="mayfair">Mayfair</option>
                        <option value="canary-wharf">
                          Canary Wharf
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="guests"
                        className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[#655d55]"
                      >
                        Guests
                      </label>

                      <select
                        id="guests"
                        name="guests"
                        required
                        defaultValue=""
                        className="w-full border border-[#d8cec1] bg-white px-4 py-3.5 text-sm text-[#211d19] outline-none transition focus:border-[#9b6f3f]"
                      >
                        <option value="" disabled>
                          Select guests
                        </option>

                        {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
                          <option key={number} value={number}>
                            {number} {number === 1 ? 'guest' : 'guests'}
                          </option>
                        ))}

                        <option value="9+">9+ guests</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="date"
                        className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[#655d55]"
                      >
                        Preferred Date
                      </label>

                      <input
                        id="date"
                        name="date"
                        type="date"
                        required
                        className="w-full border border-[#d8cec1] bg-transparent px-4 py-3.5 text-sm text-[#211d19] outline-none transition focus:border-[#9b6f3f]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="time"
                        className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[#655d55]"
                      >
                        Preferred Time
                      </label>

                      <input
                        id="time"
                        name="time"
                        type="time"
                        required
                        className="w-full border border-[#d8cec1] bg-transparent px-4 py-3.5 text-sm text-[#211d19] outline-none transition focus:border-[#9b6f3f]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[#655d55]"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Tell us about any dietary requirements, celebrations or special requests."
                      className="w-full resize-none border border-[#d8cec1] bg-transparent px-4 py-3.5 text-sm leading-7 text-[#211d19] outline-none transition placeholder:text-[#a79d93] focus:border-[#9b6f3f]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-3 bg-[#211d19] px-7 py-4 text-xs font-medium uppercase tracking-[0.17em] text-white hover:bg-[#342d27] sm:w-auto"
                  >
                    Send Enquiry

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                  <p className="text-xs leading-6 text-[#9a9087]">
                    Demo form only. No reservation or personal information is
                    actually submitted anywhere.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* LOCATION IMAGE */}
        <section className="relative min-h-[420px] overflow-hidden bg-[#171512] md:min-h-[520px]">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=85"
            alt="Aurum restaurant interior"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/35" />
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Contact