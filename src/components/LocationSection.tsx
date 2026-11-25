import { BRAND } from '../data/brand';
import { buildWhatsAppUrl, sanitizeUrl } from '../domain/whatsapp';

export function LocationSection() {
  const whatsappHref = sanitizeUrl(buildWhatsAppUrl());
  const instagramHref = sanitizeUrl(BRAND.instagramUrl);
  const mapsHref = sanitizeUrl(BRAND.googleMapsUrl);

  return (
    <section className="secao secao--curta" id="endereco">
      <div className="wrap max-w-7xl endereco">
        <div className="endereco__dados revela">
          <p className="etiqueta">
            <i aria-hidden="true" />
            Endereço em Divinópolis
          </p>
          <h2 className="titulo-m">
            No coração do Centro, <em>fácil de chegar.</em>
          </h2>

          <dl className="dados">
            <div>
              <dt>Onde</dt>
              <dd>
                <address style={{ fontStyle: 'normal' }}>
                  {BRAND.address.street} · {BRAND.address.neighborhood}
                  <br />
                  {BRAND.address.city} - {BRAND.address.state} · CEP {BRAND.address.postalCode}
                </address>
              </dd>
            </div>
            <div>
              <dt>Horários</dt>
              <dd>
                Segunda a sexta, 12h às 18h30
                <br />
                Sábado, 09h às 18h · Domingo fechado
              </dd>
            </div>
            <div>
              <dt>Contato</dt>
              <dd>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  {BRAND.whatsappDisplay}
                </a>{' '}
                ·{' '}
                <a href={instagramHref} target="_blank" rel="noopener noreferrer">
                  {BRAND.instagramHandle}
                </a>
              </dd>
            </div>
            <div>
              <dt>Acesso</dt>
              <dd>{BRAND.address.accessibility}</dd>
            </div>
          </dl>

          <a className="botao botao--linha" href={mapsHref} target="_blank" rel="noopener noreferrer">
            Abrir rota no Google Maps
          </a>
        </div>

        <div className="mapa revela" aria-hidden="true">
          <svg
            width="600"
            height="420"
            viewBox="0 0 600 420"
            preserveAspectRatio="xMidYMid slice"
          >
            <path className="mapa__rua mapa__rua--larga" d="M-20 290 C 160 250, 290 300, 620 215" />
            <path className="mapa__rua" d="M135 -20 L 210 440" />
            <path className="mapa__rua" d="M365 -20 C 350 135, 405 255, 390 440" />
            <path className="mapa__rua" d="M-20 118 L 620 82" />
            <path className="mapa__rua mapa__rua--fina" d="M-20 194 L 620 162" />
            <path className="mapa__rua mapa__rua--fina" d="M510 -20 L 468 440" />
            <rect className="mapa__praca" x="235" y="114" width="110" height="68" rx="16" />
          </svg>
          <span className="mapa__pino">
            <i />
          </span>
          <span className="mapa__rotulo">{BRAND.name} · Centro</span>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
