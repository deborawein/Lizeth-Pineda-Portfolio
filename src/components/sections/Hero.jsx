import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { content } from '@/data/i18n'
import { useLanguage } from '@/context/LanguageContext'
import { scrollToSection } from '@/lib/scroll'

export function Hero() {
  const { language } = useLanguage()
  const copy = content[language].hero
  const navigate = useNavigate()

  const scrollToPortfolio = () => {
    navigate({ pathname: '/', hash: '#portfolio' })
    scrollToSection('portfolio')
  }

  return (
    <section
      id="home"
      className="screen-section-hero"
      style={{ backgroundImage: "url('/abstract-bg.jpg')" }}
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1">
          <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            className="mb-3 font-sans text-sm tracking-wide text-brand-merlot">{copy.greeting}</motion.p>
          <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
               className="font-serif text-5xl leading-tight text-gray-900 sm:text-6xl lg:text-7xl">
            {copy.title}
          </motion.h1>
          <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-brand-merlot sm:text-lg">
            {copy.description}
          </motion.p>

          <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            onClick={scrollToPortfolio}
            className="hero-cta mt-10 inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-medium text-white shadow-lg transition-all hover:shadow-xl"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {copy.cta}
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown size={18} />
            </motion.span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative aspect-[3/4] w-full max-w-xs md:max-w-sm lg:max-w-md">
            <div className="absolute -inset-4 rotate-3 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-sm" />
            <div className="absolute -inset-2 rotate-2 rounded-2xl bg-white shadow-xl" />

            <div className="relative h-full w-full overflow-hidden rounded-xl bg-secondary">
              <img
                src="/assets/profile-dlrarl9m.jpg"
                alt="Lizeth Pineda - Portrait"
                className="h-full w-full object-cover object-top"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
