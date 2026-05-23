import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { navItems } from '@/constants/navigation'
import { SITE_NAME } from '@/constants/site'
import { scrollToSection } from '@/lib/scroll'

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const goToSection = (event, section) => {
    event.preventDefault()
    setOpen(false)

    if (location.pathname !== '/') {
      navigate({ pathname: '/', hash: `#${section}` })
      return
    }

    navigate({ pathname: '/', hash: `#${section}` })
    scrollToSection(section)
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-brand-cream border-b border-brand-brown shadow-sm">
        <div className="flex items-center justify-between px-8 py-4">
          <Link
            to="/"
            className="flex items-center gap-3 text-xl font-semibold text-red-700 hover:text-red-900 tracking-[0.2em] uppercase"
          >
            <img src="/favicon.svg" alt={`${SITE_NAME} logo`} className="h-10 w-10 object-contain" />
            <span className="text-base sm:text-xl">{SITE_NAME}</span>
          </Link>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((prev) => !prev)}
            className="flex flex-col items-center justify-center gap-0.5 text-xs font-semibold text-red-700 tracking-[0.5em] px-3 border-x-2 border-red-700 leading-4 text-center hover:text-red-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            <span>ME</span>
            <span>NU</span>
          </button>
        </div>
      </header>

      {open && (
        <nav
          id="site-nav"
          className="fixed inset-x-0 top-16 z-40 bg-brand-cream border-t border-brand-brown shadow-xl"
        >
          <ul className="max-h-[calc(100vh-4rem)] overflow-y-auto overflow-x-hidden flex flex-col md:flex-row md:flex-wrap md:justify-center gap-3 md:gap-8 px-8 py-4 text-sm font-semibold tracking-[0.3em] text-red-700 text-center">
            {navItems.map((item) => (
              <li key={item.section}>
                <a
                  href={`/#${item.section}`}
                  onClick={(event) => goToSection(event, item.section)}
                  className="block px-4 py-3 hover:text-red-900 transition-colors uppercase whitespace-nowrap"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}
