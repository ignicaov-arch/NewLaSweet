export interface SpaceMetric {
  readonly value: number;
  readonly suffix: string;
  readonly label: string;
}

export interface ComparisonRow {
  readonly modality: string;
  readonly idealFor: string;
  readonly timing: string;
  readonly howToOrder: string;
}

export const AMENITIES: readonly string[] = [
  'Salão climatizado no Centro',
  'Vitrine diária preparada à mão',
  'Croissants doces e salgados',
  'Cafeteria e chocolate quente',
  'Presentes e caixas assinatura',
  'Entrada com acessibilidade'
];

export const SPACE_METRICS: readonly SpaceMetric[] = [
  { value: 90, suffix: '+', label: 'avaliações no Google' },
  { value: 46, suffix: '/50', label: 'nota média 4,6 estrelas' },
  { value: 22, suffix: ' mil+', label: 'seguidores no @_lasweet' },
  { value: 6, suffix: ' dias', label: 'por semana de atendimento' }
];

export const COMPARISON_ROWS: readonly ComparisonRow[] = [
  {
    modality: 'Salão no Centro',
    idealFor: 'Brunch, café da tarde e encontro entre amigos',
    timing: 'Seg a Sex 12h às 18h30 · Sáb 09h às 18h',
    howToOrder: 'Atendimento por ordem de chegada na Rua Cel. João Notini, 759'
  },
  {
    modality: 'Retirada e Delivery',
    idealFor: 'Croissants, bombons, taças e café em casa',
    timing: 'Mesmo dia conforme disponibilidade da vitrine',
    howToOrder: 'Pedido direto pelo WhatsApp (37) 99111-4767'
  },
  {
    modality: 'Presentes e Bolos',
    idealFor: 'Aniversários, datas especiais e kits afetivos',
    timing: 'Antecedência recomendada de 24h a 48h',
    howToOrder: 'Escolha o formato pelo formulário ou WhatsApp'
  }
];

export const GIFT_STYLES: readonly string[] = [
  'Caixas Rosa Assinatura',
  'Corações Lapidados',
  'Cestas de Café e Brunch',
  'Bolos Artesanais',
  'Mimos Corporativos',
  'Datas Especiais'
];

export const GIFT_INCLUDES: readonly { num: string; title: string; detail: string }[] = [
  {
    num: '01',
    title: 'Embalagem assinatura La Sweet',
    detail: 'Caixas e sacolas em rosa blush com laço dourado ou marrom chocolate e acabamento impecável.'
  },
  {
    num: '02',
    title: 'Curadoria de doces e salgados',
    detail: 'Combine bombons de morango, corações trufados, croissants e bebidas do nosso salão.'
  },
  {
    num: '03',
    title: 'Cartão com mensagem dedicada',
    detail: 'Cada presente sai pronto para emocionar quem recebe, sem precisar se preocupar com embrulho.'
  }
];

export const PROCESS_STEPS: readonly {
  readonly num: string;
  readonly badge: string;
  readonly title: string;
  readonly description: string;
}[] = [
  {
    num: '01',
    badge: 'No mesmo minuto',
    title: 'Escolha',
    description: 'Selecione seus croissants, doces da vitrine, bolos ou caixa presente pelo cardápio.'
  },
  {
    num: '02',
    badge: 'Sob medida',
    title: 'Combine',
    description: 'Defina sabores, recado do cartão e horário desejado direto com a nossa equipe.'
  },
  {
    num: '03',
    badge: 'Feito com afeto',
    title: 'Preparo',
    description: 'Produzimos e embalamos tudo com ingredientes frescos e cuidado artesanal.'
  },
  {
    num: '04',
    badge: 'Centro de Divinópolis',
    title: 'Aproveite',
    description: 'Retire na loja da Rua Coronel João Notini ou receba no endereço combinado.'
  }
];
