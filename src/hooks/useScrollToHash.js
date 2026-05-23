import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToSection } from '@/lib/scroll'

/** Scrolls to the in-page section when the URL hash changes (e.g. /#portfolio). */
export function useScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (pathname !== '/' || !hash) return
    const sectionId = hash.replace('#', '')
    requestAnimationFrame(() => scrollToSection(sectionId))
  }, [pathname, hash])
}
