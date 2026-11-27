import type { GoogleReviewsPayload } from '../data/googleReviewsData';
import { attachAvatarFallbacks, createEl, populateTrack } from './googleReviewsDom';

function bindReviewLightbox(root: Element): void {
  const modal = document.getElementById('reviewLightbox');
  const modalImg = document.getElementById('reviewLightboxImg') as HTMLImageElement | null;
  const modalRich = document.getElementById('reviewLightboxRich');
  if (!modal || !modalRich) return;

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    window.__lenisInstance?.start();
  };

  const openModal = (card: HTMLElement) => {
    if (modalImg) { modalImg.src = ''; modalImg.hidden = true; }
    const titleEl = createEl('strong', '', card.dataset.author || 'Cliente La Sweet');
    titleEl.id = 'reviewLightboxTitle';
    modalRich.replaceChildren(
      titleEl,
      createEl('small', '', card.dataset.time || 'Avaliação verificada no Google'),
      createEl('p', '', `“${card.dataset.fullText || ''}”`)
    );
    modalRich.hidden = false;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    window.__lenisInstance?.stop();
  };

  if (modal.dataset.bound !== 'true') {
    modal.dataset.bound = 'true';
    document.getElementById('reviewLightboxClose')?.addEventListener('click', closeModal);
    document.getElementById('reviewLightboxBackdrop')?.addEventListener('click', closeModal);
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });
  }

  root.querySelectorAll<HTMLElement>('.review-card').forEach((card) => {
    if (card.dataset.bound === 'true') return;
    card.dataset.bound = 'true';
    let timer: ReturnType<typeof setTimeout> | undefined;
    let startX = 0;
    let startY = 0;
    let held = false;

    card.addEventListener('click', () => { if (held) { held = false; return; } openModal(card); });
    card.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card); }
    });
    card.addEventListener('touchstart', (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      startX = t.clientX;
      startY = t.clientY;
      held = false;
      clearTimeout(timer);
      timer = setTimeout(() => { held = true; openModal(card); }, 450);
    }, { passive: true });
    card.addEventListener('touchmove', (e: TouchEvent) => {
      const t = e.touches[0];
      if (t && (Math.abs(t.clientX - startX) > 10 || Math.abs(t.clientY - startY) > 10)) clearTimeout(timer);
    }, { passive: true });
    card.addEventListener('touchend', () => clearTimeout(timer), { passive: true });
    card.addEventListener('touchcancel', () => clearTimeout(timer), { passive: true });
  });
}

function bindMarqueeRafFallback(root: Element): void {
  root.querySelectorAll<HTMLElement>('.marquee-track').forEach((track) => {
    if (track.dataset.rafBound === 'true') return;
    track.dataset.rafBound = 'true';
    let last = performance.now();
    let offset = 0;
    let paused = false;
    track.addEventListener('mouseenter', () => { paused = true; });
    track.addEventListener('mouseleave', () => { paused = false; });

    setTimeout(() => {
      const st = window.getComputedStyle(track);
      if (st.animationDuration !== '0.01ms' && st.animationName !== 'none') return;
      const isLtr = Boolean(track.closest('.marquee-ltr'));
      const half = track.scrollWidth / 2;
      if (isLtr) offset = -half;
      const step = (now: number) => {
        const dt = Math.min((now - last) / 1000, 0.1);
        last = now;
        if (!paused && half > 0) {
          offset = isLtr ? (offset + 60 * dt >= 0 ? -half : offset + 60 * dt) : (Math.abs(offset - 60 * dt) >= half ? 0 : offset - 60 * dt);
          track.style.transform = `translate3d(${offset.toFixed(1)}px, 0, 0)`;
        }
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, 400);
  });
}

export async function initGoogleReviews(): Promise<void> {
  const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-google-reviews]'));
  if (sections.length === 0) return;
  sections.forEach((section) => { attachAvatarFallbacks(section); bindReviewLightbox(section); bindMarqueeRafFallback(section); });

  let payload: GoogleReviewsPayload | null = null;
  for (const url of ['/api/google-reviews', '/data/google-reviews.json']) {
    try { const res = await fetch(url); if (res.ok) { payload = (await res.json()) as GoogleReviewsPayload; break; } } catch { /* cache fallback */ }
  }
  if (!payload?.verified || !payload.reviews?.length) return;

  sections.forEach((section) => {
    const limit = Number(section.getAttribute('data-max-reviews') || 20);
    const isSingle = section.getAttribute('data-reviews-layout') === 'single';
    const fiveStars = payload.reviews.filter((r) => r.rating === 5 && r.text.trim().length > 0).slice(0, limit);
    if (!fiveStars.length) return;

    const badge = section.querySelector<HTMLElement>('[data-reviews-badge]');
    if (badge && payload.rating && payload.userRatingCount) {
      const dot = createEl('i');
      dot.setAttribute('aria-hidden', 'true');
      badge.replaceChildren(dot, document.createTextNode(`Avaliações Google · ${Number(payload.rating).toFixed(1)}★ (${payload.userRatingCount} no Google)`));
    }

    const row1 = section.querySelector<HTMLElement>('[data-reviews-row="1"]');
    const row2 = section.querySelector<HTMLElement>('[data-reviews-row="2"]');
    const ssrAuthors = Array.from(section.querySelectorAll<HTMLElement>('[data-reviews-row] .review-card:not([data-clone])')).map((c) => c.dataset.author || '');
    const apiAuthors = fiveStars.map((r) => r.authorName);
    if (ssrAuthors.length === apiAuthors.length && ssrAuthors.every((a, i) => a === apiAuthors[i])) return;

    if (isSingle && row1) populateTrack(row1, fiveStars, true);
    else if (row1 && row2) {
      const splitAt = Math.ceil(fiveStars.length / 2);
      populateTrack(row1, fiveStars.slice(0, splitAt), false);
      populateTrack(row2, fiveStars.slice(splitAt), false);
    }
    bindReviewLightbox(section);
  });
}
