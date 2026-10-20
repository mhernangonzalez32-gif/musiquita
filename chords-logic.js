// ============================================================================
// chords-logic.js
// Lógica de búsqueda, normalización de enharmónicos, parseo de texto y capo
// ============================================================================

(function () {
  'use strict';

  const CHROMATIC_NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const OPEN_STRINGS_PITCH = [4, 9, 2, 7, 11, 4]; // E, A, D, G, B, E

  // Etiquetas amigables con enharmónicos para selectores y títulos
  const ENHARMONIC_DISPLAY = {
    'C':  'C',
    'C#': 'C# / Db',
    'D':  'D',
    'D#': 'D# / Eb',
    'E':  'E',
    'F':  'F',
    'F#': 'F# / Gb',
    'G':  'G',
    'G#': 'G# / Ab',
    'A':  'A',
    'A#': 'A# / Bb',
    'B':  'B'
  };

  const NOTE_NAMES_ES = {
    'C':  'Do',
    'C#': 'Do# / Reb',
    'D':  'Re',
    'D#': 'Re# / Mib',
    'E':  'Mi',
    'F':  'Fa',
    'F#': 'Fa# / Solb',
    'G':  'Sol',
    'G#': 'Sol# / Lab',
    'A':  'La',
    'A#': 'La# / Sib',
    'B':  'Si'
  };

  const QUALITY_META = {
    'maj':  { key: 'maj',  shortDisplay: '',     titleSuffix: 'Mayor',      dropdownLabel: 'Mayor (maj)',               nameEs: 'Mayor' },
    'm':    { key: 'm',    shortDisplay: 'm',    titleSuffix: 'm',          dropdownLabel: 'Menor (m)',                 nameEs: 'Menor' },
    '7':    { key: '7',    shortDisplay: '7',    titleSuffix: '7',          dropdownLabel: 'Dominante (7)',             nameEs: 'Séptima Dominante' },
    'maj7': { key: 'maj7', shortDisplay: 'Maj7', titleSuffix: 'Maj7',       dropdownLabel: 'Mayor Séptima (Maj7)',      nameEs: 'Mayor Séptima' },
    'm7':   { key: 'm7',   shortDisplay: 'm7',   titleSuffix: 'm7',         dropdownLabel: 'Menor Séptima (m7)',        nameEs: 'Menor Séptima' },
    'm7b5': { key: 'm7b5', shortDisplay: 'm7b5', titleSuffix: 'm7b5',       dropdownLabel: 'Semi-disminuido (m7b5)',    nameEs: 'Semi-disminuido' },
    'dim7': { key: 'dim7', shortDisplay: 'dim7', titleSuffix: 'dim7',       dropdownLabel: 'Disminuido Séptima (dim7)', nameEs: 'Disminuido Séptima' }
  };

  // Mapa de conversión de cualquier representación de tónica a nota interna con sostenidos
  const ROOT_LOOKUP = {
    'c': 'C',
    'b#': 'C',
    'do': 'C',
    'c#': 'C#',
    'db': 'C#',
    'c# / db': 'C#',
    'c#/db': 'C#',
    'do#': 'C#',
    'reb': 'C#',
    'd': 'D',
    're': 'D',
    'd#': 'D#',
    'eb': 'D#',
    'd# / eb': 'D#',
    'd#/eb': 'D#',
    're#': 'D#',
    'mib': 'D#',
    'e': 'E',
    'fb': 'E',
    'mi': 'E',
    'f': 'F',
    'e#': 'F',
    'fa': 'F',
    'f#': 'F#',
    'gb': 'F#',
    'f# / gb': 'F#',
    'f#/gb': 'F#',
    'fa#': 'F#',
    'solb': 'F#',
    'g': 'G',
    'sol': 'G',
    'g#': 'G#',
    'ab': 'G#',
    'g# / ab': 'G#',
    'g#/ab': 'G#',
    'sol#': 'G#',
    'lab': 'G#',
    'a': 'A',
    'la': 'A',
    'a#': 'A#',
    'bb': 'A#',
    'a# / bb': 'A#',
    'a#/bb': 'A#',
    'la#': 'A#',
    'sib': 'A#',
    'b': 'B',
    'cb': 'B',
    'si': 'B',
    'h': 'B'
  };

  /**
   * Normaliza una tónica escrita por el usuario (ej. "Gb", "f#", "Reb", "F# / Gb")
   * a la representación interna ('C', 'C#', 'D', etc.)
   */
  function resolveEnharmonicRoot(rawRoot) {
    if (!rawRoot) return null;
    const cleaned = String(rawRoot)
      .trim()
      .replace(/♯/g, '#')
      .replace(/♭/g, 'b')
      .toLowerCase();
    return ROOT_LOOKUP[cleaned] || null;
  }

  /**
   * Parsea una consulta libre de texto (ej. "F#m7b5", "Gb maj7", "Do menor", "Bb7", "Cdim7")
   * Devuelve { ok: true, root: 'F#', quality: 'm7b5' } o { ok: false, error: '...' }
   */
  function parseChordQuery(rawInput) {
    if (!rawInput || !String(rawInput).trim()) {
      return { ok: false, empty: true, error: '' };
    }

    // Normalizar símbolos musicales Unicode y espacios extra
    let str = String(rawInput)
      .trim()
      .replace(/♯/g, '#')
      .replace(/♭/g, 'b')
      .replace(/Δ/g, 'maj7')
      .replace(/ø7?/gi, 'm7b5')
      .replace(/[°º]7?/g, 'dim7')
      .replace(/\s+/g, ' ');

    // Soportar formato con barra enharmónica p.ej. "F# / Gb Maj7" o "C#/Db m7"
    str = str.replace(/^([A-Ga-g][#b]?)\s*\/\s*[A-Ga-g][#b]?\s*/i, '$1 ');

    // Intentar extraer raíz en notación latina (do, re, mi, fa, sol, la, si) o anglosajona (A-G)
    const rootRegex = /^(sol|do|re|mi|fa|la|si|[a-gA-G])\s*([#b])?\s*(.*)$/i;
    const match = str.match(rootRegex);
    if (!match) {
      return {
        ok: false,
        error: `No se reconoció la nota raíz en «${rawInput.trim()}». Usa notas como C, F#, Gb, Bb, Do, Re...`
      };
    }

    const baseNote = match[1];
    const accidental = match[2] || '';
    let remainder = (match[3] || '').trim();

    // Caso especial: si el usuario escribió p.ej. "Eb" donde "b" fue capturado como accidental,
    // está bien. Pero si escribió "Cdim7", baseNote="C", accidental="", remainder="dim7".
    // ¿Y si escribió "Cmaj7"? baseNote="C", accidental="", remainder="maj7".
    // ¿Y si escribió "Cb"? baseNote="C", accidental="b", remainder="".
    const rootCandidate = resolveEnharmonicRoot(baseNote + accidental);
    if (!rootCandidate) {
      return {
        ok: false,
        error: `La tónica «${baseNote + accidental}» no es válida.`
      };
    }

    // Normalizar la cualidad restante
    const qRaw = remainder;
    const qLower = qRaw.toLowerCase().replace(/\s+/g, '');

    let qualityKey = null;

    if (
      qLower === '' ||
      qLower === 'maj' ||
      qLower === 'mayor' ||
      qLower === 'major' ||
      qRaw === 'M'
    ) {
      qualityKey = 'maj';
    } else if (
      qLower === 'm' ||
      qLower === 'min' ||
      qLower === 'menor' ||
      qLower === 'minor' ||
      qLower === '-'
    ) {
      qualityKey = 'm';
    } else if (
      qLower === '7' ||
      qLower === 'dom' ||
      qLower === 'dom7' ||
      qLower === 'dominante' ||
      qLower === 'dominante7' ||
      qLower === '7dom'
    ) {
      qualityKey = '7';
    } else if (
      qLower === 'maj7' ||
      qLower === 'mayor7' ||
      qLower === 'major7' ||
      qLower === '7maj' ||
      qRaw.replace(/\s+/g, '') === 'M7'
    ) {
      qualityKey = 'maj7';
    } else if (
      qLower === 'm7' ||
      qLower === 'min7' ||
      qLower === 'menor7' ||
      qLower === 'minor7' ||
      qLower === '-7'
    ) {
      qualityKey = 'm7';
    } else if (
      qLower === 'm7b5' ||
      qLower === 'm7(b5)' ||
      qLower === 'm7-5' ||
      qLower === 'min7b5' ||
      qLower === 'semidisminuido' ||
      qLower === 'semi-disminuido' ||
      qLower === 'halfdiminished'
    ) {
      qualityKey = 'm7b5';
    } else if (
      qLower === 'dim7' ||
      qLower === 'dim' ||
      qLower === 'disminuido' ||
      qLower === 'disminuido7' ||
      qLower === 'dism' ||
      qLower === 'dism7'
    ) {
      qualityKey = 'dim7';
    }

    if (!qualityKey) {
      return {
        ok: false,
        error: `No encontramos la cualidad «${remainder}» para ${ENHARMONIC_DISPLAY[rootCandidate]}. Prueba con: Mayor, m, 7, Maj7, m7, m7b5 o dim7.`
      };
    }

    return {
      ok: true,
      root: rootCandidate,
      quality: qualityKey
    };
  }

  /**
   * Formatea el título amigable del acorde incluyendo enharmónicos (ej. "F# / Gb Maj7")
   */
  function formatEnharmonicTitle(root, quality) {
    const rootDisplay = ENHARMONIC_DISPLAY[root] || root;
    const q = QUALITY_META[quality] || QUALITY_META['maj'];
    if (quality === 'maj') {
      return `${rootDisplay} Mayor`;
    }
    return `${rootDisplay} ${q.titleSuffix}`;
  }

  /**
   * Formatea el subtítulo en español (ej. "Fa# / Solb Mayor Séptima")
   */
  function formatSpanishSubtitle(root, quality) {
    const rootEs = NOTE_NAMES_ES[root] || root;
    const q = QUALITY_META[quality] || QUALITY_META['maj'];
    return `${rootEs} ${q.nameEs}`;
  }

  /**
   * Transpone una nota por N semitonos
   */
  function transposeNote(note, semitones) {
    const idx = CHROMATIC_NOTES.indexOf(note);
    if (idx === -1) return note;
    return CHROMATIC_NOTES[(idx + semitones + 120) % 12];
  }

  /**
   * Calcula los datos de un acorde y sus voicings aplicando el Capo en el traste indicado.
   *
   * Comportamiento con Capo (capoFret > 0):
   * 1. Si capoFret === 0: devuelve el acorde y voicings tal cual sin alteraciones.
   * 2. Si capoFret > 0:
   *    - Transpone automáticamente el nombre del acorde que suena (+capoFret semitonos)
   *      y las notas que suenan en cada cuerda.
   *    - Además, ajusta los diagramas:
   *      * Los trastes mostrados en el diagrama se relajan respecto al capo:
   *        - Si un voicing tiene todos sus trastes pulsados por encima del capo (minFret > capoFret),
   *          también calcula su forma relajada restando capoFret, y en el modo estándar de cejilla
   *          muestra los trastes relativos al capo (relajados) mientras en el mástil completo muestra
   *          la posición real desplazada por el capo.
   *      * Si el capo empuja la posición real del voicing más allá del traste 12
   *        (realStartFret > 12 o maxRealFret > 15), marca el voicing con `exceedsFret12: true`
   *        y un mensaje explicativo amigable.
   */
  function getChordWithCapo(root, quality, capoFret) {
    const data = window.CHORDS_DATA && window.CHORDS_DATA[root] && window.CHORDS_DATA[root][quality];
    if (!data) return null;

    const capo = Math.max(0, Math.min(12, parseInt(capoFret, 10) || 0));
    const soundingRoot = transposeNote(root, capo);
    // Qué forma habría que tocar con este capo para que suene la tónica seleccionada originalmente:
    const relaxedShapeRoot = transposeNote(root, -capo);

    const processedVoicings = data.voicings.map((v, idx) => {
      // Si no hay capo, retornar copia exacta
      if (capo === 0) {
        const numericFrets = v.frets.filter(f => typeof f === 'number');
        const minRealFret = numericFrets.length ? Math.min(...numericFrets) : 0;
        const maxRealFret = numericFrets.length ? Math.max(...numericFrets) : 0;
        return {
          ...v,
          index: idx,
          displayStartFret: v.startFret,
          displayFrets: [...v.frets],
          displayBarre: v.barre ? { ...v.barre } : null,
          realFrets: [...v.frets],
          realStartFret: v.startFret,
          minRealFret,
          maxRealFret,
          soundingNotes: [...v.notes],
          exceedsFret12: false,
          exceedsMessage: null,
          capoApplied: 0
        };
      }

      // Con capo > 0:
      // 1. Evaluar si el voicing original puede relajarse directamente porque ya está en trastes >= capo
      //    o si es una forma que se apoya/desplaza desde el capo.
      const activeFrets = v.frets.filter(f => f !== 'x');
      const minOrigFret = activeFrets.length ? Math.min(...activeFrets) : 0;

      // Posición real en el diapasón al tocar esta forma con el capo en `capo`:
      const realFrets = v.frets.map(f => (f === 'x' ? 'x' : f + capo));
      const realStartFret = v.startFret === 0 ? 0 : v.startFret + capo;
      const numericReal = realFrets.filter(f => typeof f === 'number' && f > capo);
      const minRealFret = numericReal.length ? Math.min(...numericReal) : capo;
      const maxRealFret = numericReal.length ? Math.max(...numericReal) : capo;

      // Si el voicing original está completamente por encima del traste del capo (minOrigFret >= capo),
      // sus trastes relativos al capo se relajan restando `capo` (y si un traste coincide con `capo`,
      // queda como 0 = cuerda al aire sobre el capo).
      // Si el voicing original usaba trastes menores al capo (ej. acordes abiertos),
      // al colocar el capo la forma se toca a partir del capo (trastes relajados respecto al capo = v.frets).
      let displayFrets;
      let displayStartFret;
      let displayBarre = v.barre ? { ...v.barre } : null;
      let displayFingers = [...v.fingers];
      let relaxedMode = false;

      if (minOrigFret >= capo && v.startFret > 0) {
        // Los trastes del diagrama se relajan respecto al capo restando `capo`
        relaxedMode = true;
        displayFrets = v.frets.map(f => (f === 'x' ? 'x' : f - capo));
        const posFrets = displayFrets.filter(f => typeof f === 'number' && f > 0);
        const hasZero = displayFrets.includes(0);
        if (posFrets.length === 0 || hasZero || Math.max(...posFrets) <= 4) {
          displayStartFret = 0;
        } else {
          displayStartFret = Math.min(...posFrets);
        }
        // Si la cejilla caía exactamente en el traste del capo, el capo hace la cejilla
        if (displayBarre) {
          const newBarreFret = displayBarre.fret - capo;
          if (newBarreFret <= 0) {
            displayBarre = null;
          } else {
            displayBarre = { ...displayBarre, fret: newBarreFret };
          }
        }
        // Donde el traste relajado pasó a ser 0 (cubierto por el capo), no se requiere dedo
        displayFingers = displayFingers.map((fg, sIdx) => (displayFrets[sIdx] === 0 ? null : fg));
      } else {
        // La forma parte del capo como cejuela relativa (trastes relajados respecto al capo)
        displayFrets = [...v.frets];
        displayStartFret = v.startFret;
      }

      // Notas que suenan realmente con el capo puesto
      const soundingNotes = v.notes.map(n => transposeNote(n, capo));

      // Verificar si el capo empuja el acorde más allá del traste 12
      const effectiveLowestFret = v.startFret === 0 ? capo + 1 : v.startFret + capo;
      const exceedsFret12 = effectiveLowestFret > 12 || maxRealFret > 15;
      const exceedsMessage = exceedsFret12
        ? `Con el capo en el traste ${capo}, esta posición se desplaza hasta los trastes ${effectiveLowestFret}–${maxRealFret} (más allá del traste 12), por lo que resulta incómoda en la mayoría de guitarras.`
        : null;

      return {
        ...v,
        index: idx,
        fingers: displayFingers,
        displayStartFret,
        displayFrets,
        displayBarre,
        realFrets,
        realStartFret: effectiveLowestFret,
        minRealFret,
        maxRealFret,
        soundingNotes,
        relaxedMode,
        exceedsFret12,
        exceedsMessage,
        capoApplied: capo
      };
    });

    return {
      root,
      quality,
      capo,
      soundingRoot,
      relaxedShapeRoot,
      baseTitle: formatEnharmonicTitle(root, quality),
      baseSubtitle: formatSpanishSubtitle(root, quality),
      soundingTitle: formatEnharmonicTitle(soundingRoot, quality),
      soundingSubtitle: formatSpanishSubtitle(soundingRoot, quality),
      relaxedShapeTitle: formatEnharmonicTitle(relaxedShapeRoot, quality),
      voicings: processedVoicings
    };
  }

  window.ChordsLogic = {
    CHROMATIC_NOTES,
    OPEN_STRINGS_PITCH,
    ENHARMONIC_DISPLAY,
    NOTE_NAMES_ES,
    QUALITY_META,
    resolveEnharmonicRoot,
    parseChordQuery,
    formatEnharmonicTitle,
    formatSpanishSubtitle,
    transposeNote,
    getChordWithCapo
  };
})();
