export interface GoogleReviewEntry {
  readonly reviewId: string;
  readonly authorName: string;
  readonly authorUri: string;
  readonly authorPhoto: string;
  readonly guideBadge: string;
  readonly rating: 5;
  readonly text: string;
  readonly relativeTime: string;
  readonly publishTime: string;
}

export interface GoogleReviewsPayload {
  readonly verified: boolean;
  readonly dataId: string;
  readonly kgmid: string;
  readonly businessName: string;
  readonly fetchLimit: number;
  readonly displayLimit: number;
  readonly rating: number;
  readonly userRatingCount: number;
  readonly updatedAt: string;
  readonly reviews: readonly GoogleReviewEntry[];
}

export const GOOGLE_REVIEWS_META = {
  verified: true,
  dataId: '0xa0a5883bda2af9:0x372057978fff2374',
  kgmid: '/g/11h1mk_b0t',
  businessName: 'La Sweet',
  fetchLimit: 50,
  displayLimit: 20,
  rating: 4.6,
  userRatingCount: 90,
  updatedAt: '2026-11-27T15:00:00.000Z',
} as const;

const URI = 'https://www.google.com/search?kgmid=/g/11h1mk_b0t';
const PHOTO_ANA =
  'https://lh3.googleusercontent.com/a/ACg8ocJanx-7ZXnqKu60aDCPdiY53CsvtQ4uVGcGwAZ5mSWD9oqt0w=s64-c-rp-mo-ba12-br100';

