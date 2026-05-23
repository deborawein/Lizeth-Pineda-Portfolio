import { PortfolioSlider } from '@/components/portfolio/PortfolioSlider'

const cardClasses = 'rounded-[32px] overflow-hidden shadow-lg border border-white/80 bg-white'

export function CategoryMedia({ media }) {
  if (media.type === 'video') {
    return (
      <figure className={cardClasses}>
        <video
          controls
          poster={media.poster}
          className="w-full h-auto bg-black"
          style={media.aspectRatio ? { aspectRatio: media.aspectRatio } : undefined}
        >
          <source src={media.src} type="video/mp4" />
        </video>
        {media.caption ? (
          <figcaption className="p-6 text-sm text-gray-600">{media.caption}</figcaption>
        ) : null}
      </figure>
    )
  }

  if (media.type === 'slider') {
    return <PortfolioSlider slides={media.slides} aspectRatio={media.aspectRatio} />
  }

  return (
    <figure className={cardClasses}>
      <img
        src={media.src}
        alt={media.alt ?? ''}
        className="w-full h-auto object-contain bg-white"
        loading="lazy"
      />
      {media.caption ? (
        <figcaption className="p-6 text-sm text-gray-600">{media.caption}</figcaption>
      ) : null}
    </figure>
  )
}
