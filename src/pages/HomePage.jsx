import { Hero } from '@/components/sections/Hero'
import { AboutMe } from '@/components/sections/AboutMe'
import { Portfolio } from '@/components/sections/Portfolio'
import { Contact } from '@/components/sections/Contact'
import { useScrollToHash } from '@/hooks/useScrollToHash'

export function HomePage() {
  useScrollToHash()

  return (
    <>
      <Hero />
      <AboutMe />
      <Portfolio />
      <Contact />
    </>
  )
}
