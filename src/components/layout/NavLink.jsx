import { cn } from '@/lib/utils'

export function NavLink({ item, activeSection, onNavigate }) {
  const isActive = activeSection === item.section

  return (
    <button
      type="button"
      onClick={() => onNavigate(item.section)}
      className={cn('nav-link', isActive && 'nav-link--active')}
    >
      {item.label}
    </button>
  )
}

export function MobileNavLink({ item, activeSection, onNavigate }) {
  const isActive = activeSection === item.section

  return (
    <button
      type="button"
      onClick={() => onNavigate(item.section)}
      className={cn('nav-link nav-link--mobile', isActive && 'nav-link--active')}
    >
      {item.label}
    </button>
  )
}
