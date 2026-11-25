import { LINKBIO_CARDS, type LinkBioIcon } from '../../data/linkbioData';
import { sanitizeUrl } from '../../domain/whatsapp';

function CardSvgIcon({ kind }: { kind: LinkBioIcon }) {
  if (kind === 'whatsapp') {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path
          d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }
  if (kind === 'gift') {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="8" width="18" height="4" rx="1" vectorEffect="non-scaling-stroke" />
        <path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" vectorEffect="non-scaling-stroke" />
        <path d="M7.5 8a2.5 2.5 0 0 1 0-5C9 3 12 8 12 8s3-5 4.5-5a2.5 2.5 0 0 1 0 5" vectorEffect="non-scaling-stroke" />
      </svg>
    );
  }
  if (kind === 'cake') {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" vectorEffect="non-scaling-stroke" />
        <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" vectorEffect="non-scaling-stroke" />
        <path d="M2 21h20M7 8v3M12 8v3M17 8v3" vectorEffect="non-scaling-stroke" />
      </svg>
    );
  }
  if (kind === 'maps') {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" vectorEffect="non-scaling-stroke" />
        <circle cx="12" cy="10" r="3" vectorEffect="non-scaling-stroke" />
      </svg>
    );
  }
  if (kind === 'instagram') {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" vectorEffect="non-scaling-stroke" />
        <circle cx="12" cy="12" r="4" vectorEffect="non-scaling-stroke" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 6h16M4 12h16M4 18h10" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export function LinkBioCards() {
  return (
    <nav className="linkbio-cards" aria-label="Atalhos oficiais La Sweet">
      {LINKBIO_CARDS.map((card) => {
        const href = sanitizeUrl(card.href);
        const textColor = card.highlight ? '#fffdf9' : '#2b1814';
        return (
          <a
            key={card.id}
            className={`linkbio-card${card.highlight ? ' linkbio-card--highlight text-white' : ' text-current'}`}
            href={href}
            target={card.external ? '_blank' : undefined}
            rel={card.external ? 'noopener noreferrer' : undefined}
            style={{ color: textColor }}
          >
            <span className="linkbio-card__icon" aria-hidden="true">
              <CardSvgIcon kind={card.icon} />
            </span>
            <span className="linkbio-card__body">
              <span className="linkbio-card__head">
                <span className="linkbio-card__title">{card.title}</span>
                {card.badge ? <span className="linkbio-card__badge">{card.badge}</span> : null}
              </span>
              <span className="linkbio-card__sub">{card.subtitle}</span>
            </span>
            <svg
              className="linkbio-card__arrow"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" vectorEffect="non-scaling-stroke" />
            </svg>
          </a>
        );
      })}
    </nav>
  );
}

export default LinkBioCards;
