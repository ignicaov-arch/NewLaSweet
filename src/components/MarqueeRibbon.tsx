import { MARQUEE_ITEMS } from '../data/catalog';

export function MarqueeRibbon() {
  const repeated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="faixa-wrap" id="faixa-marquee">
      <div className="faixa" aria-hidden="true">
        <div className="faixa__trilho">
          {repeated.map((label, idx) => (
            <span key={`${label}-${idx}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '34px' }}>
              <span>{idx % 2 === 1 ? <em>{label}</em> : label}</span>
              <b>+</b>
            </span>
          ))}
        </div>
      </div>
      <button
        type="button"
        id="btn-pausar-faixa"
        className="faixa__pausa"
        aria-label="Pausar faixa de especialidades"
      >
        Pausar
      </button>
    </div>
  );
}

export default MarqueeRibbon;
