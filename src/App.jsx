import { useCallback, useEffect, useMemo, useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AboutMe } from './components/AboutMe'
import { Portfolio } from './components/Portfolio'
import { Contact } from './components/Contact'
import { CategoryPage } from './components/CategoryPage'

const portfolioItems = [
  {
    slug: 'branding',
    title: 'Branding & Social Media Content',
    summary: 'Logo suites, stationery, and tone-of-voice kits that keep every touchpoint on brand.',
    description:
      'This section presents projects focused on building brand identity and creating visual content for social media. The work includes logo design, colour palettes, and branded graphics designed to maintain a consistent visual style across different platforms. The goal of these designs is to help businesses communicate their message clearly, strengthen their brand image, and connect with their audience through engaging social media content.',
    images: [
      {
        type: 'video',
        src: '/hecho-a-mano-pensado-para-ti.mp4',
        poster: '/mr-logo.png',
        alt: 'Hecho a mano, pensado para ti launch teaser video',
        caption: 'Hecho a mano, pensado para ti — handcrafted teaser reel.'
      },
      {
        type: 'video',
        src: '/nosotros-somos.mp4',
        poster: '/dulcito-logo.png',
        alt: 'Nosotros Somos campaign sizzle reel',
        caption: 'Nosotros Somos — bilingual launch motion cut.'
      }
    ]
  },
  {
    slug: 'advertisements-promotions',
    title: 'Marketing & Visual Communication',
    summary: 'Paid ad suites, promo flyers, and hype kits for launches.',
    description:
      'This section includes visual materials created to support marketing, promotion, and communication. The projects focus on clear and engaging design used in advertisements, promotional materials, brochures, and informational content. These designs aim to communicate ideas effectively while maintaining strong visual appeal and accessibility for different audiences.',
    images: [
      {
        src: '/brown-floral-hair-salon-flyer.png',
        alt: 'Brown floral hair salon flyer concept',
        caption: 'Brown Floral Hair Salon Flyer — tactile promo handout.'
      },
      {
        type: 'slider',
        slides: [
          {
            src: '/1.png',
            alt: 'Buon Appetito card design',
            caption: 'Buon Appetito greeting card for Queen Margaret.'
          },
          {
            src: '/2.png',
            alt: 'Queen Margaret pizza & wine bar cover',
            caption: 'Cover concept for Queen Margaret’s menu.'
          },
          {
            src: '/3.png',
            alt: 'Menu spread featuring vegetarian pizzas',
            caption: 'Menu spread detailing pizzas and specials.'
          },
          {
            src: '/4.png',
            alt: 'Drinks and desserts menu page',
            caption: 'Beverage and dessert list for the campaign.'
          }
        ]
      },
      {
        type: 'video',
        src: '/invitations.mp4',
        alt: 'Animated invitation for event promotion',
        caption: 'Invitation teaser — looping motion graphic invite.'
      },
      {
        type: 'slider',
        aspectRatio: '3 / 4',
        slides: [
          {
            src: '/11.png',
            alt: 'Educational flyer highlighting key tips',
            caption: 'Educational and didactic materials.'
          },
          {
            src: '/12.png',
            alt: 'Didactic poster layout with illustrations',
            caption: 'Educational and didactic materials.'
          },
          {
            src: '/13.png',
            alt: 'Informational card designed for workshops',
            caption: 'Educational and didactic materials.'
          }
        ]
      }
    ]
  },
  {
    slug: 'photography-video',
    title: 'Photography & Video',
    summary: 'Shot lists, color grades, and motion edits for launches and events.',
    description:
      'This section features photography and visual content created for events, personal projects, and promotional purposes. The focus is on capturing meaningful moments and creating visually appealing images that can be used for social media, marketing, or storytelling.',
    images: [
      {
        type: 'video',
        src: '/videosave.mp4',
        alt: 'Highlight reel showcasing event photography and video captures',
        caption: 'Photography and motion edits for event storytelling.'
      },
      {
        type: 'slider',
        aspectRatio: '3 / 4',
        slides: [
          {
            src: '/photos/a.jpg',
            alt: 'Lifestyle capture in natural light',
            caption: 'Set A — lifestyle documentation.'
          },
          {
            src: '/photos/b.jpg',
            alt: 'Studio portrait with soft lighting',
            caption: 'Set B — portrait direction.'
          },
          {
            src: '/photos/c.jpg',
            alt: 'Urban street scene with contrast',
            caption: 'Set C — street photography.'
          },
          {
            src: '/photos/d.jpg',
            alt: 'Editorial-style composition with props',
            caption: 'Set D — editorial set piece.'
          },
          {
            src: '/photos/e.jpg',
            alt: 'Warm film-inspired scene',
            caption: 'Set E — warm tone study.'
          },
          {
            src: '/photos/f.jpg',
            alt: 'Minimal product shot with bold typography',
            caption: 'Set F — product styling.'
          },
          {
            src: '/photos/g.jpg',
            alt: 'Outdoor environmental portrait',
            caption: 'Set G — lifestyle documentation.'
          },
          {
            src: '/photos/h.jpg',
            alt: 'Night scene with neon lights',
            caption: 'Set H — night-time mood exploration.'
          },
          {
            src: '/photos/i.jpg',
            alt: 'Detail shot focusing on texture',
            caption: 'Set I — texture study for brand kit.'
          },
          {
            src: '/photos/j.jpg',
            alt: 'Event crowd moment',
            caption: 'Set J — energy from live events.'
          },
          {
            src: '/photos/k.jpg',
            alt: 'Creative composition with reflections',
            caption: 'Set K — reflective composition.'
          }
        ]
      }
    ]
  },
  {
    slug: 'website-design-ux',
    title: 'Website Design / UX',
    summary: 'Landing pages, wireframes, and micro-interactions tuned for conversion.',
    description:
      'This section showcases website layouts and digital interface designs created to support events, creators, businesses and personal brands online. The focus is on creating clear, visually attractive, and user-friendly designs that improve communication with visitors and strengthen the online presence of a brand.',
    images: [
      {
        type: 'video',
        src: '/website/app-recording.mp4',
        alt: 'App interface recording demonstrating navigation',
        caption: 'App recording — walkthrough of the mobile experience.'
      },
      {
        src: '/website/website.png',
        alt: 'Website layout showcasing hero, feature, and services sections',
        caption: 'Website layout — desktop hero, services, and testimonials.'
      }
    ]
  }
]

