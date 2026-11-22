/**
 * Fotografie použité na webe. Ležia v src/assets/foto/, takže ich Astro
 * automaticky zmenší a prevedie do WebP (rýchle načítanie na mobile, SEO).
 *
 * Pridanie novej fotky:
 *   1. ulož ju do src/assets/foto/ (ideálne originál z mobilu, nie cez WhatsApp)
 *   2. pridaj import a záznam do PHOTOS s popisom (alt) v slovenčine
 *   3. pridaj ju do GALLERY (poradie a kategória na /galeria/)
 */
import lezecVysokyStrom from '../assets/foto/lezec-vysoky-strom.jpg';
import lezeckeVybavenie from '../assets/foto/lezecke-vybavenie.jpg';
import orezKoruny from '../assets/foto/orez-koruny.jpg';
import pracaVLese from '../assets/foto/praca-v-lese.jpg';
import rizikovyVyrubSneh from '../assets/foto/rizikovy-vyrub-sneh.jpg';
import staryStrom from '../assets/foto/stary-strom.jpg';
import vyrubNadStrechami from '../assets/foto/vyrub-nad-strechami.jpg';
import vyrubPriBudove from '../assets/foto/vyrub-pri-budove.jpg';

export const PHOTOS = {
  lezecVysokyStrom: {
    src: lezecVysokyStrom,
    alt: 'Arborista na lane vo vrchole vysokého stromu počas postupného výrubu',
    position: '50% 30%',
  },
  rizikovyVyrubSneh: {
    src: rizikovyVyrubSneh,
    alt: 'Arborista s motorovou pílou na kmeni stromu počas rizikového výrubu v snežení',
    position: '50% 35%',
  },
  vyrubPriBudove: {
    src: vyrubPriBudove,
    alt: 'Postupný výrub suchého stromu tesne pri budove',
    position: '50% 40%',
  },
  vyrubNadStrechami: {
    src: vyrubNadStrechami,
    alt: 'Rizikový výrub stromu nad strechami rodinných domov',
    position: '50% 35%',
  },
  lezeckeVybavenie: {
    src: lezeckeVybavenie,
    alt: 'Certifikované stromolezecké vybavenie – kladka a lano v korune stromu',
    position: '40% 50%',
  },
  orezKoruny: {
    src: orezKoruny,
    alt: 'Arborista na lane v korune stromu počas orezu',
    position: '50% 35%',
  },
  staryStrom: {
    src: staryStrom,
    alt: 'Mohutný starý strom – posúdenie stavu a ošetrenie koruny',
    position: '50% 40%',
  },
  pracaVLese: {
    src: pracaVLese,
    alt: 'Arborista vysoko v korune stromu v lesnom poraste',
    position: '50% 30%',
  },
} as const;

export type PhotoKey = keyof typeof PHOTOS;

export type GalleryCategory = 'vyruby' | 'orezy' | 'les';
export const GALLERY_CATEGORIES: Record<GalleryCategory, string> = {
  vyruby: 'Rizikové výruby',
  orezy: 'Orezy a ošetrenie',
  les: 'Les',
};

/** Galéria – poradie na stránke /galeria/. */
export const GALLERY: { key: PhotoKey; caption: string; category: GalleryCategory }[] = [
  { key: 'lezecVysokyStrom', caption: 'Postupný výrub vysokého stromu', category: 'vyruby' },
  { key: 'rizikovyVyrubSneh', caption: 'Rizikový výrub aj v zime', category: 'vyruby' },
  { key: 'vyrubNadStrechami', caption: 'Výrub nad strechami domov', category: 'vyruby' },
  { key: 'vyrubPriBudove', caption: 'Výrub v tesnej blízkosti budovy', category: 'vyruby' },
  { key: 'orezKoruny', caption: 'Orez stromu stromolezeckou technikou', category: 'orezy' },
  { key: 'staryStrom', caption: 'Starý strom pred ošetrením koruny', category: 'orezy' },
  { key: 'lezeckeVybavenie', caption: 'Certifikované stromolezecké vybavenie', category: 'orezy' },
  { key: 'pracaVLese', caption: 'Práca v lesnom poraste', category: 'les' },
];

/** Fotky v ukážke na domovskej stránke. */
export const GALLERY_TEASER: PhotoKey[] = ['vyrubNadStrechami', 'orezKoruny', 'rizikovyVyrubSneh', 'vyrubPriBudove', 'staryStrom'];
