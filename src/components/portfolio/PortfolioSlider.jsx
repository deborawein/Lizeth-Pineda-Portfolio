import { useEffect, useState } from 'react'

export function PortfolioSlider({ slides, aspectRatio = '3 / 4' }) {
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
