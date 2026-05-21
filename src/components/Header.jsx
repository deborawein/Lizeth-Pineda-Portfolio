import { useState } from 'react'

const navItems = [
  { label: 'Hello', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' }
]

export function Header({ onNavigateSection }) {
  const [open, setOpen] = useState(false)

  const handleClick = (event, href) => {
    event.preventDefault()
    setOpen(false)
    const section = href.includes('#') ? href.split('#').pop() : href
    onNavigateSection(section)
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#f2e7d5] border-b border-[#a37850] shadow-sm">
        <div className="flex items-center justify-between px-8 py-4">
          <a href="/" className="flex items-center gap-3 text-xl font-semibold text-red-700 hover:text-red-900 tracking-[0.2em] uppercase">
            <img src="/favicon.svg" alt="Lizeth logo" className="h-10 w-10 object-contain" />
            <span className="text-base sm:text-xl">Lizeth Pineda</span>
          </a>

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
          className="fixed inset-x-0 top-16 z-40 bg-[#f2e7d5] border-t border-[#a37850] shadow-xl"
        >
          <ul className="max-h-[calc(100vh-4rem)] overflow-y-auto overflow-x-hidden flex flex-col md:flex-row md:flex-wrap md:justify-center gap-3 md:gap-8 px-8 py-4 text-sm font-semibold tracking-[0.3em] text-red-700 text-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(event) => handleClick(event, item.href)}
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
