import { Link } from 'react-router-dom'
import { content } from '@/data/i18n'
import { useLanguage } from '@/context/LanguageContext'
import { portfolioItems } from '@/data/portfolio'
import { getPortfolioCover } from '@/lib/portfolio'

export function Portfolio() {
  const { language } = useLanguage()
  const copy = content[language].portfolio

  return (
    <section id="portfolio" className="screen-section bg-brand-sand px-6 py-16">
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-4 text-xs uppercase tracking-[0.5em] text-gray-500">{copy.eyebrow}</p>
        <h2 className="text-4xl font-semibold text-gray-900">{copy.title}</h2>
        <p className="mt-4 max-w-3xl text-gray-700">{copy.description}</p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {portfolioItems.map((item) => {
            const cover = getPortfolioCover(item.images)
            return (
              <Link
                key={item.slug}
                to={`/category/${item.slug}`}
                className="group relative h-80 overflow-hidden rounded-[40px] shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-red-300"
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
                  <span className="translate-y-6 text-3xl font-semibold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.title}
                  </span>
                  <p className="mt-4 translate-y-6 text-sm leading-relaxed text-white/80 opacity-0 transition-all delay-75 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.summary}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
