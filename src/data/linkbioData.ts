import { BRAND } from './brand';
import { buildWhatsAppUrl } from '../domain/whatsapp';

export type LinkBioIcon = 'whatsapp' | 'menu' | 'gift' | 'cake' | 'instagram' | 'maps';

export interface LinkBioCardItem {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly badge?: string;
  readonly href: string;
  readonly icon: LinkBioIcon;
  readonly highlight?: boolean;
  readonly external?: boolean;
}

export interface LinkBioShowcaseItem {
  readonly title: string;
  readonly caption: string;
  readonly img: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
  readonly href: string;
}

export const LINKBIO_CARDS: readonly LinkBioCardItem[] = [
  {
    id: 'whatsapp-direto',
    title: 'Pedir no WhatsApp agora',
    subtitle: 'Vitrine do dia, pronta-entrega, retiradas e atendimento rápido',
    badge: 'Mais rápido',
    href: buildWhatsAppUrl('Olá! Vim pelo LinkBio da La Sweet e quero fazer um pedido hoje.'),
    icon: 'whatsapp',
    highlight: true,
    external: true
  },
  {
    id: 'presentes-cestas',
    title: 'Caixas de Presente e Cestas',
    subtitle: 'Embalagens rosa com fita dourada e corações trufados sob medida',
    badge: 'Assinatura',
    href: buildWhatsAppUrl('Olá! Quero ver as opções de caixas de presente e cestas da La Sweet.'),
    icon: 'gift',
    external: true
  },
  {
    id: 'cardapio-completo',
    title: 'Explorar Cardápio e Salão',
    subtitle: 'Croissants doces e salgados, tostas, bombons e cafeteria completa',
    href: '/#cardapio',
    icon: 'menu'
  },
  {
    id: 'encomendar-bolo',
    title: 'Encomendar Bolo ou Evento',
    subtitle: 'Monte seu orçamento rápido com ocasião, data e quantidade',
    href: '/#encomendar',
    icon: 'cake'
  },
  {
    id: 'como-chegar',
    title: 'Como Chegar no Centro',
    subtitle: 'Rua Coronel João Notini, 759 · Divinópolis - MG (abrir rota no mapa)',
    href: BRAND.googleMapsUrl,
    icon: 'maps',
    external: true
  },
  {
    id: 'instagram-oficial',
    title: 'Acompanhar @_lasweet',
    subtitle: 'Novidades diárias da vitrine, bastidores e edições sazonais',
    href: BRAND.instagramUrl,
    icon: 'instagram',
    external: true
  }
];

export const LINKBIO_SHOWCASE: readonly LinkBioShowcaseItem[] = [
  {
    title: 'Croissants Recheados',
    caption: 'Nutella com morango e sabores salgados',
    img: '/img/croissants-800.webp',
    width: 800,
    height: 600,
    alt: 'Croissant dourado sobre papel manteiga com corações La Sweet',
    href: buildWhatsAppUrl('Olá! Quero pedir croissants da La Sweet.')
  },
  {
    title: 'Vitrine de Doces',
    caption: 'Bombom de morango, taças e tortinhas',
    img: '/img/doces-800.webp',
    width: 800,
    height: 600,
    alt: 'Vitrine de doces artesanais e sacolas rosa da La Sweet',
    href: buildWhatsAppUrl('Olá! Quero saber o que tem na vitrine de doces hoje.')
  },
  {
    title: 'Brunch e Sobremesas',
    caption: 'Tostas quentes, brownie e chocolate quente',
    img: '/img/brunch-800.webp',
    width: 800,
    height: 600,
    alt: 'Sobremesa de brownie quente com sorvete e morangos na La Sweet',
    href: buildWhatsAppUrl('Olá! Quero saber os horários e opções de brunch na La Sweet.')
  },
  {
    title: 'Presentes com Afeto',
    caption: 'Caixas rosa e corações trufados',
    img: '/img/presentes-800.webp',
    width: 800,
    height: 1000,
    alt: 'Caixa rosa oficial da La Sweet com corações trufados artesanais',
    href: buildWhatsAppUrl('Olá! Quero montar uma caixa de presente da La Sweet.')
  }
];
