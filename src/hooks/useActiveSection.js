import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { sectionIds } from '@/constants/navigation'

function getActiveSectionFromScroll() {
  const marker = window.innerHeight * 0.45

  for (let index = sectionIds.length - 1; index >= 0; index -= 1) {
    const id = sectionIds[index]
    const element = document.getElementById(id)
    if (!element) continue

    const { top } = element.getBoundingClientRect()
    if (top <= marker) {
      return id
    }
  }

  return sectionIds[0]
}

export function useActiveSection() {
  const { pathname, hash } = useLocation()
  const [activeSection, setActiveSection] = useState(sectionIds[0])

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('')
      return undefined
    }

    const update = () => setActiveSection(getActiveSectionFromScroll())

    update()

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [pathname])

  useEffect(() => {
    if (pathname !== '/') return

    const hashId = hash.replace('#', '')
    if (sectionIds.includes(hashId)) {
      setActiveSection(hashId)
    }
  }, [hash, pathname])

  return pathname === '/' ? activeSection : ''
}
