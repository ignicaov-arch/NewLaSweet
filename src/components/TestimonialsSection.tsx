import { BRAND } from '../data/brand';
import {
  GOOGLE_REVIEWS_META,
  GOOGLE_REVIEWS_SEED,
  splitReviewsForDualMarquee,
} from '../data/googleReviewsData';
import { sanitizeUrl } from '../domain/whatsapp';
import { ReviewCardItem } from './ReviewCardItem';

export function TestimonialsSection() {
  const { row1, row2 } = splitReviewsForDualMarquee(
    GOOGLE_REVIEWS_SEED,
    GOOGLE_REVIEWS_META.displayLimit
  );
  const mapsHref = sanitizeUrl(BRAND.googleMapsUrl);

  return (
    <section
      className="secao testimonials-section"
      id="depoimentos"
      data-google-reviews="true"
      data-reviews-layout="dual"
      data-max-reviews="20"
    >
      <div className="wrap max-w-7xl">
        <div className="cabeca cabeca--centro">
          <p className="etiqueta" data-reviews-badge="true">
            <i aria-hidden="true" />
            Avaliações Google · {GOOGLE_REVIEWS_META.rating.toFixed(1)}★ (
            {GOOGLE_REVIEWS_META.userRatingCount} no Google)
          </p>
          <h2 className="titulo-l">
            Quem prova lembra <em>do sabor e do cuidado.</em>
          </h2>
          <p className="cabeca__texto">
            Comentários reais de quem visita o salão da La Sweet no Centro de Divinópolis. Toque
            em qualquer avaliação para ler completa.
          </p>
        </div>
      </div>

      <div className="reviews-static-grid wrap max-w-7xl" data-reviews-static="true" hidden />

      <div className="testimonials-marquee-container">
        <div className="marquee-row marquee-ltr">
          <div className="marquee-track" data-reviews-row="1">
            {row1.map((rev, i) => (
              <ReviewCardItem key={rev.reviewId} review={rev} index={i} />
            ))}
            {row1.map((rev, i) => (
              <ReviewCardItem key={`${rev.reviewId}-clone`} review={rev} index={i} isClone />
            ))}
          </div>
        </div>

        <div className="marquee-row marquee-rtl">
          <div className="marquee-track" data-reviews-row="2">
            {row2.map((rev, i) => (
              <ReviewCardItem key={rev.reviewId} review={rev} index={i + row1.length} />
            ))}
            {row2.map((rev, i) => (
              <ReviewCardItem
                key={`${rev.reviewId}-clone`}
                review={rev}
                index={i + row1.length}
                isClone
              />
            ))}
          </div>
        </div>
      </div>

      <div className="wrap max-w-7xl testimonials-actions">
        <a
          className="botao botao--linha botao--pequeno"
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Ver avaliações no Google Maps</span>
        </a>
      </div>
    </section>
  );
}

export default TestimonialsSection;