export const GOOGLE_REVIEWS_SEED: readonly GoogleReviewEntry[] = [
  {
    reviewId: 'gmn-lasweet-01', authorName: 'Ana Carolina Gonçalves', authorUri: URI, authorPhoto: PHOTO_ANA,
    guideBadge: 'Local Guide · 15 avaliações', rating: 5,
    text: 'Bombom de morango maravilhoso', relativeTime: '6 meses atrás', publishTime: '2026-05-20T15:00:00.000Z',
  },
  {
    reviewId: 'gmn-lasweet-02', authorName: 'Cristina Atayde Leite', authorUri: URI, authorPhoto: '',
    guideBadge: 'Local Guide · 383 avaliações · 2.160 fotos', rating: 5,
    text: 'Ótima confeitaria. Recomendo o bombom de morango. Delicioso', relativeTime: '9 meses atrás', publishTime: '2026-02-20T15:00:00.000Z',
  },
  {
    reviewId: 'gmn-lasweet-03', authorName: 'Elaine Cristina Gonçalves', authorUri: URI, authorPhoto: '',
    guideBadge: '7 avaliações · Avaliação Google', rating: 5,
    text: 'Incrível!! Atendimento nota 10! Pessoal super atencioso. Produtos de primeira qualidade, tudo gostoso.', relativeTime: 'um ano atrás', publishTime: '2025-11-15T15:00:00.000Z',
  },
  {
    reviewId: 'gmn-lasweet-04', authorName: 'Marcone Correa', authorUri: URI, authorPhoto: '',
    guideBadge: 'Local Guide · 438 avaliações · 8 fotos', rating: 5,
    text: 'Muito bom!!', relativeTime: 'um ano atrás', publishTime: '2025-10-20T15:00:00.000Z',
  },
  {
    reviewId: 'gmn-lasweet-05', authorName: 'Wagner Ramos', authorUri: URI, authorPhoto: '',
    guideBadge: 'Local Guide · 153 avaliações · 44 fotos', rating: 5,
    text: 'Ambiente e atendimento fantásticos e as comidas maravilhosas. Foi a Divinópolis e não visitou a Lá Sweet, não foi a Divinópolis.', relativeTime: 'um ano atrás', publishTime: '2025-09-18T15:00:00.000Z',
  },
  {
    reviewId: 'gmn-lasweet-06', authorName: 'Andy Rib', authorUri: URI, authorPhoto: '',
    guideBadge: 'Local Guide · 201 avaliações · 530 fotos', rating: 5,
    text: 'Sempre uma experiência agradável ir nesse local', relativeTime: 'um ano atrás', publishTime: '2025-08-12T15:00:00.000Z',
  },
  {
    reviewId: 'gmn-lasweet-07', authorName: 'Giovanna Martins', authorUri: URI, authorPhoto: '',
    guideBadge: '11 avaliações · Avaliação Google', rating: 5,
    text: 'Lugar aconchegante, tranquilo, ótimo atendimento, tudo muito bem apresentado e gostoso!', relativeTime: 'um ano atrás', publishTime: '2025-07-10T15:00:00.000Z',
  },
  {
    reviewId: 'gmn-lasweet-08', authorName: 'Bianca Vilela', authorUri: URI, authorPhoto: '',
    guideBadge: '3 avaliações · Avaliação Google', rating: 5,
    text: 'Melhor loja de doce de Divinópolis', relativeTime: 'um ano atrás', publishTime: '2025-06-05T15:00:00.000Z',
  },
  {
    reviewId: 'gmn-lasweet-09', authorName: 'Maujore Maujors', authorUri: URI, authorPhoto: '',
    guideBadge: 'Local Guide · 117 avaliações · 7 fotos', rating: 5,
    text: 'Ótima cafeteria em Divinópolis, uma referência. Aprecio seu cappuccino e lanches, em particular, o croissant. O atendimento ali é muito cortês e eficiente.', relativeTime: '2 anos atrás', publishTime: '2024-11-10T15:00:00.000Z',
  },
  {
    reviewId: 'gmn-lasweet-10', authorName: 'Ronaldo de Oliveira Soares', authorUri: URI, authorPhoto: '',
    guideBadge: 'Local Guide · 208 avaliações · 38 fotos', rating: 5,
    text: 'Café cuado saboroso e a comida ótima', relativeTime: '2 anos atrás', publishTime: '2024-09-15T15:00:00.000Z',
  },
  {
    reviewId: 'gmn-lasweet-11', authorName: 'Lorena Oliveira', authorUri: URI, authorPhoto: '',
    guideBadge: 'Local Guide · 57 avaliações · 12 fotos', rating: 5,
    text: 'Sou apaixonada nesse lugar desde que abriu. O ambiente é mara, funcionários super educados e os doces PERFEITOS!! Eu amo', relativeTime: '2 anos atrás', publishTime: '2024-07-20T15:00:00.000Z',
  },
  {
    reviewId: 'gmn-lasweet-12', authorName: 'Larissa Gontijo', authorUri: URI, authorPhoto: '',
    guideBadge: '9 avaliações · Avaliação Google', rating: 5,
    text: 'Tudo delicioso!', relativeTime: '3 anos atrás', publishTime: '2023-11-10T15:00:00.000Z',
  },
  {
    reviewId: 'gmn-lasweet-13', authorName: 'Rodrigo Lisseck', authorUri: URI, authorPhoto: '',
    guideBadge: 'Local Guide · 31 avaliações · 3 fotos', rating: 5,
    text: 'Ótimo lugar para brunch/café. Tosta de frango com queijo canastra e tomate confite é sensacional! E pra sobremesa croassaint muito bom também. Ambiente climatizado ótimo para o verão eterno de Divinópolis.', relativeTime: '3 anos atrás', publishTime: '2023-09-10T15:00:00.000Z',
  },
  {
    reviewId: 'gmn-lasweet-14', authorName: 'Larissa Liz', authorUri: URI, authorPhoto: '',
    guideBadge: 'Local Guide · 26 avaliações · 10 fotos', rating: 5,
    text: 'Um lugar muito aconchegante e produtos deliciosos. Amei!', relativeTime: '5 anos atrás', publishTime: '2021-10-10T15:00:00.000Z',
  },
  {
    reviewId: 'gmn-lasweet-15', authorName: 'Carol Vargas', authorUri: URI, authorPhoto: '',
    guideBadge: 'Local Guide · 62 avaliações · 135 fotos', rating: 5,
    text: 'Lugar lindo, tranquilo, faz a gente se sentir em um cenário encantador. O cardápio é variado, mas com certeza meu pedido favorito é o croissant de nutella. O atendimento é ótimo.', relativeTime: '7 anos atrás', publishTime: '2019-10-10T15:00:00.000Z',
  },
  {
    reviewId: 'gmn-lasweet-16', authorName: 'Natasha Castro', authorUri: URI, authorPhoto: '',
    guideBadge: '6 avaliações · 1 foto', rating: 5,
    text: 'Um ótimo espaço para relaxar e desfrutar de um belo café, com excelente atendimento!', relativeTime: '7 anos atrás', publishTime: '2019-08-10T15:00:00.000Z',
  },
];

export function splitReviewsForDualMarquee(
  reviews: readonly GoogleReviewEntry[],
  maxReviews = 20
): { row1: readonly GoogleReviewEntry[]; row2: readonly GoogleReviewEntry[] } {
  const capped = reviews.filter((r) => r.rating === 5 && r.text.trim().length > 0).slice(0, maxReviews);
  const splitAt = Math.ceil(capped.length / 2);
  return { row1: capped.slice(0, splitAt), row2: capped.slice(splitAt) };
}
