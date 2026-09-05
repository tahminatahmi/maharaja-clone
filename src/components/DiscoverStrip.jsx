const stats = [
  {
    value: 'Since 1960',
    label: 'Serving the West End',
  },
  {
    value: '2 Locations',
    label: 'Across Central London',
  },
  {
    value: 'From £25',
    label: 'Pre-Theatre Three Courses',
  },
  {
    value: 'Until 2am',
    label: 'Soho Open Late',
  },
]

export default function DiscoverStrip() {
  return (
    <section className="bg-[#171512] text-white">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item.value}
              className={`px-4 py-8 sm:px-6 md:py-10 lg:px-8 ${
                index !== stats.length - 1
                  ? 'border-b border-white/10 sm:border-b-0 sm:border-r'
                  : ''
              }`}
            >
              <p className="text-2xl font-light md:text-3xl">
                {item.value}
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}