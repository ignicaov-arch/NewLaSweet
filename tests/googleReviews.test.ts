import { describe, it, expect } from 'vitest';
import {
  GOOGLE_REVIEWS_META,
  GOOGLE_REVIEWS_SEED,
  splitReviewsForDualMarquee,
} from '../src/data/googleReviewsData';
import {
  selectLatestFiveStarWindow,
  verifyExactBusinessMatch,
  type SyncReviewRecord,
} from '../scripts/sync_google_reviews.mjs';

describe('Avaliações Google 5 Estrelas e Janela Deslizante 50->20 (La Sweet)', () => {
  it('mantém 16 avaliações reais 5 estrelas verificadas sem travessões ou emojis banidos', () => {
    expect(GOOGLE_REVIEWS_META.verified).toBe(true);
    expect(GOOGLE_REVIEWS_META.fetchLimit).toBe(50);
    expect(GOOGLE_REVIEWS_META.displayLimit).toBe(20);
    expect(GOOGLE_REVIEWS_META.rating).toBe(4.6);
    expect(GOOGLE_REVIEWS_META.userRatingCount).toBe(90);
    expect(GOOGLE_REVIEWS_SEED).toHaveLength(16);

    for (const review of GOOGLE_REVIEWS_SEED) {
      expect(review.rating).toBe(5);
      expect(review.text.trim().length).toBeGreaterThan(0);
      expect(review.authorName.trim().length).toBeGreaterThan(2);
    }

    const serialized = JSON.stringify(GOOGLE_REVIEWS_SEED);
    expect(serialized).not.toContain(' — ');
    expect(serialized).not.toContain(' – ');
    expect(serialized).not.toMatch(/[🚀🔥✨💡🎉👉💪🎯⭐🏆💥🌟]/u);
  });

  it('divide as avaliações em duas faixas equilibradas e respeita limite', () => {
    const { row1, row2 } = splitReviewsForDualMarquee(GOOGLE_REVIEWS_SEED, 20);
    expect(row1).toHaveLength(8);
    expect(row2).toHaveLength(8);
    expect(row1[0].authorName).toBe('Ana Carolina Gonçalves');

    const limited = splitReviewsForDualMarquee(GOOGLE_REVIEWS_SEED, 6);
    expect(limited.row1).toHaveLength(3);
    expect(limited.row2).toHaveLength(3);
  });

  it('mantém janela deslizante das últimas 20 avaliações 5★ sem congelar quando entra a 21ª mais nova', () => {
    const existing20 = Array.from({ length: 20 }, (_, i) => ({
      reviewId: `old-${i}`,
      authorName: `Cliente ${i}`,
      rating: 5,
      text: `Avaliação excelente ${i}`,
      publishTime: new Date(Date.UTC(2026, 0, i + 1)).toISOString(),
    }));
    const incoming = [
      {
        reviewId: 'low-rating-ignored',
        authorName: 'Cliente 4 Estrelas',
        rating: 4,
        text: 'Bom, mas sem cinco estrelas.',
        publishTime: '2026-06-01T12:00:00.000Z',
      },
      {
        reviewId: 'newest-5-star',
        authorName: 'Novo Cliente 5★',
        rating: 5,
        text: 'Bombom de morango impecável!',
        publishTime: '2026-06-02T12:00:00.000Z',
      },
    ];

    const { recentPool, fiveStarLatest } = selectLatestFiveStarWindow(incoming, existing20, {
      fetchLimit: 50,
      displayLimit: 20,
    });

    expect(recentPool).toHaveLength(22);
    expect(fiveStarLatest).toHaveLength(20);
    expect(fiveStarLatest[0].reviewId).toBe('newest-5-star');
    expect(fiveStarLatest.some((r: SyncReviewRecord) => r.reviewId === 'old-0')).toBe(false);
    expect(fiveStarLatest.some((r: SyncReviewRecord) => r.reviewId === 'low-rating-ignored')).toBe(false);
  });

  it('exige >= 2 âncoras fortes na trava anti-homônimo', () => {
    const exactMatch = verifyExactBusinessMatch(
      {
        displayName: { text: 'La Sweet Confeitaria' },
        formattedAddress: 'R. Cel. João Notini, 759 - Centro, Divinópolis - MG',
        nationalPhoneNumber: '(37) 99111-4767',
        websiteUri: 'https://newlasweet.pages.dev/',
      },
      {
        nameToken: 'La Sweet',
        city: 'Divinópolis',
        phoneDigits: '5537991114767',
        domain: 'newlasweet.pages.dev',
      }
    );
    expect(exactMatch).toBe(true);

    const homonymMatch = verifyExactBusinessMatch(
      {
        displayName: { text: 'La Sweet' },
        formattedAddress: 'Av. Paulista, 100 - São Paulo - SP',
        nationalPhoneNumber: '(11) 90000-0000',
      },
      {
        nameToken: 'La Sweet',
        city: 'Divinópolis',
        phoneDigits: '5537991114767',
        domain: 'newlasweet.pages.dev',
      }
    );
    expect(homonymMatch).toBe(false);
  });
});
