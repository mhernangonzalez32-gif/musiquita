// ============================================================================
// chords-render.js
// Renderizado de diagramas SVG (diagrama principal, variaciones y mástil completo),
// cálculo automático de tónica (mod 12), visualización de intervalos/dedos/notas
// y conexión interactiva con Diapasón y Círculo de Quintas.
// ============================================================================

(function () {
  'use strict';

  const STRING_NAMES = ['E', 'A', 'D', 'G', 'B', 'E'];
  const SVG_NS = 'http://www.w3.org/2000/svg';

  function svgEl(tag, attrs, textContent) {
    const node = document.createElementNS(SVG_NS, tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (v !== undefined && v !== null) {
          node.setAttribute(k, String(v));
        }
      }
    }
    if (textContent !== undefined && textContent !== null) {
      node.textContent = String(textContent);
    }
    return node;
  }

  /**
   * Ajusta dinámicamente el tamaño de fuente dentro del círculo SVG
   * según la cantidad de caracteres ('1' vs 'b3' vs 'bb7') para evitar desbordes.
   */
  function getDynamicDotFontSize(labelText, isVariation) {
    const len = String(labelText || '').length;
    if (isVariation) {
      if (len <= 1) return 10.5;
      if (len === 2) return 8.8;
      return 7.4;
    } else {
      if (len <= 1) return 13;
      if (len === 2) return 11;
      return 9.2;
    }
  }

  /**
   * Genera el SVG de un diagrama de acorde (principal o de variación).
   *
   * Incluye:
   * - Cálculo automático mod 12 para resaltar la Tónica (Raíz) en color rosa (#f43f5e).
   * - Visualización configurable dentro de los puntos: Dedos (1-4), Intervalos (1, b3, 5, b7),
   *   Notas (C, E, G) o puntos limpios, con ajuste dinámico de fuente.
   */
  function createChordDiagramSVG(voicing, options = {}) {
    const isVariation = Boolean(options.isVariation);
    // Modo de etiqueta en puntos: 'fingers' | 'intervals' | 'notes' | 'none'
    const dotLabelMode = options.dotLabelMode || (isVariation ? 'fingers' : 'none');
    const soundingRoot = options.soundingRoot || 'C';
    const qualityKey = options.qualityKey || 'maj';

    const {
      isRootAtStringFret,
      getNoteAtStandardStringFret,
      getIntervalLabel
    } = window.ChordsLogic;

    const frets = voicing.displayFrets || voicing.frets;
    const realFrets = voicing.realFrets || frets;
    const fingers = voicing.fingers || [null, null, null, null, null, null];
    const barre = voicing.displayBarre !== undefined ? voicing.displayBarre : voicing.barre;
    const startFret = voicing.displayStartFret !== undefined ? voicing.displayStartFret : voicing.startFret;
    const baseFret = startFret === 0 ? 1 : startFret;

    // Dimensiones del lienzo SVG
    const width = isVariation ? 190 : 280;
    const height = isVariation ? 245 : 350;
    const padLeft = isVariation ? 36 : 52;
    const padRight = isVariation ? 20 : 30;
    const padTop = isVariation ? 34 : 46;
    const padBottom = isVariation ? 40 : 54;

    const gridWidth = width - padLeft - padRight;
    const gridHeight = height - padTop - padBottom;
    const numStrings = 6;
    const numFrets = 5;
    const stringSpacing = gridWidth / (numStrings - 1);
    const fretSpacing = gridHeight / numFrets;

    const svg = svgEl('svg', {
      viewBox: `0 0 ${width} ${height}`,
      class: isVariation ? 'chord-svg chord-svg--variation' : 'chord-svg chord-svg--main',
      role: 'img',
      'aria-label': `Diagrama del acorde ${voicing.label || ''}`
    });

    // Fondo claro tipo papel/tarjeta para alto contraste
    svg.appendChild(svgEl('rect', {
      x: 0,
      y: 0,
      width,
      height,
      rx: isVariation ? 10 : 14,
      fill: '#f8fafc'
    }));

    // 1. Nombres de cuerda en la parte superior: E A D G B E
    for (let s = 0; s < numStrings; s++) {
      const x = padLeft + s * stringSpacing;
      svg.appendChild(svgEl('text', {
        x,
        y: isVariation ? 20 : 28,
        'text-anchor': 'middle',
        'dominant-baseline': 'middle',
        fill: '#334155',
        'font-size': isVariation ? 11 : 14,
        'font-weight': '700',
        'font-family': 'system-ui, -apple-system, sans-serif'
      }, STRING_NAMES[s]));
    }

    // 2. Líneas horizontales de los trastes (0 a 5)
    for (let f = 0; f <= numFrets; f++) {
      const y = padTop + f * fretSpacing;
      if (f === 0 && startFret === 0) {
        // Cejuela superior extra gruesa para acordes abiertos (traste 0)
        svg.appendChild(svgEl('rect', {
          x: padLeft - 1,
          y: y - (isVariation ? 3 : 4),
          width: gridWidth + 2,
          height: isVariation ? 6 : 8,
          rx: 1.5,
          fill: '#0f172a'
        }));
      } else {
        svg.appendChild(svgEl('line', {
          x1: padLeft,
          y1: y,
          x2: padLeft + gridWidth,
          y2: y,
          stroke: f === 0 ? '#1e293b' : '#94a3b8',
          'stroke-width': f === 0 ? 2.5 : 1.5
        }));
      }
    }

    // 3. Líneas verticales de las 6 cuerdas (de 6ª más gruesa a 1ª más fina)
    for (let s = 0; s < numStrings; s++) {
      const x = padLeft + s * stringSpacing;
      const strokeWidth = isVariation
        ? 1.1 + (5 - s) * 0.22
        : 1.3 + (5 - s) * 0.3;
      svg.appendChild(svgEl('line', {
        x1: x,
        y1: padTop,
        x2: x,
        y2: padTop + gridHeight,
        stroke: '#334155',
        'stroke-width': strokeWidth.toFixed(2)
      }));
    }

    // 4. Numeración de trastes a la izquierda de la cuadrícula
    if (!isVariation) {
      for (let f = 1; f <= numFrets; f++) {
        const fretNum = baseFret + f - 1;
        const yCenter = padTop + (f - 0.5) * fretSpacing;
        const isFirstShifted = startFret > 0 && f === 1;
        svg.appendChild(svgEl('text', {
          x: padLeft - 18,
          y: yCenter,
          'text-anchor': 'middle',
          'dominant-baseline': 'middle',
          fill: isFirstShifted ? '#0f172a' : '#64748b',
          'font-size': isFirstShifted ? 15 : 13,
          'font-weight': isFirstShifted ? '800' : '600',
          'font-family': 'system-ui, -apple-system, sans-serif'
        }, String(fretNum)));
      }
    } else if (startFret > 0) {
      const yFirstCenter = padTop + 0.5 * fretSpacing;
      svg.appendChild(svgEl('text', {
        x: padLeft - 14,
        y: yFirstCenter,
        'text-anchor': 'middle',
        'dominant-baseline': 'middle',
        fill: '#0f172a',
        'font-size': 13,
        'font-weight': '800',
        'font-family': 'system-ui, -apple-system, sans-serif'
      }, String(startFret)));
    }

    // 5. Barra / Cejilla móvil (si aplica)
    if (barre && typeof barre.fret === 'number' && barre.fret > 0) {
      const relFret = barre.fret - baseFret + 1;
      if (relFret >= 1 && relFret <= numFrets) {
        const fromIdx = Math.max(0, Math.min(5, barre.from));
        const toIdx = Math.max(0, Math.min(5, barre.to));
        const x1 = padLeft + Math.min(fromIdx, toIdx) * stringSpacing;
        const x2 = padLeft + Math.max(fromIdx, toIdx) * stringSpacing;
        const yCenter = padTop + (relFret - 0.5) * fretSpacing;
        const barHeight = isVariation ? 10 : 14;

        // Arco curvo superior de cejilla
        const arcOffset = isVariation ? 11 : 16;
        const midX = (x1 + x2) / 2;
        const arcPath = `M ${x1} ${yCenter - 2} Q ${midX} ${yCenter - arcOffset} ${x2} ${yCenter - 2}`;
        svg.appendChild(svgEl('path', {
          d: arcPath,
          fill: 'none',
          stroke: '#0f172a',
          'stroke-width': isVariation ? 2.2 : 2.8,
          'stroke-linecap': 'round'
        }));

        // Barra sólida negra redondeada entre las cuerdas de la cejilla
        svg.appendChild(svgEl('rect', {
          x: x1 - (isVariation ? 4 : 6),
          y: yCenter - barHeight / 2,
          width: (x2 - x1) + (isVariation ? 8 : 12),
          height: barHeight,
          rx: barHeight / 2,
          fill: '#0f172a'
        }));
      }
    }

    // 6. Dots (puntos de digitación con resaltado automático de Tónica mod 12) y etiquetas internas
    const dotRadius = isVariation ? 9.8 : 13.8;
    for (let s = 0; s < numStrings; s++) {
      const fretVal = frets[s];
      const realFretVal = realFrets[s];
      if (typeof fretVal === 'number' && fretVal > 0) {
        const relFret = fretVal - baseFret + 1;
        if (relFret >= 1 && relFret <= numFrets) {
          const cx = padLeft + s * stringSpacing;
          const cy = padTop + (relFret - 0.5) * fretSpacing;

          // Cálculo automático mod 12: ¿esta cuerda/traste real es la Tónica del acorde?
          const isRoot = isRootAtStringFret(s, realFretVal, soundingRoot);

          // Círculo del punto (Rosa #f43f5e para Tónica, Negro #0f172a para resto de notas)
          svg.appendChild(svgEl('circle', {
            cx,
            cy,
            r: dotRadius,
            fill: isRoot ? '#f43f5e' : '#0f172a',
            stroke: '#f8fafc',
            'stroke-width': isRoot ? 1.8 : 1.2,
            class: isRoot ? 'chord-dot chord-dot--root' : 'chord-dot'
          }));

          // Determinar el texto a mostrar dentro del punto según dotLabelMode
          let dotText = null;
          if (dotLabelMode === 'fingers') {
            const fingerVal = fingers && fingers[s];
            if (fingerVal !== null && fingerVal !== undefined) {
              dotText = String(fingerVal);
            }
          } else if (dotLabelMode === 'intervals') {
            const noteName = getNoteAtStandardStringFret(s, realFretVal);
            if (noteName) {
              dotText = getIntervalLabel(soundingRoot, noteName, qualityKey);
            }
          } else if (dotLabelMode === 'notes') {
            const noteName = getNoteAtStandardStringFret(s, realFretVal);
            if (noteName) {
              dotText = noteName;
            }
          }

          if (dotText) {
            const fontSize = getDynamicDotFontSize(dotText, isVariation);
            svg.appendChild(svgEl('text', {
              x: cx,
              y: cy + 0.5,
              'text-anchor': 'middle',
              'dominant-baseline': 'central',
              fill: '#ffffff',
              'font-size': fontSize,
              'font-weight': '800',
              'font-family': 'system-ui, -apple-system, sans-serif'
            }, dotText));
          }
        }
      }
    }

    // 7. Indicadores X / O / punto pequeño debajo de cada cuerda
    const bottomY = padTop + gridHeight + (isVariation ? 18 : 24);
    for (let s = 0; s < numStrings; s++) {
      const fretVal = frets[s];
      const realFretVal = realFrets[s];
      const cx = padLeft + s * stringSpacing;

      if (fretVal === 'x' || fretVal === 'X') {
        const r = isVariation ? 4.5 : 6;
        svg.appendChild(svgEl('line', {
          x1: cx - r,
          y1: bottomY - r,
          x2: cx + r,
          y2: bottomY + r,
          stroke: '#0f172a',
          'stroke-width': isVariation ? 2.2 : 2.6,
          'stroke-linecap': 'round'
        }));
        svg.appendChild(svgEl('line', {
          x1: cx + r,
          y1: bottomY - r,
          x2: cx - r,
          y2: bottomY + r,
          stroke: '#0f172a',
          'stroke-width': isVariation ? 2.2 : 2.6,
          'stroke-linecap': 'round'
        }));
      } else if (fretVal === 0) {
        const isRootOpen = isRootAtStringFret(s, realFretVal, soundingRoot);
        svg.appendChild(svgEl('circle', {
          cx,
          cy: bottomY,
          r: isVariation ? 5 : 6.5,
          fill: isRootOpen ? 'rgba(244, 63, 94, 0.15)' : 'none',
          stroke: isRootOpen ? '#f43f5e' : '#0f172a',
          'stroke-width': isVariation ? 2.2 : 2.6
        }));
      } else if (typeof fretVal === 'number' && fretVal > 0) {
        const isRootFretted = isRootAtStringFret(s, realFretVal, soundingRoot);
        svg.appendChild(svgEl('circle', {
          cx,
          cy: bottomY,
          r: isVariation ? 3.5 : 4,
          fill: isRootFretted ? '#f43f5e' : '#0f172a'
        }));
      }
    }

    return svg;
  }

  /**
   * Genera el Selector Visual del Mástil Completo (0 a 15 trastes) a la izquierda
   * del diagrama principal, resaltando también la Tónica en rosa (#f43f5e).
   */
  function createFullNeckSelectorSVG(chordInfo, activeVoicingIndex, onSelectVoicing) {
    const totalFrets = 15;
    const width = 128;
    const height = 350;
    const padLeft = 32;
    const padRight = 16;
    const padTop = 26;
    const padBottom = 18;

    const neckWidth = width - padLeft - padRight;
    const neckHeight = height - padTop - padBottom;
    const stringSpacing = neckWidth / 5;
    const fretSpacing = neckHeight / totalFrets;

    const activeVoicing = chordInfo.voicings[activeVoicingIndex] || chordInfo.voicings[0];
    const capo = chordInfo.capo || 0;
    const { isRootAtStringFret } = window.ChordsLogic;

    const svg = svgEl('svg', {
      viewBox: `0 0 ${width} ${height}`,
      class: 'full-neck-svg',
      role: 'img',
      'aria-label': 'Posición del acorde en el mástil completo'
    });

    svg.appendChild(svgEl('text', {
      x: padLeft + neckWidth / 2,
      y: 13,
      'text-anchor': 'middle',
      fill: '#94a3b8',
      'font-size': 10,
      'font-weight': '700',
      'font-family': 'system-ui, -apple-system, sans-serif'
    }, 'MÁSTIL (1-15)'));

    svg.appendChild(svgEl('rect', {
      x: padLeft,
      y: padTop,
      width: neckWidth,
      height: neckHeight,
      rx: 4,
      fill: '#2c1e16',
      stroke: '#1a120c',
      'stroke-width': 2
    }));

    svg.appendChild(svgEl('rect', {
      x: padLeft - 1,
      y: padTop - 3,
      width: neckWidth + 2,
      height: 5,
      rx: 1,
      fill: '#e2e8f0'
    }));

    const markers = [3, 5, 7, 9, 12, 15];
    for (const m of markers) {
      const cy = padTop + (m - 0.5) * fretSpacing;
      if (m === 12) {
        svg.appendChild(svgEl('circle', {
          cx: padLeft + neckWidth * 0.3,
          cy,
          r: 2.8,
          fill: 'rgba(226, 232, 240, 0.28)'
        }));
        svg.appendChild(svgEl('circle', {
          cx: padLeft + neckWidth * 0.7,
          cy,
          r: 2.8,
          fill: 'rgba(226, 232, 240, 0.28)'
        }));
      } else {
        svg.appendChild(svgEl('circle', {
          cx: padLeft + neckWidth / 2,
          cy,
          r: 3,
          fill: 'rgba(226, 232, 240, 0.28)'
        }));
      }
    }

    const numberedFrets = [1, 3, 5, 7, 9, 12, 15];
    for (let f = 1; f <= totalFrets; f++) {
      const y = padTop + f * fretSpacing;
      svg.appendChild(svgEl('line', {
        x1: padLeft,
        y1: y,
        x2: padLeft + neckWidth,
        y2: y,
        stroke: 'rgba(255, 255, 255, 0.16)',
        'stroke-width': 1
      }));

      if (numberedFrets.includes(f)) {
        svg.appendChild(svgEl('text', {
          x: padLeft - 12,
          y: padTop + (f - 0.5) * fretSpacing,
          'text-anchor': 'middle',
          'dominant-baseline': 'middle',
          fill: '#94a3b8',
          'font-size': 10,
          'font-weight': '700',
          'font-family': 'system-ui, -apple-system, sans-serif'
        }, String(f)));
      }
    }

    if (capo > 0) {
      svg.appendChild(svgEl('rect', {
        x: padLeft,
        y: padTop,
        width: neckWidth,
        height: capo * fretSpacing,
        fill: 'rgba(15, 23, 42, 0.58)'
      }));
    }

    const realFrets = activeVoicing.realFrets || activeVoicing.frets;
    const numericReal = realFrets.filter(f => typeof f === 'number' && f > 0);
    const minFret = numericReal.length ? Math.min(...numericReal) : (capo > 0 ? capo : 1);
    const maxFret = numericReal.length ? Math.max(...numericReal) : Math.min(totalFrets, minFret + 3);

    const winStartFret = Math.max(1, activeVoicing.realStartFret > 0 ? activeVoicing.realStartFret : (capo + 1));
    const winEndFret = Math.min(totalFrets, Math.max(maxFret, winStartFret + 3));
    const winY = padTop + (winStartFret - 1) * fretSpacing;
    const winH = Math.max(fretSpacing, (winEndFret - winStartFret + 1) * fretSpacing);

    const highlightColor = activeVoicing.exceedsFret12 ? 'rgba(244, 63, 94, 0.28)' : 'rgba(16, 185, 129, 0.25)';
    const strokeColor = activeVoicing.exceedsFret12 ? '#f43f5e' : '#10b981';

    svg.appendChild(svgEl('rect', {
      x: padLeft - 3,
      y: Math.min(padTop + neckHeight - 8, winY),
      width: neckWidth + 6,
      height: Math.min(winH, padTop + neckHeight - winY + 4),
      rx: 4,
      fill: highlightColor,
      stroke: strokeColor,
      'stroke-width': 2
    }));

    for (let s = 0; s < 6; s++) {
      const x = padLeft + s * stringSpacing;
      svg.appendChild(svgEl('line', {
        x1: x,
        y1: padTop,
        x2: x,
        y2: padTop + neckHeight,
        stroke: '#94a3b8',
        'stroke-width': 0.9 + (5 - s) * 0.18
      }));
    }

    if (capo > 0) {
      const capoY = padTop + (capo - 0.5) * fretSpacing;
      svg.appendChild(svgEl('rect', {
        x: padLeft - 5,
        y: capoY - 4,
        width: neckWidth + 10,
        height: 8,
        rx: 4,
        fill: '#f59e0b',
        stroke: '#78350f',
        'stroke-width': 1.2
      }));
    }

    // Puntos reales del voicing sobre el mástil completo (Rosa si es Tónica, Verde si es nota del acorde)
    for (let s = 0; s < 6; s++) {
      const rf = realFrets[s];
      if (typeof rf === 'number' && rf > 0 && rf <= totalFrets) {
        const cx = padLeft + s * stringSpacing;
        const cy = padTop + (rf - 0.5) * fretSpacing;
        const isRoot = isRootAtStringFret(s, rf, chordInfo.soundingRoot);
        svg.appendChild(svgEl('circle', {
          cx,
          cy,
          r: isRoot ? 4.8 : 4.2,
          fill: isRoot ? '#f43f5e' : (rf === capo ? '#fbbf24' : '#10b981'),
          stroke: isRoot ? '#ffffff' : '#0f172a',
          'stroke-width': 1
        }));
      }
    }

    // Marcadores laterales clicables para cambiar de voicing
    chordInfo.voicings.forEach((v, idx) => {
      const vNums = (v.realFrets || v.frets).filter(f => typeof f === 'number' && f > 0);
      const vMin = vNums.length ? Math.min(...vNums) : 1;
      const clampedFret = Math.min(totalFrets, Math.max(1, vMin));
      const markerY = padTop + (clampedFret - 0.5) * fretSpacing;
      const isCurrent = idx === activeVoicingIndex;

      const dot = svgEl('circle', {
        cx: padLeft + neckWidth + 9,
        cy: markerY,
        r: isCurrent ? 5 : 3.5,
        fill: isCurrent ? '#10b981' : '#475569',
        stroke: isCurrent ? '#ffffff' : 'none',
        'stroke-width': 1.2,
        class: 'neck-pos-dot'
      });
      dot.style.cursor = 'pointer';
      dot.addEventListener('click', () => {
        if (typeof onSelectVoicing === 'function') onSelectVoicing(idx);
      });
      svg.appendChild(dot);
    });

    return svg;
  }

  // ============================================================================
  // Inicialización y controlador de la interfaz del Diccionario de Acordes
  // ============================================================================
  function initChordDictionaryUI() {
    const container = document.getElementById('chord-dictionary-root');
    if (!container || !window.CHORDS_DATA || !window.ChordsLogic) return;

    const {
      CHROMATIC_NOTES,
      ENHARMONIC_DISPLAY,
      QUALITY_META,
      resolveEnharmonicRoot,
      parseChordQuery,
      getIntervalLabel,
      getChordWithCapo
    } = window.ChordsLogic;

    const state = {
      root: 'C',
      quality: 'maj',
      capo: 0,
      selectedVoicing: 0,
      // Modo de etiqueta en diagrama principal: 'none' | 'fingers' | 'intervals' | 'notes'
      mainDotMode: 'intervals',
      // Modo de etiqueta en variaciones: 'fingers' | 'intervals'
      variationDotMode: 'fingers',
      searchError: ''
    };

    const rootSelect = document.getElementById('chord-root-select');
    const qualitySelect = document.getElementById('chord-quality-select');
    const capoSelect = document.getElementById('chord-capo-select');
    const searchInput = document.getElementById('chord-search-input');
    const searchBtn = document.getElementById('chord-search-btn');
    const searchFeedback = document.getElementById('chord-search-feedback');
    const quickRootPills = document.getElementById('chord-root-pills');
    const dotModeButtons = document.querySelectorAll('[data-chord-dot-mode]');
    const sendToFretboardBtn = document.getElementById('chord-send-to-fretboard-btn');

    const titleEl = document.getElementById('chord-main-title');
    const subtitleEl = document.getElementById('chord-main-subtitle');
    const capoBannerEl = document.getElementById('chord-capo-banner');
    const voicingLabelEl = document.getElementById('chord-active-voicing-label');
    const difficultyBadgeEl = document.getElementById('chord-active-difficulty');
    const fullNeckMount = document.getElementById('chord-full-neck-mount');
    const mainDiagramMount = document.getElementById('chord-main-diagram-mount');
    const mainWarningEl = document.getElementById('chord-main-warning');
    const mainNotesMount = document.getElementById('chord-main-notes');
    const variationsMount = document.getElementById('chord-variations-grid');
    const variationsPosNav = document.getElementById('chord-pos-QuickNav');

    // 1. Poblar selector de Tónica
    CHROMATIC_NOTES.forEach(note => {
      const opt = document.createElement('option');
      opt.value = note;
      opt.textContent = ENHARMONIC_DISPLAY[note];
      rootSelect.appendChild(opt);
    });

    // 2. Poblar botones rápidos de Tónica
    const pillButtons = {};
    CHROMATIC_NOTES.forEach(note => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'chord-root-pill';
      btn.textContent = ENHARMONIC_DISPLAY[note];
      btn.addEventListener('click', () => {
        state.root = note;
        state.selectedVoicing = 0;
        state.searchError = '';
        searchInput.value = '';
        syncControlsAndRender();
      });
      quickRootPills.appendChild(btn);
      pillButtons[note] = btn;
    });

    // 3. Poblar selector de Cualidad
    Object.values(QUALITY_META).forEach(q => {
      const opt = document.createElement('option');
      opt.value = q.key;
      opt.textContent = q.dropdownLabel;
      qualitySelect.appendChild(opt);
    });

    // 4. Poblar selector de Capo (Traste 0 a 12)
    for (let c = 0; c <= 12; c++) {
      const opt = document.createElement('option');
      opt.value = String(c);
      opt.textContent = c === 0 ? 'Sin capo (Traste 0)' : `Capo en traste ${c} (+${c} semitonos)`;
      capoSelect.appendChild(opt);
    }

    // Eventos de selectores
    rootSelect.addEventListener('change', () => {
      state.root = rootSelect.value;
      state.selectedVoicing = 0;
      state.searchError = '';
      searchInput.value = '';
      syncControlsAndRender();
    });

    qualitySelect.addEventListener('change', () => {
      state.quality = qualitySelect.value;
      state.selectedVoicing = 0;
      state.searchError = '';
      searchInput.value = '';
      syncControlsAndRender();
    });

    capoSelect.addEventListener('change', () => {
      state.capo = parseInt(capoSelect.value, 10) || 0;
      syncControlsAndRender();
    });

    // Conmutador de modo de etiquetas en los puntos (Dedos | Intervalos | Notas | Limpio)
    dotModeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-chord-dot-mode');
        state.mainDotMode = mode;
        state.variationDotMode = (mode === 'intervals' || mode === 'notes') ? mode : 'fingers';
        syncControlsAndRender();
      });
    });

    // Botón para superponer el voicing actual en el Diapasón principal
    if (sendToFretboardBtn) {
      sendToFretboardBtn.addEventListener('click', () => {
        const chordInfo = getChordWithCapo(state.root, state.quality, state.capo);
        if (!chordInfo) return;
        const activeVoicing = chordInfo.voicings[state.selectedVoicing] || chordInfo.voicings[0];
        if (typeof window.showChordOverlayOnFretboard === 'function') {
          window.showChordOverlayOnFretboard({
            root: chordInfo.soundingRoot,
            quality: chordInfo.quality,
            title: chordInfo.capo > 0 ? chordInfo.soundingTitle : chordInfo.baseTitle,
            voicingLabel: activeVoicing.label,
            realFrets: activeVoicing.realFrets || activeVoicing.frets,
            capo: chordInfo.capo
          });
        }
        if (typeof window.switchToTab === 'function') {
          window.switchToTab('fretboard');
        }
      });
    }

    // Buscador por texto
    function executeTextSearch() {
      const query = searchInput.value;
      const parsed = parseChordQuery(query);
      if (parsed.empty) {
        state.searchError = '';
        syncControlsAndRender();
        return;
      }
      if (!parsed.ok) {
        state.searchError = parsed.error;
        renderSearchFeedback();
        return;
      }
      state.root = parsed.root;
      state.quality = parsed.quality;
      state.selectedVoicing = 0;
      state.searchError = '';
      syncControlsAndRender();
    }

    searchBtn.addEventListener('click', executeTextSearch);
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        executeTextSearch();
      }
    });
    searchInput.addEventListener('input', () => {
      const val = searchInput.value.trim();
      if (!val) {
        state.searchError = '';
        renderSearchFeedback();
        return;
      }
      const parsed = parseChordQuery(val);
      if (parsed.ok) {
        state.root = parsed.root;
        state.quality = parsed.quality;
        state.selectedVoicing = 0;
        state.searchError = '';
        syncControlsAndRender();
      }
    });

    function renderSearchFeedback() {
      if (!state.searchError) {
        searchFeedback.textContent = '';
        searchFeedback.className = 'chord-search-feedback chord-hidden';
      } else {
        searchFeedback.textContent = state.searchError;
        searchFeedback.className = 'chord-search-feedback chord-search-feedback--error';
      }
    }

    function syncControlsAndRender() {
      rootSelect.value = state.root;
      qualitySelect.value = state.quality;
      capoSelect.value = String(state.capo);

      CHROMATIC_NOTES.forEach(note => {
        const btn = pillButtons[note];
        if (btn) {
          btn.classList.toggle('chord-root-pill--active', note === state.root);
        }
      });

      dotModeButtons.forEach(btn => {
        const mode = btn.getAttribute('data-chord-dot-mode');
        btn.classList.toggle('chord-mode-btn--active', mode === state.mainDotMode);
      });

      renderSearchFeedback();

      const chordInfo = getChordWithCapo(state.root, state.quality, state.capo);
      if (!chordInfo) return;

      if (state.selectedVoicing >= chordInfo.voicings.length) {
        state.selectedVoicing = 0;
      }

      const activeVoicing = chordInfo.voicings[state.selectedVoicing];

      // Encabezado del acorde
      if (chordInfo.capo === 0) {
        titleEl.textContent = chordInfo.baseTitle;
        subtitleEl.textContent = chordInfo.baseSubtitle;
        capoBannerEl.className = 'chord-capo-banner chord-hidden';
        capoBannerEl.innerHTML = '';
      } else {
        titleEl.textContent = `${chordInfo.soundingTitle}`;
        subtitleEl.textContent = `${chordInfo.soundingSubtitle} (Forma de ${chordInfo.baseTitle} con Capo en traste ${chordInfo.capo})`;
        capoBannerEl.className = 'chord-capo-banner';
        capoBannerEl.innerHTML = `
          <div class="chord-capo-banner__content">
            <span class="chord-capo-badge">Capo Traste ${chordInfo.capo}</span>
            <span>
              Tocando posición de <strong>${chordInfo.baseTitle}</strong> → suena <strong>${chordInfo.soundingTitle}</strong>.
              <em>(Para que suene ${chordInfo.baseTitle} real con Capo ${chordInfo.capo}, usa la forma de <button type="button" class="chord-inline-link" id="chord-use-relaxed-shape-btn">${chordInfo.relaxedShapeTitle}</button>).</em>
            </span>
          </div>
        `;
        const useRelaxedBtn = document.getElementById('chord-use-relaxed-shape-btn');
        if (useRelaxedBtn) {
          useRelaxedBtn.addEventListener('click', () => {
            state.root = chordInfo.relaxedShapeRoot;
            state.selectedVoicing = 0;
            syncControlsAndRender();
          });
        }
      }

      voicingLabelEl.textContent = `Posición ${state.selectedVoicing + 1} de ${chordInfo.voicings.length}: ${activeVoicing.label}`;
      difficultyBadgeEl.textContent = `Dificultad: ${activeVoicing.difficulty}`;
      difficultyBadgeEl.className = `chord-difficulty-badge chord-difficulty-badge--${activeVoicing.difficulty}`;

      if (variationsPosNav) {
        variationsPosNav.innerHTML = '';
        chordInfo.voicings.forEach((v, idx) => {
          const b = document.createElement('button');
          b.type = 'button';
          b.className = 'chord-pos-step-btn' + (idx === state.selectedVoicing ? ' chord-pos-step-btn--active' : '');
          b.textContent = `${idx + 1}. ${v.label}`;
          b.addEventListener('click', () => {
            state.selectedVoicing = idx;
            syncControlsAndRender();
          });
          variationsPosNav.appendChild(b);
        });
      }

      // Selector visual del mástil completo (izquierda)
      fullNeckMount.innerHTML = '';
      fullNeckMount.appendChild(
        createFullNeckSelectorSVG(chordInfo, state.selectedVoicing, (newIdx) => {
          state.selectedVoicing = newIdx;
          syncControlsAndRender();
        })
      );

      // Diagrama principal (centro-izquierda)
      mainDiagramMount.innerHTML = '';
      mainDiagramMount.appendChild(
        createChordDiagramSVG(activeVoicing, {
          isVariation: false,
          dotLabelMode: state.mainDotMode,
          soundingRoot: chordInfo.soundingRoot,
          qualityKey: chordInfo.quality
        })
      );

      // Aviso si el capo empuja el acorde más allá del traste 12
      if (activeVoicing.exceedsFret12) {
        mainWarningEl.textContent = `⚠️ ${activeVoicing.exceedsMessage}`;
        mainWarningEl.className = 'chord-limit-warning';
      } else {
        mainWarningEl.textContent = '';
        mainWarningEl.className = 'chord-limit-warning chord-hidden';
      }

      // Notas e intervalos que suenan en el voicing principal
      mainNotesMount.innerHTML = '';
      const uniqueNotes = [...new Set(activeVoicing.soundingNotes)];
      uniqueNotes.forEach(n => {
        const pill = document.createElement('span');
        const isRootNote = n === chordInfo.soundingRoot;
        const interval = getIntervalLabel(chordInfo.soundingRoot, n, chordInfo.quality);
        pill.className = 'chord-note-pill' + (isRootNote ? ' chord-note-pill--root' : '');
        pill.textContent = `${ENHARMONIC_DISPLAY[n] || n} (${interval})`;
        mainNotesMount.appendChild(pill);
      });

      // Panel de variaciones (derecha)
      variationsMount.innerHTML = '';
      chordInfo.voicings.forEach((v, idx) => {
        const card = document.createElement('div');
        const isSelected = idx === state.selectedVoicing;
        card.className = 'chord-var-card' +
          (isSelected ? ' chord-var-card--selected' : '') +
          (v.exceedsFret12 ? ' chord-var-card--exceeds' : '');
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');

        const header = document.createElement('div');
        header.className = 'chord-var-card__header';

        const titleSpan = document.createElement('span');
        titleSpan.className = 'chord-var-card__title';
        titleSpan.textContent = `${idx + 1}. ${v.label}`;

        const diffSpan = document.createElement('span');
        diffSpan.className = `chord-difficulty-badge chord-difficulty-badge--${v.difficulty}`;
        diffSpan.textContent = v.difficulty;

        header.appendChild(titleSpan);
        header.appendChild(diffSpan);
        card.appendChild(header);

        const svgWrap = document.createElement('div');
        svgWrap.className = 'chord-var-card__svg-wrap';
        svgWrap.appendChild(
          createChordDiagramSVG(v, {
            isVariation: true,
            dotLabelMode: state.variationDotMode,
            soundingRoot: chordInfo.soundingRoot,
            qualityKey: chordInfo.quality
          })
        );
        card.appendChild(svgWrap);

        const footer = document.createElement('div');
        footer.className = 'chord-var-card__footer';

        const fretString = v.displayFrets.join(' · ');
        const fretMeta = document.createElement('div');
        fretMeta.className = 'chord-var-card__frets';
        if (chordInfo.capo > 0) {
          fretMeta.textContent = v.relaxedMode
            ? `Relajado al capo: [${fretString}] (Real: traste ${v.minRealFret})`
            : `Desde capo: [${fretString}] (Real: traste ${v.realStartFret})`;
        } else {
          fretMeta.textContent = `Trastes: [${fretString}]`;
        }
        footer.appendChild(fretMeta);

        if (v.exceedsFret12) {
          const warnBadge = document.createElement('div');
          warnBadge.className = 'chord-var-card__warn';
          warnBadge.textContent = `⚠️ Supera traste 12 (traste real ${v.realStartFret})`;
          footer.appendChild(warnBadge);
        }

        card.appendChild(footer);

        const selectHandler = () => {
          state.selectedVoicing = idx;
          syncControlsAndRender();
        };
        card.addEventListener('click', selectHandler);
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            selectHandler();
          }
        });

        variationsMount.appendChild(card);
      });
    }

    // Exponer función programática global para que el Círculo de Quintas u otras pestañas
    // puedan abrir cualquier acorde directamente sin acoplar estados internos.
    window.setChordDictionary = function (rootInput, qualityInput, capoInput = 0) {
      const canonicalRoot = resolveEnharmonicRoot(rootInput) || 'C';
      const validQuality = QUALITY_META[qualityInput] ? qualityInput : 'maj';
      state.root = canonicalRoot;
      state.quality = validQuality;
      state.capo = Math.max(0, Math.min(12, parseInt(capoInput, 10) || 0));
      state.selectedVoicing = 0;
      state.searchError = '';
      if (searchInput) searchInput.value = '';
      syncControlsAndRender();
    };

    syncControlsAndRender();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChordDictionaryUI);
  } else {
    initChordDictionaryUI();
  }
})();
