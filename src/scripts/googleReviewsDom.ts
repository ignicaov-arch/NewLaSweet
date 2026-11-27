import type { GoogleReviewEntry } from '../data/googleReviewsData';

const AVATAR_PALETTE = ['#a63446', '#7a564c', '#5c3d35', '#8c3b4a', '#694e46', '#3c231d'] as const;
const STAR_PATH =
  'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';

export function createEl<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className?: string,
  text?: string
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function createStarSvg(): SVGSVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '14');
  svg.setAttribute('height', '14');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', '#FBBC04');
  svg.setAttribute('aria-hidden', 'true');
  const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  p.setAttribute('d', STAR_PATH);
  svg.appendChild(p);
  return svg;
}

function createDotsSvg(): SVGSVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '16');
  svg.setAttribute('height', '16');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', '#694e46');
  svg.setAttribute('aria-hidden', 'true');
  [5, 12, 19].forEach((cy) => {
    const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttribute('cx', '12');
    c.setAttribute('cy', String(cy));
    c.setAttribute('r', '1.8');
    svg.appendChild(c);
  });
  return svg;
}

function buildAvatarFallback(name: string, index: number): HTMLSpanElement {
  const span = createEl('span', 'gmaps-avatar-fallback', (name || 'L').trim().charAt(0).toUpperCase());
  span.style.backgroundColor = AVATAR_PALETTE[index % AVATAR_PALETTE.length];
  span.setAttribute('aria-hidden', 'true');
  return span;
}

export function buildReviewCardNode(
  rev: GoogleReviewEntry,
  index: number,
  compact: boolean,
  isClone = false
): HTMLElement {
  const card = createEl('article', compact ? 'review-card review-card--compact' : 'review-card');
  card.tabIndex = isClone ? -1 : 0;
  if (isClone) { card.setAttribute('aria-hidden', 'true'); card.dataset.clone = 'true'; }
  card.dataset.author = rev.authorName;
  card.dataset.time = `${rev.relativeTime} · ${rev.guideBadge || 'Avaliação no Google Maps'}`;
  card.dataset.fullText = rev.text;

  const wrap = createEl('div', 'gmaps-author-wrap');
  if (rev.authorPhoto?.includes('lh3.googleusercontent.com')) {
    const img = createEl('img', 'gmaps-avatar');
    img.src = rev.authorPhoto;
    img.alt = `Foto de perfil de ${rev.authorName}`;
    img.width = 36;
    img.height = 36;
    img.loading = 'lazy';
    img.referrerPolicy = 'no-referrer';
    img.addEventListener('error', () => img.replaceWith(buildAvatarFallback(rev.authorName, index)), { once: true });
    wrap.appendChild(img);
  } else wrap.appendChild(buildAvatarFallback(rev.authorName, index));

  const meta = createEl('div', 'gmaps-author-meta');
  meta.append(
    createEl('span', 'gmaps-author-name', rev.authorName),
    createEl('span', 'gmaps-author-sub', rev.guideBadge || 'Avaliação no Google Maps')
  );
  wrap.appendChild(meta);

  const top = createEl('div', 'gmaps-card-top');
  top.append(wrap, createDotsSvg());
  const row = createEl('div', 'gmaps-rating-row');
  const stars = createEl('span', 'gmaps-stars');
  stars.setAttribute('aria-label', '5 estrelas');
  for (let i = 0; i < 5; i += 1) stars.appendChild(createStarSvg());
  row.append(stars, createEl('span', 'gmaps-time', rev.relativeTime));

  card.append(top, row, createEl('p', 'gmaps-text', `“${rev.text}”`));
  return card;
}

export function attachAvatarFallbacks(root: Element): void {
  root.querySelectorAll<HTMLImageElement>('img.gmaps-avatar').forEach((img) => {
    if (img.dataset.fallbackBound === 'true') return;
    img.dataset.fallbackBound = 'true';
    const fallback = () => {
      const span = createEl('span', 'gmaps-avatar-fallback', img.dataset.fallbackInitial || 'L');
      span.style.backgroundColor = img.dataset.fallbackBg || AVATAR_PALETTE[0];
      span.setAttribute('aria-hidden', 'true');
      img.replaceWith(span);
    };
    if (img.complete && img.naturalWidth === 0) fallback();
    else img.addEventListener('error', fallback, { once: true });
  });
}

export function populateTrack(track: HTMLElement, items: readonly GoogleReviewEntry[], compact: boolean): void {
  const nodes: Node[] = items.map((rev, i) => buildReviewCardNode(rev, i, compact, false));
  const clones: Node[] = items.map((rev, i) => buildReviewCardNode(rev, i, compact, true));
  track.replaceChildren(...nodes, ...clones);
}
