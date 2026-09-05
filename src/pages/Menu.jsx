import { Leaf } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookingCTA from '../components/BookingCTA'

const menuSections = [
  {
    title: 'Small Plates',
    description: 'Designed to begin the table and share.',
    dishes: [
      {
        name: 'Charred Cauliflower',
        description: 'Coconut, toasted cumin, coriander and lime.',
        price: '£9',
        vegetarian: true,
      },
      {
        name: 'Tandoori Chicken',
        description: 'Hung yoghurt, Kashmiri chilli, fenugreek and lemon.',
        price: '£12',
      },
      {
        name: 'Spiced Lamb Croquettes',
        description: 'Slow-cooked lamb, green chilli and mint chutney.',
        price: '£11',
      },
      {
        name: 'Crispy Potato Chaat',
        description: 'Tamarind, yoghurt, pomegranate and sev.',
        price: '£9',
        vegetarian: true,
      },
    ],
  },
  {
    title: 'From the Charcoal',
    description: 'Cooked over high heat for smoke, colour and depth.',
    dishes: [
      {
        name: 'Aurum Chicken Tikka',
        description: 'Smoked paprika, yoghurt, ginger and coriander.',
        price: '£18',
      },
      {
        name: 'Tandoori Sea Bass',
        description: 'Ajwain, lemon, green chilli and herb dressing.',
        price: '£24',
      },
      {
        name: 'Charred Paneer',
        description: 'Peppers, tomato, fenugreek and smoked chilli.',
        price: '£17',
        vegetarian: true,
      },
      {
        name: 'Lamb Seekh',
        description: 'Cardamom, green chilli, mint and pickled onion.',
        price: '£19',
      },
    ],
  },
  {
    title: 'Curries & Mains',
    description: 'Slow cooking, layered spices and deeply flavoured sauces.',
    dishes: [
      {
        name: 'Saffron Lamb Curry',
        description: 'Slow-cooked lamb, tomato, saffron and warming spices.',
        price: '£22',
      },
      {
        name: 'Butter Chicken',
        description: 'Charred chicken, tomato, fenugreek and cultured butter.',
        price: '£20',
      },
      {
        name: 'Black Lentil Dal',
        description: 'Slow-cooked lentils, tomato, ginger and cream.',
        price: '£15',
        vegetarian: true,
      },
      {
        name: 'Seasonal Vegetable Curry',
        description: 'Market vegetables, coconut, mustard seed and curry leaf.',
        price: '£17',
        vegetarian: true,
      },
    ],
  },
  {
    title: 'Rice & Sides',
    description: 'Made for the centre of the table.',
    dishes: [
      {
        name: 'Saffron Basmati Rice',
        description: 'Steamed basmati, saffron and aromatic spices.',
        price: '£6',
        vegetarian: true,
      },
      {
        name: 'Garlic Naan',
        description: 'Tandoor-baked bread, garlic and coriander.',
        price: '£5',
        vegetarian: true,
      },
      {
        name: 'Truffle Naan',
        description: 'Tandoor bread, cultured butter and black truffle.',
        price: '£7',
        vegetarian: true,
      },
      {
        name: 'Cucumber Raita',
        description: 'Yoghurt, cucumber, roasted cumin and mint.',
        price: '£5',
        vegetarian: true,
      },
    ],
  },
  {
    title: 'Desserts',
    description: 'A final balance of sweetness, spice and freshness.',
    dishes: [
      {
        name: 'Cardamom Kulfi',
        description: 'Pistachio, cardamom and rose.',
        price: '£9',
        vegetarian: true,
      },
      {
        name: 'Dark Chocolate & Chai',
        description: 'Chocolate crémeux, masala chai and caramel.',
        price: '£11',
        vegetarian: true,
      },
      {
        name: 'Mango & Coconut',
        description: 'Fresh mango, coconut cream and lime.',
        price: '£10',
        vegetarian: true,
      },
    ],
  },
]

function Menu() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-[#171512] text-white">
          <img
            src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1800&q=85"
            alt="Contemporary Indian dishes"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-36 sm:px-6 md:pb-20 lg:px-8">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#d8b37d]">
              The menu
            </p>

            <h1 className="max-w-4xl text-5xl font-normal leading-[0.92] sm:text-6xl md:text-7xl lg:text-8xl">
              Made for sharing,
              <span className="block italic text-[#e4d4bd]">
                remembered for flavour.
              </span>
            </h1>

            <p className="mt-7 max-w-xl leading-8 text-white/65">
              A modern interpretation of Indian cooking, from the charcoal
              grill to slow-cooked curries and seasonal plates.
            </p>
          </div>
        </section>

        {/* MENU */}
        <section className="bg-[#f4efe7] py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
            {menuSections.map((section, sectionIndex) => (
              <div
                key={section.title}
                className={
                  sectionIndex !== menuSections.length - 1
                    ? 'mb-20 border-b border-[#d6cabc] pb-20'
                    : ''
                }
              >
                <div className="mb-10 md:flex md:items-end md:justify-between md:gap-10">
                  <div>
                    <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#9b6f3f]">
                      0{sectionIndex + 1}
                    </p>

                    <h2 className="text-4xl font-normal text-[#211d19] md:text-5xl">
                      {section.title}
                    </h2>
                  </div>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[#776d63] md:mt-0 md:text-right">
                    {section.description}
                  </p>
                </div>

                <div className="grid gap-x-14 gap-y-9 md:grid-cols-2">
                  {section.dishes.map((dish) => (
                    <article
                      key={dish.name}
                      className="border-b border-[#ded5ca] pb-7"
                    >
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-normal text-[#211d19]">
                              {dish.name}
                            </h3>

                            {dish.vegetarian && (
                              <Leaf
                                size={14}
                                className="shrink-0 text-[#71865b]"
                              />
                            )}
                          </div>

                          <p className="mt-2 max-w-sm text-sm leading-6 text-[#776d63]">
                            {dish.description}
                          </p>
                        </div>

                        <span className="shrink-0 text-sm font-medium text-[#8b6b4b]">
                          {dish.price}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-16 border border-[#d6cabc] p-6 md:p-8">
              <p className="text-sm leading-7 text-[#776d63]">
                <strong className="font-medium text-[#211d19]">
                  Dietary information:
                </strong>{' '}
                The leaf symbol identifies vegetarian dishes. Please speak to
                our team about allergies or dietary requirements before
                ordering.
              </p>
            </div>
          </div>
        </section>

        <BookingCTA />
      </main>

      <Footer />
    </>
  )
}

export default Menu