function getCategorySlug(pathname) {
  return pathname.startsWith('/category/') ? pathname.replace('/category/', '') : null
}

function scrollToSection(section) {
  if (!section) return
  const element = document.getElementById(section)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function App() {
  const [route, setRoute] = useState(() => window.location.pathname)

  useEffect(() => {
    const onPopState = () => setRoute(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigateToSection = useCallback((section) => {
    const path = section ? `/#${section}` : '/'
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', path)
      setRoute('/')
      requestAnimationFrame(() => scrollToSection(section))
      return
    }

    window.history.pushState({}, '', path)
    scrollToSection(section)
  }, [])

  const navigateToCategory = useCallback((slug) => {
    const targetPath = `/category/${slug}`
    if (window.location.pathname === targetPath) return
    window.history.pushState({}, '', targetPath)
    setRoute(targetPath)
  }, [])

  const categorySlug = getCategorySlug(route)
  const currentCategory = useMemo(
    () => portfolioItems.find((item) => item.slug === categorySlug),
    [categorySlug]
  )

  const currentIndex = useMemo(
    () => portfolioItems.findIndex((item) => item.slug === categorySlug),
    [categorySlug]
  )

  const previousCategory = useMemo(
    () =>
      currentIndex >= 0
        ? portfolioItems[(currentIndex - 1 + portfolioItems.length) % portfolioItems.length]
        : null,
    [currentIndex]
  )

  const nextCategory = useMemo(
    () =>
      currentIndex >= 0
        ? portfolioItems[(currentIndex + 1) % portfolioItems.length]
        : null,
    [currentIndex]
  )

  if (categorySlug) {
    return (
      <main className="bg-white text-gray-800 min-h-screen">
        <Header onNavigateSection={navigateToSection} />
        <CategoryPage
          item={currentCategory}
          previousCategory={previousCategory}
          nextCategory={nextCategory}
          onNavigateSection={navigateToSection}
          onNavigateCategory={navigateToCategory}
        />
      </main>
    )
  }

  return (
    <main className="bg-white text-gray-800 min-h-screen">
      <Header onNavigateSection={navigateToSection} />
      <Hero />
      <AboutMe />
      <Portfolio onCategoryClick={navigateToCategory} portfolioItems={portfolioItems} />
      <Contact />
    </main>
  )
}
