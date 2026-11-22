# Stromales – web

Web pre **Stromales s. r. o.** (Ing. Milan Mičúch) – arboristika a lesné hospodárstvo.
Postavený na [Astro](https://astro.build) + Tailwind CSS 4, statický výstup, všetko po slovensky.
Svetlý aj tmavý režim, optimalizované fotky (WebP), SEO a štruktúrované dáta.

## Spustenie lokálne

```bash
npm install
npm run dev      # http://localhost:4321/strom-a-les/
npm run build    # výstup v dist/
npm run preview  # náhľad hotového webu
```

## Kde sa čo mení

| Čo | Súbor |
|---|---|
| Telefón, e-mail, IČO, DIČ, kľúč formulára, sociálne siete, `indexable` | `src/config.ts` (`SITE`) |
| Čísla certifikátov ETW / OLH / LRM | `src/config.ts` (`CERTIFICATES`) |
| Menu | `src/config.ts` (`NAV`) |
| Služby (každá má vlastnú podstránku) | `src/data/services.ts` |
| Fotky, popisy, galéria | `src/data/images.ts` + `src/assets/foto/` |
| Časté otázky | `src/data/faq.ts` (služby majú vlastné FAQ v `services.ts`) |
| Farby svetlého a tmavého režimu | `src/styles/global.css` (premenné v `:root` a `.dark`) |
| Logo, favicon, obrázok na zdieľanie | `public/brand/`, `public/favicon.*`, `public/og-image.jpg` |
| Doména / base path | `astro.config.mjs` |

Vyhľadajte v projekte `TODO` – nájdete všetko, čo ešte čaká na údaje.

### Nová fotka
1. Ulož ju do `src/assets/foto/` (ideálne originál z mobilu, nie cez WhatsApp).
2. V `src/data/images.ts` pridaj import a záznam do `PHOTOS` (popis `alt` po slovensky).
3. Pridaj ju do `GALLERY` s kategóriou (`vyruby`, `orezy`, `les`) – na stránke Galéria sa objaví aj vo filtri.
4. Službe môžeš fotku priradiť v `src/data/services.ts` (`photo: 'kluc'`).

### Kontaktný formulár
Používa [Web3Forms](https://web3forms.com) (zadarmo, bez servera). Na web3forms.com zadaj
`info@stromales.sk`, prístupový kľúč príde e-mailom – vlož ho do `web3formsKey` v `src/config.ts`.
Správy potom chodia priamo do schránky info@stromales.sk na Websupporte, „Odpovedať“ ide
rovno zákazníkovi. Bez kľúča formulár otvorí e-mailového klienta návštevníka.

### Tmavý režim
Prepínač je v hlavičke. Predvolene sa riadi nastavením systému, voľba sa uloží v prehliadači.
Farby sú len v CSS premenných v `src/styles/global.css`.

## Nasadenie – GitHub Pages

Repo: `git@github.com:martin-michalek/strom-a-les.git` → dočasne beží na
**https://martin-michalek.github.io/strom-a-les/**

```bash
git branch -M main
git add -A
git commit -m "Web Stromales"
git push -u origin main
```

GitHub → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
Workflow `.github/workflows/deploy.yml` postaví a nasadí web pri každom pushi do `main` (~2 min).
Repo musí byť **verejné** (GitHub Pages na bezplatnom účte).

Kým web beží na `github.io`, má `indexable: false` → stránky majú `noindex`, aby Google
neindexoval dočasnú adresu.

### Prepnutie na stromales.sk (DNS vo Websupporte)

1. `astro.config.mjs`: `SITE_URL = 'https://stromales.sk'`, `BASE = '/'`
2. `src/config.ts`: `indexable: true`
3. Vytvor `public/CNAME` s obsahom `stromales.sk`
4. Websupport → DNS záznamy pre stromales.sk:
   - `@` → A `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` → CNAME `martin-michalek.github.io.`
   - **MX, SPF (TXT), DKIM a autodiscover záznamy NEMEŇ** – inak prestane chodiť pošta na info@stromales.sk
   - pôvodné A/AAAA záznamy pre `@` a `www` (parkovacia stránka Websupportu) odstráň
5. GitHub → Settings → Pages → Custom domain `stromales.sk` + **Enforce HTTPS**
6. Skontroluj, že e-mail stále chodí (pošli si testovaciu správu).

Všetky interné odkazy idú cez `u()` z `src/config.ts`, takže zmena `BASE` ich prepíše všade.

## SEO checklist (po spustení domény)

- [x] Unikátny title + description, canonical, Open Graph obrázok
- [x] JSON-LD: `LocalBusiness` (+ certifikáty, SK a CZ), `Service` + `BreadcrumbList`, `FAQPage`
- [x] `sitemap-index.xml`, `robots.txt`, `lang="sk"`
- [ ] `indexable: true` po prepnutí domény
- [ ] **Google firemný profil** – odkaz doplniť do `googleBusiness` v `src/config.ts`
- [ ] Google Search Console – overiť doménu (TXT záznam vo Websupporte), odoslať `sitemap-index.xml`, požiadať o indexáciu
- [ ] Čísla certifikátov, DIČ, ďalšie fotky (les, palivové drevo, portrét)
