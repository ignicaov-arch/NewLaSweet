import { BRAND } from '../data/brand';
import LogoEmblem from './LogoEmblem';

export function HeaderPill() {
  return (
    <div className="topo__pilula">
      <a
        className="marca text-current"
        href="#inicio"
        aria-label={`${BRAND.name}, voltar ao início`}
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        <LogoEmblem size={34} />
        <span>{BRAND.name}</span>
      </a>

      <nav className="menu" id="menu" aria-label="Navegação principal">
        <a href="#especialidades">Especialidades</a>
        <a href="#espaco">O salão</a>
        <a href="#cardapio">Cardápio</a>
        <a href="#presentes">Presentes</a>
        <a href="#duvidas">Dúvidas</a>
        <a href="/linkbio">LinkBio</a>
      </nav>

      <a className="botao botao--pequeno topo__cta" href="#encomendar">
        Fazer pedido
      </a>

      <button
        type="button"
        className="topo__abrir"
        id="abrir"
        aria-label="Abrir menu"
        aria-expanded="false"
        aria-controls="menu"
      >
        <span />
        <span />
      </button>
    </div>
  );
}

export default HeaderPill;
