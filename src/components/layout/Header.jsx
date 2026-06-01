import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LanguageToggle } from '@/components/layout/LanguageToggle'
import { MobileNavLink, NavLink } from '@/components/layout/NavLink'
import { navItems } from '@/constants/navigation'
import { SITE_NAME } from '@/constants/site'
import { useLanguage } from '@/context/LanguageContext'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrolled } from '@/hooks/useScrolled'
import { scrollToSection } from '@/lib/scroll'
import { cn } from '@/lib/utils'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [clickedSection, setClickedSection] = useState(null)
  const isScrolled = useScrolled(20)
  const scrollActiveSection = useActiveSection()
  const { language } = useLanguage()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const items = navItems[language]
  const isSolid = isScrolled || isMobileMenuOpen
  const activeSection = clickedSection ?? scrollActiveSection

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!clickedSection) return undefined
    const timer = window.setTimeout(() => setClickedSection(null), 1200)
    return () => window.clearTimeout(timer)
  }, [clickedSection])

  const goToSection = (section) => {
    setClickedSection(section)
    setIsMobileMenuOpen(false)

    if (pathname !== '/') {
      navigate({ pathname: '/', hash: `#${section}` })
      return
    }

    navigate({ pathname: '/', hash: `#${section}` })
    scrollToSection(section)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          isSolid ? 'bg-brand-sand/95 py-3 shadow-lg backdrop-blur-md' : 'bg-transparent py-5'
        )}
      >
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 md:px-6">
          <motion.button
            type="button"
            onClick={() => goToSection('home')}
            className="font-sans text-xl text-gray-900 transition-colors hover:text-brand-merlot-65 md:text-2xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {SITE_NAME}
          </motion.button>

          <div className="flex items-center gap-4 md:gap-8">
            <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
              {items.map((item) => (
                <NavLink
                  key={item.section}
                  item={item}
                  activeSection={activeSection}
                  onNavigate={goToSection}
                />
              ))}
            </nav>

            <LanguageToggle />

            <motion.button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="rounded-lg p-2 text-gray-900 transition-colors hover:bg-white/40 lg:hidden"
              whileTap={{ scale: 0.95 }}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-brand-sand/98 pt-24 backdrop-blur-lg lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8 p-8" aria-label="Mobile">
              {items.map((item) => (
                <MobileNavLink
                  key={item.section}
                  item={item}
                  activeSection={activeSection}
                  onNavigate={goToSection}
                />
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
