import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { HomePage } from '@/pages/HomePage'
import { CategoryPageRoute } from '@/pages/CategoryPageRoute'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:slug" element={<CategoryPageRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
