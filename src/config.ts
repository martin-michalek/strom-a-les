/**
 * ==========================================================
 *  HLAVNÉ NASTAVENIA WEBU – väčšinu údajov meníte iba tu.
 *  Položky označené TODO treba doplniť / skontrolovať.
 * ==========================================================
 */

export const SITE = {
  // Finálna doména (používa sa v štruktúrovaných dátach). Kým web beží na
  // GitHub Pages bez domény, adresu určuje `site` + `base` v astro.config.mjs.
  domain: 'https://stromales.sk',
  // Kým nie je presmerovaná doména, nechceme, aby Google indexoval dočasnú
  // adresu *.github.io. Po prepnutí DNS zmeňte na true.
  indexable: true,

  name: 'Stromales',
  legalName: 'Stromales s. r. o.',
  tagline: 'Arboristika a lesné hospodárstvo',
  owner: 'Ing. Milan Mičúch',
  ico: '57387826',
  // TODO: DIČ / IČ DPH – doplňte, ak sa majú zobrazovať v pätičke
  dic: '',
  icdph: '',

  email: 'info@stromales.sk',
  phone: '+421 902 655 936',

  street: 'Horný Moštenec 277',
  city: 'Považská Bystrica',
  postalCode: '017 01',
  region: 'Trenčiansky kraj',
  country: 'SK',

  serviceAreaText: 'celé Slovensko a Česká republika',
  serviceCountries: ['Slovensko', 'Česká republika'],

  openingHours: 'Telefonicky a e-mailom 24/7',
  openingHoursSchema: 'Mo-Su 00:00-23:59',
  responseTime: 'do 24 hodín',

  // Kontaktný formulár – access key z https://web3forms.com (zadajte info@stromales.sk).
  // Kým je prázdny, formulár otvorí e-mailového klienta návštevníka.
  web3formsKey: '8a017f12-faea-4677-abd3-2e5acfa9a18b',

  // Sociálne siete – ikonky sa zobrazia automaticky, keď doplníte odkaz
  facebook: '',
  instagram: '',
  youtube: '',
  // Google firemný profil (po založení doplniť odkaz)
  googleBusiness: '',
};

/** Certifikáty a osvedčenia – čísla doplňte, keď ich Milan pošle. */
export const CERTIFICATES = [
  {
    id: 'etw',
    title: 'European Tree Worker',
    issuer: 'European Arboricultural Council (EAC) · špecializácia Climber',
    text: 'Európsky certifikát arboristu. Potvrdzuje odborné znalosti a praktické zručnosti pri starostlivosti o stromy rastúce mimo lesa vrátane bezpečnej práce v korune stromu.',
    number: '009377',
    validUntil: '31. 12. 2027',
    // odkaz na záznam v registri certifikovaných arboristov EAC (zobrazí sa „Overiť v registri“)
    verifyUrl: '',
  },
  {
    id: 'olh',
    title: 'Odborný lesný hospodár',
    issuer: 'Osvedčenie podľa zákona o lesoch',
    text: 'Oprávnenie vykonávať činnosť odborného lesného hospodára – odborné riadenie hospodárenia v lese pre vlastníkov a správcov lesov.',
    number: '442/2024-TN',
    validUntil: '',
    verifyUrl: '',
  },
  {
    id: 'lrm',
    title: 'Lesný reprodukčný materiál',
    issuer: 'Osvedčenie o odbornej spôsobilosti',
    text: 'Odborná spôsobilosť na nakladanie s lesným reprodukčným materiálom – semená a sadenice lesných drevín overeného pôvodu.',
    number: '', // TODO: číslo osvedčenia
    validUntil: '',
    verifyUrl: '',
  },
];

/**
 * Čísla na úvode a na stránke O nás. Hektáre sa často menia – stačí upraviť tu.
 */
export const STATS = [
  { value: '10', suffix: 'rokov', label: 'praxe v arboristike' },
  { value: '2\u00a0400', suffix: 'ha', label: 'lesa v starostlivosti ako odborný lesný hospodár' },
  { value: 'ETW', suffix: '', label: 'európsky certifikát arboristu č. 009377' },
  { value: 'SK\u00a0+\u00a0CZ', suffix: '', label: 'pôsobíme na celom Slovensku a v Česku' },
];

export type NavItem = { href: string; label: string; children?: { href: string; label: string }[] };

export const NAV: NavItem[] = [
  { href: '/', label: 'Domov' },
  {
    href: '/arboristika/',
    label: 'Arboristika',
    children: [
      { href: '/arboristika/orezy-drevin/', label: 'Orezy drevín' },
      { href: '/arboristika/rizikove-vyruby/', label: 'Rizikové výruby' },
      { href: '/arboristika/instalacia-vazieb/', label: 'Inštalácia väzieb' },
      { href: '/arboristika/poradenstvo/', label: 'Poradenstvo' },
    ],
  },
  {
    href: '/lesne-hospodarstvo/',
    label: 'Lesné hospodárstvo',
    children: [
      { href: '/lesne-hospodarstvo/odborny-lesny-hospodar/', label: 'Odborný lesný hospodár' },
      { href: '/lesne-hospodarstvo/sluzby-v-lesnictve/', label: 'Služby v lesníctve' },
      { href: '/lesne-hospodarstvo/administrativa/', label: 'Administratíva v lesníctve' },
      { href: '/lesne-hospodarstvo/palivove-drevo/', label: 'Palivové drevo' },
    ],
  },
  { href: '/galeria/', label: 'Galéria' },
  { href: '/cennik/', label: 'Cenník' },
  { href: '/o-nas/', label: 'O nás' },
  { href: '/kontakt/', label: 'Kontakt' },
];

/**
 * Základná cesta webu. Je '/' pri vlastnej doméne a '/nazov-repozitara/'
 * pri GitHub Pages bez domény (nastavuje sa cez `base` v astro.config.mjs).
 * Všetky interné odkazy preto píšeme cez u('/kontakt/').
 */
export const BASE = import.meta.env.BASE_URL;
export const u = (path = '/') => `${BASE.replace(/\/$/, '')}${path}`;

/** Absolútna URL aktuálneho nasadenia (pre canonical, OG a štruktúrované dáta) */
export const abs = (path = '/') => new URL(u(path), import.meta.env.SITE).href;
export const BUSINESS_ID = `${abs('/')}#firma`;

export const phoneHref = (phone: string) => `tel:${phone.replace(/\s+/g, '')}`;
