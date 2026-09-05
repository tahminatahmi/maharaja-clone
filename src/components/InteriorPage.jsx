import Navbar from './Navbar'

function InteriorPage({ eyebrow, title, description }) {
  return (
    <main className="min-h-screen bg-[#211814] text-white">
      <Navbar />
      <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center px-5 pb-20 pt-36 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d5aa75]">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-serif text-5xl leading-tight text-[#fff8ee] sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
            {description}
          </p>
        </div>
      </section>
    </main>
  )
}

export default InteriorPage
