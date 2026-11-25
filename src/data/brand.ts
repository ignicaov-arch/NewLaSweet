export interface ScheduleRule {
  readonly label: string;
  readonly opens: string;
  readonly closes: string;
  readonly daysOfWeek: readonly string[];
}

export const BRAND = {
  name: 'La Sweet',
  legalBrand: 'La Sweet®',
  fullName: 'La Sweet · Confeitaria em Divinópolis',
  slogan: 'Doces com afeto',
  siteUrl: 'https://newlasweet.pages.dev',
  whatsappPrimary: '553791114767',
  whatsappDisplay: '(37) 99111-4767',
  defaultWhatsappMessage:
    'Olá! Vim pelo site da La Sweet e gostaria de saber mais sobre o cardápio e encomendas.',
  instagramHandle: '@_lasweet',
  instagramUrl: 'https://www.instagram.com/_lasweet/',
  followersDisplay: '22,4 mil',
  googleMapsUrl:
    'https://www.google.com/maps/place/La+Sweet/@-20.1397796,-44.8911737,17z/data=!3m1!4b1!4m6!3m5!1s0xa0a5883bda2af9:0x372057978fff2374!8m2!3d-20.1397796!4d-44.8911737!16s%2Fg%2F11h1mk_b0t',
  address: {
    street: 'Rua Coronel João Notini, 759',
    neighborhood: 'Centro',
    city: 'Divinópolis',
    state: 'MG',
    postalCode: '35500-017',
    plusCode: 'V465+3G Centro, Divinópolis - MG',
    country: 'BR',
    accessibility: 'Entrada com acessibilidade para pessoas em cadeira de rodas'
  },
  geo: {
    latitude: -20.1397796,
    longitude: -44.8911737
  },
  rating: {
    value: '4.6',
    display: '4,6',
    best: '5',
    count: '90'
  },
  publishedIso: '2026-11-25T12:00:00-03:00',
  updatedIso: '2026-11-25T19:30:00-03:00',
  updatedDisplay: '25 de novembro de 2026',
  schedule: [
    {
      label: 'Segunda a sexta',
      opens: '12:00',
      closes: '18:30',
      daysOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    {
      label: 'Sábado',
      opens: '09:00',
      closes: '18:00',
      daysOfWeek: ['Saturday']
    }
  ] as readonly ScheduleRule[]
} as const;
