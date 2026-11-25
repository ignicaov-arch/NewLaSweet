import { GIFT_INCLUDES, GIFT_STYLES } from '../data/experienceCatalog';
import { buildWhatsAppUrl, sanitizeUrl } from '../domain/whatsapp';

export function GiftExperienceSection() {
  const giftsHref = sanitizeUrl(
    buildWhatsAppUrl('Olá! Quero conhecer as caixas rosa, cestas e presentes da La Sweet.')
  );

  return (
    <section className="secao" id="presentes">
      <div className="wrap max-w-7xl decoracao">
        <figure className="decoracao__foto revela">
          <img
            src="/img/embalagem-800.webp"
            srcSet="/img/embalagem-800.webp 800w, /img/embalagem.webp 1200w"
            sizes="(max-width: 860px) 92vw, 42vw"
            width={1200}
            height={1600}
            loading="lazy"
            decoding="async"
            alt="Coleção de caixas e embalagens rosa assinatura da La Sweet com fita dourada e logo em coração"
          />
        </figure>

        <div className="decoracao__texto">
          <p className="etiqueta">
            <i aria-hidden="true" />
            Presentes e mimos
          </p>
          <h2 className="titulo-l">
            Da fita dourada ao último brigadeiro, <em>tudo emociona.</em>
          </h2>
          <p>
            Nossas caixas rosa assinatura são pensadas para transformar qualquer dia em celebração.
            Escolha os sabores da vitrine ou monte uma cesta sob medida para aniversários,
            agradecimentos e datas especiais.
          </p>

          <ul className="estilos" aria-label="Formatos de presentes La Sweet">
            {GIFT_STYLES.map((styleName) => (
              <li key={styleName}>{styleName}</li>
            ))}
          </ul>

          <ol className="inclusos">
            {GIFT_INCLUDES.map((inc) => (
              <li key={inc.num}>
                <b>{inc.num}</b>
                <span>
                  <strong>{inc.title}</strong>: {inc.detail}
                </span>
              </li>
            ))}
          </ol>

          <a
            className="botao botao--escuro text-white"
            href={giftsHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fffdf9' }}
          >
            <span>Montar caixa no WhatsApp</span>
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
        </div>
      </div>
    </section>
  );
}

export default GiftExperienceSection;
