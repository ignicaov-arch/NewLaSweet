import { BRAND } from '../data/brand';

export interface OrderInquiryInput {
  readonly occasion: string;
  readonly desiredDate: string;
  readonly itemChoice: string;
  readonly notes?: string;
}

const ALLOWED_EXTERNAL_HOSTS = new Set([
  'wa.me',
  'api.whatsapp.com',
  'www.instagram.com',
  'instagram.com',
  'www.google.com',
  'maps.google.com',
  'newlasweet.pages.dev'
]);

/** Remove caracteres de controle e tags mantendo acentuação em português. */
export function cleanUserText(input: unknown, maxLen = 140): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[\p{Cc}<>]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLen);
}

/** Valida URLs externas ou rotas internas bloqueando esquemas javascript: e data:. */
export function sanitizeUrl(rawUrl: string): string {
  const trimmed = String(rawUrl || '').trim();
  if (!trimmed) return '/';
  if (trimmed.startsWith('/') && !trimmed.startsWith('//')) return trimmed;
  if (trimmed.startsWith('#')) return trimmed;

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol !== 'https:') return '/';
    if (!ALLOWED_EXTERNAL_HOSTS.has(parsed.hostname.toLowerCase())) return '/';
    return parsed.toString();
  } catch {
    return '/';
  }
}

/** Monta link oficial https://wa.me com dígitos válidos e mensagem codificada. */
export function buildWhatsAppUrl(
  message?: string,
  phone: string = BRAND.whatsappPrimary
): string {
  const digits = String(phone || '').replace(/\D+/g, '');
  const validPhone = digits.length >= 12 && digits.length <= 15 ? digits : BRAND.whatsappPrimary;
  const safeMsg =
    cleanUserText(message || BRAND.defaultWhatsappMessage, 420) || BRAND.defaultWhatsappMessage;
  return `https://wa.me/${validPhone}?text=${encodeURIComponent(safeMsg)}`;
}

/** Formata a mensagem estruturada do formulário para o WhatsApp oficial da La Sweet. */
export function buildOrderInquiryMessage(input: OrderInquiryInput): string {
  const occasion = cleanUserText(input.occasion, 60) || 'Pedido especial';
  const desiredDate = cleanUserText(input.desiredDate, 50) || 'para hoje ou esta semana';
  const itemChoice = cleanUserText(input.itemChoice, 60) || 'Croissants e doces da vitrine';
  const notes = cleanUserText(input.notes ?? '', 120);

  const lines = [
    'Olá, equipe La Sweet! Vim pelo site e gostaria de fazer um pedido.',
    `Motivo: ${occasion}`,
    `Seleção principal: ${itemChoice}`,
    `Quando gostaria: ${desiredDate}`
  ];

  if (notes) {
    lines.push(`Detalhes e sabores: ${notes}`);
  }

  return lines.join('\n');
}
