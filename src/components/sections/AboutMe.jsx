import { content } from '@/data/i18n'
import { useLanguage } from '@/context/LanguageContext'

export function AboutMe() {
  const { language } = useLanguage()
  const copy = content[language].about

  return (
    <section
      id="about"
      className="screen-section w-full bg-cover bg-center px-6 py-16"
      style={{ backgroundImage: "url('/abstract-bg.jpg')" }}
    >
      <div className="mx-auto max-w-2xl space-y-6 rounded-[32px] bg-white/85 p-20 shadow-lg backdrop-blur-sm">
        <h2 className="text-3xl font-semibold">{copy.title}</h2>
        {copy.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="leading-relaxed text-gray-800">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
