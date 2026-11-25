import { MENU_GROUPS } from '../data/catalog';
import { COMPARISON_ROWS } from '../data/experienceCatalog';
import { buildWhatsAppUrl, sanitizeUrl } from '../domain/whatsapp';

export function MenuCatalogSection() {
  const fullMenuHref = sanitizeUrl(
    buildWhatsAppUrl('Olá! Quero receber as opções disponíveis do cardápio da La Sweet hoje.')
  );

  return (
    <section className="secao secao--escura" id="cardapio">
      <div className="wrap max-w-7xl">
        <div className="cabeca cabeca--centro">
          <p className="etiqueta etiqueta--clara">
            <i aria-hidden="true" />
            Cardápio artesanal
          </p>
          <h2 className="titulo-l">
            Feito à mão na nossa cozinha,
            <br />
            <em>servido no ponto certo.</em>
          </h2>
          <p className="cabeca__texto">
            Escolha entre croissants doces e salgados, tostas com queijo Canastra, bombons de
            morango, bebidas cremosas e presentes em caixa rosa.
          </p>
        </div>

        <div className="menus">
          {MENU_GROUPS.map((group) => {
            const href = sanitizeUrl(buildWhatsAppUrl(group.whatsappMsg));
            return (
              <article key={group.num} className="menu-card revela">
                <header>
                  <span className="menu-card__num">{group.num}</span>
                  <h3>{group.title}</h3>
                </header>
                <p className="menu-card__preco">
                  <small>{group.subtitle}</small>
                  {group.priceLabel}
                </p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="menu-card__rodape">
                  <a
                    className="link-seta text-current"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#fadadd' }}
                  >
                    <span>{group.footer}</span>
                    <svg
                      width="16"
                      height="16"
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
                </p>
              </article>
            );
          })}
        </div>

        <div className="pacote revela">
          <div>
            <p className="pacote__rotulo">Pronta-entrega e encomendas</p>
            <p className="pacote__texto">
              Quer conferir o que acabou de sair da vitrine ou reservar <strong>caixas e bolos</strong>{' '}
              para uma data especial? Nossa equipe atende direto no WhatsApp.
            </p>
          </div>
          <a
            className="botao text-current"
            href={fullMenuHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#2b1814' }}
          >
            <span>Ver vitrine do dia</span>
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

        <div className="tabela-wrap revela">
          <table className="tabela-modalidades" aria-label="Comparativo de atendimento La Sweet">
            <thead>
              <tr>
                <th scope="col">Modalidade</th>
                <th scope="col">Ideal para</th>
                <th scope="col">Prazo</th>
                <th scope="col">Como funciona</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.modality}>
                  <td>
                    <strong>{row.modality}</strong>
                  </td>
                  <td>{row.idealFor}</td>
                  <td>{row.timing}</td>
                  <td>{row.howToOrder}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default MenuCatalogSection;
