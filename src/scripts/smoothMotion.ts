import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

document.documentElement.classList.add('js');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function setupMarqueePauseToggle(): void {
  const marquee = document.getElementById('faixa-marquee');
  const pauseBtn = document.getElementById('btn-pausar-faixa');
  if (!marquee || !pauseBtn) return;

  pauseBtn.addEventListener('click', () => {
    const paused = marquee.classList.toggle('is-pausada');
    pauseBtn.textContent = paused ? 'Retomar' : 'Pausar';
    pauseBtn.setAttribute(
      'aria-label',
      paused ? 'Retomar faixa de especialidades' : 'Pausar faixa de especialidades'
    );
  });
}

function createSweetSprinkles(): void {
  const container = document.getElementById('chuva');
  if (!container || prefersReducedMotion) return;

  const colors = ['#F48C94', '#C89B54', '#FFFDF9', '#FADADD', '#D9A7A0'];
  const count = window.innerWidth < 600 ? 14 : 24;

  for (let i = 0; i < count; i += 1) {
    const dot = document.createElement('i');
    const round = i % 3 === 0;
    const size = round ? 7 + (i % 4) : 6 + (i % 4);
    dot.style.setProperty('--x', `${((i * 4.23 + (i % 3) * 1.9) % 97).toFixed(2)}%`);
    dot.style.setProperty('--w', `${size}px`);
    dot.style.setProperty('--h', `${round ? size : size * 2.1}px`);
    dot.style.setProperty('--r', round ? '999px' : '4px');
    dot.style.setProperty('--c', colors[i % colors.length] ?? '#F48C94');
    dot.style.setProperty('--d', `${(10 + (i % 6) * 1.7).toFixed(2)}s`);
    dot.style.setProperty('--atraso', `${(-1 * (i * 0.85)).toFixed(2)}s`);
    dot.style.setProperty('--deriva', `${(i % 2 === 0 ? 1 : -1) * (18 + (i % 5) * 9)}px`);
    dot.style.setProperty('--giro', `${(i % 2 === 0 ? 1 : -1) * (200 + i * 18)}deg`);
    container.appendChild(dot);
  }
}

function animateCounter(el: HTMLElement): void {
  const target = Number(el.dataset.ate || '0');
  if (!target || prefersReducedMotion) {
    if (target) el.textContent = String(target);
    return;
  }

  const start = performance.now();
  const duration = 1200;

  const tick = (now: number) => {
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = String(Math.round(target * eased));
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

function setupScrollReveals(): void {
  const revealNodes = Array.from(document.querySelectorAll<HTMLElement>('.revela'));
  const counterNodes = Array.from(document.querySelectorAll<HTMLElement>('.conta[data-ate]'));

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealNodes.forEach((node) => node.classList.add('is-visivel'));
    counterNodes.forEach((node) => animateCounter(node));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target as HTMLElement;
        const parent = target.parentElement;
        if (parent) {
          const siblings = Array.from(parent.children).filter((c) => c.classList.contains('revela'));
          const idx = siblings.indexOf(target);
          if (idx > 0) target.style.transitionDelay = `${Math.min(idx * 55, 220)}ms`;
        }
        target.classList.add('is-visivel');
        revealObserver.unobserve(target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -32px 0px' }
  );

  revealNodes.forEach((node) => revealObserver.observe(node));

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target as HTMLElement);
        counterObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.4 }
  );

  counterNodes.forEach((node) => counterObserver.observe(node));
}

function setupLenis144Hz(): void {
  if (prefersReducedMotion) return;

  const lenis = new Lenis({
    lerp: 0.085,
    smoothWheel: true,
    wheelMultiplier: 1.05,
    touchMultiplier: 1.35,
    autoRaf: false,
    prevent: (node: HTMLElement) =>
      Boolean(node.closest('[data-lenis-prevent], dialog, .scrollable-modal'))
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time: number) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  const heroBrand = document.querySelector<HTMLElement>('.hero__marca');
  if (heroBrand) {
    gsap.to(heroBrand, {
      yPercent: -14,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.55
      }
    });
  }

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const hash = anchor.getAttribute('href');
      if (!hash || hash === '#') return;
      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target, {
        offset: -86,
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    });
  });

  let resizeTimer = 0;
  const resizeObserver = new ResizeObserver(() => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 220);
  });
  resizeObserver.observe(document.body);
}

setupMarqueePauseToggle();
createSweetSprinkles();
setupScrollReveals();
setupLenis144Hz();
