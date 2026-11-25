export interface SpecialtyCard {
  readonly id: string;
  readonly variant: 'a' | 'b' | 'c' | 'd';
  readonly tag: string;
  readonly title: string;
  readonly description: string;
  readonly img: string;
  readonly img800: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
  readonly whatsappMsg: string;
}

export interface MenuGroup {
  readonly num: string;
  readonly title: string;
  readonly subtitle: string;
  readonly priceLabel: string;
  readonly items: readonly string[];
  readonly footer: string;
  readonly whatsappMsg: string;
}

export const MARQUEE_ITEMS: readonly string[] = [
  'Croissants Recheados',
  'Bombom de Morango',
  'Tostas Artesanais',
  'Presentes e Mimos',
  'Chocolate Quente',
  'Bolos Sob Encomenda',
  'Cestas Especiais'
];

export const SPECIALTY_CARDS: readonly SpecialtyCard[] = [
  {
    id: 'croissants',
    variant: 'a',
    tag: 'Os favoritos da casa',
    title: 'Croissants Doces e Salgados',
    description:
      'Massa folhada dourada com Nutella e morangos, cream cheese com damasco ou filé ao molho gorgonzola.',
    img: '/img/croissants.webp',
    img800: '/img/croissants-800.webp',
    width: 1600,
    height: 1200,
    alt: 'Croissant artesanal da La Sweet servido sobre papel manteiga estampado com corações e a marca',
    whatsappMsg: 'Olá! Quero saber as opções de croissants doces e salgados da La Sweet hoje.'
  },
  {
    id: 'doces',
    variant: 'b',
    tag: 'Vitrine fresca todo dia',
    title: 'Doces Finos e Taças',
    description:
      'Bombom de morango fresco, taças de creme, tortinhas artesanais, pudim e brigadeiros gourmet.',
    img: '/img/doces.webp',
    img800: '/img/doces-800.webp',
    width: 1600,
    height: 1200,
    alt: 'Vitrine da La Sweet com taças de sobremesa, tortinhas de morango, brigadeiros e sacolas rosa oficiais',
    whatsappMsg: 'Olá! Quero conferir os doces e taças disponíveis na vitrine da La Sweet.'
  },
  {
    id: 'brunch',
    variant: 'c',
    tag: 'Café da tarde em Divinópolis',
    title: 'Brunch e Sobremesas',
    description:
      'Tosta de frango com queijo Canastra e tomate confit, pão de queijo e brownie quente com sorvete.',
    img: '/img/brunch.webp',
    img800: '/img/brunch-800.webp',
    width: 1600,
    height: 1200,
    alt: 'Brownie artesanal com sorvete de creme, morangos frescos e calda de chocolate servido na La Sweet',
    whatsappMsg: 'Olá! Gostaria de ver o cardápio de brunch, tostas e cafeteria da La Sweet.'
  },
  {
    id: 'presentes',
    variant: 'd',
    tag: 'Embalagem com fita dourada',
    title: 'Presentes e Cestas',
    description:
      'Caixas rosa assinatura com corações trufados lapidados, doces finos e cestas cheias de afeto.',
    img: '/img/presentes.webp',
    img800: '/img/presentes-800.webp',
    width: 1200,
    height: 1500,
    alt: 'Caixa rosa oficial da La Sweet aberta com corações trufados recheados e acabamentos artesanais',
    whatsappMsg: 'Olá! Quero encomendar uma caixa de presente ou cesta especial da La Sweet.'
  }
];

export const EXTRA_SPECIALTY = {
  eyebrow: 'e muito mais',
  title: 'Bolos artesanais, lembrancinhas, datas comemorativas e mimos.',
  description:
    'Do café tranquilo no salão ao presente embalado para surpreender alguém especial no mesmo dia.',
  ctaLabel: 'Montar meu pedido',
  whatsappMsg: 'Olá! Quero montar um pedido personalizado na La Sweet.'
} as const;

export const MENU_GROUPS: readonly MenuGroup[] = [
  {
    num: '01',
    title: 'Croissants e Brunch',
    subtitle: 'Feitos para a tarde',
    priceLabel: 'Salão e retirada',
    items: [
      'Croissant de Nutella com morangos frescos',
      'Croissant de cream cheese com damasco',
      'Croissant de filé ao molho gorgonzola',
      'Croissant de presunto e queijo gratinado',
      'Tosta de frango com queijo Canastra e tomate confit',
      'Pão de queijo artesanal quentinho'
    ],
    footer: 'preparados na hora para o salão ou viagem',
    whatsappMsg: 'Olá! Quero pedir croissants ou tostas da La Sweet.'
  },
  {
    num: '02',
    title: 'Doces e Sobremesas',
    subtitle: 'Vitrine artesanal',
    priceLabel: 'Pronta-entrega e festas',
    items: [
      'Bombom de morango fresco da casa',
      'Taça de creme branco com morangos e brigadeiro',
      'Brownie quente com sorvete de creme e calda',
      'Mil-folhas cremoso com brigadeiro e morango',
      'Tortinhas artesanais e pudim cremoso',
      'Doces finos e corações trufados gourmet'
    ],
    footer: 'opções frescas todos os dias na vitrine',
    whatsappMsg: 'Olá! Quero saber quais doces e sobremesas estão na vitrine hoje.'
  },
  {
    num: '03',
    title: 'Cafeteria e Presentes',
    subtitle: 'Para brindar ou mimar',
    priceLabel: 'Bebidas e caixas rosa',
    items: [
      'Chocolate quente cremoso e chocolate gelado',
      'Cappuccino artesanal e café tradicional coado',
      'Smoothies de frutas e sucos naturais',
      'Caixas rosa assinatura com fita de cetim',
      'Coração lapidado de chocolate recheado',
      'Cestas personalizadas e bolos sob encomenda'
    ],
    footer: 'embalagens prontas para presentear sem pressa',
    whatsappMsg: 'Olá! Gostaria de ver opções de presentes, cestas ou bolos da La Sweet.'
  }
];
