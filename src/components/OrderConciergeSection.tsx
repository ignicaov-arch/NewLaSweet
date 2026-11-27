export function OrderConciergeSection() {
  return (
    <section className="secao secao--curta" id="encomendar">
      <div className="wrap max-w-7xl">
        <div className="agendar revela">
          <div className="agendar__texto">
            <p className="etiqueta etiqueta--escura">
              <i aria-hidden="true" />
              Seg a Sex 12h às 18h30 · Sáb 09h às 18h
            </p>
            <h2 className="agendar__titulo">
              Peça o seu <em>com afeto.</em>
            </h2>
            <p>
              Escolha o motivo e os seus favoritos. A mensagem já vai organizada para o WhatsApp da
              La Sweet confirmar disponibilidade e horário.
            </p>
          </div>

          <form className="agendar__form" id="form-visita" noValidate>
            <label className="campo" htmlFor="campo-ocasiao">
              <span>Motivo do pedido</span>
              <select
                id="campo-ocasiao"
                name="ocasion"
                className="ui-select text-base pr-10"
                defaultValue="Café ou brunch hoje"
              >
                <option value="Café ou brunch hoje">Café ou brunch hoje</option>
                <option value="Caixa de presente">Caixa de presente</option>
                <option value="Bolo ou festa">Bolo ou celebração</option>
                <option value="Cesta especial">Cesta especial</option>
                <option value="Pedido corporativo">Pedido corporativo</option>
              </select>
            </label>

            <label className="campo" htmlFor="campo-selecao">
              <span>O que não pode faltar</span>
              <select
                id="campo-selecao"
                name="selecao"
                className="ui-select text-base pr-10"
                defaultValue="Croissant de Nutella com morango"
              >
                <option value="Croissant de Nutella com morango">
                  Croissant de Nutella com morango
                </option>
                <option value="Croissants salgados e tostas">Croissants salgados e tostas</option>
                <option value="Bombom de morango e doces finos">
                  Bombom de morango e doces finos
                </option>
                <option value="Caixa rosa com corações trufados">
                  Caixa rosa com corações trufados
                </option>
                <option value="Bolo artesanal sob encomenda">Bolo artesanal sob encomenda</option>
              </select>
            </label>

            <label className="campo" htmlFor="campo-data">
              <span>Para quando você deseja</span>
              <input
                id="campo-data"
                type="text"
                name="data"
                className="text-base"
                placeholder="ex.: hoje às 16h ou sábado"
                autoComplete="off"
              />
            </label>

            <label className="campo" htmlFor="campo-obs">
              <span>Sabores ou recado no cartão (opcional)</span>
              <input
                id="campo-obs"
                type="text"
                name="observacoes"
                className="text-base"
                placeholder="ex.: embalagem rosa com fita dourada"
                autoComplete="off"
              />
            </label>

            <button className="botao botao--escuro botao--largo" type="submit">
              <span>Enviar pelo WhatsApp</span>
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
            </button>

            <p id="form-status" className="agendar__status" role="status" aria-live="polite" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default OrderConciergeSection;
