import { FAQ_ITEMS } from '../data/socialProof';
import { buildWhatsAppUrl, sanitizeUrl } from '../domain/whatsapp';

export function FaqSection() {
  const faqWhatsappHref = sanitizeUrl(
    buildWhatsAppUrl('Olá! Tenho uma dúvida sobre pedidos e horários da La Sweet.')
  );

  return (
    <section className="secao secao--papel" id="duvidas">
      <div className="wrap max-w-7xl faq">
        <div className="faq__cabeca">
          <p className="etiqueta">
            <i aria-hidden="true" />
            Dúvidas frequentes
          </p>
          <h2 className="titulo-l">
            Perguntas que <em>todo mundo</em> faz.
          </h2>
          <p>
            Quer confirmar sabores do dia ou disponibilidade de entrega? Nossa equipe responde pelo
            WhatsApp durante todo o horário de atendimento.
          </p>
          <a
            className="botao botao--escuro text-white"
            href={faqWhatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fffdf9' }}
          >
            <span>Perguntar no WhatsApp</span>
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

        <div className="faq__lista">
          {FAQ_ITEMS.map((item, idx) => (
            <details key={item.question} className="pergunta" open={idx === 0}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
