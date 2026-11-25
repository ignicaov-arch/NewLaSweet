import type { ReactNode } from 'react';
import { BRAND } from '../../data/brand';

export function LinkBioHero({ children }: { children?: ReactNode }) {
  return (
    <section className="linkbio-hero">
      <div className="linkbio-emblem">
        <img
          className="linkbio-emblem__img"
          src="/img/logo-lasweet.webp"
          width={112}
          height={112}
          fetchPriority="high"
          alt="Selo oficial La Sweet Confeitaria em Divinópolis"
        />
      </div>

      <div className="linkbio-status" id="status-loja-aovivo">
        <span className="linkbio-status__dot" aria-hidden="true" />
        <span data-status-text>Seg a Sex 12h às 18h30 · Sáb 09h às 18h</span>
      </div>

      {children}

      <p className="linkbio-hero__bio">
        Croissants recheados, bombom de morango, tostas artesanais e caixas rosa cheias de afeto no
        Centro de Divinópolis.
      </p>

      <ul className="linkbio-proofs">
        <li className="linkbio-proofs__item">
          {BRAND.rating.display} estrelas ({BRAND.rating.count} avaliações)
        </li>
        <li className="linkbio-proofs__item">{BRAND.followersDisplay} no Instagram</li>
        <li className="linkbio-proofs__item">Centro · Divinópolis</li>
      </ul>
    </section>
  );
}

export default LinkBioHero;
