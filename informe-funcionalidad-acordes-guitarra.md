# Informe de funcionalidad — Sitios y herramientas de acordes de guitarra

> Investigación sobre herramientas web/app que permiten **consultar, construir y analizar acordes de guitarra**: diccionarios, buscadores, generadores de diagramas, identificadores inversos (de forma a nombre), inversiones y "posibilidades de tocar" (voicings).

---

## 1. Resumen ejecutivo

El ecosistema de herramientas de acordes de guitarra se organiza en **cuatro grandes categorías funcionales** que se complementan:

1. **Diccionario / buscador por nombre** → introduces `Cmaj7` y obtienes diagramas.
2. **Generador / constructor de diagramas** → defines acorde + afinación + capo y la herramienta dibuja el diagrama (muchas veces como PNG/SVG).
3. **Identificador inverso (reverse lookup / "chord namer")** → marcas los trastes que estás pulsando y la herramienta te dice qué acorde es, con todas sus lecturas alternativas.
4. **Analizador armónico** → explica *por qué* es ese acorde: notas, intervalos, inversiones, tensiones, slash chords y funcionalidad dentro de una progresión.

Además, casi todos los sitios modernos añaden: **audio (reproducción), transposición, capo, afinaciones alternativas, y exportación/compartir**. Los más avanzados incluyen **micrófono / detección de pitch**, **MIDI**, y **motores de "voicings" que optimizan transiciones entre acordes**.

---

## 2. Clasificación funcional

### 2.1 Diccionario y buscador por nombre de acorde
El flujo clásico: **nombre → diagrama(s)**.

- **JGuitar — Chord Search** (`jguitar.com/chordsearch`): introduces uno o varios símbolos separados por comas y dibuja diagramas. Tiene un "chord dictionary" matricial como referencia rápida.
- **ChordBank** (`chordbank.com`): miles de acordes curados por expertos, organizados por tipo (mayores, menores, séptimas). Muy orientado a principiantes con lecciones.
- **ChordSpell** (`chordspell.com`): identificador + diccionario; muestra notación en pentagrama, teclado de piano y diagramas de guitarra. 100% gratis con ads.
- **IndiPiano Chord Dictionary** (`indipiano.com`): 950+ combinaciones de acordes y claves, con **CAGED shapes**, inversions y slash chords.
- **guitar-chord.org**: diccionario clásico con páginas por acorde e inversiones (C/E, C/G, Cmaj7/B, etc.), incluyendo *alternative chord names* (equivalentes armónicos) y progresiones de ejemplo.
- **Oolimo** (`oolimo.com`): buscador por root + tipo, con "prev/next" para recorrer varias posiciones; botón de arpegio que muestra cómo la forma encaja en un patrón de arpegio por todo el mástil.

### 2.2 Generador / constructor de diagramas
Aquí la funcionalidad clave es **salida gráfica reutilizable** (para creadores de contenido, profesores, tablaturas).

- **Oolimo — Fretboard Diagram Builder**: genera diagramas de acordes → **archivo PNG** para compositores, profesores y creadores de video/contenido.
- **fretboard (christophemarois/fretboard)** — PWA con Vue: SVG o PNG, soporte de cejilla (nut), digitaciones opcionales, funciones de nota (1-3-b7-5), display de root, nombres de cuerda, **número de cuerdas variable**, mínimo de trastes, **catálogo de shapes de ukulele y guitarra con transposición**, uso offline.
- **jasperbernaers.com — Chord Chart Generator**: buscador de acordes + **creador de "song charts"** (letra con acordes entre corchetes → diagrama por acorde), transposición, Nashville/Roman numerals, reproductor de progresiones, impresión/PDF.

### 2.3 Identificador inverso (de forma a nombre)
El flujo "revés": **tú marcas los trastes → la herramienta nombra el acorde**.

