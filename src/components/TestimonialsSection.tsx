import { BRAND } from '../data/brand';
import { TESTIMONIALS } from '../data/socialProof';

export function TestimonialsSection() {
  return (
    <section className="secao" id="depoimentos">
      <div className="wrap max-w-7xl">
        <div className="cabeca cabeca--centro">
          <p className="etiqueta">
            <i aria-hidden="true" />
            Nota {BRAND.rating.display} no Google ({BRAND.rating.count} avaliações)
          </p>
          <h2 className="titulo-l">
            Quem prova lembra <em>do sabor e do cuidado.</em>
          </h2>
        </div>

        <div className="depoimentos">
          {TESTIMONIALS.map((item) => (
            <blockquote
              key={item.author}
              className={`depo revela${item.featured ? ' depo--destaque' : ''}`}
            >
              <p>“{item.quote}”</p>
              <footer>
                <b>{item.author}</b>
                <span>{item.meta}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
