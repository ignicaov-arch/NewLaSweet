import type { ReactNode } from 'react';
import { BRAND } from '../data/brand';
import { buildWhatsAppUrl, sanitizeUrl } from '../domain/whatsapp';

export function HeroSection({ children }: { children?: ReactNode }) {
  const orderHref = sanitizeUrl(
    buildWhatsAppUrl('Olá! Vim pelo site da La Sweet e quero fazer um pedido hoje.')
  );

  return (
    <section className="hero" id="inicio">
      <div className="hero__moldura">
        <img
          className="hero__foto"
          src="/img/hero.webp"
          srcSet="/img/hero-800.webp 800w, /img/hero.webp 1600w"
          sizes="100vw"
          width={1600}
          height={1066}
          fetchPriority="high"
          alt="Croissant artesanal da La Sweet recheado com creme de avelã e morangos frescos"
        />
        <div className="hero__veu" aria-hidden="true" />
        <div className="chuva" id="chuva" aria-hidden="true" />

        <div className="hero__conteudo">
          <p className="etiqueta etiqueta--clara surge">
            <i aria-hidden="true" />
            {BRAND.slogan} · Centro de Divinópolis
          </p>

          {children}

          <p className="hero__lead answer-first surge">
            A La Sweet une confeitaria artesanal, cafeteria e presentes no Centro de Divinópolis.
            Croissants recheados na hora, bombons de morango, tostas de queijo Canastra e caixas
            rosa com fita dourada para o salão ou retirada.
          </p>

          <div className="hero__acoes surge">
            <a
              className="botao text-current"
              href={orderHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#2b1814' }}
            >
              <span>Pedir no WhatsApp</span>
              <span className="botao__seta" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" vectorEffect="non-scaling-stroke" />
                </svg>
              </span>
            </a>

            <a className="botao botao--vidro" href="#cardapio">
              Ver cardápio
            </a>

            <a className="botao botao--vidro" href="/linkbio">
              Abrir LinkBio
            </a>
          </div>

          <ul className="hero__fatos surge">
            <li>
              <strong>{BRAND.rating.display} estrelas</strong> ({BRAND.rating.count} avaliações)
            </li>
            <li>
              <strong>{BRAND.followersDisplay}</strong> seguidores no {BRAND.instagramHandle}
            </li>
            <li>
              <strong>Seg a Sáb</strong> no Centro
            </li>
          </ul>
        </div>

        <p className="hero__marca" aria-hidden="true">
          {BRAND.name}
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