- **Oolimo — Chord Analyzer**: análisis armónico profundo. Explica la teoría de construcción del símbolo (root, calidad, extensión, tensiones alteradas, slash). Devuelve el nombre sintácticamente correcto para cada inversión, sin mensaje de "chord unknown". Soporta afinaciones abiertas, enharmónicos, doble alteración.
- **Semicord** (`semicord.com`): tocas en piano/guitarra/ukulele, MIDI o **micrófono**. Compara contra **37 fórmulas de acordes** probando cada nota como root. Devuelve inversiones como slash chords y lecturas alternativas bajo "Also". Explica su criterio de ranking (root en el bajo > tipo común > todas las notas explicadas).
- **chords.lol — Chord Finder**: dos entradas (teclas de piano o trastes de guitarra); reduce a pitch classes y detecta contra un catálogo de **360 acordes**. Reporta inversión, notas con grados de escala, audio y links por instrumento.
- **Fretscape** (`fretscape.com`): reverse lookup con **análisis armónico real** (no base de datos). Muestra todas las lecturas válidas (un C mayor también puede leerse como G6sus, Emadd9, Am7…). Ajusta por afinación/capo.
- **frettler (philwhiles)** — CLI en Java: `find` por notas o por digitación (`x,0,2,2,1,0`), y `lookup` con reglas **strict / relaxed / loose**.
- **getchord**: modo "reverse" dibujando en el mástil; opción de "Allow usual omissions" (completa el acorde automáticamente) y muestra todas las formas de completar digitaciones de 2-3 notas.
- **Harmonious — Interactive Fret Search**: busca por notas y muestra secciones **Match, Inversion, Suggestions, See Also, Compatible, Transposition Of**.
- **Chord and Fret** (`chordandfret.app`): motor que devuelve lecturas **Exact, Inversion, Slash-bass y Theoretical**, con intervalos y nota de bajo. Sonido por síntesis física (Karplus-Strong).

### 2.4 Inversiones y "slash chords"
Funcionalidad transversal casi universal en los analizadores serios.

