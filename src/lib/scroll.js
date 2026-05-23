export function scrollToSection(sectionId) {
  if (!sectionId) return
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
