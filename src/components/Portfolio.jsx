function getPortfolioCover(images) {
  const firstNonVideo = images.find((item) => item.type !== 'video')
  if (firstNonVideo) {
    if (firstNonVideo.type === 'slider' && firstNonVideo.slides?.length) {
      return firstNonVideo.slides[0].src
    }
    return firstNonVideo.src
  }

  const firstVideo = images.find((item) => item.type === 'video')
  return firstVideo?.poster || firstVideo?.src || null
}

export function Portfolio({ onCategoryClick, portfolioItems = [] }) {
  return (
    <section id="portfolio" className="py-24 px-6 bg-[#d9cbb6]">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.5em] text-gray-500 text-xs mb-4">Selected Work</p>
        <h2 className="text-4xl font-semibold text-gray-900">Portfolio</h2>
        <p className="text-gray-700 mt-4 max-w-3xl">
          Select any category tile to open a dedicated project page with detailed notes and deliverables.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {portfolioItems.map((item) => {
            const cover = getPortfolioCover(item.images)
            return (
              <a
                key={item.slug}
                href={`/category/${item.slug}`}
                onClick={(event) => {
                  event.preventDefault()
                  onCategoryClick(item.slug)
                }}
                className="relative group h-80 overflow-hidden rounded-[40px] shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-red-300"
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{
                    backgroundImage: cover ? `url('${cover}')` : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: cover ? undefined : '#1f1f1f'
                  }}
                />
                <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/70" />
                <div className="absolute inset-0 flex flex-col justify-end p-10">
                  <span className="text-white text-3xl font-semibold opacity-0 translate-y-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {item.title}
                  </span>
                  <p className="text-white/80 text-sm mt-4 leading-relaxed opacity-0 translate-y-6 transition-all duration-500 delay-75 group-hover:opacity-100 group-hover:translate-y-0">
                    {item.summary}
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
