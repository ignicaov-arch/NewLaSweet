import { describe, it, expect } from 'vitest';
import { BRAND } from '../src/data/brand';
import { MENU_GROUPS, SPECIALTY_CARDS } from '../src/data/catalog';
import {
  AMENITIES,
  COMPARISON_ROWS,
  GIFT_INCLUDES,
  GIFT_STYLES,
  PROCESS_STEPS,
  SPACE_METRICS
} from '../src/data/experienceCatalog';
import { LINKBIO_CARDS, LINKBIO_SHOWCASE } from '../src/data/linkbioData';
import { FAQ_ITEMS, TESTIMONIALS } from '../src/data/socialProof';

describe('Integridade de Catálogo e Higiene Editorial La Sweet', () => {
  it('mantém endereço, WhatsApp e redes reais da La Sweet Divinópolis', () => {
    expect(BRAND.whatsappPrimary).toBe('553791114767');
    expect(BRAND.address.city).toBe('Divinópolis');
    expect(BRAND.address.postalCode).toBe('35500-017');
    expect(BRAND.instagramHandle).toBe('@_lasweet');
  });

  it('mantém zero travessões artificiais e zero emojis banidos nos dados', () => {
    const serialized = JSON.stringify({
      BRAND,
      SPECIALTY_CARDS,
      MENU_GROUPS,
      AMENITIES,
      SPACE_METRICS,
      COMPARISON_ROWS,
      GIFT_STYLES,
      GIFT_INCLUDES,
      PROCESS_STEPS,
      LINKBIO_CARDS,
      LINKBIO_SHOWCASE,
      FAQ_ITEMS,
      TESTIMONIALS
    });
    expect(serialized).not.toContain(' — ');
    expect(serialized).not.toContain(' – ');
    expect(serialized).not.toMatch(/[🚀🔥✨💡🎉👉💪🎯⭐🏆💥🌟]/u);
    expect(LINKBIO_CARDS.length).toBeGreaterThanOrEqual(5);
    expect(LINKBIO_SHOWCASE.length).toBe(4);
    expect(AMENITIES.length).toBeGreaterThanOrEqual(4);
    expect(SPACE_METRICS.length).toBe(4);
    expect(COMPARISON_ROWS.length).toBe(3);
    expect(GIFT_STYLES.length).toBeGreaterThanOrEqual(4);
    expect(GIFT_INCLUDES.length).toBe(3);
    expect(PROCESS_STEPS.length).toBe(4);
  });
});
