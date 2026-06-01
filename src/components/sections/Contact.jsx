import { content } from '@/data/i18n'
import { CONTACT_EMAIL, CONTACT_LOCATION, SITE_NAME } from '@/constants/site'
import { useLanguage } from '@/context/LanguageContext'

export function Contact() {
  const { language } = useLanguage()
  const copy = content[language].contact
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Project Inquiry')}`

  return (
    <section
      id="contact"
      className="screen-section relative bg-cover bg-center px-6 py-16 text-white"
      style={{ backgroundImage: "url('/abstract-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-5xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.5em] text-white/70">{copy.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-semibold">{copy.title}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-white/80">{copy.description}</p>
        </div>

        <div className="mx-auto max-w-xl rounded-[32px] border border-white/70 bg-white/95 p-8 text-center text-gray-900 shadow-2xl">
          <img src="/favicon.svg" alt={`${SITE_NAME} monogram`} className="mx-auto mb-6 h-16 w-16" />
          <p className="text-sm uppercase tracking-[0.4em] text-red-500">{copy.directLine}</p>
          <h3 className="mt-2 text-3xl font-semibold">{SITE_NAME}</h3>
          <p className="mt-2 text-gray-600">{CONTACT_LOCATION}</p>
          <p className="mt-4 leading-relaxed text-gray-600">{copy.body}</p>
          <a
            href={mailto}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-red-400 px-6 py-3 font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-red-500"
          >
            {copy.cta}
          </a>
          <p className="mt-12 text-xs text-gray-700">
            © {new Date().getFullYear()} {SITE_NAME}. {copy.rights}
          </p>
        </div>
      </div>
    </section>
  )
}
