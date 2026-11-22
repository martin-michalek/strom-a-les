/**
 * Služby – každá má vlastnú podstránku. Texty vychádzajú z podkladov od Milana.
 * category určuje, pod ktorý pilier služba patrí (a jej URL).
 */
import type { PhotoKey } from './images';

export type Category = 'arboristika' | 'lesne-hospodarstvo';

export type Service = {
  slug: string;
  category: Category;
  title: string;
  /** krátky popis do kariet */
  short: string;
  /** titulok a popis pre Google */
  seoTitle: string;
  seoDescription: string;
  icon: string;
  photo?: PhotoKey;
  intro: string;
  /** hlavné body služby */
  points: { title: string; text: string }[];
  pointsTitle?: string;
  /** voliteľný doplnkový odsek pod bodmi */
  note?: string;
  faq?: { q: string; a: string }[];
};

export const CATEGORIES: Record<Category, { title: string; href: string; short: string; more: string }> = {
  arboristika: {
    title: 'Arboristika',
    href: '/arboristika/',
    short: 'Orezy, rizikové výruby, väzby a odborné posúdenie stromov v záhradách, obciach aj pri stavbách.',
    more: 'Viac o arboristike',
  },
  'lesne-hospodarstvo': {
    title: 'Lesné hospodárstvo',
    href: '/lesne-hospodarstvo/',
    short: 'Odborný lesný hospodár, ťažba a pestovná činnosť, sadenice, administratíva a palivové drevo.',
    more: 'Viac o lesnom hospodárstve',
  },
};

