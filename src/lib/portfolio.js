export function getPortfolioCover(images) {
  const firstNonVideo = images.find((item) => item.type !== 'video')
  if (firstNonVideo) {
    if (firstNonVideo.type === 'slider' && firstNonVideo.slides?.length) {
      return firstNonVideo.slides[0].src
    }
    return firstNonVideo.src
  }

  const firstVideo = images.find((item) => item.type === 'video')
  return firstVideo?.poster || firstVideo?.src || null
}

export function findPortfolioItem(slug, items) {
  return items.find((item) => item.slug === slug) ?? null
}

export function getAdjacentCategories(slug, items) {
  const index = items.findIndex((item) => item.slug === slug)
  if (index < 0) {
    return { previous: null, next: null }
  }

  const length = items.length
  return {
    previous: items[(index - 1 + length) % length],
    next: items[(index + 1) % length]
  }
}

export function getMediaKey(media, index) {
  return media.src ?? media.slides?.[0]?.src ?? `media-${index}`
}
