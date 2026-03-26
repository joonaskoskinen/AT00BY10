# AT00BY10 testiprojekti

Tämä repo sisältää mun tekemät unit-testit AT00BY10-kirjastolle sekä GitHub Actions- ja Coveralls-integraation.

Tavoitteena oli rakentaa toimiva ja järkevä testikokonaisuus kurssitehtävää varten ilman, että koko kirjastoa tarvitsee testata läpi. Samalla ideana oli saada CI-putki toimimaan, coverage näkyviin ja mahdolliset löydetyt bugit raportoituina.

## Mitä tässä testattiin

Testasin valittuja kirjaston julkisia tiedostoja. En ottanut mukaan `.internal`-hakemistoa, koska tehtävänannossa se rajattiin pois.

Mukana testeissä ovat seuraavat tiedostot:

- `src/words.js`
- `src/toNumber.js`
- `src/toFinite.js`
- `src/toInteger.js`
- `src/upperFirst.js`
- `src/slice.js`

Valitsin nämä siksi, että niiden toiminta oli melko selkeä lähdekoodin ja kommenttien perusteella, ja niistä sai rakennettua järkeviä sekä normaaleja että reunatapauksia testaavia testejä.

## Mitä en testannut

Seuraavat jätin tämän testipaketin ulkopuolelle:

- `src/.internal/*`
- `src/map.js`
- `src/reduce.js`
- `src/memoize.js`
- `src/toString.js` osittain

En yrittänyt tehdä tästä täydellistä koko kirjaston testauspakettia, vaan kurssitehtävään sopivan kokonaisuuden, jolla saadaan oleellisia toiminnallisuuksia testattua ja coverage riittävän korkeaksi.

## Testaustapa

Testit on tehty Node.js:n omalla test runnerilla:

```bash
node --test
Coverage tuotetaan c8:lla:


npm run coverage
.internal-hakemisto on rajattu pois coverage-laskennasta, koska tehtävänannossa sitä ei pitänyt sisällyttää testeihin.

Projektin käynnistys lokaalisti

**Asenna riippuvuudet:**

npm install

**Aja testit:**

npm test

**Aja coverage:**

npm run coverage
