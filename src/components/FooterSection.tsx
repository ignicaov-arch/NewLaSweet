import { BRAND } from '../data/brand';
import { buildWhatsAppUrl, sanitizeUrl } from '../domain/whatsapp';

export function FooterSection({ isHome = true }: { isHome?: boolean }) {
  const prefix = isHome ? '' : '/';
  const whatsappHref = sanitizeUrl(buildWhatsAppUrl());
  const instagramHref = sanitizeUrl(BRAND.instagramUrl);

  return (
    <>
      <div className="wrap max-w-7xl rodape__topo">
        <p className="rodape__frase">
          Quer adoçar o dia ou montar um presente? <em>Conte com a gente.</em>
        </p>

        <nav className="rodape__links" aria-label="Navegação do rodapé">
          <a href={`${prefix}#especialidades`}>Especialidades</a>
          <a href={`${prefix}#espaco`}>O salão</a>
          <a href={`${prefix}#cardapio`}>Cardápio</a>
          <a href={`${prefix}#presentes`}>Presentes</a>
          <a href="/linkbio">LinkBio</a>
          <a href="/politica-de-privacidade">Privacidade</a>
          <a href={instagramHref} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <button type="button" id="btn-preferencias-cookies">
            Preferências de Cookies
          </button>
        </nav>
      </div>

      <p className="rodape__marca" aria-hidden="true">
        {BRAND.name}
        <span>.</span>
      </p>

      <div className="wrap max-w-7xl rodape__base">
        <span>
          © 2026 {BRAND.legalBrand} · {BRAND.address.street}, {BRAND.address.neighborhood},{' '}
          {BRAND.address.city} - {BRAND.address.state}.
        </span>
        <span>
          {BRAND.slogan} · <time dateTime={BRAND.updatedIso}>{BRAND.updatedDisplay}</time>
        </span>
      </div>
    </>
  );
}

export default FooterSection;
