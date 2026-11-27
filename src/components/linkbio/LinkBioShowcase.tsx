import { LINKBIO_SHOWCASE } from '../../data/linkbioData';
import { sanitizeUrl } from '../../domain/whatsapp';

export function LinkBioShowcase() {
  return (
    <section aria-labelledby="vitrine-linkbio-titulo">
      <h2 className="linkbio-sec-title" id="vitrine-linkbio-titulo">
        Vitrine da semana
      </h2>
      <div className="linkbio-vitrine__grid">
        {LINKBIO_SHOWCASE.map((item) => {
          const href = sanitizeUrl(item.href);
          return (
            <a
              key={item.title}
              className="linkbio-vitrine__card text-current revela"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#2b1814' }}
            >
              <img
                className="linkbio-vitrine__img"
                src={item.img}
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
                alt={item.alt}
              />
              <span className="linkbio-vitrine__title">{item.title}</span>
              <span className="linkbio-vitrine__cap">{item.caption}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default LinkBioShowcase;