- **guitar-chord.org**: páginas dedicadas a cada inversión (C/E, C/G, Cmaj7/B, D/F#, G/B…), con teoría, digitaciones alternativas, nombres equivalentes y progresiones típicas.
- **IndiPiano**: panel de inversiones con root position + 1ª, 2ª y 3ª inversión, etiquetadas por nota de bajo, con audio.
- **Fachords**: tabla para seleccionar cualquiera de las inversiones disponibles de una misma forma.
- **Oolimo**: selecciones de inversión bajo el diagrama, con notación slash y opción de mover el root a su equivalente enharmónico.
- **Semicord / chords.lol**: la nota más baja define la inversión; C-E-G = C, E-G-C = C/E, G-C-E = C/G.

### 2.5 Voicings y "posibilidades de tocar"
El concepto más avanzado: **no un solo diagrama, sino todas las formas jugables** y cómo elegir la mejor.

- **Fretscape**: "Full Chord Explorer" con **cientos de voicings por acorde** en todo el mástil. Filtros por dificultad, **fret span**, barra, inversión, dedos, cuerdas. Múltiples digitaciones por voicing **calificadas por dificultad** (con tags que explican por qué una es más fácil). **Chord Transition Analysis** mide cada cambio en **40+ factores** (dedos ancla, recorrido de mano, cambios de barra). **Progression Builder** encuentra la forma más suave de tocar una progresión.
- **Chord and Fret**: 218.399 diagramas de todo el mástil + inversiones, 492 acordes, agrupados por bajo, con dificultad y grados.
- **Fachords**: mapa de acordes con "shell chords" (omitir la 5ª), ejercicio de formar Cmaj7 en múltiples posiciones, y tutorial de variaciones de C.
- **JGuitar — Chord Calculator**: **determina matemáticamente todas las digitaciones posibles** de un acorde según opciones (root, chord, bass, máx. huecos entre cuerdas, dedos, sharps/flats, "siempre usar cuerdas abiertas", etiquetas por letras o grados de escala).
- **CAGED**: varios sitios computan el sistema CAGED desde una librería de voicings (e.g. guitarwarrior.com/caged): 5 shapes móviles que se encadenan por todo el mástil, taggeados para 7 calidades de acorde × 12 raíces = 420 voicings.

### 2.6 Transposición, capo y afinación
- **Ultimate Guitar**: herramientas de tab con **Transpose** (cambia la tonalidad y puede volver acordes de barra en abiertos), **Use flats** (solo notación #/b), **Pitch** (desplaza audio sin cambiar digitación; útil con afinaciones alternativas), **capo** (lecciones dedicadas), autoscroll, loop, tempo, metrónomo.
- **Fachords**: coloca capo en cualquier traste y transpone automáticamente; afinaciones (estándar, drop D, abiertas…); **modo zurdo**; detección de pitch con micrófono.
- **Semicord / Oolimo / Fretscape / Chord and Fret**: selección de afinaciones (estándar, DADGAD, Open G, Drop D…) y afinaciones personalizadas.
- **jasperbernaers**: Transpose −/+ y Display a Nashville o Roman numerals.

### 2.7 Audio, entrada y extras
- **Reproducción de audio**: casi todos (Oolimo, Fachords, IndiPiano, jasperbernaers, Semicord con síntesis, Chord and Fret con Karplus-Strong).
- **Micrófono / detección de notas**: Semicord (análisis de espectro 50 Hz–5 kHz, primeros 8 parciales de la serie armónica), Fachords (pitch detection).
- **MIDI**: Semicord acepta teclado MIDI y **archivos .mid** (lee en el navegador, nunca sube el archivo).
- **Modo zurdo**: Fachords, Oolimo, Ultimate Guitar, Fretscape.
- **Exportar/compartir**: fretboard (SVG/PNG), Oolimo (PNG), Fachords (descargar imagen o embed), jasperbernaers (PDF/print/share link), ChordBank (TabBank con impresión).

---

## 3. Tabla comparativa de sitios

| Sitio | Diccionario | Builder/PNG | Reverse lookup | Inversiones | Voicings múltiples | Transposición/Capo | Afinaciones alt. | Audio | Mic/MIDI | Offline |
|---|---|---|---|---|---|---|---|---|---|---|
| **JGuitar** | ✅ | — | ✅ (chord namer) | ✅ | ✅ (calculator) | ✅ | ✅ | ✅ | — | — |
| **Oolimo** | ✅ | ✅ (PNG) | ✅ (Analyzer) | ✅ | ✅ | ✅ | ✅ | ✅ | — | App |
| **Fretscape** | ✅ | — | ✅ | ✅ | ✅✅ (40+ factores) | ✅ | ✅ | ✅ | — | App |
| **Chord and Fret** | ✅ | — | ✅ | ✅ | ✅ | ✅ | ✅ (16) | ✅ | — | ✅ |
| **Semicord** | ✅ | — | ✅ | ✅ | Parcial | Parcial | ✅ | ✅ | ✅✅ | — |
| **Fachords** | ✅ | ✅ (img/embed) | ✅ (Identifier) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ (mic) | — |
| **ChordBank** | ✅ | ✅ (TabBank) | ✅ (reverse finder) | Parcial | ✅ | ✅ | Parcial | ✅ | — | App |
| **IndiPiano** | ✅ (950+) | — | Parcial | ✅ | ✅ (CAGED) | ✅ | — | ✅ | — | — |
| **chords.lol** | ✅ (360) | — | ✅ | ✅ | — | — | — | ✅ | — | — |
| **guitar-chord.org** | ✅ | — | — | ✅✅ (páginas) | ✅ (movables) | — | — | ✅ | — | — |
| **jasperbernaers** | ✅ | ✅ (PDF/print) | ✅ (reverse) | — | — | ✅ (Nashville) | — | ✅ | — | — |
| **Ultimate Guitar** | ✅ | — | — | Parcial | Parcial | ✅✅ | — | ✅ (backing) | — | App |

---

## 4. Cómo se "arman" estas herramientas (lógica técnica)

### 4.1 De nombre a diagrama (forward)
1. **Parseo del símbolo**: se descompone en **root + calidad + extensión + (bass)**. Ejemplo: `Cmaj7/E` → root C, calidad maj7, bass E.
2. **Cálculo de notas**: se aplica la **fórmula de intervalos** (C maj7 = 1-3-5-7 → C, E, G, B).
3. **Búsqueda de digitaciones**: se buscan posiciones en el mástil (según afinación) que contengan las notas requeridas. Algoritmos típicos:
   - **Base de datos curada** de fingerings (JGuitar, frettler, Oolimo, ChordBank).
   - **Fuerza bruta** sobre todas las combinaciones posibles de trastes (artículo de Manohar Vanga: "Deriving Guitar Theory in ~400 Lines of Python"; JGuitar "determina matemáticamente todas las digitaciones posibles").
   - **Librería de voicings con tags CAGED** (guitarwarrior, IndiPiano).

### 4.2 De forma a nombre (reverse / identificador)
1. **Entrada**: conjunto de notas (traste por cuerda, teclas, MIDI, o picos espectrales del mic).
2. **Reducción a pitch classes** (se ignoran octavas).
3. **Detección**: se comparan contra **fórmulas de acordes** (Semicord usa 37, chords.lol 360 acordes, frettler rules strict/relaxed/loose), probando **cada nota como posible root**.
4. **Ranking de lecturas**: se prefieren lecturas con el root en el bajo, tipos comunes sobre raros, y acordes que expliquen todas las notas antes que slash chords.
5. **Inversión**: la nota más baja define la inversión; se reporta como slash chord.

### 4.3 Inversiones y slash chords
- Un acorde y sus inversiones **comparten exactamente las mismas notas**; solo cambia el orden (la nota de bajo).
- C-E-G = C (root position); E-G-C = C/E (1ª inversión); G-C-E = C/G (2ª inversión).
- Un bajo que **no pertenece** al acorde también genera slash chord: A bajo G-B-D = G/A.
- Los analizadores serios muestran **lecturas alternativas** (C-E-G puede leerse como Am7 si A es la baja, o C6 si C lo es).

### 4.4 Voicings y "posibilidades de tocar"
- El mismo acorde aparece en **muchas posiciones** del mástil (las mismas 3-4 notas se repiten por todo el diapasón).
- Herramientas avanzadas **generan, filtran y rankean** voicings por:
  - Dificultad (dedos, stretch, barra).
  - **Transiciones**: mantener dedos ancla, minimizar recorrido de mano, elegir voicings que "fluyan" (Fretscape con 40+ factores).
- El sistema **CAGED** reduce el problema a 5 shapes móviles que se encadenan por todo el mástil; algunas herramientas lo computan desde la librería de voicings en CI (recomputado en cada cambio).

### 4.5 Calidad/score de digitaciones
- Existen heurísticas que **puntúan digitaciones** combinando un score anatómico (facilidad física) con scores de calidad sonora (plenitud). El resultado pondera qué voicings son "más fáciles y suenan más llenos".

---

## 5. Hallazgos y recomendaciones

### Hallazgos
- **El reverse lookup es la funcionalidad más diferenciadora**: los mejores (Oolimo, Fretscape, Semicord) no usan una simple tabla, sino **análisis armónico real** que reporta *todas* las lecturas válidas.
- **Las inversiones se resuelven por la nota de bajo** y casi siempre se presentan como slash chords; los sitios serios ofrecen *lecturas alternativas* (C6/Am7, etc.).
- **Los voicings múltiples + optimización de transiciones** es la frontera actual (Fretscape lidera con 40+ factores de análisis de cambio).
- **La salida gráfica (PNG/SVG/PDF)** es clave para profesores y creadores (Oolimo, fretboard, jasperbernaers).
- **Casi todo corre en el navegador** y muchos son gratuitos con ads; las apps de pago añaden **offline, sin ads y más afinaciones**.
- **Micrófono y MIDI** están emergiendo (Semicord, Fachords) como entrada natural.

### Recomendaciones según caso de uso
| Necesidad | Herramienta recomendada |
|---|---|
| Consulta rápida de un acorde | JGuitar, ChordBank, guitar-chord.org |
| Entender la teoría a fondo | Oolimo, Semicord |
| Identificar un acorde que encontraste de oído | Fretscape, Semicord, Oolimo |
| Generar diagramas para material propio | Oolimo (PNG), fretboard, jasperbernaers (PDF) |
| Elegir voicings fáciles / transiciones suaves | Fretscape |
| Crear tablaturas con diagramas | ChordBank TabBank, jasperbernaers |
| Tocar canciones con transposición/capo | Ultimate Guitar |
| Trabajar offline | Chord and Fret, Oolimo App |

---

## 6. Fuentes consultadas

- Oolimo — https://www.oolimo.com/en/guitar-chords/analyze y https://oolimo.com/
- Semicord — https://semicord.com/
- chords.lol — https://www.chords.lol/chord-finder
- Fachords — https://www.fachords.com/guitar-chord/
- ChordSpell — https://chordspell.com/
- IndiPiano — https://indipiano.com/chord-dictionary/
- Fretscape — https://fretscape.com/ y https://fretscape.com/features/reverse-lookup
- Chord and Fret — https://chordandfret.app/
- ChordBank — https://chordbank.com/
- JGuitar — https://jguitar.com/chordsearch , /chorddictionary.jsp , /chord , /tabmap
- guitar-chord.org — https://www.guitar-chord.org/c-inversions.html , /movable-shapes.html
- jasperbernaers — https://jasperbernaers.com/chord-chart-generator/
- Ultimate Guitar (soporte) — https://help.ultimate-guitar.com/en/articles/14880177-what-are-tab-tools-and-how-to-use-them
- fretboard (GitHub) — https://github.com/christophemarois/fretboard
- frettler (GitHub) — https://github.com/philwhiles/frettler
- Harmonious — https://harmoniousapp.net/p/52/Interactive-Fret-Search
- Guitar Warrior (CAGED computado) — https://guitarwarrior.com/caged
- "Deriving Guitar Theory in ~400 Lines of Python" — https://www.mvanga.com/blog/deriving-guitar-theory-in-400-lines-of-python
- getchord docs — https://www.getchord.com/docs/android/chords/

---

*Informe generado a partir de investigación web sobre herramientas de acordes de guitarra (diccionarios, buscadores, constructores de diagramas, identificadores inversos, inversiones y voicings).*
