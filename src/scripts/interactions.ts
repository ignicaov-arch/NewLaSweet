import { getStoreOpenStatus } from '../domain/schedule';
import { buildOrderInquiryMessage, buildWhatsAppUrl } from '../domain/whatsapp';
import { initGoogleReviews } from './googleReviewsSync';
import { initLgpdConsent } from './lgpdConsent';

function setupLiveStatus(): void {
  const pill = document.getElementById('status-loja-aovivo');
  if (!pill) return;
  const dot = pill.querySelector<HTMLElement>('.linkbio-status__dot');
  const textEl = pill.querySelector<HTMLElement>('[data-status-text]');
  const status = getStoreOpenStatus();
  if (dot) dot.classList.toggle('is-fechado', !status.isOpen);
  if (textEl) textEl.textContent = `${status.label} · ${status.detail}`;
}

function setupHeaderAndMenu(): void {
  const header = document.getElementById('topo');
  const toggleBtn = document.getElementById('abrir');
  const menu = document.getElementById('menu');
  if (!header) return;

  const isStaticScrolled = header.dataset.alwaysScrolled === 'true';
  const syncScrollState = () => {
    if (isStaticScrolled) {
      header.classList.add('is-rolou');
      return;
    }
    header.classList.toggle('is-rolou', window.scrollY > window.innerHeight * 0.45);
  };
  syncScrollState();
  window.addEventListener('scroll', syncScrollState, { passive: true });

  const closeMenu = () => {
    header.classList.remove('is-aberto');
    toggleBtn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    window.__lenisInstance?.start();
  };

  toggleBtn?.addEventListener('click', () => {
    const opened = header.classList.toggle('is-aberto');
    toggleBtn.setAttribute('aria-expanded', String(opened));
    document.body.style.overflow = opened ? 'hidden' : '';
    if (opened) window.__lenisInstance?.stop();
    else window.__lenisInstance?.start();
  });

  menu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!header.classList.contains('is-aberto')) return;
    if (!header.contains(event.target as Node)) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && header.classList.contains('is-aberto')) {
      closeMenu();
      toggleBtn?.focus();
    }
  });
}

function setupFaqAccordion(): void {
  const detailsList = Array.from(document.querySelectorAll<HTMLDetailsElement>('.pergunta'));
  detailsList.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      detailsList.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
}

function setupOrderForm(): void {
  const form = document.getElementById('form-visita') as HTMLFormElement | null;
  const statusEl = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const occasion = String(data.get('ocasion') || '').trim();
    const itemChoice = String(data.get('selecao') || '').trim();
    const desiredDate = String(data.get('data') || '').trim();
    const notes = String(data.get('observacoes') || '').trim();

    if (!occasion || !itemChoice) {
      if (statusEl) statusEl.textContent = 'Escolha o motivo e o item principal antes de enviar.';
      return;
    }

    const msg = buildOrderInquiryMessage({ occasion, desiredDate, itemChoice, notes });
    const url = buildWhatsAppUrl(msg);
    if (statusEl) {
      statusEl.textContent = 'Mensagem pronta! Abrindo seu atendimento no WhatsApp da La Sweet.';
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}

setupLiveStatus();
setupHeaderAndMenu();
setupFaqAccordion();
setupOrderForm();
initLgpdConsent();
void initGoogleReviews();
