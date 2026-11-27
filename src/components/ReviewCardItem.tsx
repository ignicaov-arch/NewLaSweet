import type { GoogleReviewEntry } from '../data/googleReviewsData';

const AVATAR_PALETTE = ['#a63446', '#7a564c', '#5c3d35', '#8c3b4a', '#694e46', '#3c231d'] as const;
const STAR_PATH =
  'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';

interface ReviewCardItemProps {
  readonly review: GoogleReviewEntry;
  readonly index: number;
  readonly compact?: boolean;
  readonly isClone?: boolean;
}

export function ReviewCardItem({
  review,
  index,
  compact = false,
  isClone = false,
}: ReviewCardItemProps) {
  const initial = (review.authorName || 'L').trim().charAt(0).toUpperCase();
  const bg = AVATAR_PALETTE[index % AVATAR_PALETTE.length];
  const hasPhoto = Boolean(review.authorPhoto && review.authorPhoto.includes('lh3.googleusercontent.com'));

  return (
    <article
      className={compact ? 'review-card review-card--compact' : 'review-card'}
      tabIndex={isClone ? -1 : 0}
      aria-hidden={isClone ? 'true' : undefined}
      data-clone={isClone ? 'true' : undefined}
      data-author={review.authorName}
      data-time={`${review.relativeTime} · ${review.guideBadge}`}
      data-full-text={review.text}
    >
      <div className="gmaps-card-top">
        <div className="gmaps-author-wrap">
          {hasPhoto ? (
            <img
              className="gmaps-avatar"
              src={review.authorPhoto}
              alt={`Foto de perfil de ${review.authorName}`}
              width={36}
              height={36}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              data-fallback-bg={bg}
              data-fallback-initial={initial}
            />
          ) : (
            <span className="gmaps-avatar-fallback" style={{ backgroundColor: bg }} aria-hidden="true">
              {initial}
            </span>
          )}
          <div className="gmaps-author-meta">
            <span className="gmaps-author-name">{review.authorName}</span>
            <span className="gmaps-author-sub">{review.guideBadge}</span>
          </div>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#694e46" aria-hidden="true">
          <circle cx="12" cy="5" r="1.8" />
          <circle cx="12" cy="12" r="1.8" />
          <circle cx="12" cy="19" r="1.8" />
        </svg>
      </div>

      <div className="gmaps-rating-row">
        <span className="gmaps-stars" aria-label="5 estrelas">
          {[0, 1, 2, 3, 4].map((starIdx) => (
            <svg
              key={starIdx}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="#FBBC04"
              aria-hidden="true"
            >
              <path d={STAR_PATH} />
            </svg>
          ))}
        </span>
        <span className="gmaps-time">{review.relativeTime}</span>
      </div>

      <p className="gmaps-text">“{review.text}”</p>
    </article>
  );
}

export default ReviewCardItem;
