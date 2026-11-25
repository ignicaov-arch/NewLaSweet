export function CookieConsent() {
  return (
    <aside
      id="cookie-banner"
      data-lenis-prevent
      role="region"
      aria-label="Preferências de privacidade e LGPD"
      hidden
      style={{
        position: 'fixed',
        left: '16px',
        bottom: '16px',
        zIndex: 55,
        width: 'min(440px, calc(100vw - 104px))',
        padding: '20px',
        borderRadius: '24px',
        background: 'var(--papel, #fffdf9)',
        color: 'var(--texto, #2b1814)',
        border: '1px solid var(--linha, rgba(43, 24, 20, 0.16))',
        boxShadow: '0 18px 44px -16px rgba(43, 24, 20, 0.34)'
      }}
    >
      <p style={{ margin: '0 0 12px', fontSize: '14px', lineHeight: 1.5 }}>
        Utilizamos registros locais essenciais para guardar suas preferências de navegação, conforme
        a LGPD. Veja nossa{' '}
        <a href="/politica-de-privacidade" style={{ fontWeight: 600, textDecoration: 'underline' }}>
          Política de Privacidade
        </a>
        .
      </p>

      <div id="cookie-opcoes-extras" hidden style={{ marginBottom: '12px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            padding: '10px 12px',
            borderRadius: '14px',
            border: '1px solid var(--linha, rgba(43, 24, 20, 0.14))'
          }}
        >
          <span id="label-switch-analytics" style={{ fontSize: '13.5px', fontWeight: 500 }}>
            Métricas anônimas de visitação (opcional)
          </span>
          <button
            type="button"
            role="switch"
            id="switch-analytics"
            aria-checked="false"
            aria-labelledby="label-switch-analytics"
            style={{
              minHeight: '44px',
              minWidth: '64px',
              padding: '6px 12px',
              borderRadius: '999px',
              border: '1px solid var(--tinta, #2b1814)',
              background: 'transparent',
              color: 'var(--texto, #2b1814)',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Inativo
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        <button
          type="button"
          data-consent-action="accept"
          className="botao botao--escuro botao--pequeno"
        >
          Aceitar
        </button>
        <button
          type="button"
          data-consent-action="essential"
          className="botao botao--linha botao--pequeno"
        >
          Apenas essenciais
        </button>
        <button
          type="button"
          data-consent-action="customize"
          aria-expanded="false"
          aria-controls="cookie-opcoes-extras"
          className="botao botao--pequeno"
          style={{ background: 'transparent', border: '1px solid transparent' }}
        >
          Personalizar
        </button>
      </div>
    </aside>
  );
}

export default CookieConsent;