export const SERVICES: Service[] = [
  // ───────────── ARBORISTIKA ─────────────
  {
    slug: 'orezy-drevin',
    category: 'arboristika',
    title: 'Orezy drevín',
    short: 'Výchovný, zdravotný, bezpečnostný a redukčný rez – správny rez je kľúčom k dlhému a bezpečnému životu stromu.',
    seoTitle: 'Orez stromov – výchovný, zdravotný a redukčný rez',
    seoDescription:
      'Odborný orez stromov stromolezeckou technikou: výchovný, zdravotný, bezpečnostný a redukčný rez. Certifikovaný arborista European Tree Worker. Obhliadka zdarma.',
    icon: 'scissors',
    photo: 'orezKoruny',
    intro:
      'Rez je kľúčom k dlhému a bezpečnému životu stromu. Nesprávny rez môže strom trvalo poškodiť – preto každý zásah plánujeme podľa druhu dreviny, jej zdravotného stavu a okolia.',
    pointsTitle: 'Druhy rezov',
    points: [
      { title: 'Výchovný rez', text: 'Tvarovanie mladých stromov pre správny vývoj koruny v budúcnosti.' },
      { title: 'Zdravotný rez', text: 'Odstránenie suchých, chorých, nalomených či krížiacich sa konárov.' },
      { title: 'Bezpečnostný rez', text: 'Zaistenie prevádzkovej bezpečnosti stromu v okolí domov, chodníkov a ciest.' },
      {
        title: 'Redukčný rez',
        text: 'Presvetlenie koruny, odľahčenie pred silným vetrom a úprava konárov, ktoré zasahujú do domov alebo elektrického vedenia.',
      },
    ],
    note: 'Pracujeme stromolezeckou technikou, takže sa dostaneme aj ku stromom, kam sa plošina nezmestí. Konáre po reze odvezieme alebo zoštiepkujeme.',
    faq: [
      {
        q: 'Kedy je najlepší čas na orez stromu?',
        a: 'Závisí od druhu dreviny a typu rezu. Zdravotný a bezpečnostný rez sa robí podľa potreby počas celého roka, ostatné rezy načasujeme tak, aby boli pre strom čo najšetrnejšie. Pri obhliadke vám odporučíme vhodný termín.',
      },
      {
        q: 'Neuškodí rez stromu?',
        a: 'Odborne vedený rez strom nepoškodzuje – naopak predlžuje jeho život. Škodí najmä hrubé „zrezanie hlavy“ (tzv. hlavovanie), ktorému sa vyhýbame.',
      },
    ],
  },
  {
    slug: 'rizikove-vyruby',
    category: 'arboristika',
    title: 'Rizikové výruby',
    short: 'Bezpečné odstránenie poškodených a nebezpečných stromov aj nad strechami, pri vedení či cestách.',
    seoTitle: 'Rizikový výrub stromov – postupné spúšťanie po častiach',
    seoDescription:
      'Rizikové výruby stromov v stiesnených podmienkach – nad strechami, elektrickým vedením a pri cestách. Postupné spúšťanie lanovou technikou, výrub z plošiny. Celé SK a CZ.',
    icon: 'tree',
    photo: 'rizikovyVyrubSneh',
    intro:
      'Ak je strom vážne poškodený, suchý alebo bezprostredne ohrozuje okolie, je nutné ho odstrániť. Špecializujeme sa na výrub v stiesnených podmienkach – nad strechami, elektrickým vedením či v tesnej blízkosti komunikácií.',
    pointsTitle: 'Ako strom odstránime',
    points: [
      {
        title: 'Postupné pílenie stromu',
        text: 'Asanácia stromu po častiach za pomoci lanových techník. Všetky časti stromu bezpečne spustíme na lanách bez poškodenia čohokoľvek pod ním.',
      },
      {
        title: 'Klasický výrub zo zeme',
        text: 'Ak to priestorové podmienky a pevnosť kmeňa dovoľujú, strom zrežeme lesníckym spôsobom zo zeme, bez stromolezeckej techniky.',
      },
      {
        title: 'Výrub z vysokozdvižnej plošiny',
        text: 'Pri havarijnom stave stromu, alebo tam, kde si to situácia nevyhnutne vyžaduje, pracujeme z vysokozdvižnej plošiny.',
      },
    ],
    note: 'Po výrube pracovisko upraceme – konáre zoštiepkujeme alebo odvezieme a drevo napílime podľa vašich predstáv. Pomôžeme aj so súhlasom na výrub.',
    faq: [
      {
        q: 'Potrebujem na výrub stromu povolenie?',
        a: 'Vo väčšine prípadov áno – súhlas na výrub drevín vydáva obec. Či ho potrebujete, závisí najmä od veľkosti stromu a od toho, kde rastie. Pri obhliadke vám to povieme a pomôžeme s prípravou žiadosti.',
      },
      {
        q: 'Čo ak strom hrozí pádom hneď teraz?',
        a: 'Zavolajte nám – telefón je dostupný 24/7. Pri havarijnom stave sa snažíme prísť čo najskôr a strom zabezpečiť.',
      },
    ],
  },
  {
    slug: 'instalacia-vazieb',
    category: 'arboristika',
    title: 'Inštalácia väzieb',
    short: 'Dynamické a statické väzby, ktoré chránia vzácne stromy pred rozlomením počas búrok.',
    seoTitle: 'Bezpečnostné väzby korún stromov – dynamické a statické',
    seoDescription:
      'Inštalácia dynamických a statických väzieb do korún stromov. Ochrana vzácnych a historických stromov pred rozlomením počas búrok a silného vetra.',
    icon: 'link',
    photo: 'staryStrom',
    intro:
      'Máte v záhrade krásny, historický strom, ktorý má prasknutý kmeň alebo nestabilné vetvenie, no nechcete oň prísť? Riešením môže byť väzba koruny.',
    pointsTitle: 'Čo väzba rieši',
    points: [
      {
        title: 'Dynamické väzby',
        text: 'Pružné lanové systémy, ktoré pri vetre tlmia pohyb konárov a zároveň stromu nechávajú prirodzený pohyb, aby sa ďalej spevňoval.',
      },
      {
        title: 'Statické väzby',
        text: 'Pevné väzby pre stromy s výraznými defektmi, kde je potrebné časti koruny pevne zabezpečiť proti rozlomeniu.',
      },
      {
        title: 'Šetrne k stromu',
        text: 'Väzby inštalujeme tak, aby strom nepoškodzovali a chránili ho počas búrok a silného vetra.',
      },
    ],
    note: 'Väzbu navrhneme po posúdení stavu stromu. Ak by väzba nestačila, otvorene vám to povieme a navrhneme iné riešenie.',
  },
  {
    slug: 'poradenstvo',
    category: 'arboristika',
    title: 'Poradenstvo',
    short: 'Posúdenie zdravotného stavu a stability stromov, plán starostlivosti a pomoc so súhlasom na výrub.',
    seoTitle: 'Posúdenie stromov a pomoc so súhlasom na výrub',
    seoDescription:
      'Odborné posúdenie zdravotného stavu a stability stromov, návrh starostlivosti, ochrana stromov pri výstavbe a pomoc so žiadosťou o súhlas na výrub drevín.',
    icon: 'clipboard',
    photo: 'staryStrom',
    intro:
      'Neviete, v akom stave sú vaše stromy, alebo si nie ste istí zákonnými postupmi pri ich úprave a výrube? Poskytujeme odborné poradenstvo pre súkromných majiteľov, firmy aj obce.',
    pointsTitle: 'S čím pomôžeme',
    points: [
      {
        title: 'Hodnotenie zdravotného stavu a stability',
        text: 'Odborne posúdime vitalitu stromov, odhalíme skryté defekty či napadnutie škodcami a navrhneme vhodné opatrenia.',
      },
      {
        title: 'Návrh starostlivosti',
        text: 'Vypracujeme plán potrebných zásahov (orezy, väzby, asanácia), aby stromy žili čo najdlhšie a okolie bolo v bezpečí.',
      },
      {
        title: 'Legislatíva a súhlas na výrub',
        text: 'Poradíme v otázkach ochrany prírody a pripravíme podklady k žiadosti o súhlas na výrub drevín.',
      },
      {
        title: 'Konzultácie pri výstavbe',
        text: 'Navrhneme opatrenia na ochranu koreňov a nadzemných častí stromov v blízkosti stavebných prác.',
      },
    ],
    faq: [
      {
        q: 'Pre koho je poradenstvo určené?',
        a: 'Pre majiteľov záhrad a pozemkov, správcov budov, firmy aj obce – všade, kde treba vedieť, či je strom bezpečný a čo s ním ďalej.',
      },
    ],
  },

  // ───────────── LESNÉ HOSPODÁRSTVO ─────────────
  {
    slug: 'odborny-lesny-hospodar',
    category: 'lesne-hospodarstvo',
    title: 'Odborný lesný hospodár',
    short: 'Prevezmeme odbornú zodpovednosť za váš les – dohľad nad PSL, monitoring porastov a riešenie kalamít.',
    seoTitle: 'Odborný lesný hospodár (OLH) pre vlastníkov lesov',
    seoDescription:
      'Činnosť odborného lesného hospodára pre súkromných vlastníkov, urbariáty a pozemkové spoločenstvá. Dohľad nad PSL, monitoring porastov, návrh ťažby, riešenie kalamít.',
    icon: 'badge',
    photo: 'pracaVLese',
    intro:
      'Prevezmeme na seba odbornú zodpovednosť za váš les. Činnosť odborného lesného hospodára vykonávame v zmysle platnej legislatívy SR – pre drobných vlastníkov aj veľké pozemkové spoločenstvá.',
    pointsTitle: 'Čo pre vás urobíme',
    points: [
      { title: 'Dohľad nad programom starostlivosti o lesy', text: 'Dbáme na plnenie Programu starostlivosti o lesy (PSL) a jeho súlad s legislatívou.' },
      { title: 'Monitoring porastov', text: 'Pravidelne sledujeme zdravotný stav lesných porastov, aby sa problémy riešili včas.' },
      { title: 'Hospodárske opatrenia', text: 'Navrhujeme výchovnú a obnovnú úmyselnú ťažbu tak, aby les prosperoval a prinášal úžitok.' },
      { title: 'Kalamitné situácie', text: 'Pri vetrovej či podkôrnikovej kalamite reagujeme rýchlo a zabezpečíme potrebné kroky.' },
    ],
  },
  {
    slug: 'sluzby-v-lesnictve',
    category: 'lesne-hospodarstvo',
    title: 'Služby v lesníctve',
    short: 'Ťažba dreva, sústreďovanie, pestovná činnosť a sadenice overeného pôvodu – od výsadby po odvoz dreva.',
    seoTitle: 'Ťažba dreva, pestovná činnosť a sadenice lesných drevín',
    seoDescription:
      'Úmyselná aj asanačná ťažba dreva, šetrné sústreďovanie a približovanie, výsadba, prerezávky a ochrana mladých porastov. Lesný reprodukčný materiál overeného pôvodu.',
    icon: 'axe',
    photo: 'pracaVLese',
    intro:
      'Postaráme sa o les v každej fáze – od výsadby a ochrany mladých porastov až po ťažbu a odvoz dreva. Pracujeme šetrne k porastu aj k lesnej pôde.',
    pointsTitle: 'Naše služby',
    points: [
      { title: 'Ťažba dreva', text: 'Realizujeme úmyselnú (výchovnú, obnovnú) aj asanačnú ťažbu.' },
      {
        title: 'Sústreďovanie a približovanie dreva',
        text: 'Šetrná manipulácia s drevnou hmotou s minimálnym poškodením okolitého porastu a lesnej pôdy.',
      },
      {
        title: 'Pestovná činnosť',
        text: 'Výsadba sadeníc, čistenie plôch po ťažbe, prerezávky a ochrana mladých lesných porastov pred zverou či burinou.',
      },
      {
        title: 'Lesný reprodukčný materiál',
        text: 'Zabezpečíme kvalitné sadenice overeného pôvodu od certifikovaných dodávateľov a poradíme s výberom drevín podľa cieľového zloženia lesa, klímy a lesnej oblasti.',
      },
      {
        title: 'Sprievodné doklady LRM',
        text: 'Dohliadneme na správnosť sprievodných listov a certifikátov pôvodu, ktoré vyžadujú kontrolné orgány.',
      },
    ],
  },
  {
    slug: 'administrativa',
    category: 'lesne-hospodarstvo',
    title: 'Administratíva v lesníctve',
    short: 'Podklady a žiadosti pre úrady, povolenia na ťažbu a lesná hospodárska evidencia – papiere nechajte na nás.',
    seoTitle: 'Administratíva v lesníctve – žiadosti, povolenia, LHE',
    seoDescription:
      'Príprava podkladov a žiadostí pre okresný úrad, odbor pozemkový a lesný. Povolenia na ťažbu, prepočet drevnej hmoty, lesná hospodárska evidencia. Skúsenosti zo štátnej správy.',
    icon: 'file',
    photo: undefined,
    intro:
      'Svet lesníctva je spojený s množstvom byrokracie. Roky sme pracovali v štátnej správe lesného hospodárstva, takže presne vieme, čo, kde a ako treba podať. Papiere nechajte na nás.',
    pointsTitle: 'Čo vybavíme',
    points: [
      {
        title: 'Podklady a žiadosti pre úrady',
        text: 'Kompletná príprava podkladov a žiadostí pre orgány štátnej správy lesného hospodárstva (okresný úrad, odbor pozemkový a lesný).',
      },
      {
        title: 'Povolenia na ťažbu',
        text: 'Vybavenie povolení na ťažbu a prepočet drevnej hmoty.',
      },
      { title: 'Lesná hospodárska evidencia', text: 'Vedenie lesnej hospodárskej evidencie (LHE) v súlade s predpismi.' },
      {
        title: 'Odborná pomoc pri usporiadaní pozemkov',
        text: 'Odborná pomoc a príprava podkladov na úrady pri majetkovo-právnom usporiadaní lesných pozemkov.',
      },
    ],
  },
  {
    slug: 'palivove-drevo',
    category: 'lesne-hospodarstvo',
    title: 'Palivové drevo',
    short: 'Tvrdé palivové drevo ako metrovica alebo štiepané v dĺžke 25, 33 či 50 cm – s dovozom až k vám.',
    seoTitle: 'Palivové drevo – tvrdé, metrovica aj štiepané s dovozom',
    seoDescription:
      'Predaj tvrdého palivového dreva pre domácnosti aj firmy. Metrovica alebo štiepané drevo v dĺžkach 25, 33 alebo 50 cm. Dovoz našou technikou až k vám domov.',
    icon: 'flame',
    photo: undefined,
    intro: 'Ponúkame kvalitné palivové drevo pre domácnosti aj firmy za férové ceny. Cenu a termín dodania vám povieme po krátkom telefonáte.',
    pointsTitle: 'Ponuka',
    points: [
      { title: 'Sortiment', text: 'Tvrdé palivové drevo.' },
      { title: 'Forma dodania', text: 'Metrovica alebo štiepané drevo v dĺžkach podľa vášho želania – 25, 33 alebo 50 cm.' },
      { title: 'Doprava', text: 'Zabezpečíme odvoz priamo k vám domov našou technikou.' },
    ],
  },
];

export const servicesIn = (c: Category) => SERVICES.filter((s) => s.category === c);
export const serviceHref = (s: Service) => `/${s.category}/${s.slug}/`;
