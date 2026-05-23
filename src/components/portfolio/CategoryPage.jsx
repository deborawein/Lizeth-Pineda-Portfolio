import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CategoryMedia } from '@/components/portfolio/CategoryMedia'
import { getMediaKey } from '@/lib/portfolio'

export function CategoryPage({ item, previousCategory, nextCategory, onNavigateSection }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [item?.slug])

  if (!item) {
    return (
      <section className="py-24 px-6 bg-brand-warm min-h-screen">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-red-500">Category not found</p>
          <h1 className="mt-4 text-4xl font-semibold text-gray-900">Oops, page missing</h1>
          <p className="mt-6 text-gray-700 max-w-3xl mx-auto">
            This category does not exist. Use the portfolio menu to return to the gallery.
          </p>
          <button
            type="button"
            onClick={() => onNavigateSection('portfolio')}
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
    <section className="py-24 px-6 bg-brand-warm min-h-screen">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="space-y-8">
          <div>
            <p className="uppercase text-xs tracking-[0.4em] text-red-500">Category</p>
            <h1 className="text-4xl font-semibold text-gray-900 mt-3">{item.title}</h1>
            <p className="text-gray-700 leading-relaxed text-lg mt-4">{item.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => onNavigateSection('contact')}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-red-400 text-white uppercase tracking-[0.2em] text-sm hover:bg-red-500 transition"
              >
                Contact Lizeth
              </button>
            </div>
          </div>
        </div>

        <div
          className={`grid gap-8 ${
            isWebsiteLayout
              ? 'md:[grid-template-columns:minmax(0,_1fr)_minmax(0,_2fr)]'
              : 'md:grid-cols-2'
          }`}
        >
          {item.images.map((image, index) => (
            <CategoryMedia key={getMediaKey(image, index)} media={image} />
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm uppercase tracking-[0.3em] text-red-700 mb-4">More categories</p>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {previousCategory ? (
              <Link
                to={`/category/${previousCategory.slug}`}
                className="hover:text-red-900 transition-colors text-lg font-semibold"
              >
                ← Previous: {previousCategory.title}
              </Link>
            ) : (
              <span />
            )}
            {nextCategory ? (
              <Link
                to={`/category/${nextCategory.slug}`}
                className="hover:text-red-900 transition-colors text-lg font-semibold"
              >
                Next: {nextCategory.title} →
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
