import { EXTRA_SPECIALTY, SPECIALTY_CARDS } from '../data/catalog';
import { buildWhatsAppUrl, sanitizeUrl } from '../domain/whatsapp';

export function BentoSpecialties() {
  const extraHref = sanitizeUrl(buildWhatsAppUrl(EXTRA_SPECIALTY.whatsappMsg));

  return (
    <section className="secao" id="especialidades">
      <div className="wrap max-w-7xl">
        <div className="cabeca cabeca--lado">
          <div>
            <p className="etiqueta">
              <i aria-hidden="true" />
              Especialidades da casa
            </p>
            <h2 className="titulo-l">
              Uma vitrine, <em>quatro jeitos</em>
              <br />
              de adoçar o dia.
            </h2>
          </div>
          <p className="cabeca__texto">
            Do croissant folhado quentinho às caixas rosa recheadas de trufas. Toque no cartão
            para pedir direto no WhatsApp da loja.
          </p>
        </div>

        <div className="bento">
          {SPECIALTY_CARDS.map((card) => {
            const href = sanitizeUrl(buildWhatsAppUrl(card.whatsappMsg));
            return (
              <a
                key={card.id}
                className={`festa festa--${card.variant} revela text-white`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fffdf9' }}
              >
                <img
                  src={card.img800}
                  srcSet={`${card.img800} 800w, ${card.img} 1600w`}
                  sizes="(max-width: 860px) 92vw, 54vw"
                  width={card.width}
                  height={card.height}
                  loading="lazy"
                  decoding="async"
                  alt={card.alt}
                />
                <span className="festa__tag">{card.tag}</span>
                <div className="festa__base">
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                  <span className="festa__seta" aria-hidden="true">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17 17 7M9 7h8v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </span>
                </div>
              </a>
            );
          })}

          <div className="festa festa--extra revela">
            <p className="festa__extra-num">
              <em>{EXTRA_SPECIALTY.eyebrow}</em>
            </p>
            <h3>{EXTRA_SPECIALTY.title}</h3>
            <p>{EXTRA_SPECIALTY.description}</p>
            <a
              className="link-seta text-current"
              href={extraHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#2b1814' }}
            >
              <span>{EXTRA_SPECIALTY.ctaLabel}</span>
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
                <path d="M5 12h14M13 6l6 6-6 6" vectorEffect="non-scaling-stroke" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BentoSpecialties;
