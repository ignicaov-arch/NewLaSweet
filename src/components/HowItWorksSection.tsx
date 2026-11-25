import { PROCESS_STEPS } from '../data/experienceCatalog';

export function HowItWorksSection() {
  return (
    <section className="secao secao--papel" id="como-pedir">
      <div className="wrap max-w-7xl">
        <div className="cabeca cabeca--lado">
          <div>
            <p className="etiqueta">
              <i aria-hidden="true" />
              Como pedir
            </p>
            <h2 className="titulo-l">
              Quatro passos simples
              <br />
              até <em>chegar até você.</em>
            </h2>
          </div>
          <p className="cabeca__texto">
            Atendimento próximo e sem burocracia pelo WhatsApp ou direto no balcão da loja no
            Centro.
          </p>
        </div>

        <ol className="passos">
          {PROCESS_STEPS.map((step) => (
            <li key={step.num} className="passo revela">
              <span className="passo__num">{step.num}</span>
              <span className="passo__tempo">{step.badge}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default HowItWorksSection;
