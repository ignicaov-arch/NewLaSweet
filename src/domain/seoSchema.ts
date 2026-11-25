import { BRAND } from '../data/brand';
import { FAQ_ITEMS } from '../data/socialProof';

export type SchemaPageKind = 'home' | 'linkbio' | 'privacy';

/** Gera grafo JSON-LD (@graph) completo para Google Rich Results e motores GEO 2026. */
export function buildSiteSchemaGraph(pageKind: SchemaPageKind): string {
  const canonicalUrl =
    pageKind === 'home'
      ? `${BRAND.siteUrl}/`
      : pageKind === 'linkbio'
        ? `${BRAND.siteUrl}/linkbio`
        : `${BRAND.siteUrl}/politica-de-privacidade`;

  const pageName =
    pageKind === 'home'
      ? 'La Sweet | Confeitaria, Croissants e Presentes em Divinópolis'
      : pageKind === 'linkbio'
        ? 'La Sweet | Links Oficiais, Cardápio e WhatsApp'
        : 'Política de Privacidade e LGPD | La Sweet Divinópolis';

  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Início',
      item: `${BRAND.siteUrl}/`
    }
  ];

  if (pageKind !== 'home') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: pageKind === 'linkbio' ? 'Links Oficiais' : 'Política de Privacidade',
      item: canonicalUrl
    });
  }

  const graph: Record<string, unknown>[] = [
    {
      '@type': ['Bakery', 'CafeOrCoffeeShop', 'LocalBusiness'],
      '@id': `${BRAND.siteUrl}/#business`,
      name: BRAND.name,
      alternateName: BRAND.legalBrand,
      url: `${BRAND.siteUrl}/`,
      logo: `${BRAND.siteUrl}/img/logo-lasweet.webp`,
      image: [
        `${BRAND.siteUrl}/img/hero.webp`,
        `${BRAND.siteUrl}/img/croissants.webp`,
        `${BRAND.siteUrl}/img/doces.webp`
      ],
      description:
        'Confeitaria e cafeteria artesanal no Centro de Divinópolis - MG. Croissants doces e salgados, bombom de morango, tostas de queijo Canastra, chocolate quente e caixas de presente com afeto.',
      telephone: `+${BRAND.whatsappPrimary}`,
      priceRange: '$$',
      servesCuisine: 'Confeitaria e Cafeteria Artesanal',
      address: {
        '@type': 'PostalAddress',
        streetAddress: BRAND.address.street,
        addressLocality: BRAND.address.city,
        addressRegion: BRAND.address.state,
        postalCode: BRAND.address.postalCode,
        addressCountry: BRAND.address.country
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: BRAND.geo.latitude,
        longitude: BRAND.geo.longitude
      },
      hasMap: BRAND.googleMapsUrl,
      sameAs: [BRAND.instagramUrl, BRAND.googleMapsUrl],
      areaServed: [
        { '@type': 'City', name: 'Divinópolis', sameAs: 'https://www.wikidata.org/wiki/Q839481' },
        { '@type': 'Place', name: 'Centro, Divinópolis - MG' }
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: BRAND.rating.value,
        bestRating: BRAND.rating.best,
        worstRating: '1',
        ratingCount: BRAND.rating.count,
        reviewCount: BRAND.rating.count
      },
      openingHoursSpecification: BRAND.schedule.map((rule) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: rule.daysOfWeek,
        opens: rule.opens,
        closes: rule.closes
      })),
      about: [
        { '@type': 'Thing', name: 'Confeitaria', sameAs: 'https://www.wikidata.org/wiki/Q5159627' },
        { '@type': 'Thing', name: 'Croissant', sameAs: 'https://www.wikidata.org/wiki/Q207832' },
        { '@type': 'Thing', name: 'Brigadeiro', sameAs: 'https://www.wikidata.org/wiki/Q915842' }
      ]
    },
    {
      '@type': 'WebSite',
      '@id': `${BRAND.siteUrl}/#website`,
      url: `${BRAND.siteUrl}/`,
      name: BRAND.fullName,
      inLanguage: 'pt-BR',
      publisher: { '@id': `${BRAND.siteUrl}/#business` }
    },
    {
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: pageName,
      inLanguage: 'pt-BR',
      datePublished: BRAND.publishedIso,
      dateModified: BRAND.updatedIso,
      isPartOf: { '@id': `${BRAND.siteUrl}/#website` },
      about: { '@id': `${BRAND.siteUrl}/#business` },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.hero__lead', '.answer-first']
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: breadcrumbItems
    }
  ];

  if (pageKind === 'home') {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${BRAND.siteUrl}/#faq`,
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    });
  }

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(
    /</g,
    '\\u003c'
  );
}
