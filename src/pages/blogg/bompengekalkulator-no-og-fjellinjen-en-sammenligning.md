---
templateKey: blog-post
title: bompengekalkulator.no og Fjellinjen - en sammenligning
date: 2019-10-16T13:02:36.539Z
description: >-
  Det er egentlig bare to bompengekalkulatorer i Norge: Fjellinjen sin og
  bompengekalkulator.no. Vi har gjort en sammenligning.
featuredpost: true
---
Det er egentlig bare to bompengekalkulatorer i Norge: Fjellinjen sin og bompengekalkulator.no. Vi har gjort en sammenligning på tre kjøreruter.

Siden dette ikke er en uavhengig test har vi kun sett på objektive kriterier, nemlig om kalkulatoren gir korrekt beregning eller ikke på en kjørerute. I tabellene under er kun avvikene gjengitt.

**Fra Arendal til Moss med bensindrevet bil:**

| Avvikene            | bompengekalkulator.no | Fjellinjen      |
| ------------------- | --------------------- | --------------- |
| Totalpris           | kr 270,10 (Riktig)    | kr 50,40 (Feil) |
| E18 Mørland         | kr 24,00              | Mangler         |
| E18 Stølen          | kr 11,20              | Mangler         |
| Ferje Horten - Moss | kr 184,50             | Mangler         |

**Fra Kristiansund til Bergen med dieseldrevet bil:**

| Avvikene              | bompengekalkulator.no        | Fjellinjen                   |
| --------------------- | ---------------------------- | ---------------------------- |
| Totalpris             | kr 310,80                    | kr 92,80 (Feil)              |
| Ferje Molde - Vestnes | kr 157,00                    | Mangler                      |
| Ferje Lavik - Oppedal | kr 54,50                     | Mangler                      |
| Åsanemyrane           | (Riktig - passerer ikke)     | kr 24 (Feil - passerer ikke) |
| Sandviken             | kr 0 (Riktig pga timesregel) | kr 24 (Feil pga timesregel)  |

**Fra Sandvika via Majorstuen til Sinsen i rushtiden med elbil**

Her var det ingen avvik mellom kalkulatorene. Begge oppgir riktig pris på 16 kr.

## Konklusjon

Kjører du kun i Oslo og Bærum kan du trygt benytte Fjellinjens kalkulator, men på andre kjøreruter i Norge er ikke takstene nødvendigvis oppdatert, den viser at du passerer bommer du ikke passerer, tar ikke hensyn til timesregler, og tar ikke hensyn til andre brikkerabatter enn 20%.

## Funksjonalitet
Under ser du en sammenligning i funksjonalitet mellom kalkulatorene.

| Funksjonalitet            | Fjellinjen             | bompengekalkulator.no |
| ------------------------- | ---------------------- | --------------------- |
| Oppdaterte takster        | Kun Oslo/Bærum         | Ja                    |
| Ferjepriser               | Nei                    | Ja                    |
| Alternative ruter         | Nei                    | Ja                    |
| Timesregel                | Kun Oslo/Bærum         | Ja                    |
| Brikkerabatt              | 20% flatt              | Faktisk rabatt        |
| Biltype                   | Ja                     | Ja                    |
| Drivstofftype             | Ja                     | Ja                    |
| Returberegning            | Nei                    | Ja                    |
| Flere viapunkter          | Ja                     | Ja                    |
| Takster frem i tid        | Ja, men kun Oslo/Bærum | Nei                   |
| Takster bakover i tid     | Nei                    | Kun i API             |
| Utskriftsvennlig resultat | Nei                    | Ja                    |
| Månedstak                 | Nei                    | Nei                   |
