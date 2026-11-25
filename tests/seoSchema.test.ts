import { describe, it, expect } from 'vitest';
import { buildSiteSchemaGraph } from '../src/domain/seoSchema';

describe('Schema.org JSON-LD @graph La Sweet', () => {
  it('gera grafo válido na home com Bakery, WebSite, WebPage, BreadcrumbList e FAQPage', () => {
    const raw = buildSiteSchemaGraph('home');
    const parsed = JSON.parse(raw) as { '@graph': Array<Record<string, unknown>> };
    expect(parsed['@graph'].length).toBe(5);
    const biz = parsed['@graph'].find((n) => Array.isArray(n['@type']));
    expect(biz?.name).toBe('La Sweet');
    expect((biz?.aggregateRating as Record<string, string>)?.ratingValue).toBe('4.6');
    expect(parsed['@graph'].some((n) => n['@type'] === 'FAQPage')).toBe(true);
  });

  it('gera grafo canônico para /linkbio e /politica-de-privacidade sem FAQ duplicado', () => {
    const lb = JSON.parse(buildSiteSchemaGraph('linkbio')) as {
      '@graph': Array<Record<string, unknown>>;
    };
    const priv = JSON.parse(buildSiteSchemaGraph('privacy')) as {
      '@graph': Array<Record<string, unknown>>;
    };
    expect(lb['@graph'].some((n) => n['@type'] === 'FAQPage')).toBe(false);
    expect(lb['@graph'].some((n) => n.url === 'https://newlasweet.pages.dev/linkbio')).toBe(true);
    expect(
      priv['@graph'].some((n) => n.url === 'https://newlasweet.pages.dev/politica-de-privacidade')
    ).toBe(true);
  });
});
