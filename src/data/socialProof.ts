export interface TestimonialItem {
  readonly quote: string;
  readonly author: string;
  readonly meta: string;
  readonly featured?: boolean;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export const TESTIMONIALS: readonly TestimonialItem[] = [
  {
    quote:
      'Lugar lindo, tranquilo, faz a gente se sentir em um cenário encantador. O cardápio é variado, mas com certeza meu pedido favorito é o croissant de Nutella. O atendimento é ótimo.',
    author: 'Carol Vargas',
    meta: 'Avaliação verificada no Google'
  },
  {
    quote:
      'Ótimo lugar para brunch e café. A tosta de frango com queijo Canastra e tomate confit é sensacional, e o croissant de sobremesa é muito bom também. Ambiente climatizado ótimo para Divinópolis.',
    author: 'Rodrigo Lisseck',
    meta: 'Avaliação verificada no Google',
    featured: true
  },
  {
    quote:
      'Ótima confeitaria. Recomendo o bombom de morango, delicioso. Ambiente muito aconchegante e produtos de primeira qualidade.',
    author: 'Cristina Atayde Leite',
    meta: 'Avaliação verificada no Google'
  }
];

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: 'Onde fica a La Sweet em Divinópolis e qual o horário?',
    answer:
      'A La Sweet fica na Rua Coronel João Notini, 759, no Centro de Divinópolis, Minas Gerais, CEP 35500-017. O atendimento presencial funciona de segunda a sexta das 12h às 18h30 e aos sábados das 9h às 18h, com entrada acessível para cadeira de rodas.'
  },
  {
    question: 'Quais são os carros-chefes do cardápio da La Sweet?',
    answer:
      'Os pedidos mais procurados pelos clientes são o croissant de Nutella com morango, o croissant de cream cheese com damasco, o croissant salgado de filé ao molho gorgonzola, a tosta de frango com queijo Canastra e o clássico bombom de morango.'
  },
  {
    question: 'Preciso encomendar com antecedência ou há pronta-entrega?',
    answer:
      'Mantemos uma vitrine diária fresca com doces, bombons de morango, taças, croissants e bebidas para consumo no salão ou retirada imediata. Para bolos confeitados, cestas personalizadas e kits de presente maiores, recomendamos reservar pelo WhatsApp com 24h a 48h de antecedência.'
  },
  {
    question: 'Como faço para pedir caixas de presente ou cestas especiais?',
    answer:
      'Basta tocar em qualquer botão de WhatsApp ou preencher o formulário rápido nesta página informando a ocasião, a data e o estilo desejado. Nossa equipe envia as opções de caixas rosa assinatura disponíveis no dia e finaliza seu pedido.'
  },
  {
    question: 'O espaço físico tem ambiente climatizado para café da tarde?',
    answer:
      'Sim. Nosso salão no Centro de Divinópolis é climatizado, aconchegante e preparado para receber desde encontros rápidos para café e chocolate quente até tardes de brunch com amigos e família.'
  },
  {
    question: 'Vocês atendem pedidos para retirada e entregas em Divinópolis?',
    answer:
      'Sim. Você pode retirar diretamente no balcão da Rua Coronel João Notini, 759 ou combinar a entrega em Divinópolis diretamente pelo nosso WhatsApp oficial (37) 99111-4767 durante o horário de atendimento.'
  }
];
