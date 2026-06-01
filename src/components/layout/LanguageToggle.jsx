import { useLanguage } from '@/context/LanguageContext'
import { cn } from '@/lib/utils'

export function LanguageToggle({ compact = false }) {
  const { language, setLanguage } = useLanguage()
  const isEnglish = language === 'en'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={!isEnglish}
      aria-label={isEnglish ? 'Switch to Spanish' : 'Switch to English'}
      onClick={() => setLanguage(isEnglish ? 'es' : 'en')}
      className={cn('lang-toggle', compact && 'lang-toggle--compact')}
    >
      <span
        aria-hidden="true"
        className={cn('lang-toggle__thumb', !isEnglish && 'lang-toggle__thumb--es')}
      />
      <span className={cn('lang-toggle__label', isEnglish && 'lang-toggle__label--active')}>
        EN
      </span>
      <span className={cn('lang-toggle__label', !isEnglish && 'lang-toggle__label--active')}>
        ES
      </span>
    </button>
  )
}
