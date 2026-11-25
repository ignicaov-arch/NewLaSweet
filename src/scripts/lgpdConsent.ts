const CONSENT_STORAGE_KEY = 'lgpdConsent';

interface ConsentRecord {
  essential: true;
  analytics: boolean;
  updatedAt: string;
}

function readConsentRecord(): ConsentRecord | null {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentRecord;
  } catch {
    return null;
  }
}

function persistConsent(analytics: boolean): void {
  const payload: ConsentRecord = {
    essential: true,
    analytics,
    updatedAt: new Date().toISOString()
  };
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Fallback silencioso caso o navegador bloqueie storage local.
  }
}

export function initLgpdConsent(): void {
  const banner = document.getElementById('cookie-banner');
  const extras = document.getElementById('cookie-opcoes-extras');
  const switchBtn = document.getElementById('switch-analytics');
  const reopenBtn = document.getElementById('btn-preferencias-cookies');
  if (!banner) return;

  let analyticsEnabled = false;
  const saved = readConsentRecord();
  if (!saved) {
    banner.hidden = false;
  } else {
    analyticsEnabled = Boolean(saved.analytics);
  }

  const syncSwitchUi = () => {
    if (!switchBtn) return;
    switchBtn.setAttribute('aria-checked', analyticsEnabled ? 'true' : 'false');
    switchBtn.textContent = analyticsEnabled ? 'Ativo' : 'Inativo';
  };

  syncSwitchUi();

  switchBtn?.addEventListener('click', () => {
    analyticsEnabled = !analyticsEnabled;
    syncSwitchUi();
  });

  banner.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null;
    const actionBtn = target?.closest<HTMLElement>('[data-consent-action]');
    if (!actionBtn) return;

    const action = actionBtn.dataset.consentAction;
    if (action === 'customize' && extras) {
      const opening = extras.hidden;
      extras.hidden = !opening;
      actionBtn.setAttribute('aria-expanded', opening ? 'true' : 'false');
      return;
    }

    if (action === 'accept') {
      persistConsent(extras && !extras.hidden ? analyticsEnabled : true);
      banner.hidden = true;
      return;
    }

    if (action === 'essential') {
      analyticsEnabled = false;
      syncSwitchUi();
      persistConsent(false);
      banner.hidden = true;
    }
  });

  reopenBtn?.addEventListener('click', () => {
    banner.hidden = false;
  });
}
