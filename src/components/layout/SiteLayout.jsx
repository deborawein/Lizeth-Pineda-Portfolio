import { Outlet } from 'react-router-dom'
import { Header } from '@/components/layout/Header'

export function SiteLayout() {
  return (
    <main className="bg-white text-gray-800 min-h-screen">
      <Header />
      <Outlet />
    </main>
  )
}
