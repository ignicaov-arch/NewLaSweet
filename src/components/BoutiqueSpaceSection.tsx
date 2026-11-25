import { AMENITIES, SPACE_METRICS } from '../data/experienceCatalog';

export function BoutiqueSpaceSection() {
  return (
    <section className="secao secao--papel" id="espaco">
      <div className="wrap max-w-7xl espaco">
        <div className="espaco__texto">
          <p className="etiqueta">
            <i aria-hidden="true" />O salão no Centro
          </p>
          <h2 className="titulo-l">
            Salão rosa claro, café quentinho e <em>afeto em cada mesa.</em>
          </h2>
          <p>
            Na Rua Coronel João Notini, 759, criamos um refúgio climatizado em Divinópolis com
            ripado em madeira escura, poltronas confortáveis, arranjos florais e vitrine renovada
            ao longo da tarde.
          </p>
          <ul className="comodidades">
            {AMENITIES.map((item) => (
              <li key={item}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 12.5 9.5 18 20 6" vectorEffect="non-scaling-stroke" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="espaco__foto revela">
          <img
            src="/img/espaco-800.webp"
            srcSet="/img/espaco-800.webp 800w, /img/espaco.webp 1200w"
            sizes="(max-width: 860px) 92vw, 44vw"
            width={1200}
            height={1500}
            loading="lazy"
            decoding="async"
            alt="Salão interno da La Sweet em Divinópolis com parede rosa, painel ripado e mesas para café"
          />
          <figcaption className="espaco__selo">
            <span>Salão Climatizado</span>
            Rua Coronel João Notini, 759 · Centro de Divinópolis
          </figcaption>
        </figure>
      </div>

      <div className="wrap max-w-7xl">
        <ul className="numeros">
          {SPACE_METRICS.map((metric) => (
            <li key={metric.label}>
              <strong>
                <span className="conta" data-ate={metric.value}>
                  {metric.value}
                </span>
                <small>{metric.suffix}</small>
              </strong>
              <span>{metric.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BoutiqueSpaceSection;
