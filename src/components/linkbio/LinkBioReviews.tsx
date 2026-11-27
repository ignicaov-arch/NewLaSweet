import { BRAND } from '../../data/brand';
import { GOOGLE_REVIEWS_META, GOOGLE_REVIEWS_SEED } from '../../data/googleReviewsData';
import { sanitizeUrl } from '../../domain/whatsapp';
import { ReviewCardItem } from '../ReviewCardItem';

export function LinkBioReviews() {
  const fiveStars = GOOGLE_REVIEWS_SEED.slice(0, GOOGLE_REVIEWS_META.displayLimit);
  const mapsHref = sanitizeUrl(BRAND.googleMapsUrl);

  return (
    <section
      className="linkbio-panel linkbio-reviews revela"
      aria-labelledby="avaliacoes-linkbio-titulo"
      data-google-reviews="true"
      data-reviews-layout="single"
      data-max-reviews="20"
    >
      <div className="linkbio-reviews__head">
        <h2 id="avaliacoes-linkbio-titulo" className="sr-only">
          Avaliações verificadas no Google
        </h2>
        <span className="etiqueta" data-reviews-badge="true">
          <i aria-hidden="true" />
          Avaliações Google · {GOOGLE_REVIEWS_META.rating.toFixed(1)}★ (
          {GOOGLE_REVIEWS_META.userRatingCount} no Google)
        </span>
        <a
          className="linkbio-reviews__hint"
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver no Google Maps
        </a>
      </div>

      <div className="reviews-static-grid" data-reviews-static="true" hidden />

      <div className="testimonials-marquee-container marquee-single">
        <div className="marquee-row marquee-rtl">
          <div className="marquee-track" data-reviews-row="1">
            {fiveStars.map((rev, i) => (
              <ReviewCardItem key={rev.reviewId} review={rev} index={i} compact />
            ))}
            {fiveStars.map((rev, i) => (
              <ReviewCardItem
                key={`${rev.reviewId}-clone`}
                review={rev}
                index={i}
                compact
                isClone
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LinkBioReviews;
