import { useEffect, useState } from 'react'

function PortfolioSlider({ slides, aspectRatio = '3 / 4' }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <figure className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-white/80">
      <div className="relative w-full overflow-hidden bg-black" style={{ aspectRatio }}>
        {slides.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt ?? ''}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
          />
        ))}
      </div>
      {slides[current]?.caption ? (
        <figcaption className="p-6 text-sm text-gray-600">{slides[current].caption}</figcaption>
      ) : null}
    </figure>
  )
}

function CategoryMedia({ media }) {
  const cardClasses = 'rounded-[32px] overflow-hidden shadow-lg border border-white/80 bg-white'

  if (media.type === 'video') {
    return (
      <figure className={cardClasses}>
        <video
          controls
          poster={media.poster}
          className="w-full h-auto bg-black"
          style={media.aspectRatio ? { aspectRatio: media.aspectRatio } : undefined}
        >
          <source src={media.src} type="video/mp4" />
        </video>
        {media.caption ? (
          <figcaption className="p-6 text-sm text-gray-600">{media.caption}</figcaption>
        ) : null}
      </figure>
    )
  }

  if (media.type === 'slider') {
    return <PortfolioSlider slides={media.slides} aspectRatio={media.aspectRatio} />
  }

  return (
    <figure className={cardClasses}>
      <img
        src={media.src}
        alt={media.alt ?? ''}
        className="w-full h-auto object-contain bg-white"
        loading="lazy"
      />
      {media.caption ? (
        <figcaption className="p-6 text-sm text-gray-600">{media.caption}</figcaption>
      ) : null}
    </figure>
  )
}

export function CategoryPage({ item, previousCategory, nextCategory, onNavigateSection, onNavigateCategory }) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [item?.slug])

  if (!item) {
    return (
      <section className="py-24 px-6 bg-[#f7efe2] min-h-screen">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-red-500">Category not found</p>
          <h1 className="mt-4 text-4xl font-semibold text-gray-900">Oops, page missing</h1>
          <p className="mt-6 text-gray-700 max-w-3xl mx-auto">
            This category does not exist. Use the portfolio menu to return to the gallery.
          </p>
          <button
            onClick={(event) => {
              event.preventDefault()
              onNavigateSection('portfolio')
            }}
            className="mt-8 inline-flex rounded-full bg-red-400 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-red-500 transition"
          >
            Back to Portfolio
          </button>
        </div>
      </section>
    )
  }

  const isWebsiteLayout = item.slug === 'website-design-ux'

  return (
    <section className="py-24 px-6 bg-[#f7efe2] min-h-screen">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="space-y-8">
          <div>
            <p className="uppercase text-xs tracking-[0.4em] text-red-500">Category</p>
            <h1 className="text-4xl font-semibold text-gray-900 mt-3">{item.title}</h1>
            <p className="text-gray-700 leading-relaxed text-lg mt-4">{item.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                onClick={(event) => {
                  event.preventDefault()
                  onNavigateSection('contact')
                }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-red-400 text-white uppercase tracking-[0.2em] text-sm hover:bg-red-500 transition"
              >
                Contact Lizeth
              </button>
            </div>
          </div>
        </div>

        <div className={`grid gap-8 ${
          isWebsiteLayout
            ? 'md:[grid-template-columns:minmax(0,_1fr)_minmax(0,_2fr)]'
            : 'md:grid-cols-2'
        }`}>
          {item.images.map((image, index) => (
            <CategoryMedia key={image.src ?? index} media={image} />
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm uppercase tracking-[0.3em] text-red-700 mb-4">More categories</p>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {previousCategory ? (
              <a
                href={`/category/${previousCategory.slug}`}
                onClick={(event) => {
                  event.preventDefault()
                  onNavigateCategory(previousCategory.slug)
                }}
                className="hover:text-red-900 transition-colors text-lg font-semibold"
              >
                ← Previous: {previousCategory.title}
              </a>
            ) : <span />}
            {nextCategory ? (
              <a
                href={`/category/${nextCategory.slug}`}
                onClick={(event) => {
                  event.preventDefault()
                  onNavigateCategory(nextCategory.slug)
                }}
                className="hover:text-red-900 transition-colors text-lg font-semibold"
              >
                Next: {nextCategory.title} →
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
