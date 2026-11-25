export interface StoreOpenStatus {
  readonly isOpen: boolean;
  readonly label: string;
  readonly detail: string;
}

const WEEKDAY_MAP: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6
};

/** Calcula se a loja da La Sweet em Divinópolis está aberta no fuso America/Sao_Paulo. */
export function getStoreOpenStatus(now: Date = new Date()): StoreOpenStatus {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Sao_Paulo',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).formatToParts(now);

  const weekdayStr = parts.find((p) => p.type === 'weekday')?.value ?? 'Mon';
  const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? '12');
  const minute = Number(parts.find((p) => p.type === 'minute')?.value ?? '0');

  const day = WEEKDAY_MAP[weekdayStr] ?? 1;
  const totalMinutes = (hour === 24 ? 0 : hour) * 60 + minute;

  if (day === 0) {
    return {
      isOpen: false,
      label: 'Fechado aos domingos',
      detail: 'Atendimento reabre segunda às 12h'
    };
  }

  if (day === 6) {
    const openSat = 9 * 60;
    const closeSat = 18 * 60;
    if (totalMinutes >= openSat && totalMinutes < closeSat) {
      return {
        isOpen: true,
        label: 'Aberto hoje até 18h',
        detail: 'Salão e pronta-entrega no Centro'
      };
    }
    return {
      isOpen: false,
      label: totalMinutes < openSat ? 'Abre hoje às 09h' : 'Fechado agora',
      detail: 'Sábados: 09h às 18h · Pedidos pelo WhatsApp'
    };
  }

  const openWeek = 12 * 60;
  const closeWeek = 18 * 60 + 30;
  if (totalMinutes >= openWeek && totalMinutes < closeWeek) {
    return {
      isOpen: true,
      label: 'Aberto agora até 18h30',
      detail: 'Salão climatizado e retirada no Centro'
    };
  }

  return {
    isOpen: false,
    label: totalMinutes < openWeek ? 'Abre hoje às 12h' : 'Fechado agora',
    detail: 'Segunda a sexta: 12h às 18h30'
  };
}
