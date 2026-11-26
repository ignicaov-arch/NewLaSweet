import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { initAmbientEffects } from './ambientEffects';

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    __lenisInstance?: Lenis;
  }
}

document.documentElement.classList.add('js');

function setupScrollParallax(): void {
  const heroSection = document.querySelector<HTMLElement>('.hero');
  const heroBrand = document.querySelector<HTMLElement>('.hero__marca');
  const heroPhoto = document.querySelector<HTMLElement>('.hero__foto');
  if (heroSection && heroBrand) {
    gsap.to(heroBrand, {
      yPercent: -14,
      ease: 'none',
      scrollTrigger: { trigger: heroSection, start: 'top top', end: 'bottom top', scrub: 0.55 }
    });
  }
  if (heroSection && heroPhoto) {
    gsap.to(heroPhoto, {
      yPercent: 7,
      ease: 'none',
      scrollTrigger: { trigger: heroSection, start: 'top top', end: 'bottom top', scrub: 0.55 }
    });
  }
  const linkbioHero = document.querySelector<HTMLElement>('.linkbio-hero');
  const linkbioEmblem = document.querySelector<HTMLElement>('.linkbio-emblem');
  if (linkbioHero && linkbioEmblem) {
    gsap.to(linkbioEmblem, {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: { trigger: linkbioHero, start: 'top top', end: 'bottom top', scrub: 0.55 }
    });
  }
}

function setupLenis144Hz(): void {
  const lenis = new Lenis({
    lerp: 0.062,
    smoothWheel: true,
    syncTouch: true,
    syncTouchLerp: 0.072,
    touchInertiaExponent: 1.7,
    wheelMultiplier: 1.08,
    touchMultiplier: 1.25,
    overscroll: true,
    allowNestedScroll: true,
    stopInertiaOnNavigate: true,
    autoRaf: false,
    respectReducedMotion: false,
    prevent: (node: HTMLElement) =>
      Boolean(node.closest('[data-lenis-prevent], dialog, .scrollable-modal'))
  });

  window.__lenisInstance = lenis;

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time: number) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  setupScrollParallax();

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const hash = anchor.getAttribute('href');
      if (!hash || hash === '#') return;
      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target, {
        offset: -86,
        duration: 1.22,
        force: true,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    });
  });

  let resizeTimer = 0;
  const resizeObserver = new ResizeObserver(() => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    }, 220);
  });
  resizeObserver.observe(document.body);
}

initAmbientEffects();
setupLenis144Hz();
