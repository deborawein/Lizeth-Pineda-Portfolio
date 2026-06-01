import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { LanguageProvider } from '@/context/LanguageContext'
import { HomePage } from '@/pages/HomePage'
import { CategoryPageRoute } from '@/pages/CategoryPageRoute'

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:slug" element={<CategoryPageRoute />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  )
}
