export function ReviewLightbox() {
  return (
    <div
      id="reviewLightbox"
      className="review-lightbox"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reviewLightboxTitle"
      aria-hidden="true"
      data-lenis-prevent="true"
    >
      <div id="reviewLightboxBackdrop" className="review-lightbox__backdrop" />
      <div className="review-lightbox__dialog">
        <button
          id="reviewLightboxClose"
          className="review-lightbox__close"
          type="button"
          aria-label="Fechar avaliação"
        >
          <svg
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
            <path d="M18 6 6 18M6 6l12 12" vectorEffect="non-scaling-stroke" />
          </svg>
        </button>
        <img id="reviewLightboxImg" alt="Foto da avaliação" hidden />
        <div id="reviewLightboxRich" className="review-lightbox__rich">
          <strong id="reviewLightboxTitle">Avaliação verificada no Google</strong>
          <small>La Sweet Divinópolis</small>
          <p />
        </div>
      </div>
    </div>
  );
}

export default ReviewLightbox;
