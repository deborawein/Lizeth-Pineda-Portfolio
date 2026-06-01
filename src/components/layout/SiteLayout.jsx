import { Outlet } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { ScrollToTop } from '@/components/layout/ScrollToTop'

export function SiteLayout() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Header />
      <Outlet />
      <ScrollToTop />
    </main>
  )
}
