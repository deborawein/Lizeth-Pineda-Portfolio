import { useNavigate, useParams } from 'react-router-dom'
import { CategoryPage } from '@/components/portfolio/CategoryPage'
import { portfolioItems } from '@/data/portfolio'
import { findPortfolioItem, getAdjacentCategories } from '@/lib/portfolio'

export function CategoryPageRoute() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const item = findPortfolioItem(slug, portfolioItems)
  const { previous: previousCategory, next: nextCategory } = getAdjacentCategories(slug, portfolioItems)

  const goToSection = (section) => {
    navigate({ pathname: '/', hash: section ? `#${section}` : '' })
  }

  return (
    <CategoryPage
      item={item}
      previousCategory={previousCategory}
      nextCategory={nextCategory}
      onNavigateSection={goToSection}
    />
  )
}
