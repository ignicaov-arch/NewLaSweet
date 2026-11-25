import { describe, it, expect } from 'vitest';
import { getStoreOpenStatus } from '../src/domain/schedule';

describe('Horário de Atendimento La Sweet (America/Sao_Paulo)', () => {
  it('identifica loja aberta durante a tarde de quarta-feira (15:00 BRT = 18:00 UTC)', () => {
    const status = getStoreOpenStatus(new Date('2026-11-25T18:00:00Z'));
    expect(status.isOpen).toBe(true);
    expect(status.label).toContain('18h30');
  });

  it('identifica loja fechada antes das 12h e após 18h30 em dia útil', () => {
    const morning = getStoreOpenStatus(new Date('2026-11-25T13:30:00Z'));
    expect(morning.isOpen).toBe(false);
    expect(morning.label).toContain('12h');

    const evening = getStoreOpenStatus(new Date('2026-11-25T22:00:00Z'));
    expect(evening.isOpen).toBe(false);
    expect(evening.label).toContain('Fechado agora');
  });

  it('identifica loja aberta e fechada nos limites do sábado', () => {
    const beforeOpenSat = getStoreOpenStatus(new Date('2026-11-28T11:30:00Z'));
    expect(beforeOpenSat.isOpen).toBe(false);
    expect(beforeOpenSat.label).toContain('09h');

    const openSat = getStoreOpenStatus(new Date('2026-11-28T13:15:00Z'));
    expect(openSat.isOpen).toBe(true);
    expect(openSat.label).toContain('18h');

    const afterCloseSat = getStoreOpenStatus(new Date('2026-11-28T22:00:00Z'));
    expect(afterCloseSat.isOpen).toBe(false);
    expect(afterCloseSat.label).toContain('Fechado agora');
  });

  it('identifica loja fechada aos domingos e sem parâmetro opcional', () => {
    const sunday = getStoreOpenStatus(new Date('2026-11-29T16:00:00Z'));
    expect(sunday.isOpen).toBe(false);
    expect(sunday.label).toContain('domingos');

    const current = getStoreOpenStatus();
    expect(typeof current.isOpen).toBe('boolean');
    expect(current.label.length).toBeGreaterThan(3);
  });
});
