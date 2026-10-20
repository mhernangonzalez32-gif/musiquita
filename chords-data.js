// Diccionario curado y pre-generado de acordes de guitarra (84 acordes, 420 voicings verificados)
// Orden de cuerdas en frets y fingers: [6ª (E), 5ª (A), 4ª (D), 3ª (G), 2ª (B), 1ª (e)]
window.CHORDS_DATA = {
  "C": {
    "7": {
      "symbol": "C7",
      "name": "Do Dominante (7)",
      "voicings": [
        {
          "id": "open-c7",
          "label": "Abierto (C7)",
          "startFret": 0,
          "frets": [
            "x",
            3,
            2,
            3,
            1,
            0
          ],
          "fingers": [
            null,
            3,
            2,
            4,
            1,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "C",
            "E",
            "A#",
            "C",
            "E"
          ]
        },
        {
          "id": "caged-e7",
          "label": "CAGED (Forma E7)",
          "startFret": 8,
          "frets": [
            8,
            10,
            8,
            9,
            8,
            8
          ],
          "fingers": [
            1,
            3,
            1,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 8,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "C",
            "G",
            "A#",
            "E",
            "G",
            "C"
          ]
        },
        {
          "id": "caged-a7",
          "label": "CAGED (Forma A7)",
          "startFret": 3,
          "frets": [
            "x",
            3,
            5,
            3,
            5,
            3
          ],
          "fingers": [
            null,
            1,
            2,
            1,
            3,
            1
          ],
          "barre": {
            "fret": 3,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "C",
            "G",
            "A#",
            "E",
            "G"
          ]
        },
        {
          "id": "caged-c7",
          "label": "CAGED (Forma C7)",
          "startFret": 0,
          "frets": [
            "x",
            3,
            2,
            3,
            1,
            "x"
          ],
          "fingers": [
            null,
            3,
            2,
            4,
            1,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "C",
            "E",
            "A#",
            "C"
          ]
        },
        {
          "id": "drop2-7",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 10,
          "frets": [
            "x",
            "x",
            10,
            12,
            11,
            12
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "C",
            "G",
            "A#",
            "E"
          ]
        }
      ]
    },
    "maj": {
      "symbol": "C",
      "name": "Do Mayor",
      "voicings": [
        {
          "id": "open-c",
          "label": "Abierto (Forma C)",
          "startFret": 0,
          "frets": [
            "x",
            3,
            2,
            0,
            1,
            0
          ],
          "fingers": [
            null,
            3,
            2,
            null,
            1,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "C",
            "E",
            "G",
            "C",
            "E"
          ]
        },
        {
          "id": "caged-e",
          "label": "CAGED (Forma E)",
          "startFret": 8,
          "frets": [
            8,
            10,
            10,
            9,
            8,
            8
          ],
          "fingers": [
            1,
            3,
            4,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 8,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "C",
            "G",
            "C",
            "E",
            "G",
            "C"
          ]
        },
        {
          "id": "caged-a",
          "label": "CAGED (Forma A)",
          "startFret": 3,
          "frets": [
            "x",
            3,
            5,
            5,
            5,
            3
          ],
          "fingers": [
            null,
            1,
            2,
            3,
            4,
            1
          ],
          "barre": {
            "fret": 3,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "C",
            "G",
            "C",
            "E",
            "G"
          ]
        },
        {
          "id": "caged-c",
          "label": "CAGED (Forma C)",
          "startFret": 12,
          "frets": [
            "x",
            15,
            14,
            12,
            13,
            12
          ],
          "fingers": [
            null,
            4,
            3,
            1,
            2,
            1
          ],
          "barre": {
            "fret": 12,
            "from": 3,
            "to": 5
          },
          "difficulty": "avanzada",
          "notes": [
            "C",
            "E",
            "G",
            "C",
            "E"
          ]
        },
        {
          "id": "caged-d",
          "label": "CAGED (Forma D)",
          "startFret": 10,
          "frets": [
            "x",
            "x",
            10,
            12,
            13,
            12
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            4,
            3
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "C",
            "G",
            "C",
            "E"
          ]
        }
      ]
    },
    "m": {
      "symbol": "Cm",
      "name": "Do Menor",
      "voicings": [
        {
          "id": "caged-em",
          "label": "CAGED (Forma Em)",
          "startFret": 8,
          "frets": [
            8,
            10,
            10,
            8,
            8,
            8
          ],
          "fingers": [
            1,
            3,
            4,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 8,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "C",
            "G",
            "C",
            "D#",
            "G",
            "C"
          ]
        },
        {
          "id": "caged-am",
          "label": "CAGED (Forma Am)",
          "startFret": 3,
          "frets": [
            "x",
            3,
            5,
            5,
            4,
            3
          ],
          "fingers": [
            null,
            1,
            3,
            4,
            2,
            1
          ],
          "barre": {
            "fret": 3,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "C",
            "G",
            "C",
            "D#",
            "G"
          ]
        },
        {
          "id": "caged-dm",
          "label": "CAGED (Forma Dm)",
          "startFret": 10,
          "frets": [
            "x",
            "x",
            10,
            12,
            13,
            11
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            4,
            2
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "C",
            "G",
            "C",
            "D#"
          ]
        },
        {
          "id": "triad-m-top",
          "label": "Tríada Menor (Cuerdas 1-4)",
          "startFret": 8,
          "frets": [
            "x",
            "x",
            10,
            8,
            8,
            8
          ],
          "fingers": [
            null,
            null,
            3,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 8,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "C",
            "D#",
            "G",
            "C"
          ]
        },
        {
          "id": "caged-cm",
          "label": "Posición Media (Cuerdas 2-5)",
          "startFret": 12,
          "frets": [
            "x",
            15,
            13,
            12,
            13,
            "x"
          ],
          "fingers": [
            null,
            4,
            2,
            1,
            3,
            null
          ],
          "barre": null,
          "difficulty": "avanzada",
          "notes": [
            "C",
            "D#",
            "G",
            "C"
          ]
        }
      ]
    },
    "maj7": {
      "symbol": "Cmaj7",
      "name": "Do Mayor Séptima (Maj7)",
      "voicings": [
        {
          "id": "open-cmaj7",
          "label": "Abierto (Cmaj7)",
          "startFret": 0,
          "frets": [
            "x",
            3,
            2,
            0,
            0,
            0
          ],
          "fingers": [
            null,
            3,
            2,
            null,
            null,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "C",
            "E",
            "G",
            "B",
            "E"
          ]
        },
        {
          "id": "caged-amaj7",
          "label": "CAGED (Forma Amaj7)",
          "startFret": 3,
          "frets": [
            "x",
            3,
            5,
            4,
            5,
            3
          ],
          "fingers": [
            null,
            1,
            3,
            2,
            4,
            1
          ],
          "barre": {
            "fret": 3,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "C",
            "G",
            "B",
            "E",
            "G"
          ]
        },
        {
          "id": "drop3-maj7",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 8,
          "frets": [
            8,
            "x",
            9,
            9,
            8,
            "x"
          ],
          "fingers": [
            1,
            null,
            3,
            4,
            2,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "C",
            "B",
            "E",
            "G"
          ]
        },
        {
          "id": "drop2-maj7-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 10,
          "frets": [
            "x",
            "x",
            10,
            12,
            12,
            12
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            2,
            2
          ],
          "barre": {
            "fret": 12,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "C",
            "G",
            "B",
            "E"
          ]
        },
        {
          "id": "caged-cmaj7",
          "label": "CAGED (Forma Cmaj7)",
          "startFret": 12,
          "frets": [
            "x",
            15,
            14,
            12,
            12,
            "x"
          ],
          "fingers": [
            null,
            4,
            3,
            1,
            1,
            null
          ],
          "barre": {
            "fret": 12,
            "from": 3,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "C",
            "E",
            "G",
            "B"
          ]
        }
      ]
    },
    "m7": {
      "symbol": "Cm7",
      "name": "Do Menor Séptima (m7)",
      "voicings": [
        {
          "id": "caged-em7",
          "label": "CAGED (Forma Em7)",
          "startFret": 8,
          "frets": [
            8,
            10,
            8,
            8,
            8,
            8
          ],
          "fingers": [
            1,
            3,
            1,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 8,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "C",
            "G",
            "A#",
            "D#",
            "G",
            "C"
          ]
        },
        {
          "id": "caged-am7",
          "label": "CAGED (Forma Am7)",
          "startFret": 3,
          "frets": [
            "x",
            3,
            5,
            3,
            4,
            3
          ],
          "fingers": [
            null,
            1,
            3,
            1,
            2,
            1
          ],
          "barre": {
            "fret": 3,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "C",
            "G",
            "A#",
            "D#",
            "G"
          ]
        },
        {
          "id": "drop3-m7",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 8,
          "frets": [
            8,
            "x",
            8,
            8,
            8,
            "x"
          ],
          "fingers": [
            1,
            null,
            2,
            3,
            4,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "C",
            "A#",
            "D#",
            "G"
          ]
        },
        {
          "id": "drop2-m7",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 10,
          "frets": [
            "x",
            "x",
            10,
            12,
            11,
            11
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            2
          ],
          "barre": {
            "fret": 11,
            "from": 4,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "C",
            "G",
            "A#",
            "D#"
          ]
        },
        {
          "id": "drop2-m7-top",
          "label": "Voicing Jazz/Funk (Cuerdas 1-4)",
          "startFret": 8,
          "frets": [
            "x",
            "x",
            8,
            8,
            8,
            8
          ],
          "fingers": [
            null,
            null,
            1,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 8,
            "from": 2,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "A#",
            "D#",
            "G",
            "C"
          ]
        }
      ]
    },
    "m7b5": {
      "symbol": "Cm7b5",
      "name": "Do Semi-disminuido (m7b5)",
      "voicings": [
        {
          "id": "drop2-m7b5-5",
          "label": "Drop 2 (Raíz en 5ª)",
          "startFret": 0,
          "frets": [
            "x",
            3,
            4,
            3,
            4,
            "x"
          ],
          "fingers": [
            null,
            1,
            3,
            2,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "C",
            "F#",
            "A#",
            "D#"
          ]
        },
        {
          "id": "drop3-m7b5-6",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 7,
          "frets": [
            8,
            "x",
            8,
            8,
            7,
            "x"
          ],
          "fingers": [
            2,
            null,
            3,
            4,
            1,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "C",
            "A#",
            "D#",
            "F#"
          ]
        },
        {
          "id": "drop2-m7b5-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 10,
          "frets": [
            "x",
            "x",
            10,
            11,
            11,
            11
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            2,
            2
          ],
          "barre": {
            "fret": 11,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "C",
            "F#",
            "A#",
            "D#"
          ]
        },
        {
          "id": "drop2-m7b5-inv",
          "label": "Drop 2 (1ª Inversión)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            1,
            3,
            1,
            2
          ],
          "fingers": [
            null,
            null,
            1,
            4,
            1,
            2
          ],
          "barre": {
            "fret": 1,
            "from": 2,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "D#",
            "A#",
            "C",
            "F#"
          ]
        },
        {
          "id": "drop2-m7b5-top",
          "label": "Drop 2 (Cuerdas 1-4)",
          "startFret": 7,
          "frets": [
            "x",
            "x",
            8,
            8,
            7,
            8
          ],
          "fingers": [
            null,
            null,
            2,
            3,
            1,
            4
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "A#",
            "D#",
            "F#",
            "C"
          ]
        }
      ]
    },
    "dim7": {
      "symbol": "Cdim7",
      "name": "Do Disminuido Séptima (dim7)",
      "voicings": [
        {
          "id": "dim7-5",
          "label": "Forma en 5ª Cuerda",
          "startFret": 0,
          "frets": [
            "x",
            3,
            4,
            2,
            4,
            "x"
          ],
          "fingers": [
            null,
            2,
            3,
            1,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "C",
            "F#",
            "A",
            "D#"
          ]
        },
        {
          "id": "dim7-6",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 7,
          "frets": [
            8,
            "x",
            7,
            8,
            7,
            "x"
          ],
          "fingers": [
            2,
            null,
            1,
            3,
            1,
            null
          ],
          "barre": {
            "fret": 7,
            "from": 2,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "C",
            "A",
            "D#",
            "F#"
          ]
        },
        {
          "id": "dim7-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 10,
          "frets": [
            "x",
            "x",
            10,
            11,
            10,
            11
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "C",
            "F#",
            "A",
            "D#"
          ]
        },
        {
          "id": "dim7-sym",
          "label": "Simétrico (Cuerdas 1-4)",
          "startFret": 7,
          "frets": [
            "x",
            "x",
            7,
            8,
            7,
            8
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "A",
            "D#",
            "F#",
            "C"
          ]
        },
        {
          "id": "dim7-5-sym",
          "label": "Simétrico (Cuerdas 2-5)",
          "startFret": 5,
          "frets": [
            "x",
            6,
            7,
            5,
            7,
            "x"
          ],
          "fingers": [
            null,
            2,
            3,
            1,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "D#",
            "A",
            "C",
            "F#"
          ]
        }
      ]
    }
  },
  "C#": {
    "7": {
      "symbol": "C#7",
      "name": "Do# / Reb Dominante (7)",
      "voicings": [
        {
          "id": "caged-e7",
          "label": "CAGED (Forma E7)",
          "startFret": 9,
          "frets": [
            9,
            11,
            9,
            10,
            9,
            9
          ],
          "fingers": [
            1,
            3,
            1,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 9,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "C#",
            "G#",
            "B",
            "F",
            "G#",
            "C#"
          ]
        },
        {
          "id": "caged-a7",
          "label": "CAGED (Forma A7)",
          "startFret": 4,
          "frets": [
            "x",
            4,
            6,
            4,
            6,
            4
          ],
          "fingers": [
            null,
            1,
            2,
            1,
            3,
            1
          ],
          "barre": {
            "fret": 4,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "C#",
            "G#",
            "B",
            "F",
            "G#"
          ]
        },
        {
          "id": "caged-c7",
          "label": "CAGED (Forma C7)",
          "startFret": 0,
          "frets": [
            "x",
            4,
            3,
            4,
            2,
            "x"
          ],
          "fingers": [
            null,
            3,
            2,
            4,
            1,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "C#",
            "F",
            "B",
            "C#"
          ]
        },
        {
          "id": "drop2-7",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 11,
          "frets": [
            "x",
            "x",
            11,
            13,
            12,
            13
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "C#",
            "G#",
            "B",
            "F"
          ]
        },
        {
          "id": "drop3-7",
          "label": "Drop 3 / Jazz (Raíz en 6ª)",
          "startFret": 9,
          "frets": [
            9,
            "x",
            9,
            10,
            9,
            "x"
          ],
          "fingers": [
            1,
            null,
            2,
            4,
            3,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "C#",
            "B",
            "F",
            "G#"
          ]
        }
      ]
    },
    "maj": {
      "symbol": "C#",
      "name": "Do# / Reb Mayor",
      "voicings": [
        {
          "id": "caged-e",
          "label": "CAGED (Forma E)",
          "startFret": 9,
          "frets": [
            9,
            11,
            11,
            10,
            9,
            9
          ],
          "fingers": [
            1,
            3,
            4,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 9,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "C#",
            "G#",
            "C#",
            "F",
            "G#",
            "C#"
          ]
        },
        {
          "id": "caged-a",
          "label": "CAGED (Forma A)",
          "startFret": 4,
          "frets": [
            "x",
            4,
            6,
            6,
            6,
            4
          ],
          "fingers": [
            null,
            1,
            2,
            3,
            4,
            1
          ],
          "barre": {
            "fret": 4,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "C#",
            "G#",
            "C#",
            "F",
            "G#"
          ]
        },
        {
          "id": "caged-c",
          "label": "CAGED (Forma C)",
          "startFret": 0,
          "frets": [
            "x",
            4,
            3,
            1,
            2,
            1
          ],
          "fingers": [
            null,
            4,
            3,
            1,
            2,
            1
          ],
          "barre": {
            "fret": 1,
            "from": 3,
            "to": 5
          },
          "difficulty": "avanzada",
          "notes": [
            "C#",
            "F",
            "G#",
            "C#",
            "F"
          ]
        },
        {
          "id": "caged-d",
          "label": "CAGED (Forma D)",
          "startFret": 11,
          "frets": [
            "x",
            "x",
            11,
            13,
            14,
            13
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            4,
            3
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "C#",
            "G#",
            "C#",
            "F"
          ]
        },
        {
          "id": "triad-f",
          "label": "Tríada Superior (Forma F)",
          "startFret": 9,
          "frets": [
            "x",
            "x",
            11,
            10,
            9,
            9
          ],
          "fingers": [
            null,
            null,
            3,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 9,
            "from": 4,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "C#",
            "F",
            "G#",
            "C#"
          ]
        }
      ]
    },
    "m": {
      "symbol": "C#m",
      "name": "Do# / Reb Menor",
      "voicings": [
        {
          "id": "caged-em",
          "label": "CAGED (Forma Em)",
          "startFret": 9,
          "frets": [
            9,
            11,
            11,
            9,
            9,
            9
          ],
          "fingers": [
            1,
            3,
            4,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 9,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "C#",
            "G#",
            "C#",
            "E",
            "G#",
            "C#"
          ]
        },
        {
          "id": "caged-am",
          "label": "CAGED (Forma Am)",
          "startFret": 4,
          "frets": [
            "x",
            4,
            6,
            6,
            5,
            4
          ],
          "fingers": [
            null,
            1,
            3,
            4,
            2,
            1
          ],
          "barre": {
            "fret": 4,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "C#",
            "G#",
            "C#",
            "E",
            "G#"
          ]
        },
        {
          "id": "caged-dm",
          "label": "CAGED (Forma Dm)",
          "startFret": 11,
          "frets": [
            "x",
            "x",
            11,
            13,
            14,
            12
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            4,
            2
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "C#",
            "G#",
            "C#",
            "E"
          ]
        },
        {
          "id": "triad-m-top",
          "label": "Tríada Menor (Cuerdas 1-4)",
          "startFret": 9,
          "frets": [
            "x",
            "x",
            11,
            9,
            9,
            9
          ],
          "fingers": [
            null,
            null,
            3,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 9,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "C#",
            "E",
            "G#",
            "C#"
          ]
        },
        {
          "id": "caged-cm",
          "label": "Posición Media (Cuerdas 2-5)",
          "startFret": 0,
          "frets": [
            "x",
            4,
            2,
            1,
            2,
            "x"
          ],
          "fingers": [
            null,
            4,
            2,
            1,
            3,
            null
          ],
          "barre": null,
          "difficulty": "avanzada",
          "notes": [
            "C#",
            "E",
            "G#",
            "C#"
          ]
        }
      ]
    },
    "maj7": {
      "symbol": "C#maj7",
      "name": "Do# / Reb Mayor Séptima (Maj7)",
      "voicings": [
        {
          "id": "caged-amaj7",
          "label": "CAGED (Forma Amaj7)",
          "startFret": 4,
          "frets": [
            "x",
            4,
            6,
            5,
            6,
            4
          ],
          "fingers": [
            null,
            1,
            3,
            2,
            4,
            1
          ],
          "barre": {
            "fret": 4,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "C#",
            "G#",
            "C",
            "F",
            "G#"
          ]
        },
        {
          "id": "drop3-maj7",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 9,
          "frets": [
            9,
            "x",
            10,
            10,
            9,
            "x"
          ],
          "fingers": [
            1,
            null,
            3,
            4,
            2,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "C#",
            "C",
            "F",
            "G#"
          ]
        },
        {
          "id": "drop2-maj7-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 11,
          "frets": [
            "x",
            "x",
            11,
            13,
            13,
            13
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            2,
            2
          ],
          "barre": {
            "fret": 13,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "C#",
            "G#",
            "C",
            "F"
          ]
        },
        {
          "id": "caged-cmaj7",
          "label": "CAGED (Forma Cmaj7)",
          "startFret": 0,
          "frets": [
            "x",
            4,
            3,
            1,
            1,
            "x"
          ],
          "fingers": [
            null,
            4,
            3,
            1,
            1,
            null
          ],
          "barre": {
            "fret": 1,
            "from": 3,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "C#",
            "F",
            "G#",
            "C"
          ]
        },
        {
          "id": "caged-emaj7",
          "label": "CAGED (Forma Emaj7)",
          "startFret": 9,
          "frets": [
            9,
            11,
            10,
            10,
            9,
            9
          ],
          "fingers": [
            1,
            4,
            2,
            3,
            1,
            1
          ],
          "barre": {
            "fret": 9,
            "from": 0,
            "to": 5
          },
          "difficulty": "avanzada",
          "notes": [
            "C#",
            "G#",
            "C",
            "F",
            "G#",
            "C#"
          ]
        }
      ]
    },
    "m7": {
      "symbol": "C#m7",
      "name": "Do# / Reb Menor Séptima (m7)",
      "voicings": [
        {
          "id": "caged-em7",
          "label": "CAGED (Forma Em7)",
          "startFret": 9,
          "frets": [
            9,
            11,
            9,
            9,
            9,
            9
          ],
          "fingers": [
            1,
            3,
            1,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 9,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "C#",
            "G#",
            "B",
            "E",
            "G#",
            "C#"
          ]
        },
        {
          "id": "caged-am7",
          "label": "CAGED (Forma Am7)",
          "startFret": 4,
          "frets": [
            "x",
            4,
            6,
            4,
            5,
            4
          ],
          "fingers": [
            null,
            1,
            3,
            1,
            2,
            1
          ],
          "barre": {
            "fret": 4,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "C#",
            "G#",
            "B",
            "E",
            "G#"
          ]
        },
        {
          "id": "drop3-m7",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 9,
          "frets": [
            9,
            "x",
            9,
            9,
            9,
            "x"
          ],
          "fingers": [
            1,
            null,
            2,
            3,
            4,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "C#",
            "B",
            "E",
            "G#"
          ]
        },
        {
          "id": "drop2-m7",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 11,
          "frets": [
            "x",
            "x",
            11,
            13,
            12,
            12
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            2
          ],
          "barre": {
            "fret": 12,
            "from": 4,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "C#",
            "G#",
            "B",
            "E"
          ]
        },
        {
          "id": "drop2-m7-top",
          "label": "Voicing Jazz/Funk (Cuerdas 1-4)",
          "startFret": 9,
          "frets": [
            "x",
            "x",
            9,
            9,
            9,
            9
          ],
          "fingers": [
            null,
            null,
            1,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 9,
            "from": 2,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "B",
            "E",
            "G#",
            "C#"
          ]
        }
      ]
    },
    "m7b5": {
      "symbol": "C#m7b5",
      "name": "Do# / Reb Semi-disminuido (m7b5)",
      "voicings": [
        {
          "id": "drop2-m7b5-5",
          "label": "Drop 2 (Raíz en 5ª)",
          "startFret": 4,
          "frets": [
            "x",
            4,
            5,
            4,
            5,
            "x"
          ],
          "fingers": [
            null,
            1,
            3,
            2,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "C#",
            "G",
            "B",
            "E"
          ]
        },
        {
          "id": "drop3-m7b5-6",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 8,
          "frets": [
            9,
            "x",
            9,
            9,
            8,
            "x"
          ],
          "fingers": [
            2,
            null,
            3,
            4,
            1,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "C#",
            "B",
            "E",
            "G"
          ]
        },
        {
          "id": "drop2-m7b5-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 11,
          "frets": [
            "x",
            "x",
            11,
            12,
            12,
            12
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            2,
            2
          ],
          "barre": {
            "fret": 12,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "C#",
            "G",
            "B",
            "E"
          ]
        },
        {
          "id": "drop2-m7b5-inv",
          "label": "Drop 2 (1ª Inversión)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            2,
            4,
            2,
            3
          ],
          "fingers": [
            null,
            null,
            1,
            4,
            1,
            2
          ],
          "barre": {
            "fret": 2,
            "from": 2,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "E",
            "B",
            "C#",
            "G"
          ]
        },
        {
          "id": "drop2-m7b5-top",
          "label": "Drop 2 (Cuerdas 1-4)",
          "startFret": 8,
          "frets": [
            "x",
            "x",
            9,
            9,
            8,
            9
          ],
          "fingers": [
            null,
            null,
            2,
            3,
            1,
            4
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "B",
            "E",
            "G",
            "C#"
          ]
        }
      ]
    },
    "dim7": {
      "symbol": "C#dim7",
      "name": "Do# / Reb Disminuido Séptima (dim7)",
      "voicings": [
        {
          "id": "dim7-5",
          "label": "Forma en 5ª Cuerda",
          "startFret": 3,
          "frets": [
            "x",
            4,
            5,
            3,
            5,
            "x"
          ],
          "fingers": [
            null,
            2,
            3,
            1,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "C#",
            "G",
            "A#",
            "E"
          ]
        },
        {
          "id": "dim7-6",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 8,
          "frets": [
            9,
            "x",
            8,
            9,
            8,
            "x"
          ],
          "fingers": [
            2,
            null,
            1,
            3,
            1,
            null
          ],
          "barre": {
            "fret": 8,
            "from": 2,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "C#",
            "A#",
            "E",
            "G"
          ]
        },
        {
          "id": "dim7-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 11,
          "frets": [
            "x",
            "x",
            11,
            12,
            11,
            12
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "C#",
            "G",
            "A#",
            "E"
          ]
        },
        {
          "id": "dim7-sym",
          "label": "Simétrico (Cuerdas 1-4)",
          "startFret": 8,
          "frets": [
            "x",
            "x",
            8,
            9,
            8,
            9
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "A#",
            "E",
            "G",
            "C#"
          ]
        },
        {
          "id": "dim7-5-sym",
          "label": "Simétrico (Cuerdas 2-5)",
          "startFret": 6,
          "frets": [
            "x",
            7,
            8,
            6,
            8,
            "x"
          ],
          "fingers": [
            null,
            2,
            3,
            1,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "E",
            "A#",
            "C#",
            "G"
          ]
        }
      ]
    }
  },
  "D": {
    "7": {
      "symbol": "D7",
      "name": "Re Dominante (7)",
      "voicings": [
        {
          "id": "open-d7",
          "label": "Abierto (D7)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            0,
            2,
            1,
            2
          ],
          "fingers": [
            null,
            null,
            null,
            2,
            1,
            3
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "D",
            "A",
            "C",
            "F#"
          ]
        },
        {
          "id": "caged-e7",
          "label": "CAGED (Forma E7)",
          "startFret": 10,
          "frets": [
            10,
            12,
            10,
            11,
            10,
            10
          ],
          "fingers": [
            1,
            3,
            1,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 10,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "D",
            "A",
            "C",
            "F#",
            "A",
            "D"
          ]
        },
        {
          "id": "caged-a7",
          "label": "CAGED (Forma A7)",
          "startFret": 5,
          "frets": [
            "x",
            5,
            7,
            5,
            7,
            5
          ],
          "fingers": [
            null,
            1,
            2,
            1,
            3,
            1
          ],
          "barre": {
            "fret": 5,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "D",
            "A",
            "C",
            "F#",
            "A"
          ]
        },
        {
          "id": "caged-c7",
          "label": "CAGED (Forma C7)",
          "startFret": 3,
          "frets": [
            "x",
            5,
            4,
            5,
            3,
            "x"
          ],
          "fingers": [
            null,
            3,
            2,
            4,
            1,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "D",
            "F#",
            "C",
            "D"
          ]
        },
        {
          "id": "drop2-7",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 12,
          "frets": [
            "x",
            "x",
            12,
            14,
            13,
            14
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "D",
            "A",
            "C",
            "F#"
          ]
        }
      ]
    },
    "maj": {
      "symbol": "D",
      "name": "Re Mayor",
      "voicings": [
        {
          "id": "open-d",
          "label": "Abierto (Forma D)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            0,
            2,
            3,
            2
          ],
          "fingers": [
            null,
            null,
            null,
            1,
            3,
            2
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "D",
            "A",
            "D",
            "F#"
          ]
        },
        {
          "id": "caged-e",
          "label": "CAGED (Forma E)",
          "startFret": 10,
          "frets": [
            10,
            12,
            12,
            11,
            10,
            10
          ],
          "fingers": [
            1,
            3,
            4,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 10,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "D",
            "A",
            "D",
            "F#",
            "A",
            "D"
          ]
        },
        {
          "id": "caged-a",
          "label": "CAGED (Forma A)",
          "startFret": 5,
          "frets": [
            "x",
            5,
            7,
            7,
            7,
            5
          ],
          "fingers": [
            null,
            1,
            2,
            3,
            4,
            1
          ],
          "barre": {
            "fret": 5,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "D",
            "A",
            "D",
            "F#",
            "A"
          ]
        },
        {
          "id": "caged-c",
          "label": "CAGED (Forma C)",
          "startFret": 2,
          "frets": [
            "x",
            5,
            4,
            2,
            3,
            2
          ],
          "fingers": [
            null,
            4,
            3,
            1,
            2,
            1
          ],
          "barre": {
            "fret": 2,
            "from": 3,
            "to": 5
          },
          "difficulty": "avanzada",
          "notes": [
            "D",
            "F#",
            "A",
            "D",
            "F#"
          ]
        },
        {
          "id": "caged-d",
          "label": "CAGED (Forma D)",
          "startFret": 12,
          "frets": [
            "x",
            "x",
            12,
            14,
            15,
            14
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            4,
            3
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "D",
            "A",
            "D",
            "F#"
          ]
        }
      ]
    },
    "m": {
      "symbol": "Dm",
      "name": "Re Menor",
      "voicings": [
        {
          "id": "open-dm",
          "label": "Abierto (Forma Dm)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            0,
            2,
            3,
            1
          ],
          "fingers": [
            null,
            null,
            null,
            2,
            3,
            1
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "D",
            "A",
            "D",
            "F"
          ]
        },
        {
          "id": "caged-em",
          "label": "CAGED (Forma Em)",
          "startFret": 10,
          "frets": [
            10,
            12,
            12,
            10,
            10,
            10
          ],
          "fingers": [
            1,
            3,
            4,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 10,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "D",
            "A",
            "D",
            "F",
            "A",
            "D"
          ]
        },
        {
          "id": "caged-am",
          "label": "CAGED (Forma Am)",
          "startFret": 5,
          "frets": [
            "x",
            5,
            7,
            7,
            6,
            5
          ],
          "fingers": [
            null,
            1,
            3,
            4,
            2,
            1
          ],
          "barre": {
            "fret": 5,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "D",
            "A",
            "D",
            "F",
            "A"
          ]
        },
        {
          "id": "caged-dm",
          "label": "CAGED (Forma Dm)",
          "startFret": 12,
          "frets": [
            "x",
            "x",
            12,
            14,
            15,
            13
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            4,
            2
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "D",
            "A",
            "D",
            "F"
          ]
        },
        {
          "id": "triad-m-top",
          "label": "Tríada Menor (Cuerdas 1-4)",
          "startFret": 10,
          "frets": [
            "x",
            "x",
            12,
            10,
            10,
            10
          ],
          "fingers": [
            null,
            null,
            3,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 10,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "D",
            "F",
            "A",
            "D"
          ]
        }
      ]
    },
    "maj7": {
      "symbol": "Dmaj7",
      "name": "Re Mayor Séptima (Maj7)",
      "voicings": [
        {
          "id": "open-dmaj7",
          "label": "Abierto (Dmaj7)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            0,
            2,
            2,
            2
          ],
          "fingers": [
            null,
            null,
            null,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 2,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "D",
            "A",
            "C#",
            "F#"
          ]
        },
        {
          "id": "caged-amaj7",
          "label": "CAGED (Forma Amaj7)",
          "startFret": 5,
          "frets": [
            "x",
            5,
            7,
            6,
            7,
            5
          ],
          "fingers": [
            null,
            1,
            3,
            2,
            4,
            1
          ],
          "barre": {
            "fret": 5,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "D",
            "A",
            "C#",
            "F#",
            "A"
          ]
        },
        {
          "id": "drop3-maj7",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 10,
          "frets": [
            10,
            "x",
            11,
            11,
            10,
            "x"
          ],
          "fingers": [
            1,
            null,
            3,
            4,
            2,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "D",
            "C#",
            "F#",
            "A"
          ]
        },
        {
          "id": "drop2-maj7-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 12,
          "frets": [
            "x",
            "x",
            12,
            14,
            14,
            14
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            2,
            2
          ],
          "barre": {
            "fret": 14,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "D",
            "A",
            "C#",
            "F#"
          ]
        },
        {
          "id": "caged-cmaj7",
          "label": "CAGED (Forma Cmaj7)",
          "startFret": 2,
          "frets": [
            "x",
            5,
            4,
            2,
            2,
            "x"
          ],
          "fingers": [
            null,
            4,
            3,
            1,
            1,
            null
          ],
          "barre": {
            "fret": 2,
            "from": 3,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "D",
            "F#",
            "A",
            "C#"
          ]
        }
      ]
    },
    "m7": {
      "symbol": "Dm7",
      "name": "Re Menor Séptima (m7)",
      "voicings": [
        {
          "id": "open-dm7",
          "label": "Abierto (Dm7)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            0,
            2,
            1,
            1
          ],
          "fingers": [
            null,
            null,
            null,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 1,
            "from": 4,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "D",
            "A",
            "C",
            "F"
          ]
        },
        {
          "id": "caged-em7",
          "label": "CAGED (Forma Em7)",
          "startFret": 10,
          "frets": [
            10,
            12,
            10,
            10,
            10,
            10
          ],
          "fingers": [
            1,
            3,
            1,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 10,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "D",
            "A",
            "C",
            "F",
            "A",
            "D"
          ]
        },
        {
          "id": "caged-am7",
          "label": "CAGED (Forma Am7)",
          "startFret": 5,
          "frets": [
            "x",
            5,
            7,
            5,
            6,
            5
          ],
          "fingers": [
            null,
            1,
            3,
            1,
            2,
            1
          ],
          "barre": {
            "fret": 5,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "D",
            "A",
            "C",
            "F",
            "A"
          ]
        },
        {
          "id": "drop3-m7",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 10,
          "frets": [
            10,
            "x",
            10,
            10,
            10,
            "x"
          ],
          "fingers": [
            1,
            null,
            2,
            3,
            4,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "D",
            "C",
            "F",
            "A"
          ]
        },
        {
          "id": "drop2-m7",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 12,
          "frets": [
            "x",
            "x",
            12,
            14,
            13,
            13
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            2
          ],
          "barre": {
            "fret": 13,
            "from": 4,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "D",
            "A",
            "C",
            "F"
          ]
        }
      ]
    },
    "m7b5": {
      "symbol": "Dm7b5",
      "name": "Re Semi-disminuido (m7b5)",
      "voicings": [
        {
          "id": "open-dm7b5",
          "label": "Abierto (Dm7b5)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            0,
            1,
            1,
            1
          ],
          "fingers": [
            null,
            null,
            null,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 1,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "D",
            "G#",
            "C",
            "F"
          ]
        },
        {
          "id": "drop2-m7b5-5",
          "label": "Drop 2 (Raíz en 5ª)",
          "startFret": 5,
          "frets": [
            "x",
            5,
            6,
            5,
            6,
            "x"
          ],
          "fingers": [
            null,
            1,
            3,
            2,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "D",
            "G#",
            "C",
            "F"
          ]
        },
        {
          "id": "drop3-m7b5-6",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 9,
          "frets": [
            10,
            "x",
            10,
            10,
            9,
            "x"
          ],
          "fingers": [
            2,
            null,
            3,
            4,
            1,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "D",
            "C",
            "F",
            "G#"
          ]
        },
        {
          "id": "drop2-m7b5-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 12,
          "frets": [
            "x",
            "x",
            12,
            13,
            13,
            13
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            2,
            2
          ],
          "barre": {
            "fret": 13,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "D",
            "G#",
            "C",
            "F"
          ]
        },
        {
          "id": "drop2-m7b5-inv",
          "label": "Drop 2 (1ª Inversión)",
          "startFret": 3,
          "frets": [
            "x",
            "x",
            3,
            5,
            3,
            4
          ],
          "fingers": [
            null,
            null,
            1,
            4,
            1,
            2
          ],
          "barre": {
            "fret": 3,
            "from": 2,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "F",
            "C",
            "D",
            "G#"
          ]
        }
      ]
    },
    "dim7": {
      "symbol": "Ddim7",
      "name": "Re Disminuido Séptima (dim7)",
      "voicings": [
        {
          "id": "open-ddim7",
          "label": "Abierto (Ddim7)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            0,
            1,
            0,
            1
          ],
          "fingers": [
            null,
            null,
            null,
            1,
            null,
            2
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "D",
            "G#",
            "B",
            "F"
          ]
        },
        {
          "id": "dim7-5",
          "label": "Forma en 5ª Cuerda",
          "startFret": 4,
          "frets": [
            "x",
            5,
            6,
            4,
            6,
            "x"
          ],
          "fingers": [
            null,
            2,
            3,
            1,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "D",
            "G#",
            "B",
            "F"
          ]
        },
        {
          "id": "dim7-6",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 9,
          "frets": [
            10,
            "x",
            9,
            10,
            9,
            "x"
          ],
          "fingers": [
            2,
            null,
            1,
            3,
            1,
            null
          ],
          "barre": {
            "fret": 9,
            "from": 2,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "D",
            "B",
            "F",
            "G#"
          ]
        },
        {
          "id": "dim7-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 12,
          "frets": [
            "x",
            "x",
            12,
            13,
            12,
            13
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "D",
            "G#",
            "B",
            "F"
          ]
        },
        {
          "id": "dim7-sym",
          "label": "Simétrico (Cuerdas 1-4)",
          "startFret": 9,
          "frets": [
            "x",
            "x",
            9,
            10,
            9,
            10
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "B",
            "F",
            "G#",
            "D"
          ]
        }
      ]
    }
  },
  "D#": {
    "7": {
      "symbol": "D#7",
      "name": "Re# / Mib Dominante (7)",
      "voicings": [
        {
          "id": "caged-e7",
          "label": "CAGED (Forma E7)",
          "startFret": 11,
          "frets": [
            11,
            13,
            11,
            12,
            11,
            11
          ],
          "fingers": [
            1,
            3,
            1,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 11,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "D#",
            "A#",
            "C#",
            "G",
            "A#",
            "D#"
          ]
        },
        {
          "id": "caged-a7",
          "label": "CAGED (Forma A7)",
          "startFret": 6,
          "frets": [
            "x",
            6,
            8,
            6,
            8,
            6
          ],
          "fingers": [
            null,
            1,
            2,
            1,
            3,
            1
          ],
          "barre": {
            "fret": 6,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "D#",
            "A#",
            "C#",
            "G",
            "A#"
          ]
        },
        {
          "id": "caged-c7",
          "label": "CAGED (Forma C7)",
          "startFret": 4,
          "frets": [
            "x",
            6,
            5,
            6,
            4,
            "x"
          ],
          "fingers": [
            null,
            3,
            2,
            4,
            1,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "D#",
            "G",
            "C#",
            "D#"
          ]
        },
        {
          "id": "drop2-7",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            1,
            3,
            2,
            3
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "D#",
            "A#",
            "C#",
            "G"
          ]
        },
        {
          "id": "drop3-7",
          "label": "Drop 3 / Jazz (Raíz en 6ª)",
          "startFret": 11,
          "frets": [
            11,
            "x",
            11,
            12,
            11,
            "x"
          ],
          "fingers": [
            1,
            null,
            2,
            4,
            3,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "D#",
            "C#",
            "G",
            "A#"
          ]
        }
      ]
    },
    "maj": {
      "symbol": "D#",
      "name": "Re# / Mib Mayor",
      "voicings": [
        {
          "id": "caged-e",
          "label": "CAGED (Forma E)",
          "startFret": 11,
          "frets": [
            11,
            13,
            13,
            12,
            11,
            11
          ],
          "fingers": [
            1,
            3,
            4,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 11,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "D#",
            "A#",
            "D#",
            "G",
            "A#",
            "D#"
          ]
        },
        {
          "id": "caged-a",
          "label": "CAGED (Forma A)",
          "startFret": 6,
          "frets": [
            "x",
            6,
            8,
            8,
            8,
            6
          ],
          "fingers": [
            null,
            1,
            2,
            3,
            4,
            1
          ],
          "barre": {
            "fret": 6,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "D#",
            "A#",
            "D#",
            "G",
            "A#"
          ]
        },
        {
          "id": "caged-c",
          "label": "CAGED (Forma C)",
          "startFret": 3,
          "frets": [
            "x",
            6,
            5,
            3,
            4,
            3
          ],
          "fingers": [
            null,
            4,
            3,
            1,
            2,
            1
          ],
          "barre": {
            "fret": 3,
            "from": 3,
            "to": 5
          },
          "difficulty": "avanzada",
          "notes": [
            "D#",
            "G",
            "A#",
            "D#",
            "G"
          ]
        },
        {
          "id": "caged-d",
          "label": "CAGED (Forma D)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            1,
            3,
            4,
            3
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            4,
            3
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "D#",
            "A#",
            "D#",
            "G"
          ]
        },
        {
          "id": "triad-f",
          "label": "Tríada Superior (Forma F)",
          "startFret": 11,
          "frets": [
            "x",
            "x",
            13,
            12,
            11,
            11
          ],
          "fingers": [
            null,
            null,
            3,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 11,
            "from": 4,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "D#",
            "G",
            "A#",
            "D#"
          ]
        }
      ]
    },
    "m": {
      "symbol": "D#m",
      "name": "Re# / Mib Menor",
      "voicings": [
        {
          "id": "caged-em",
          "label": "CAGED (Forma Em)",
          "startFret": 11,
          "frets": [
            11,
            13,
            13,
            11,
            11,
            11
          ],
          "fingers": [
            1,
            3,
            4,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 11,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "D#",
            "A#",
            "D#",
            "F#",
            "A#",
            "D#"
          ]
        },
        {
          "id": "caged-am",
          "label": "CAGED (Forma Am)",
          "startFret": 6,
          "frets": [
            "x",
            6,
            8,
            8,
            7,
            6
          ],
          "fingers": [
            null,
            1,
            3,
            4,
            2,
            1
          ],
          "barre": {
            "fret": 6,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "D#",
            "A#",
            "D#",
            "F#",
            "A#"
          ]
        },
        {
          "id": "caged-dm",
          "label": "CAGED (Forma Dm)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            1,
            3,
            4,
            2
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            4,
            2
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "D#",
            "A#",
            "D#",
            "F#"
          ]
        },
        {
          "id": "triad-m-top",
          "label": "Tríada Menor (Cuerdas 1-4)",
          "startFret": 11,
          "frets": [
            "x",
            "x",
            13,
            11,
            11,
            11
          ],
          "fingers": [
            null,
            null,
            3,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 11,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "D#",
            "F#",
            "A#",
            "D#"
          ]
        },
        {
          "id": "caged-cm",
          "label": "Posición Media (Cuerdas 2-5)",
          "startFret": 3,
          "frets": [
            "x",
            6,
            4,
            3,
            4,
            "x"
          ],
          "fingers": [
            null,
            4,
            2,
            1,
            3,
            null
          ],
          "barre": null,
          "difficulty": "avanzada",
          "notes": [
            "D#",
            "F#",
            "A#",
            "D#"
          ]
        }
      ]
    },
    "maj7": {
      "symbol": "D#maj7",
      "name": "Re# / Mib Mayor Séptima (Maj7)",
      "voicings": [
        {
          "id": "caged-amaj7",
          "label": "CAGED (Forma Amaj7)",
          "startFret": 6,
          "frets": [
            "x",
            6,
            8,
            7,
            8,
            6
          ],
          "fingers": [
            null,
            1,
            3,
            2,
            4,
            1
          ],
          "barre": {
            "fret": 6,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "D#",
            "A#",
            "D",
            "G",
            "A#"
          ]
        },
        {
          "id": "drop3-maj7",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 11,
          "frets": [
            11,
            "x",
            12,
            12,
            11,
            "x"
          ],
          "fingers": [
            1,
            null,
            3,
            4,
            2,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "D#",
            "D",
            "G",
            "A#"
          ]
        },
        {
          "id": "drop2-maj7-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            1,
            3,
            3,
            3
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            2,
            2
          ],
          "barre": {
            "fret": 3,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "D#",
            "A#",
            "D",
            "G"
          ]
        },
        {
          "id": "caged-cmaj7",
          "label": "CAGED (Forma Cmaj7)",
          "startFret": 3,
          "frets": [
            "x",
            6,
            5,
            3,
            3,
            "x"
          ],
          "fingers": [
            null,
            4,
            3,
            1,
            1,
            null
          ],
          "barre": {
            "fret": 3,
            "from": 3,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "D#",
            "G",
            "A#",
            "D"
          ]
        },
        {
          "id": "caged-emaj7",
          "label": "CAGED (Forma Emaj7)",
          "startFret": 11,
          "frets": [
            11,
            13,
            12,
            12,
            11,
            11
          ],
          "fingers": [
            1,
            4,
            2,
            3,
            1,
            1
          ],
          "barre": {
            "fret": 11,
            "from": 0,
            "to": 5
          },
          "difficulty": "avanzada",
          "notes": [
            "D#",
            "A#",
            "D",
            "G",
            "A#",
            "D#"
          ]
        }
      ]
    },
    "m7": {
      "symbol": "D#m7",
      "name": "Re# / Mib Menor Séptima (m7)",
      "voicings": [
        {
          "id": "caged-em7",
          "label": "CAGED (Forma Em7)",
          "startFret": 11,
          "frets": [
            11,
            13,
            11,
            11,
            11,
            11
          ],
          "fingers": [
            1,
            3,
            1,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 11,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "D#",
            "A#",
            "C#",
            "F#",
            "A#",
            "D#"
          ]
        },
        {
          "id": "caged-am7",
          "label": "CAGED (Forma Am7)",
          "startFret": 6,
          "frets": [
            "x",
            6,
            8,
            6,
            7,
            6
          ],
          "fingers": [
            null,
            1,
            3,
            1,
            2,
            1
          ],
          "barre": {
            "fret": 6,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "D#",
            "A#",
            "C#",
            "F#",
            "A#"
          ]
        },
        {
          "id": "drop3-m7",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 11,
          "frets": [
            11,
            "x",
            11,
            11,
            11,
            "x"
          ],
          "fingers": [
            1,
            null,
            2,
            3,
            4,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "D#",
            "C#",
            "F#",
            "A#"
          ]
        },
        {
          "id": "drop2-m7",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            1,
            3,
            2,
            2
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            2
          ],
          "barre": {
            "fret": 2,
            "from": 4,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "D#",
            "A#",
            "C#",
            "F#"
          ]
        },
        {
          "id": "drop2-m7-top",
          "label": "Voicing Jazz/Funk (Cuerdas 1-4)",
          "startFret": 11,
          "frets": [
            "x",
            "x",
            11,
            11,
            11,
            11
          ],
          "fingers": [
            null,
            null,
            1,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 11,
            "from": 2,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "C#",
            "F#",
            "A#",
            "D#"
          ]
        }
      ]
    },
    "m7b5": {
      "symbol": "D#m7b5",
      "name": "Re# / Mib Semi-disminuido (m7b5)",
      "voicings": [
        {
          "id": "drop2-m7b5-5",
          "label": "Drop 2 (Raíz en 5ª)",
          "startFret": 6,
          "frets": [
            "x",
            6,
            7,
            6,
            7,
            "x"
          ],
          "fingers": [
            null,
            1,
            3,
            2,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "D#",
            "A",
            "C#",
            "F#"
          ]
        },
        {
          "id": "drop3-m7b5-6",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 10,
          "frets": [
            11,
            "x",
            11,
            11,
            10,
            "x"
          ],
          "fingers": [
            2,
            null,
            3,
            4,
            1,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "D#",
            "C#",
            "F#",
            "A"
          ]
        },
        {
          "id": "drop2-m7b5-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            1,
            2,
            2,
            2
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            2,
            2
          ],
          "barre": {
            "fret": 2,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "D#",
            "A",
            "C#",
            "F#"
          ]
        },
        {
          "id": "drop2-m7b5-inv",
          "label": "Drop 2 (1ª Inversión)",
          "startFret": 4,
          "frets": [
            "x",
            "x",
            4,
            6,
            4,
            5
          ],
          "fingers": [
            null,
            null,
            1,
            4,
            1,
            2
          ],
          "barre": {
            "fret": 4,
            "from": 2,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "F#",
            "C#",
            "D#",
            "A"
          ]
        },
        {
          "id": "drop2-m7b5-top",
          "label": "Drop 2 (Cuerdas 1-4)",
          "startFret": 10,
          "frets": [
            "x",
            "x",
            11,
            11,
            10,
            11
          ],
          "fingers": [
            null,
            null,
            2,
            3,
            1,
            4
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "C#",
            "F#",
            "A",
            "D#"
          ]
        }
      ]
    },
    "dim7": {
      "symbol": "D#dim7",
      "name": "Re# / Mib Disminuido Séptima (dim7)",
      "voicings": [
        {
          "id": "dim7-5",
          "label": "Forma en 5ª Cuerda",
          "startFret": 5,
          "frets": [
            "x",
            6,
            7,
            5,
            7,
            "x"
          ],
          "fingers": [
            null,
            2,
            3,
            1,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "D#",
            "A",
            "C",
            "F#"
          ]
        },
        {
          "id": "dim7-6",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 10,
          "frets": [
            11,
            "x",
            10,
            11,
            10,
            "x"
          ],
          "fingers": [
            2,
            null,
            1,
            3,
            1,
            null
          ],
          "barre": {
            "fret": 10,
            "from": 2,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "D#",
            "C",
            "F#",
            "A"
          ]
        },
        {
          "id": "dim7-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            1,
            2,
            1,
            2
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "D#",
            "A",
            "C",
            "F#"
          ]
        },
        {
          "id": "dim7-sym",
          "label": "Simétrico (Cuerdas 1-4)",
          "startFret": 4,
          "frets": [
            "x",
            "x",
            4,
            5,
            4,
            5
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "F#",
            "C",
            "D#",
            "A"
          ]
        },
        {
          "id": "dim7-5-sym",
          "label": "Simétrico (Cuerdas 2-5)",
          "startFret": 8,
          "frets": [
            "x",
            9,
            10,
            8,
            10,
            "x"
          ],
          "fingers": [
            null,
            2,
            3,
            1,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "F#",
            "C",
            "D#",
            "A"
          ]
        }
      ]
    }
  },
  "E": {
    "7": {
      "symbol": "E7",
      "name": "Mi Dominante (7)",
      "voicings": [
        {
          "id": "open-e7",
          "label": "Abierto (E7)",
          "startFret": 0,
          "frets": [
            0,
            2,
            0,
            1,
            0,
            0
          ],
          "fingers": [
            null,
            2,
            null,
            1,
            null,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "E",
            "B",
            "D",
            "G#",
            "B",
            "E"
          ]
        },
        {
          "id": "caged-e7",
          "label": "CAGED (Forma E7)",
          "startFret": 12,
          "frets": [
            12,
            14,
            12,
            13,
            12,
            12
          ],
          "fingers": [
            1,
            3,
            1,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 12,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "E",
            "B",
            "D",
            "G#",
            "B",
            "E"
          ]
        },
        {
          "id": "caged-a7",
          "label": "CAGED (Forma A7)",
          "startFret": 7,
          "frets": [
            "x",
            7,
            9,
            7,
            9,
            7
          ],
          "fingers": [
            null,
            1,
            2,
            1,
            3,
            1
          ],
          "barre": {
            "fret": 7,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "E",
            "B",
            "D",
            "G#",
            "B"
          ]
        },
        {
          "id": "caged-c7",
          "label": "CAGED (Forma C7)",
          "startFret": 5,
          "frets": [
            "x",
            7,
            6,
            7,
            5,
            "x"
          ],
          "fingers": [
            null,
            3,
            2,
            4,
            1,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "E",
            "G#",
            "D",
            "E"
          ]
        },
        {
          "id": "drop2-7",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            2,
            4,
            3,
            4
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "E",
            "B",
            "D",
            "G#"
          ]
        }
      ]
    },
    "maj": {
      "symbol": "E",
      "name": "Mi Mayor",
      "voicings": [
        {
          "id": "open-e",
          "label": "Abierto (Forma E)",
          "startFret": 0,
          "frets": [
            0,
            2,
            2,
            1,
            0,
            0
          ],
          "fingers": [
            null,
            2,
            3,
            1,
            null,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "E",
            "B",
            "E",
            "G#",
            "B",
            "E"
          ]
        },
        {
          "id": "caged-e",
          "label": "CAGED (Forma E)",
          "startFret": 12,
          "frets": [
            12,
            14,
            14,
            13,
            12,
            12
          ],
          "fingers": [
            1,
            3,
            4,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 12,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "E",
            "B",
            "E",
            "G#",
            "B",
            "E"
          ]
        },
        {
          "id": "caged-a",
          "label": "CAGED (Forma A)",
          "startFret": 7,
          "frets": [
            "x",
            7,
            9,
            9,
            9,
            7
          ],
          "fingers": [
            null,
            1,
            2,
            3,
            4,
            1
          ],
          "barre": {
            "fret": 7,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "E",
            "B",
            "E",
            "G#",
            "B"
          ]
        },
        {
          "id": "caged-c",
          "label": "CAGED (Forma C)",
          "startFret": 4,
          "frets": [
            "x",
            7,
            6,
            4,
            5,
            4
          ],
          "fingers": [
            null,
            4,
            3,
            1,
            2,
            1
          ],
          "barre": {
            "fret": 4,
            "from": 3,
            "to": 5
          },
          "difficulty": "avanzada",
          "notes": [
            "E",
            "G#",
            "B",
            "E",
            "G#"
          ]
        },
        {
          "id": "caged-d",
          "label": "CAGED (Forma D)",
          "startFret": 2,
          "frets": [
            "x",
            "x",
            2,
            4,
            5,
            4
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            4,
            3
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "E",
            "B",
            "E",
            "G#"
          ]
        }
      ]
    },
    "m": {
      "symbol": "Em",
      "name": "Mi Menor",
      "voicings": [
        {
          "id": "open-em",
          "label": "Abierto (Forma Em)",
          "startFret": 0,
          "frets": [
            0,
            2,
            2,
            0,
            0,
            0
          ],
          "fingers": [
            null,
            2,
            3,
            null,
            null,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "E",
            "B",
            "E",
            "G",
            "B",
            "E"
          ]
        },
        {
          "id": "caged-em",
          "label": "CAGED (Forma Em)",
          "startFret": 12,
          "frets": [
            12,
            14,
            14,
            12,
            12,
            12
          ],
          "fingers": [
            1,
            3,
            4,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 12,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "E",
            "B",
            "E",
            "G",
            "B",
            "E"
          ]
        },
        {
          "id": "caged-am",
          "label": "CAGED (Forma Am)",
          "startFret": 7,
          "frets": [
            "x",
            7,
            9,
            9,
            8,
            7
          ],
          "fingers": [
            null,
            1,
            3,
            4,
            2,
            1
          ],
          "barre": {
            "fret": 7,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "E",
            "B",
            "E",
            "G",
            "B"
          ]
        },
        {
          "id": "caged-dm",
          "label": "CAGED (Forma Dm)",
          "startFret": 2,
          "frets": [
            "x",
            "x",
            2,
            4,
            5,
            3
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            4,
            2
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "E",
            "B",
            "E",
            "G"
          ]
        },
        {
          "id": "triad-m-top",
          "label": "Tríada Menor (Cuerdas 1-4)",
          "startFret": 12,
          "frets": [
            "x",
            "x",
            14,
            12,
            12,
            12
          ],
          "fingers": [
            null,
            null,
            3,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 12,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "E",
            "G",
            "B",
            "E"
          ]
        }
      ]
    },
    "maj7": {
      "symbol": "Emaj7",
      "name": "Mi Mayor Séptima (Maj7)",
      "voicings": [
        {
          "id": "open-emaj7",
          "label": "Abierto (Emaj7)",
          "startFret": 0,
          "frets": [
            0,
            2,
            1,
            1,
            0,
            0
          ],
          "fingers": [
            null,
            3,
            1,
            2,
            null,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "E",
            "B",
            "D#",
            "G#",
            "B",
            "E"
          ]
        },
        {
          "id": "caged-amaj7",
          "label": "CAGED (Forma Amaj7)",
          "startFret": 7,
          "frets": [
            "x",
            7,
            9,
            8,
            9,
            7
          ],
          "fingers": [
            null,
            1,
            3,
            2,
            4,
            1
          ],
          "barre": {
            "fret": 7,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "E",
            "B",
            "D#",
            "G#",
            "B"
          ]
        },
        {
          "id": "drop3-maj7",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 12,
          "frets": [
            12,
            "x",
            13,
            13,
            12,
            "x"
          ],
          "fingers": [
            1,
            null,
            3,
            4,
            2,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "E",
            "D#",
            "G#",
            "B"
          ]
        },
        {
          "id": "drop2-maj7-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            2,
            4,
            4,
            4
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            2,
            2
          ],
          "barre": {
            "fret": 4,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "E",
            "B",
            "D#",
            "G#"
          ]
        },
        {
          "id": "caged-cmaj7",
          "label": "CAGED (Forma Cmaj7)",
          "startFret": 4,
          "frets": [
            "x",
            7,
            6,
            4,
            4,
            "x"
          ],
          "fingers": [
            null,
            4,
            3,
            1,
            1,
            null
          ],
          "barre": {
            "fret": 4,
            "from": 3,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "E",
            "G#",
            "B",
            "D#"
          ]
        }
      ]
    },
    "m7": {
      "symbol": "Em7",
      "name": "Mi Menor Séptima (m7)",
      "voicings": [
        {
          "id": "open-em7",
          "label": "Abierto (Em7)",
          "startFret": 0,
          "frets": [
            0,
            2,
            0,
            0,
            0,
            0
          ],
          "fingers": [
            null,
            2,
            null,
            null,
            null,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "E",
            "B",
            "D",
            "G",
            "B",
            "E"
          ]
        },
        {
          "id": "caged-em7",
          "label": "CAGED (Forma Em7)",
          "startFret": 12,
          "frets": [
            12,
            14,
            12,
            12,
            12,
            12
          ],
          "fingers": [
            1,
            3,
            1,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 12,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "E",
            "B",
            "D",
            "G",
            "B",
            "E"
          ]
        },
        {
          "id": "caged-am7",
          "label": "CAGED (Forma Am7)",
          "startFret": 7,
          "frets": [
            "x",
            7,
            9,
            7,
            8,
            7
          ],
          "fingers": [
            null,
            1,
            3,
            1,
            2,
            1
          ],
          "barre": {
            "fret": 7,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "E",
            "B",
            "D",
            "G",
            "B"
          ]
        },
        {
          "id": "drop3-m7",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 12,
          "frets": [
            12,
            "x",
            12,
            12,
            12,
            "x"
          ],
          "fingers": [
            1,
            null,
            2,
            3,
            4,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "E",
            "D",
            "G",
            "B"
          ]
        },
        {
          "id": "drop2-m7",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            2,
            4,
            3,
            3
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            2
          ],
          "barre": {
            "fret": 3,
            "from": 4,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "E",
            "B",
            "D",
            "G"
          ]
        }
      ]
    },
    "m7b5": {
      "symbol": "Em7b5",
      "name": "Mi Semi-disminuido (m7b5)",
      "voicings": [
        {
          "id": "open-em7b5",
          "label": "Abierto (Em7b5)",
          "startFret": 0,
          "frets": [
            0,
            1,
            2,
            0,
            3,
            0
          ],
          "fingers": [
            null,
            1,
            2,
            null,
            4,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "E",
            "A#",
            "E",
            "G",
            "D",
            "E"
          ]
        },
        {
          "id": "drop2-m7b5-5",
          "label": "Drop 2 (Raíz en 5ª)",
          "startFret": 7,
          "frets": [
            "x",
            7,
            8,
            7,
            8,
            "x"
          ],
          "fingers": [
            null,
            1,
            3,
            2,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "E",
            "A#",
            "D",
            "G"
          ]
        },
        {
          "id": "drop3-m7b5-6",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 11,
          "frets": [
            12,
            "x",
            12,
            12,
            11,
            "x"
          ],
          "fingers": [
            2,
            null,
            3,
            4,
            1,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "E",
            "D",
            "G",
            "A#"
          ]
        },
        {
          "id": "drop2-m7b5-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            2,
            3,
            3,
            3
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            2,
            2
          ],
          "barre": {
            "fret": 3,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "E",
            "A#",
            "D",
            "G"
          ]
        },
        {
          "id": "drop2-m7b5-inv",
          "label": "Drop 2 (1ª Inversión)",
          "startFret": 5,
          "frets": [
            "x",
            "x",
            5,
            7,
            5,
            6
          ],
          "fingers": [
            null,
            null,
            1,
            4,
            1,
            2
          ],
          "barre": {
            "fret": 5,
            "from": 2,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "G",
            "D",
            "E",
            "A#"
          ]
        }
      ]
    },
    "dim7": {
      "symbol": "Edim7",
      "name": "Mi Disminuido Séptima (dim7)",
      "voicings": [
        {
          "id": "open-edim7",
          "label": "Abierto (Edim7)",
          "startFret": 0,
          "frets": [
            0,
            1,
            2,
            0,
            2,
            0
          ],
          "fingers": [
            null,
            1,
            2,
            null,
            3,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "E",
            "A#",
            "E",
            "G",
            "C#",
            "E"
          ]
        },
        {
          "id": "dim7-5",
          "label": "Forma en 5ª Cuerda",
          "startFret": 6,
          "frets": [
            "x",
            7,
            8,
            6,
            8,
            "x"
          ],
          "fingers": [
            null,
            2,
            3,
            1,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "E",
            "A#",
            "C#",
            "G"
          ]
        },
        {
          "id": "dim7-6",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 11,
          "frets": [
            12,
            "x",
            11,
            12,
            11,
            "x"
          ],
          "fingers": [
            2,
            null,
            1,
            3,
            1,
            null
          ],
          "barre": {
            "fret": 11,
            "from": 2,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "E",
            "C#",
            "G",
            "A#"
          ]
        },
        {
          "id": "dim7-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            2,
            3,
            2,
            3
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "E",
            "A#",
            "C#",
            "G"
          ]
        },
        {
          "id": "dim7-sym",
          "label": "Simétrico (Cuerdas 1-4)",
          "startFret": 5,
          "frets": [
            "x",
            "x",
            5,
            6,
            5,
            6
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "G",
            "C#",
            "E",
            "A#"
          ]
        }
      ]
    }
  },
  "F": {
    "7": {
      "symbol": "F7",
      "name": "Fa Dominante (7)",
      "voicings": [
        {
          "id": "caged-e7",
          "label": "CAGED (Forma E7)",
          "startFret": 0,
          "frets": [
            1,
            3,
            1,
            2,
            1,
            1
          ],
          "fingers": [
            1,
            3,
            1,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 1,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "F",
            "C",
            "D#",
            "A",
            "C",
            "F"
          ]
        },
        {
          "id": "caged-a7",
          "label": "CAGED (Forma A7)",
          "startFret": 8,
          "frets": [
            "x",
            8,
            10,
            8,
            10,
            8
          ],
          "fingers": [
            null,
            1,
            2,
            1,
            3,
            1
          ],
          "barre": {
            "fret": 8,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "F",
            "C",
            "D#",
            "A",
            "C"
          ]
        },
        {
          "id": "caged-c7",
          "label": "CAGED (Forma C7)",
          "startFret": 6,
          "frets": [
            "x",
            8,
            7,
            8,
            6,
            "x"
          ],
          "fingers": [
            null,
            3,
            2,
            4,
            1,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "F",
            "A",
            "D#",
            "F"
          ]
        },
        {
          "id": "drop2-7",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 3,
          "frets": [
            "x",
            "x",
            3,
            5,
            4,
            5
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "F",
            "C",
            "D#",
            "A"
          ]
        },
        {
          "id": "drop3-7",
          "label": "Drop 3 / Jazz (Raíz en 6ª)",
          "startFret": 0,
          "frets": [
            1,
            "x",
            1,
            2,
            1,
            "x"
          ],
          "fingers": [
            1,
            null,
            2,
            4,
            3,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "F",
            "D#",
            "A",
            "C"
          ]
        }
      ]
    },
    "maj": {
      "symbol": "F",
      "name": "Fa Mayor",
      "voicings": [
        {
          "id": "caged-e",
          "label": "CAGED (Forma E)",
          "startFret": 0,
          "frets": [
            1,
            3,
            3,
            2,
            1,
            1
          ],
          "fingers": [
            1,
            3,
            4,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 1,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "F",
            "C",
            "F",
            "A",
            "C",
            "F"
          ]
        },
        {
          "id": "caged-a",
          "label": "CAGED (Forma A)",
          "startFret": 8,
          "frets": [
            "x",
            8,
            10,
            10,
            10,
            8
          ],
          "fingers": [
            null,
            1,
            2,
            3,
            4,
            1
          ],
          "barre": {
            "fret": 8,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "F",
            "C",
            "F",
            "A",
            "C"
          ]
        },
        {
          "id": "caged-c",
          "label": "CAGED (Forma C)",
          "startFret": 5,
          "frets": [
            "x",
            8,
            7,
            5,
            6,
            5
          ],
          "fingers": [
            null,
            4,
            3,
            1,
            2,
            1
          ],
          "barre": {
            "fret": 5,
            "from": 3,
            "to": 5
          },
          "difficulty": "avanzada",
          "notes": [
            "F",
            "A",
            "C",
            "F",
            "A"
          ]
        },
        {
          "id": "caged-d",
          "label": "CAGED (Forma D)",
          "startFret": 3,
          "frets": [
            "x",
            "x",
            3,
            5,
            6,
            5
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            4,
            3
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "F",
            "C",
            "F",
            "A"
          ]
        },
        {
          "id": "triad-f",
          "label": "Tríada Superior (Forma F)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            3,
            2,
            1,
            1
          ],
          "fingers": [
            null,
            null,
            3,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 1,
            "from": 4,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "F",
            "A",
            "C",
            "F"
          ]
        }
      ]
    },
    "m": {
      "symbol": "Fm",
      "name": "Fa Menor",
      "voicings": [
        {
          "id": "caged-em",
          "label": "CAGED (Forma Em)",
          "startFret": 0,
          "frets": [
            1,
            3,
            3,
            1,
            1,
            1
          ],
          "fingers": [
            1,
            3,
            4,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 1,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "F",
            "C",
            "F",
            "G#",
            "C",
            "F"
          ]
        },
        {
          "id": "caged-am",
          "label": "CAGED (Forma Am)",
          "startFret": 8,
          "frets": [
            "x",
            8,
            10,
            10,
            9,
            8
          ],
          "fingers": [
            null,
            1,
            3,
            4,
            2,
            1
          ],
          "barre": {
            "fret": 8,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "F",
            "C",
            "F",
            "G#",
            "C"
          ]
        },
        {
          "id": "caged-dm",
          "label": "CAGED (Forma Dm)",
          "startFret": 3,
          "frets": [
            "x",
            "x",
            3,
            5,
            6,
            4
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            4,
            2
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "F",
            "C",
            "F",
            "G#"
          ]
        },
        {
          "id": "triad-m-top",
          "label": "Tríada Menor (Cuerdas 1-4)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            3,
            1,
            1,
            1
          ],
          "fingers": [
            null,
            null,
            3,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 1,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "F",
            "G#",
            "C",
            "F"
          ]
        },
        {
          "id": "caged-cm",
          "label": "Posición Media (Cuerdas 2-5)",
          "startFret": 5,
          "frets": [
            "x",
            8,
            6,
            5,
            6,
            "x"
          ],
          "fingers": [
            null,
            4,
            2,
            1,
            3,
            null
          ],
          "barre": null,
          "difficulty": "avanzada",
          "notes": [
            "F",
            "G#",
            "C",
            "F"
          ]
        }
      ]
    },
    "maj7": {
      "symbol": "Fmaj7",
      "name": "Fa Mayor Séptima (Maj7)",
      "voicings": [
        {
          "id": "open-fmaj7",
          "label": "Abierto (Fmaj7)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            3,
            2,
            1,
            0
          ],
          "fingers": [
            null,
            null,
            3,
            2,
            1,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "F",
            "A",
            "C",
            "E"
          ]
        },
        {
          "id": "caged-amaj7",
          "label": "CAGED (Forma Amaj7)",
          "startFret": 8,
          "frets": [
            "x",
            8,
            10,
            9,
            10,
            8
          ],
          "fingers": [
            null,
            1,
            3,
            2,
            4,
            1
          ],
          "barre": {
            "fret": 8,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "F",
            "C",
            "E",
            "A",
            "C"
          ]
        },
        {
          "id": "drop3-maj7",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 0,
          "frets": [
            1,
            "x",
            2,
            2,
            1,
            "x"
          ],
          "fingers": [
            1,
            null,
            3,
            4,
            2,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "F",
            "E",
            "A",
            "C"
          ]
        },
        {
          "id": "drop2-maj7-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 3,
          "frets": [
            "x",
            "x",
            3,
            5,
            5,
            5
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            2,
            2
          ],
          "barre": {
            "fret": 5,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "F",
            "C",
            "E",
            "A"
          ]
        },
        {
          "id": "caged-cmaj7",
          "label": "CAGED (Forma Cmaj7)",
          "startFret": 5,
          "frets": [
            "x",
            8,
            7,
            5,
            5,
            "x"
          ],
          "fingers": [
            null,
            4,
            3,
            1,
            1,
            null
          ],
          "barre": {
            "fret": 5,
            "from": 3,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "F",
            "A",
            "C",
            "E"
          ]
        }
      ]
    },
    "m7": {
      "symbol": "Fm7",
      "name": "Fa Menor Séptima (m7)",
      "voicings": [
        {
          "id": "caged-em7",
          "label": "CAGED (Forma Em7)",
          "startFret": 0,
          "frets": [
            1,
            3,
            1,
            1,
            1,
            1
          ],
          "fingers": [
            1,
            3,
            1,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 1,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "F",
            "C",
            "D#",
            "G#",
            "C",
            "F"
          ]
        },
        {
          "id": "caged-am7",
          "label": "CAGED (Forma Am7)",
          "startFret": 8,
          "frets": [
            "x",
            8,
            10,
            8,
            9,
            8
          ],
          "fingers": [
            null,
            1,
            3,
            1,
            2,
            1
          ],
          "barre": {
            "fret": 8,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "F",
            "C",
            "D#",
            "G#",
            "C"
          ]
        },
        {
          "id": "drop3-m7",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 0,
          "frets": [
            1,
            "x",
            1,
            1,
            1,
            "x"
          ],
          "fingers": [
            1,
            null,
            2,
            3,
            4,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "F",
            "D#",
            "G#",
            "C"
          ]
        },
        {
          "id": "drop2-m7",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 3,
          "frets": [
            "x",
            "x",
            3,
            5,
            4,
            4
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            2
          ],
          "barre": {
            "fret": 4,
            "from": 4,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "F",
            "C",
            "D#",
            "G#"
          ]
        },
        {
          "id": "drop2-m7-top",
          "label": "Voicing Jazz/Funk (Cuerdas 1-4)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            1,
            1,
            1,
            1
          ],
          "fingers": [
            null,
            null,
            1,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 1,
            "from": 2,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "D#",
            "G#",
            "C",
            "F"
          ]
        }
      ]
    },
    "m7b5": {
      "symbol": "Fm7b5",
      "name": "Fa Semi-disminuido (m7b5)",
      "voicings": [
        {
          "id": "drop2-m7b5-5",
          "label": "Drop 2 (Raíz en 5ª)",
          "startFret": 8,
          "frets": [
            "x",
            8,
            9,
            8,
            9,
            "x"
          ],
          "fingers": [
            null,
            1,
            3,
            2,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "F",
            "B",
            "D#",
            "G#"
          ]
        },
        {
          "id": "drop3-m7b5-6",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 12,
          "frets": [
            13,
            "x",
            13,
            13,
            12,
            "x"
          ],
          "fingers": [
            2,
            null,
            3,
            4,
            1,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "F",
            "D#",
            "G#",
            "B"
          ]
        },
        {
          "id": "drop2-m7b5-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            3,
            4,
            4,
            4
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            2,
            2
          ],
          "barre": {
            "fret": 4,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "F",
            "B",
            "D#",
            "G#"
          ]
        },
        {
          "id": "drop2-m7b5-inv",
          "label": "Drop 2 (1ª Inversión)",
          "startFret": 6,
          "frets": [
            "x",
            "x",
            6,
            8,
            6,
            7
          ],
          "fingers": [
            null,
            null,
            1,
            4,
            1,
            2
          ],
          "barre": {
            "fret": 6,
            "from": 2,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "G#",
            "D#",
            "F",
            "B"
          ]
        },
        {
          "id": "drop2-m7b5-top",
          "label": "Drop 2 (Cuerdas 1-4)",
          "startFret": 12,
          "frets": [
            "x",
            "x",
            13,
            13,
            12,
            13
          ],
          "fingers": [
            null,
            null,
            2,
            3,
            1,
            4
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "D#",
            "G#",
            "B",
            "F"
          ]
        }
      ]
    },
    "dim7": {
      "symbol": "Fdim7",
      "name": "Fa Disminuido Séptima (dim7)",
      "voicings": [
        {
          "id": "dim7-5",
          "label": "Forma en 5ª Cuerda",
          "startFret": 7,
          "frets": [
            "x",
            8,
            9,
            7,
            9,
            "x"
          ],
          "fingers": [
            null,
            2,
            3,
            1,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "F",
            "B",
            "D",
            "G#"
          ]
        },
        {
          "id": "dim7-6",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 12,
          "frets": [
            13,
            "x",
            12,
            13,
            12,
            "x"
          ],
          "fingers": [
            2,
            null,
            1,
            3,
            1,
            null
          ],
          "barre": {
            "fret": 12,
            "from": 2,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "F",
            "D",
            "G#",
            "B"
          ]
        },
        {
          "id": "dim7-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            3,
            4,
            3,
            4
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "F",
            "B",
            "D",
            "G#"
          ]
        },
        {
          "id": "dim7-sym",
          "label": "Simétrico (Cuerdas 1-4)",
          "startFret": 6,
          "frets": [
            "x",
            "x",
            6,
            7,
            6,
            7
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "G#",
            "D",
            "F",
            "B"
          ]
        },
        {
          "id": "dim7-5-sym",
          "label": "Simétrico (Cuerdas 2-5)",
          "startFret": 10,
          "frets": [
            "x",
            11,
            12,
            10,
            12,
            "x"
          ],
          "fingers": [
            null,
            2,
            3,
            1,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "G#",
            "D",
            "F",
            "B"
          ]
        }
      ]
    }
  },
  "F#": {
    "7": {
      "symbol": "F#7",
      "name": "Fa# / Solb Dominante (7)",
      "voicings": [
        {
          "id": "caged-e7",
          "label": "CAGED (Forma E7)",
          "startFret": 0,
          "frets": [
            2,
            4,
            2,
            3,
            2,
            2
          ],
          "fingers": [
            1,
            3,
            1,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 2,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "F#",
            "C#",
            "E",
            "A#",
            "C#",
            "F#"
          ]
        },
        {
          "id": "caged-a7",
          "label": "CAGED (Forma A7)",
          "startFret": 9,
          "frets": [
            "x",
            9,
            11,
            9,
            11,
            9
          ],
          "fingers": [
            null,
            1,
            2,
            1,
            3,
            1
          ],
          "barre": {
            "fret": 9,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "F#",
            "C#",
            "E",
            "A#",
            "C#"
          ]
        },
        {
          "id": "caged-c7",
          "label": "CAGED (Forma C7)",
          "startFret": 7,
          "frets": [
            "x",
            9,
            8,
            9,
            7,
            "x"
          ],
          "fingers": [
            null,
            3,
            2,
            4,
            1,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "F#",
            "A#",
            "E",
            "F#"
          ]
        },
        {
          "id": "drop2-7",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 4,
          "frets": [
            "x",
            "x",
            4,
            6,
            5,
            6
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "F#",
            "C#",
            "E",
            "A#"
          ]
        },
        {
          "id": "drop3-7",
          "label": "Drop 3 / Jazz (Raíz en 6ª)",
          "startFret": 0,
          "frets": [
            2,
            "x",
            2,
            3,
            2,
            "x"
          ],
          "fingers": [
            1,
            null,
            2,
            4,
            3,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "F#",
            "E",
            "A#",
            "C#"
          ]
        }
      ]
    },
    "maj": {
      "symbol": "F#",
      "name": "Fa# / Solb Mayor",
      "voicings": [
        {
          "id": "caged-e",
          "label": "CAGED (Forma E)",
          "startFret": 0,
          "frets": [
            2,
            4,
            4,
            3,
            2,
            2
          ],
          "fingers": [
            1,
            3,
            4,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 2,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "F#",
            "C#",
            "F#",
            "A#",
            "C#",
            "F#"
          ]
        },
        {
          "id": "caged-a",
          "label": "CAGED (Forma A)",
          "startFret": 9,
          "frets": [
            "x",
            9,
            11,
            11,
            11,
            9
          ],
          "fingers": [
            null,
            1,
            2,
            3,
            4,
            1
          ],
          "barre": {
            "fret": 9,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "F#",
            "C#",
            "F#",
            "A#",
            "C#"
          ]
        },
        {
          "id": "caged-c",
          "label": "CAGED (Forma C)",
          "startFret": 6,
          "frets": [
            "x",
            9,
            8,
            6,
            7,
            6
          ],
          "fingers": [
            null,
            4,
            3,
            1,
            2,
            1
          ],
          "barre": {
            "fret": 6,
            "from": 3,
            "to": 5
          },
          "difficulty": "avanzada",
          "notes": [
            "F#",
            "A#",
            "C#",
            "F#",
            "A#"
          ]
        },
        {
          "id": "caged-d",
          "label": "CAGED (Forma D)",
          "startFret": 4,
          "frets": [
            "x",
            "x",
            4,
            6,
            7,
            6
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            4,
            3
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "F#",
            "C#",
            "F#",
            "A#"
          ]
        },
        {
          "id": "triad-f",
          "label": "Tríada Superior (Forma F)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            4,
            3,
            2,
            2
          ],
          "fingers": [
            null,
            null,
            3,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 2,
            "from": 4,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "F#",
            "A#",
            "C#",
            "F#"
          ]
        }
      ]
    },
    "m": {
      "symbol": "F#m",
      "name": "Fa# / Solb Menor",
      "voicings": [
        {
          "id": "caged-em",
          "label": "CAGED (Forma Em)",
          "startFret": 0,
          "frets": [
            2,
            4,
            4,
            2,
            2,
            2
          ],
          "fingers": [
            1,
            3,
            4,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 2,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "F#",
            "C#",
            "F#",
            "A",
            "C#",
            "F#"
          ]
        },
        {
          "id": "caged-am",
          "label": "CAGED (Forma Am)",
          "startFret": 9,
          "frets": [
            "x",
            9,
            11,
            11,
            10,
            9
          ],
          "fingers": [
            null,
            1,
            3,
            4,
            2,
            1
          ],
          "barre": {
            "fret": 9,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "F#",
            "C#",
            "F#",
            "A",
            "C#"
          ]
        },
        {
          "id": "caged-dm",
          "label": "CAGED (Forma Dm)",
          "startFret": 4,
          "frets": [
            "x",
            "x",
            4,
            6,
            7,
            5
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            4,
            2
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "F#",
            "C#",
            "F#",
            "A"
          ]
        },
        {
          "id": "triad-m-top",
          "label": "Tríada Menor (Cuerdas 1-4)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            4,
            2,
            2,
            2
          ],
          "fingers": [
            null,
            null,
            3,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 2,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "F#",
            "A",
            "C#",
            "F#"
          ]
        },
        {
          "id": "caged-cm",
          "label": "Posición Media (Cuerdas 2-5)",
          "startFret": 6,
          "frets": [
            "x",
            9,
            7,
            6,
            7,
            "x"
          ],
          "fingers": [
            null,
            4,
            2,
            1,
            3,
            null
          ],
          "barre": null,
          "difficulty": "avanzada",
          "notes": [
            "F#",
            "A",
            "C#",
            "F#"
          ]
        }
      ]
    },
    "maj7": {
      "symbol": "F#maj7",
      "name": "Fa# / Solb Mayor Séptima (Maj7)",
      "voicings": [
        {
          "id": "caged-amaj7",
          "label": "CAGED (Forma Amaj7)",
          "startFret": 9,
          "frets": [
            "x",
            9,
            11,
            10,
            11,
            9
          ],
          "fingers": [
            null,
            1,
            3,
            2,
            4,
            1
          ],
          "barre": {
            "fret": 9,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "F#",
            "C#",
            "F",
            "A#",
            "C#"
          ]
        },
        {
          "id": "drop3-maj7",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 0,
          "frets": [
            2,
            "x",
            3,
            3,
            2,
            "x"
          ],
          "fingers": [
            1,
            null,
            3,
            4,
            2,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "F#",
            "F",
            "A#",
            "C#"
          ]
        },
        {
          "id": "drop2-maj7-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 4,
          "frets": [
            "x",
            "x",
            4,
            6,
            6,
            6
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            2,
            2
          ],
          "barre": {
            "fret": 6,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "F#",
            "C#",
            "F",
            "A#"
          ]
        },
        {
          "id": "caged-cmaj7",
          "label": "CAGED (Forma Cmaj7)",
          "startFret": 6,
          "frets": [
            "x",
            9,
            8,
            6,
            6,
            "x"
          ],
          "fingers": [
            null,
            4,
            3,
            1,
            1,
            null
          ],
          "barre": {
            "fret": 6,
            "from": 3,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "F#",
            "A#",
            "C#",
            "F"
          ]
        },
        {
          "id": "caged-emaj7",
          "label": "CAGED (Forma Emaj7)",
          "startFret": 0,
          "frets": [
            2,
            4,
            3,
            3,
            2,
            2
          ],
          "fingers": [
            1,
            4,
            2,
            3,
            1,
            1
          ],
          "barre": {
            "fret": 2,
            "from": 0,
            "to": 5
          },
          "difficulty": "avanzada",
          "notes": [
            "F#",
            "C#",
            "F",
            "A#",
            "C#",
            "F#"
          ]
        }
      ]
    },
    "m7": {
      "symbol": "F#m7",
      "name": "Fa# / Solb Menor Séptima (m7)",
      "voicings": [
        {
          "id": "caged-em7",
          "label": "CAGED (Forma Em7)",
          "startFret": 0,
          "frets": [
            2,
            4,
            2,
            2,
            2,
            2
          ],
          "fingers": [
            1,
            3,
            1,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 2,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "F#",
            "C#",
            "E",
            "A",
            "C#",
            "F#"
          ]
        },
        {
          "id": "caged-am7",
          "label": "CAGED (Forma Am7)",
          "startFret": 9,
          "frets": [
            "x",
            9,
            11,
            9,
            10,
            9
          ],
          "fingers": [
            null,
            1,
            3,
            1,
            2,
            1
          ],
          "barre": {
            "fret": 9,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "F#",
            "C#",
            "E",
            "A",
            "C#"
          ]
        },
        {
          "id": "drop3-m7",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 0,
          "frets": [
            2,
            "x",
            2,
            2,
            2,
            "x"
          ],
          "fingers": [
            1,
            null,
            2,
            3,
            4,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "F#",
            "E",
            "A",
            "C#"
          ]
        },
        {
          "id": "drop2-m7",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 4,
          "frets": [
            "x",
            "x",
            4,
            6,
            5,
            5
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            2
          ],
          "barre": {
            "fret": 5,
            "from": 4,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "F#",
            "C#",
            "E",
            "A"
          ]
        },
        {
          "id": "drop2-m7-top",
          "label": "Voicing Jazz/Funk (Cuerdas 1-4)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            2,
            2,
            2,
            2
          ],
          "fingers": [
            null,
            null,
            1,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 2,
            "from": 2,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "E",
            "A",
            "C#",
            "F#"
          ]
        }
      ]
    },
    "m7b5": {
      "symbol": "F#m7b5",
      "name": "Fa# / Solb Semi-disminuido (m7b5)",
      "voicings": [
        {
          "id": "drop2-m7b5-5",
          "label": "Drop 2 (Raíz en 5ª)",
          "startFret": 9,
          "frets": [
            "x",
            9,
            10,
            9,
            10,
            "x"
          ],
          "fingers": [
            null,
            1,
            3,
            2,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "F#",
            "C",
            "E",
            "A"
          ]
        },
        {
          "id": "drop3-m7b5-6",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 0,
          "frets": [
            2,
            "x",
            2,
            2,
            1,
            "x"
          ],
          "fingers": [
            2,
            null,
            3,
            4,
            1,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "F#",
            "E",
            "A",
            "C"
          ]
        },
        {
          "id": "drop2-m7b5-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 4,
          "frets": [
            "x",
            "x",
            4,
            5,
            5,
            5
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            2,
            2
          ],
          "barre": {
            "fret": 5,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "F#",
            "C",
            "E",
            "A"
          ]
        },
        {
          "id": "drop2-m7b5-inv",
          "label": "Drop 2 (1ª Inversión)",
          "startFret": 7,
          "frets": [
            "x",
            "x",
            7,
            9,
            7,
            8
          ],
          "fingers": [
            null,
            null,
            1,
            4,
            1,
            2
          ],
          "barre": {
            "fret": 7,
            "from": 2,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "A",
            "E",
            "F#",
            "C"
          ]
        },
        {
          "id": "drop2-m7b5-top",
          "label": "Drop 2 (Cuerdas 1-4)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            2,
            2,
            1,
            2
          ],
          "fingers": [
            null,
            null,
            2,
            3,
            1,
            4
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "E",
            "A",
            "C",
            "F#"
          ]
        }
      ]
    },
    "dim7": {
      "symbol": "F#dim7",
      "name": "Fa# / Solb Disminuido Séptima (dim7)",
      "voicings": [
        {
          "id": "dim7-5",
          "label": "Forma en 5ª Cuerda",
          "startFret": 8,
          "frets": [
            "x",
            9,
            10,
            8,
            10,
            "x"
          ],
          "fingers": [
            null,
            2,
            3,
            1,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "F#",
            "C",
            "D#",
            "A"
          ]
        },
        {
          "id": "dim7-6",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 0,
          "frets": [
            2,
            "x",
            1,
            2,
            1,
            "x"
          ],
          "fingers": [
            2,
            null,
            1,
            3,
            1,
            null
          ],
          "barre": {
            "fret": 1,
            "from": 2,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "F#",
            "D#",
            "A",
            "C"
          ]
        },
        {
          "id": "dim7-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 4,
          "frets": [
            "x",
            "x",
            4,
            5,
            4,
            5
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "F#",
            "C",
            "D#",
            "A"
          ]
        },
        {
          "id": "dim7-sym",
          "label": "Simétrico (Cuerdas 1-4)",
          "startFret": 7,
          "frets": [
            "x",
            "x",
            7,
            8,
            7,
            8
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "A",
            "D#",
            "F#",
            "C"
          ]
        },
        {
          "id": "dim7-5-sym",
          "label": "Simétrico (Cuerdas 2-5)",
          "startFret": 11,
          "frets": [
            "x",
            12,
            13,
            11,
            13,
            "x"
          ],
          "fingers": [
            null,
            2,
            3,
            1,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "A",
            "D#",
            "F#",
            "C"
          ]
        }
      ]
    }
  },
  "G": {
    "7": {
      "symbol": "G7",
      "name": "Sol Dominante (7)",
      "voicings": [
        {
          "id": "open-g7",
          "label": "Abierto (G7)",
          "startFret": 0,
          "frets": [
            3,
            2,
            0,
            0,
            0,
            1
          ],
          "fingers": [
            3,
            2,
            null,
            null,
            null,
            1
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "G",
            "B",
            "D",
            "G",
            "B",
            "F"
          ]
        },
        {
          "id": "caged-e7",
          "label": "CAGED (Forma E7)",
          "startFret": 3,
          "frets": [
            3,
            5,
            3,
            4,
            3,
            3
          ],
          "fingers": [
            1,
            3,
            1,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 3,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "G",
            "D",
            "F",
            "B",
            "D",
            "G"
          ]
        },
        {
          "id": "caged-a7",
          "label": "CAGED (Forma A7)",
          "startFret": 10,
          "frets": [
            "x",
            10,
            12,
            10,
            12,
            10
          ],
          "fingers": [
            null,
            1,
            2,
            1,
            3,
            1
          ],
          "barre": {
            "fret": 10,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "G",
            "D",
            "F",
            "B",
            "D"
          ]
        },
        {
          "id": "caged-c7",
          "label": "CAGED (Forma C7)",
          "startFret": 8,
          "frets": [
            "x",
            10,
            9,
            10,
            8,
            "x"
          ],
          "fingers": [
            null,
            3,
            2,
            4,
            1,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "G",
            "B",
            "F",
            "G"
          ]
        },
        {
          "id": "drop2-7",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 5,
          "frets": [
            "x",
            "x",
            5,
            7,
            6,
            7
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "G",
            "D",
            "F",
            "B"
          ]
        }
      ]
    },
    "maj": {
      "symbol": "G",
      "name": "Sol Mayor",
      "voicings": [
        {
          "id": "open-g",
          "label": "Abierto (Forma G)",
          "startFret": 0,
          "frets": [
            3,
            2,
            0,
            0,
            0,
            3
          ],
          "fingers": [
            2,
            1,
            null,
            null,
            null,
            3
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "G",
            "B",
            "D",
            "G",
            "B",
            "G"
          ]
        },
        {
          "id": "caged-e",
          "label": "CAGED (Forma E)",
          "startFret": 3,
          "frets": [
            3,
            5,
            5,
            4,
            3,
            3
          ],
          "fingers": [
            1,
            3,
            4,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 3,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "G",
            "D",
            "G",
            "B",
            "D",
            "G"
          ]
        },
        {
          "id": "caged-a",
          "label": "CAGED (Forma A)",
          "startFret": 10,
          "frets": [
            "x",
            10,
            12,
            12,
            12,
            10
          ],
          "fingers": [
            null,
            1,
            2,
            3,
            4,
            1
          ],
          "barre": {
            "fret": 10,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "G",
            "D",
            "G",
            "B",
            "D"
          ]
        },
        {
          "id": "caged-c",
          "label": "CAGED (Forma C)",
          "startFret": 7,
          "frets": [
            "x",
            10,
            9,
            7,
            8,
            7
          ],
          "fingers": [
            null,
            4,
            3,
            1,
            2,
            1
          ],
          "barre": {
            "fret": 7,
            "from": 3,
            "to": 5
          },
          "difficulty": "avanzada",
          "notes": [
            "G",
            "B",
            "D",
            "G",
            "B"
          ]
        },
        {
          "id": "caged-d",
          "label": "CAGED (Forma D)",
          "startFret": 5,
          "frets": [
            "x",
            "x",
            5,
            7,
            8,
            7
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            4,
            3
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "G",
            "D",
            "G",
            "B"
          ]
        }
      ]
    },
    "m": {
      "symbol": "Gm",
      "name": "Sol Menor",
      "voicings": [
        {
          "id": "caged-em",
          "label": "CAGED (Forma Em)",
          "startFret": 3,
          "frets": [
            3,
            5,
            5,
            3,
            3,
            3
          ],
          "fingers": [
            1,
            3,
            4,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 3,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "G",
            "D",
            "G",
            "A#",
            "D",
            "G"
          ]
        },
        {
          "id": "caged-am",
          "label": "CAGED (Forma Am)",
          "startFret": 10,
          "frets": [
            "x",
            10,
            12,
            12,
            11,
            10
          ],
          "fingers": [
            null,
            1,
            3,
            4,
            2,
            1
          ],
          "barre": {
            "fret": 10,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "G",
            "D",
            "G",
            "A#",
            "D"
          ]
        },
        {
          "id": "caged-dm",
          "label": "CAGED (Forma Dm)",
          "startFret": 5,
          "frets": [
            "x",
            "x",
            5,
            7,
            8,
            6
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            4,
            2
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "G",
            "D",
            "G",
            "A#"
          ]
        },
        {
          "id": "triad-m-top",
          "label": "Tríada Menor (Cuerdas 1-4)",
          "startFret": 3,
          "frets": [
            "x",
            "x",
            5,
            3,
            3,
            3
          ],
          "fingers": [
            null,
            null,
            3,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 3,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "G",
            "A#",
            "D",
            "G"
          ]
        },
        {
          "id": "caged-cm",
          "label": "Posición Media (Cuerdas 2-5)",
          "startFret": 7,
          "frets": [
            "x",
            10,
            8,
            7,
            8,
            "x"
          ],
          "fingers": [
            null,
            4,
            2,
            1,
            3,
            null
          ],
          "barre": null,
          "difficulty": "avanzada",
          "notes": [
            "G",
            "A#",
            "D",
            "G"
          ]
        }
      ]
    },
    "maj7": {
      "symbol": "Gmaj7",
      "name": "Sol Mayor Séptima (Maj7)",
      "voicings": [
        {
          "id": "open-gmaj7",
          "label": "Abierto (Gmaj7)",
          "startFret": 0,
          "frets": [
            3,
            2,
            0,
            0,
            0,
            2
          ],
          "fingers": [
            3,
            1,
            null,
            null,
            null,
            2
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "G",
            "B",
            "D",
            "G",
            "B",
            "F#"
          ]
        },
        {
          "id": "caged-amaj7",
          "label": "CAGED (Forma Amaj7)",
          "startFret": 10,
          "frets": [
            "x",
            10,
            12,
            11,
            12,
            10
          ],
          "fingers": [
            null,
            1,
            3,
            2,
            4,
            1
          ],
          "barre": {
            "fret": 10,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "G",
            "D",
            "F#",
            "B",
            "D"
          ]
        },
        {
          "id": "drop3-maj7",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 0,
          "frets": [
            3,
            "x",
            4,
            4,
            3,
            "x"
          ],
          "fingers": [
            1,
            null,
            3,
            4,
            2,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "G",
            "F#",
            "B",
            "D"
          ]
        },
        {
          "id": "drop2-maj7-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 5,
          "frets": [
            "x",
            "x",
            5,
            7,
            7,
            7
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            2,
            2
          ],
          "barre": {
            "fret": 7,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "G",
            "D",
            "F#",
            "B"
          ]
        },
        {
          "id": "caged-cmaj7",
          "label": "CAGED (Forma Cmaj7)",
          "startFret": 7,
          "frets": [
            "x",
            10,
            9,
            7,
            7,
            "x"
          ],
          "fingers": [
            null,
            4,
            3,
            1,
            1,
            null
          ],
          "barre": {
            "fret": 7,
            "from": 3,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "G",
            "B",
            "D",
            "F#"
          ]
        }
      ]
    },
    "m7": {
      "symbol": "Gm7",
      "name": "Sol Menor Séptima (m7)",
      "voicings": [
        {
          "id": "caged-em7",
          "label": "CAGED (Forma Em7)",
          "startFret": 3,
          "frets": [
            3,
            5,
            3,
            3,
            3,
            3
          ],
          "fingers": [
            1,
            3,
            1,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 3,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "G",
            "D",
            "F",
            "A#",
            "D",
            "G"
          ]
        },
        {
          "id": "caged-am7",
          "label": "CAGED (Forma Am7)",
          "startFret": 10,
          "frets": [
            "x",
            10,
            12,
            10,
            11,
            10
          ],
          "fingers": [
            null,
            1,
            3,
            1,
            2,
            1
          ],
          "barre": {
            "fret": 10,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "G",
            "D",
            "F",
            "A#",
            "D"
          ]
        },
        {
          "id": "drop3-m7",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 0,
          "frets": [
            3,
            "x",
            3,
            3,
            3,
            "x"
          ],
          "fingers": [
            1,
            null,
            2,
            3,
            4,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "G",
            "F",
            "A#",
            "D"
          ]
        },
        {
          "id": "drop2-m7",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 5,
          "frets": [
            "x",
            "x",
            5,
            7,
            6,
            6
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            2
          ],
          "barre": {
            "fret": 6,
            "from": 4,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "G",
            "D",
            "F",
            "A#"
          ]
        },
        {
          "id": "drop2-m7-top",
          "label": "Voicing Jazz/Funk (Cuerdas 1-4)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            3,
            3,
            3,
            3
          ],
          "fingers": [
            null,
            null,
            1,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 3,
            "from": 2,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "F",
            "A#",
            "D",
            "G"
          ]
        }
      ]
    },
    "m7b5": {
      "symbol": "Gm7b5",
      "name": "Sol Semi-disminuido (m7b5)",
      "voicings": [
        {
          "id": "drop2-m7b5-5",
          "label": "Drop 2 (Raíz en 5ª)",
          "startFret": 10,
          "frets": [
            "x",
            10,
            11,
            10,
            11,
            "x"
          ],
          "fingers": [
            null,
            1,
            3,
            2,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "G",
            "C#",
            "F",
            "A#"
          ]
        },
        {
          "id": "drop3-m7b5-6",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 0,
          "frets": [
            3,
            "x",
            3,
            3,
            2,
            "x"
          ],
          "fingers": [
            2,
            null,
            3,
            4,
            1,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "G",
            "F",
            "A#",
            "C#"
          ]
        },
        {
          "id": "drop2-m7b5-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 5,
          "frets": [
            "x",
            "x",
            5,
            6,
            6,
            6
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            2,
            2
          ],
          "barre": {
            "fret": 6,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "G",
            "C#",
            "F",
            "A#"
          ]
        },
        {
          "id": "drop2-m7b5-inv",
          "label": "Drop 2 (1ª Inversión)",
          "startFret": 8,
          "frets": [
            "x",
            "x",
            8,
            10,
            8,
            9
          ],
          "fingers": [
            null,
            null,
            1,
            4,
            1,
            2
          ],
          "barre": {
            "fret": 8,
            "from": 2,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "A#",
            "F",
            "G",
            "C#"
          ]
        },
        {
          "id": "drop2-m7b5-top",
          "label": "Drop 2 (Cuerdas 1-4)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            3,
            3,
            2,
            3
          ],
          "fingers": [
            null,
            null,
            2,
            3,
            1,
            4
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "F",
            "A#",
            "C#",
            "G"
          ]
        }
      ]
    },
    "dim7": {
      "symbol": "Gdim7",
      "name": "Sol Disminuido Séptima (dim7)",
      "voicings": [
        {
          "id": "dim7-5",
          "label": "Forma en 5ª Cuerda",
          "startFret": 9,
          "frets": [
            "x",
            10,
            11,
            9,
            11,
            "x"
          ],
          "fingers": [
            null,
            2,
            3,
            1,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "G",
            "C#",
            "E",
            "A#"
          ]
        },
        {
          "id": "dim7-6",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 0,
          "frets": [
            3,
            "x",
            2,
            3,
            2,
            "x"
          ],
          "fingers": [
            2,
            null,
            1,
            3,
            1,
            null
          ],
          "barre": {
            "fret": 2,
            "from": 2,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "G",
            "E",
            "A#",
            "C#"
          ]
        },
        {
          "id": "dim7-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 5,
          "frets": [
            "x",
            "x",
            5,
            6,
            5,
            6
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "G",
            "C#",
            "E",
            "A#"
          ]
        },
        {
          "id": "dim7-sym",
          "label": "Simétrico (Cuerdas 1-4)",
          "startFret": 8,
          "frets": [
            "x",
            "x",
            8,
            9,
            8,
            9
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "A#",
            "E",
            "G",
            "C#"
          ]
        },
        {
          "id": "dim7-5-sym",
          "label": "Simétrico (Cuerdas 2-5)",
          "startFret": 6,
          "frets": [
            "x",
            7,
            8,
            6,
            8,
            "x"
          ],
          "fingers": [
            null,
            2,
            3,
            1,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "E",
            "A#",
            "C#",
            "G"
          ]
        }
      ]
    }
  },
  "G#": {
    "7": {
      "symbol": "G#7",
      "name": "Sol# / Lab Dominante (7)",
      "voicings": [
        {
          "id": "caged-e7",
          "label": "CAGED (Forma E7)",
          "startFret": 4,
          "frets": [
            4,
            6,
            4,
            5,
            4,
            4
          ],
          "fingers": [
            1,
            3,
            1,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 4,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "G#",
            "D#",
            "F#",
            "C",
            "D#",
            "G#"
          ]
        },
        {
          "id": "caged-a7",
          "label": "CAGED (Forma A7)",
          "startFret": 11,
          "frets": [
            "x",
            11,
            13,
            11,
            13,
            11
          ],
          "fingers": [
            null,
            1,
            2,
            1,
            3,
            1
          ],
          "barre": {
            "fret": 11,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "G#",
            "D#",
            "F#",
            "C",
            "D#"
          ]
        },
        {
          "id": "caged-c7",
          "label": "CAGED (Forma C7)",
          "startFret": 9,
          "frets": [
            "x",
            11,
            10,
            11,
            9,
            "x"
          ],
          "fingers": [
            null,
            3,
            2,
            4,
            1,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "G#",
            "C",
            "F#",
            "G#"
          ]
        },
        {
          "id": "drop2-7",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 6,
          "frets": [
            "x",
            "x",
            6,
            8,
            7,
            8
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "G#",
            "D#",
            "F#",
            "C"
          ]
        },
        {
          "id": "drop3-7",
          "label": "Drop 3 / Jazz (Raíz en 6ª)",
          "startFret": 4,
          "frets": [
            4,
            "x",
            4,
            5,
            4,
            "x"
          ],
          "fingers": [
            1,
            null,
            2,
            4,
            3,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "G#",
            "F#",
            "C",
            "D#"
          ]
        }
      ]
    },
    "maj": {
      "symbol": "G#",
      "name": "Sol# / Lab Mayor",
      "voicings": [
        {
          "id": "caged-e",
          "label": "CAGED (Forma E)",
          "startFret": 4,
          "frets": [
            4,
            6,
            6,
            5,
            4,
            4
          ],
          "fingers": [
            1,
            3,
            4,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 4,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "G#",
            "D#",
            "G#",
            "C",
            "D#",
            "G#"
          ]
        },
        {
          "id": "caged-a",
          "label": "CAGED (Forma A)",
          "startFret": 11,
          "frets": [
            "x",
            11,
            13,
            13,
            13,
            11
          ],
          "fingers": [
            null,
            1,
            2,
            3,
            4,
            1
          ],
          "barre": {
            "fret": 11,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "G#",
            "D#",
            "G#",
            "C",
            "D#"
          ]
        },
        {
          "id": "caged-c",
          "label": "CAGED (Forma C)",
          "startFret": 8,
          "frets": [
            "x",
            11,
            10,
            8,
            9,
            8
          ],
          "fingers": [
            null,
            4,
            3,
            1,
            2,
            1
          ],
          "barre": {
            "fret": 8,
            "from": 3,
            "to": 5
          },
          "difficulty": "avanzada",
          "notes": [
            "G#",
            "C",
            "D#",
            "G#",
            "C"
          ]
        },
        {
          "id": "caged-d",
          "label": "CAGED (Forma D)",
          "startFret": 6,
          "frets": [
            "x",
            "x",
            6,
            8,
            9,
            8
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            4,
            3
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "G#",
            "D#",
            "G#",
            "C"
          ]
        },
        {
          "id": "triad-f",
          "label": "Tríada Superior (Forma F)",
          "startFret": 4,
          "frets": [
            "x",
            "x",
            6,
            5,
            4,
            4
          ],
          "fingers": [
            null,
            null,
            3,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 4,
            "from": 4,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "G#",
            "C",
            "D#",
            "G#"
          ]
        }
      ]
    },
    "m": {
      "symbol": "G#m",
      "name": "Sol# / Lab Menor",
      "voicings": [
        {
          "id": "caged-em",
          "label": "CAGED (Forma Em)",
          "startFret": 4,
          "frets": [
            4,
            6,
            6,
            4,
            4,
            4
          ],
          "fingers": [
            1,
            3,
            4,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 4,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "G#",
            "D#",
            "G#",
            "B",
            "D#",
            "G#"
          ]
        },
        {
          "id": "caged-am",
          "label": "CAGED (Forma Am)",
          "startFret": 11,
          "frets": [
            "x",
            11,
            13,
            13,
            12,
            11
          ],
          "fingers": [
            null,
            1,
            3,
            4,
            2,
            1
          ],
          "barre": {
            "fret": 11,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "G#",
            "D#",
            "G#",
            "B",
            "D#"
          ]
        },
        {
          "id": "caged-dm",
          "label": "CAGED (Forma Dm)",
          "startFret": 6,
          "frets": [
            "x",
            "x",
            6,
            8,
            9,
            7
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            4,
            2
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "G#",
            "D#",
            "G#",
            "B"
          ]
        },
        {
          "id": "triad-m-top",
          "label": "Tríada Menor (Cuerdas 1-4)",
          "startFret": 4,
          "frets": [
            "x",
            "x",
            6,
            4,
            4,
            4
          ],
          "fingers": [
            null,
            null,
            3,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 4,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "G#",
            "B",
            "D#",
            "G#"
          ]
        },
        {
          "id": "caged-cm",
          "label": "Posición Media (Cuerdas 2-5)",
          "startFret": 8,
          "frets": [
            "x",
            11,
            9,
            8,
            9,
            "x"
          ],
          "fingers": [
            null,
            4,
            2,
            1,
            3,
            null
          ],
          "barre": null,
          "difficulty": "avanzada",
          "notes": [
            "G#",
            "B",
            "D#",
            "G#"
          ]
        }
      ]
    },
    "maj7": {
      "symbol": "G#maj7",
      "name": "Sol# / Lab Mayor Séptima (Maj7)",
      "voicings": [
        {
          "id": "caged-amaj7",
          "label": "CAGED (Forma Amaj7)",
          "startFret": 11,
          "frets": [
            "x",
            11,
            13,
            12,
            13,
            11
          ],
          "fingers": [
            null,
            1,
            3,
            2,
            4,
            1
          ],
          "barre": {
            "fret": 11,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "G#",
            "D#",
            "G",
            "C",
            "D#"
          ]
        },
        {
          "id": "drop3-maj7",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 4,
          "frets": [
            4,
            "x",
            5,
            5,
            4,
            "x"
          ],
          "fingers": [
            1,
            null,
            3,
            4,
            2,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "G#",
            "G",
            "C",
            "D#"
          ]
        },
        {
          "id": "drop2-maj7-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 6,
          "frets": [
            "x",
            "x",
            6,
            8,
            8,
            8
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            2,
            2
          ],
          "barre": {
            "fret": 8,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "G#",
            "D#",
            "G",
            "C"
          ]
        },
        {
          "id": "caged-cmaj7",
          "label": "CAGED (Forma Cmaj7)",
          "startFret": 8,
          "frets": [
            "x",
            11,
            10,
            8,
            8,
            "x"
          ],
          "fingers": [
            null,
            4,
            3,
            1,
            1,
            null
          ],
          "barre": {
            "fret": 8,
            "from": 3,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "G#",
            "C",
            "D#",
            "G"
          ]
        },
        {
          "id": "caged-emaj7",
          "label": "CAGED (Forma Emaj7)",
          "startFret": 4,
          "frets": [
            4,
            6,
            5,
            5,
            4,
            4
          ],
          "fingers": [
            1,
            4,
            2,
            3,
            1,
            1
          ],
          "barre": {
            "fret": 4,
            "from": 0,
            "to": 5
          },
          "difficulty": "avanzada",
          "notes": [
            "G#",
            "D#",
            "G",
            "C",
            "D#",
            "G#"
          ]
        }
      ]
    },
    "m7": {
      "symbol": "G#m7",
      "name": "Sol# / Lab Menor Séptima (m7)",
      "voicings": [
        {
          "id": "caged-em7",
          "label": "CAGED (Forma Em7)",
          "startFret": 4,
          "frets": [
            4,
            6,
            4,
            4,
            4,
            4
          ],
          "fingers": [
            1,
            3,
            1,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 4,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "G#",
            "D#",
            "F#",
            "B",
            "D#",
            "G#"
          ]
        },
        {
          "id": "caged-am7",
          "label": "CAGED (Forma Am7)",
          "startFret": 11,
          "frets": [
            "x",
            11,
            13,
            11,
            12,
            11
          ],
          "fingers": [
            null,
            1,
            3,
            1,
            2,
            1
          ],
          "barre": {
            "fret": 11,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "G#",
            "D#",
            "F#",
            "B",
            "D#"
          ]
        },
        {
          "id": "drop3-m7",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 0,
          "frets": [
            4,
            "x",
            4,
            4,
            4,
            "x"
          ],
          "fingers": [
            1,
            null,
            2,
            3,
            4,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "G#",
            "F#",
            "B",
            "D#"
          ]
        },
        {
          "id": "drop2-m7",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 6,
          "frets": [
            "x",
            "x",
            6,
            8,
            7,
            7
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            2
          ],
          "barre": {
            "fret": 7,
            "from": 4,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "G#",
            "D#",
            "F#",
            "B"
          ]
        },
        {
          "id": "drop2-m7-top",
          "label": "Voicing Jazz/Funk (Cuerdas 1-4)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            4,
            4,
            4,
            4
          ],
          "fingers": [
            null,
            null,
            1,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 4,
            "from": 2,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "F#",
            "B",
            "D#",
            "G#"
          ]
        }
      ]
    },
    "m7b5": {
      "symbol": "G#m7b5",
      "name": "Sol# / Lab Semi-disminuido (m7b5)",
      "voicings": [
        {
          "id": "drop2-m7b5-5",
          "label": "Drop 2 (Raíz en 5ª)",
          "startFret": 11,
          "frets": [
            "x",
            11,
            12,
            11,
            12,
            "x"
          ],
          "fingers": [
            null,
            1,
            3,
            2,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "G#",
            "D",
            "F#",
            "B"
          ]
        },
        {
          "id": "drop3-m7b5-6",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 0,
          "frets": [
            4,
            "x",
            4,
            4,
            3,
            "x"
          ],
          "fingers": [
            2,
            null,
            3,
            4,
            1,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "G#",
            "F#",
            "B",
            "D"
          ]
        },
        {
          "id": "drop2-m7b5-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 6,
          "frets": [
            "x",
            "x",
            6,
            7,
            7,
            7
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            2,
            2
          ],
          "barre": {
            "fret": 7,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "G#",
            "D",
            "F#",
            "B"
          ]
        },
        {
          "id": "drop2-m7b5-inv",
          "label": "Drop 2 (1ª Inversión)",
          "startFret": 9,
          "frets": [
            "x",
            "x",
            9,
            11,
            9,
            10
          ],
          "fingers": [
            null,
            null,
            1,
            4,
            1,
            2
          ],
          "barre": {
            "fret": 9,
            "from": 2,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "B",
            "F#",
            "G#",
            "D"
          ]
        },
        {
          "id": "drop2-m7b5-top",
          "label": "Drop 2 (Cuerdas 1-4)",
          "startFret": 0,
          "frets": [
            "x",
            "x",
            4,
            4,
            3,
            4
          ],
          "fingers": [
            null,
            null,
            2,
            3,
            1,
            4
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "F#",
            "B",
            "D",
            "G#"
          ]
        }
      ]
    },
    "dim7": {
      "symbol": "G#dim7",
      "name": "Sol# / Lab Disminuido Séptima (dim7)",
      "voicings": [
        {
          "id": "dim7-5",
          "label": "Forma en 5ª Cuerda",
          "startFret": 10,
          "frets": [
            "x",
            11,
            12,
            10,
            12,
            "x"
          ],
          "fingers": [
            null,
            2,
            3,
            1,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "G#",
            "D",
            "F",
            "B"
          ]
        },
        {
          "id": "dim7-6",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 0,
          "frets": [
            4,
            "x",
            3,
            4,
            3,
            "x"
          ],
          "fingers": [
            2,
            null,
            1,
            3,
            1,
            null
          ],
          "barre": {
            "fret": 3,
            "from": 2,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "G#",
            "F",
            "B",
            "D"
          ]
        },
        {
          "id": "dim7-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 6,
          "frets": [
            "x",
            "x",
            6,
            7,
            6,
            7
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "G#",
            "D",
            "F",
            "B"
          ]
        },
        {
          "id": "dim7-sym",
          "label": "Simétrico (Cuerdas 1-4)",
          "startFret": 9,
          "frets": [
            "x",
            "x",
            9,
            10,
            9,
            10
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "B",
            "F",
            "G#",
            "D"
          ]
        },
        {
          "id": "dim7-5-sym",
          "label": "Simétrico (Cuerdas 2-5)",
          "startFret": 7,
          "frets": [
            "x",
            8,
            9,
            7,
            9,
            "x"
          ],
          "fingers": [
            null,
            2,
            3,
            1,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "F",
            "B",
            "D",
            "G#"
          ]
        }
      ]
    }
  },
  "A": {
    "7": {
      "symbol": "A7",
      "name": "La Dominante (7)",
      "voicings": [
        {
          "id": "open-a7",
          "label": "Abierto (A7)",
          "startFret": 0,
          "frets": [
            "x",
            0,
            2,
            0,
            2,
            0
          ],
          "fingers": [
            null,
            null,
            2,
            null,
            3,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "A",
            "E",
            "G",
            "C#",
            "E"
          ]
        },
        {
          "id": "caged-e7",
          "label": "CAGED (Forma E7)",
          "startFret": 5,
          "frets": [
            5,
            7,
            5,
            6,
            5,
            5
          ],
          "fingers": [
            1,
            3,
            1,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 5,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "A",
            "E",
            "G",
            "C#",
            "E",
            "A"
          ]
        },
        {
          "id": "caged-a7",
          "label": "CAGED (Forma A7)",
          "startFret": 12,
          "frets": [
            "x",
            12,
            14,
            12,
            14,
            12
          ],
          "fingers": [
            null,
            1,
            2,
            1,
            3,
            1
          ],
          "barre": {
            "fret": 12,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "A",
            "E",
            "G",
            "C#",
            "E"
          ]
        },
        {
          "id": "caged-c7",
          "label": "CAGED (Forma C7)",
          "startFret": 10,
          "frets": [
            "x",
            12,
            11,
            12,
            10,
            "x"
          ],
          "fingers": [
            null,
            3,
            2,
            4,
            1,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "A",
            "C#",
            "G",
            "A"
          ]
        },
        {
          "id": "drop2-7",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 7,
          "frets": [
            "x",
            "x",
            7,
            9,
            8,
            9
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "A",
            "E",
            "G",
            "C#"
          ]
        }
      ]
    },
    "maj": {
      "symbol": "A",
      "name": "La Mayor",
      "voicings": [
        {
          "id": "open-a",
          "label": "Abierto (Forma A)",
          "startFret": 0,
          "frets": [
            "x",
            0,
            2,
            2,
            2,
            0
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            3,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "A",
            "E",
            "A",
            "C#",
            "E"
          ]
        },
        {
          "id": "caged-e",
          "label": "CAGED (Forma E)",
          "startFret": 5,
          "frets": [
            5,
            7,
            7,
            6,
            5,
            5
          ],
          "fingers": [
            1,
            3,
            4,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 5,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "A",
            "E",
            "A",
            "C#",
            "E",
            "A"
          ]
        },
        {
          "id": "caged-a",
          "label": "CAGED (Forma A)",
          "startFret": 12,
          "frets": [
            "x",
            12,
            14,
            14,
            14,
            12
          ],
          "fingers": [
            null,
            1,
            2,
            3,
            4,
            1
          ],
          "barre": {
            "fret": 12,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "A",
            "E",
            "A",
            "C#",
            "E"
          ]
        },
        {
          "id": "caged-c",
          "label": "CAGED (Forma C)",
          "startFret": 9,
          "frets": [
            "x",
            12,
            11,
            9,
            10,
            9
          ],
          "fingers": [
            null,
            4,
            3,
            1,
            2,
            1
          ],
          "barre": {
            "fret": 9,
            "from": 3,
            "to": 5
          },
          "difficulty": "avanzada",
          "notes": [
            "A",
            "C#",
            "E",
            "A",
            "C#"
          ]
        },
        {
          "id": "caged-d",
          "label": "CAGED (Forma D)",
          "startFret": 7,
          "frets": [
            "x",
            "x",
            7,
            9,
            10,
            9
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            4,
            3
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "A",
            "E",
            "A",
            "C#"
          ]
        }
      ]
    },
    "m": {
      "symbol": "Am",
      "name": "La Menor",
      "voicings": [
        {
          "id": "open-am",
          "label": "Abierto (Forma Am)",
          "startFret": 0,
          "frets": [
            "x",
            0,
            2,
            2,
            1,
            0
          ],
          "fingers": [
            null,
            null,
            2,
            3,
            1,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "A",
            "E",
            "A",
            "C",
            "E"
          ]
        },
        {
          "id": "caged-em",
          "label": "CAGED (Forma Em)",
          "startFret": 5,
          "frets": [
            5,
            7,
            7,
            5,
            5,
            5
          ],
          "fingers": [
            1,
            3,
            4,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 5,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "A",
            "E",
            "A",
            "C",
            "E",
            "A"
          ]
        },
        {
          "id": "caged-am",
          "label": "CAGED (Forma Am)",
          "startFret": 12,
          "frets": [
            "x",
            12,
            14,
            14,
            13,
            12
          ],
          "fingers": [
            null,
            1,
            3,
            4,
            2,
            1
          ],
          "barre": {
            "fret": 12,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "A",
            "E",
            "A",
            "C",
            "E"
          ]
        },
        {
          "id": "caged-dm",
          "label": "CAGED (Forma Dm)",
          "startFret": 7,
          "frets": [
            "x",
            "x",
            7,
            9,
            10,
            8
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            4,
            2
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "A",
            "E",
            "A",
            "C"
          ]
        },
        {
          "id": "triad-m-top",
          "label": "Tríada Menor (Cuerdas 1-4)",
          "startFret": 5,
          "frets": [
            "x",
            "x",
            7,
            5,
            5,
            5
          ],
          "fingers": [
            null,
            null,
            3,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 5,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "A",
            "C",
            "E",
            "A"
          ]
        }
      ]
    },
    "maj7": {
      "symbol": "Amaj7",
      "name": "La Mayor Séptima (Maj7)",
      "voicings": [
        {
          "id": "open-amaj7",
          "label": "Abierto (Amaj7)",
          "startFret": 0,
          "frets": [
            "x",
            0,
            2,
            1,
            2,
            0
          ],
          "fingers": [
            null,
            null,
            2,
            1,
            3,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "A",
            "E",
            "G#",
            "C#",
            "E"
          ]
        },
        {
          "id": "caged-amaj7",
          "label": "CAGED (Forma Amaj7)",
          "startFret": 12,
          "frets": [
            "x",
            12,
            14,
            13,
            14,
            12
          ],
          "fingers": [
            null,
            1,
            3,
            2,
            4,
            1
          ],
          "barre": {
            "fret": 12,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "A",
            "E",
            "G#",
            "C#",
            "E"
          ]
        },
        {
          "id": "drop3-maj7",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 5,
          "frets": [
            5,
            "x",
            6,
            6,
            5,
            "x"
          ],
          "fingers": [
            1,
            null,
            3,
            4,
            2,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "A",
            "G#",
            "C#",
            "E"
          ]
        },
        {
          "id": "drop2-maj7-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 7,
          "frets": [
            "x",
            "x",
            7,
            9,
            9,
            9
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            2,
            2
          ],
          "barre": {
            "fret": 9,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "A",
            "E",
            "G#",
            "C#"
          ]
        },
        {
          "id": "caged-cmaj7",
          "label": "CAGED (Forma Cmaj7)",
          "startFret": 9,
          "frets": [
            "x",
            12,
            11,
            9,
            9,
            "x"
          ],
          "fingers": [
            null,
            4,
            3,
            1,
            1,
            null
          ],
          "barre": {
            "fret": 9,
            "from": 3,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "A",
            "C#",
            "E",
            "G#"
          ]
        }
      ]
    },
    "m7": {
      "symbol": "Am7",
      "name": "La Menor Séptima (m7)",
      "voicings": [
        {
          "id": "open-am7",
          "label": "Abierto (Am7)",
          "startFret": 0,
          "frets": [
            "x",
            0,
            2,
            0,
            1,
            0
          ],
          "fingers": [
            null,
            null,
            2,
            null,
            1,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "A",
            "E",
            "G",
            "C",
            "E"
          ]
        },
        {
          "id": "caged-em7",
          "label": "CAGED (Forma Em7)",
          "startFret": 5,
          "frets": [
            5,
            7,
            5,
            5,
            5,
            5
          ],
          "fingers": [
            1,
            3,
            1,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 5,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "A",
            "E",
            "G",
            "C",
            "E",
            "A"
          ]
        },
        {
          "id": "caged-am7",
          "label": "CAGED (Forma Am7)",
          "startFret": 12,
          "frets": [
            "x",
            12,
            14,
            12,
            13,
            12
          ],
          "fingers": [
            null,
            1,
            3,
            1,
            2,
            1
          ],
          "barre": {
            "fret": 12,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "A",
            "E",
            "G",
            "C",
            "E"
          ]
        },
        {
          "id": "drop3-m7",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 5,
          "frets": [
            5,
            "x",
            5,
            5,
            5,
            "x"
          ],
          "fingers": [
            1,
            null,
            2,
            3,
            4,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "A",
            "G",
            "C",
            "E"
          ]
        },
        {
          "id": "drop2-m7",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 7,
          "frets": [
            "x",
            "x",
            7,
            9,
            8,
            8
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            2
          ],
          "barre": {
            "fret": 8,
            "from": 4,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "A",
            "E",
            "G",
            "C"
          ]
        }
      ]
    },
    "m7b5": {
      "symbol": "Am7b5",
      "name": "La Semi-disminuido (m7b5)",
      "voicings": [
        {
          "id": "open-am7b5",
          "label": "Abierto (Am7b5)",
          "startFret": 0,
          "frets": [
            "x",
            0,
            1,
            0,
            1,
            "x"
          ],
          "fingers": [
            null,
            null,
            1,
            null,
            2,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "A",
            "D#",
            "G",
            "C"
          ]
        },
        {
          "id": "drop2-m7b5-5",
          "label": "Drop 2 (Raíz en 5ª)",
          "startFret": 12,
          "frets": [
            "x",
            12,
            13,
            12,
            13,
            "x"
          ],
          "fingers": [
            null,
            1,
            3,
            2,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "A",
            "D#",
            "G",
            "C"
          ]
        },
        {
          "id": "drop3-m7b5-6",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 4,
          "frets": [
            5,
            "x",
            5,
            5,
            4,
            "x"
          ],
          "fingers": [
            2,
            null,
            3,
            4,
            1,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "A",
            "G",
            "C",
            "D#"
          ]
        },
        {
          "id": "drop2-m7b5-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 7,
          "frets": [
            "x",
            "x",
            7,
            8,
            8,
            8
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            2,
            2
          ],
          "barre": {
            "fret": 8,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "A",
            "D#",
            "G",
            "C"
          ]
        },
        {
          "id": "drop2-m7b5-inv",
          "label": "Drop 2 (1ª Inversión)",
          "startFret": 10,
          "frets": [
            "x",
            "x",
            10,
            12,
            10,
            11
          ],
          "fingers": [
            null,
            null,
            1,
            4,
            1,
            2
          ],
          "barre": {
            "fret": 10,
            "from": 2,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "C",
            "G",
            "A",
            "D#"
          ]
        }
      ]
    },
    "dim7": {
      "symbol": "Adim7",
      "name": "La Disminuido Séptima (dim7)",
      "voicings": [
        {
          "id": "open-adim7",
          "label": "Abierto (Adim7)",
          "startFret": 0,
          "frets": [
            "x",
            0,
            1,
            2,
            1,
            "x"
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "A",
            "D#",
            "A",
            "C"
          ]
        },
        {
          "id": "dim7-5",
          "label": "Forma en 5ª Cuerda",
          "startFret": 11,
          "frets": [
            "x",
            12,
            13,
            11,
            13,
            "x"
          ],
          "fingers": [
            null,
            2,
            3,
            1,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "A",
            "D#",
            "F#",
            "C"
          ]
        },
        {
          "id": "dim7-6",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 4,
          "frets": [
            5,
            "x",
            4,
            5,
            4,
            "x"
          ],
          "fingers": [
            2,
            null,
            1,
            3,
            1,
            null
          ],
          "barre": {
            "fret": 4,
            "from": 2,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "A",
            "F#",
            "C",
            "D#"
          ]
        },
        {
          "id": "dim7-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 7,
          "frets": [
            "x",
            "x",
            7,
            8,
            7,
            8
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "A",
            "D#",
            "F#",
            "C"
          ]
        },
        {
          "id": "dim7-sym",
          "label": "Simétrico (Cuerdas 1-4)",
          "startFret": 10,
          "frets": [
            "x",
            "x",
            10,
            11,
            10,
            11
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "C",
            "F#",
            "A",
            "D#"
          ]
        }
      ]
    }
  },
  "A#": {
    "7": {
      "symbol": "A#7",
      "name": "La# / Sib Dominante (7)",
      "voicings": [
        {
          "id": "caged-e7",
          "label": "CAGED (Forma E7)",
          "startFret": 6,
          "frets": [
            6,
            8,
            6,
            7,
            6,
            6
          ],
          "fingers": [
            1,
            3,
            1,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 6,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "A#",
            "F",
            "G#",
            "D",
            "F",
            "A#"
          ]
        },
        {
          "id": "caged-a7",
          "label": "CAGED (Forma A7)",
          "startFret": 0,
          "frets": [
            "x",
            1,
            3,
            1,
            3,
            1
          ],
          "fingers": [
            null,
            1,
            2,
            1,
            3,
            1
          ],
          "barre": {
            "fret": 1,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "A#",
            "F",
            "G#",
            "D",
            "F"
          ]
        },
        {
          "id": "caged-c7",
          "label": "CAGED (Forma C7)",
          "startFret": 11,
          "frets": [
            "x",
            13,
            12,
            13,
            11,
            "x"
          ],
          "fingers": [
            null,
            3,
            2,
            4,
            1,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "A#",
            "D",
            "G#",
            "A#"
          ]
        },
        {
          "id": "drop2-7",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 8,
          "frets": [
            "x",
            "x",
            8,
            10,
            9,
            10
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "A#",
            "F",
            "G#",
            "D"
          ]
        },
        {
          "id": "drop3-7",
          "label": "Drop 3 / Jazz (Raíz en 6ª)",
          "startFret": 6,
          "frets": [
            6,
            "x",
            6,
            7,
            6,
            "x"
          ],
          "fingers": [
            1,
            null,
            2,
            4,
            3,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "A#",
            "G#",
            "D",
            "F"
          ]
        }
      ]
    },
    "maj": {
      "symbol": "A#",
      "name": "La# / Sib Mayor",
      "voicings": [
        {
          "id": "caged-e",
          "label": "CAGED (Forma E)",
          "startFret": 6,
          "frets": [
            6,
            8,
            8,
            7,
            6,
            6
          ],
          "fingers": [
            1,
            3,
            4,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 6,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "A#",
            "F",
            "A#",
            "D",
            "F",
            "A#"
          ]
        },
        {
          "id": "caged-a",
          "label": "CAGED (Forma A)",
          "startFret": 0,
          "frets": [
            "x",
            1,
            3,
            3,
            3,
            1
          ],
          "fingers": [
            null,
            1,
            2,
            3,
            4,
            1
          ],
          "barre": {
            "fret": 1,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "A#",
            "F",
            "A#",
            "D",
            "F"
          ]
        },
        {
          "id": "caged-c",
          "label": "CAGED (Forma C)",
          "startFret": 10,
          "frets": [
            "x",
            13,
            12,
            10,
            11,
            10
          ],
          "fingers": [
            null,
            4,
            3,
            1,
            2,
            1
          ],
          "barre": {
            "fret": 10,
            "from": 3,
            "to": 5
          },
          "difficulty": "avanzada",
          "notes": [
            "A#",
            "D",
            "F",
            "A#",
            "D"
          ]
        },
        {
          "id": "caged-d",
          "label": "CAGED (Forma D)",
          "startFret": 8,
          "frets": [
            "x",
            "x",
            8,
            10,
            11,
            10
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            4,
            3
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "A#",
            "F",
            "A#",
            "D"
          ]
        },
        {
          "id": "triad-f",
          "label": "Tríada Superior (Forma F)",
          "startFret": 6,
          "frets": [
            "x",
            "x",
            8,
            7,
            6,
            6
          ],
          "fingers": [
            null,
            null,
            3,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 6,
            "from": 4,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "A#",
            "D",
            "F",
            "A#"
          ]
        }
      ]
    },
    "m": {
      "symbol": "A#m",
      "name": "La# / Sib Menor",
      "voicings": [
        {
          "id": "caged-em",
          "label": "CAGED (Forma Em)",
          "startFret": 6,
          "frets": [
            6,
            8,
            8,
            6,
            6,
            6
          ],
          "fingers": [
            1,
            3,
            4,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 6,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "A#",
            "F",
            "A#",
            "C#",
            "F",
            "A#"
          ]
        },
        {
          "id": "caged-am",
          "label": "CAGED (Forma Am)",
          "startFret": 0,
          "frets": [
            "x",
            1,
            3,
            3,
            2,
            1
          ],
          "fingers": [
            null,
            1,
            3,
            4,
            2,
            1
          ],
          "barre": {
            "fret": 1,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "A#",
            "F",
            "A#",
            "C#",
            "F"
          ]
        },
        {
          "id": "caged-dm",
          "label": "CAGED (Forma Dm)",
          "startFret": 8,
          "frets": [
            "x",
            "x",
            8,
            10,
            11,
            9
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            4,
            2
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "A#",
            "F",
            "A#",
            "C#"
          ]
        },
        {
          "id": "triad-m-top",
          "label": "Tríada Menor (Cuerdas 1-4)",
          "startFret": 6,
          "frets": [
            "x",
            "x",
            8,
            6,
            6,
            6
          ],
          "fingers": [
            null,
            null,
            3,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 6,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "A#",
            "C#",
            "F",
            "A#"
          ]
        },
        {
          "id": "caged-cm",
          "label": "Posición Media (Cuerdas 2-5)",
          "startFret": 10,
          "frets": [
            "x",
            13,
            11,
            10,
            11,
            "x"
          ],
          "fingers": [
            null,
            4,
            2,
            1,
            3,
            null
          ],
          "barre": null,
          "difficulty": "avanzada",
          "notes": [
            "A#",
            "C#",
            "F",
            "A#"
          ]
        }
      ]
    },
    "maj7": {
      "symbol": "A#maj7",
      "name": "La# / Sib Mayor Séptima (Maj7)",
      "voicings": [
        {
          "id": "caged-amaj7",
          "label": "CAGED (Forma Amaj7)",
          "startFret": 0,
          "frets": [
            "x",
            1,
            3,
            2,
            3,
            1
          ],
          "fingers": [
            null,
            1,
            3,
            2,
            4,
            1
          ],
          "barre": {
            "fret": 1,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "A#",
            "F",
            "A",
            "D",
            "F"
          ]
        },
        {
          "id": "drop3-maj7",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 6,
          "frets": [
            6,
            "x",
            7,
            7,
            6,
            "x"
          ],
          "fingers": [
            1,
            null,
            3,
            4,
            2,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "A#",
            "A",
            "D",
            "F"
          ]
        },
        {
          "id": "drop2-maj7-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 8,
          "frets": [
            "x",
            "x",
            8,
            10,
            10,
            10
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            2,
            2
          ],
          "barre": {
            "fret": 10,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "A#",
            "F",
            "A",
            "D"
          ]
        },
        {
          "id": "caged-cmaj7",
          "label": "CAGED (Forma Cmaj7)",
          "startFret": 10,
          "frets": [
            "x",
            13,
            12,
            10,
            10,
            "x"
          ],
          "fingers": [
            null,
            4,
            3,
            1,
            1,
            null
          ],
          "barre": {
            "fret": 10,
            "from": 3,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "A#",
            "D",
            "F",
            "A"
          ]
        },
        {
          "id": "caged-emaj7",
          "label": "CAGED (Forma Emaj7)",
          "startFret": 6,
          "frets": [
            6,
            8,
            7,
            7,
            6,
            6
          ],
          "fingers": [
            1,
            4,
            2,
            3,
            1,
            1
          ],
          "barre": {
            "fret": 6,
            "from": 0,
            "to": 5
          },
          "difficulty": "avanzada",
          "notes": [
            "A#",
            "F",
            "A",
            "D",
            "F",
            "A#"
          ]
        }
      ]
    },
    "m7": {
      "symbol": "A#m7",
      "name": "La# / Sib Menor Séptima (m7)",
      "voicings": [
        {
          "id": "caged-em7",
          "label": "CAGED (Forma Em7)",
          "startFret": 6,
          "frets": [
            6,
            8,
            6,
            6,
            6,
            6
          ],
          "fingers": [
            1,
            3,
            1,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 6,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "A#",
            "F",
            "G#",
            "C#",
            "F",
            "A#"
          ]
        },
        {
          "id": "caged-am7",
          "label": "CAGED (Forma Am7)",
          "startFret": 0,
          "frets": [
            "x",
            1,
            3,
            1,
            2,
            1
          ],
          "fingers": [
            null,
            1,
            3,
            1,
            2,
            1
          ],
          "barre": {
            "fret": 1,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "A#",
            "F",
            "G#",
            "C#",
            "F"
          ]
        },
        {
          "id": "drop3-m7",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 6,
          "frets": [
            6,
            "x",
            6,
            6,
            6,
            "x"
          ],
          "fingers": [
            1,
            null,
            2,
            3,
            4,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "A#",
            "G#",
            "C#",
            "F"
          ]
        },
        {
          "id": "drop2-m7",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 8,
          "frets": [
            "x",
            "x",
            8,
            10,
            9,
            9
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            2
          ],
          "barre": {
            "fret": 9,
            "from": 4,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "A#",
            "F",
            "G#",
            "C#"
          ]
        },
        {
          "id": "drop2-m7-top",
          "label": "Voicing Jazz/Funk (Cuerdas 1-4)",
          "startFret": 6,
          "frets": [
            "x",
            "x",
            6,
            6,
            6,
            6
          ],
          "fingers": [
            null,
            null,
            1,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 6,
            "from": 2,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "G#",
            "C#",
            "F",
            "A#"
          ]
        }
      ]
    },
    "m7b5": {
      "symbol": "A#m7b5",
      "name": "La# / Sib Semi-disminuido (m7b5)",
      "voicings": [
        {
          "id": "drop2-m7b5-5",
          "label": "Drop 2 (Raíz en 5ª)",
          "startFret": 0,
          "frets": [
            "x",
            1,
            2,
            1,
            2,
            "x"
          ],
          "fingers": [
            null,
            1,
            3,
            2,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "A#",
            "E",
            "G#",
            "C#"
          ]
        },
        {
          "id": "drop3-m7b5-6",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 5,
          "frets": [
            6,
            "x",
            6,
            6,
            5,
            "x"
          ],
          "fingers": [
            2,
            null,
            3,
            4,
            1,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "A#",
            "G#",
            "C#",
            "E"
          ]
        },
        {
          "id": "drop2-m7b5-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 8,
          "frets": [
            "x",
            "x",
            8,
            9,
            9,
            9
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            2,
            2
          ],
          "barre": {
            "fret": 9,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "A#",
            "E",
            "G#",
            "C#"
          ]
        },
        {
          "id": "drop2-m7b5-inv",
          "label": "Drop 2 (1ª Inversión)",
          "startFret": 11,
          "frets": [
            "x",
            "x",
            11,
            13,
            11,
            12
          ],
          "fingers": [
            null,
            null,
            1,
            4,
            1,
            2
          ],
          "barre": {
            "fret": 11,
            "from": 2,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "C#",
            "G#",
            "A#",
            "E"
          ]
        },
        {
          "id": "drop2-m7b5-top",
          "label": "Drop 2 (Cuerdas 1-4)",
          "startFret": 5,
          "frets": [
            "x",
            "x",
            6,
            6,
            5,
            6
          ],
          "fingers": [
            null,
            null,
            2,
            3,
            1,
            4
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "G#",
            "C#",
            "E",
            "A#"
          ]
        }
      ]
    },
    "dim7": {
      "symbol": "A#dim7",
      "name": "La# / Sib Disminuido Séptima (dim7)",
      "voicings": [
        {
          "id": "dim7-5",
          "label": "Forma en 5ª Cuerda",
          "startFret": 12,
          "frets": [
            "x",
            13,
            14,
            12,
            14,
            "x"
          ],
          "fingers": [
            null,
            2,
            3,
            1,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "A#",
            "E",
            "G",
            "C#"
          ]
        },
        {
          "id": "dim7-6",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 5,
          "frets": [
            6,
            "x",
            5,
            6,
            5,
            "x"
          ],
          "fingers": [
            2,
            null,
            1,
            3,
            1,
            null
          ],
          "barre": {
            "fret": 5,
            "from": 2,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "A#",
            "G",
            "C#",
            "E"
          ]
        },
        {
          "id": "dim7-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 8,
          "frets": [
            "x",
            "x",
            8,
            9,
            8,
            9
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "A#",
            "E",
            "G",
            "C#"
          ]
        },
        {
          "id": "dim7-sym",
          "label": "Simétrico (Cuerdas 1-4)",
          "startFret": 11,
          "frets": [
            "x",
            "x",
            11,
            12,
            11,
            12
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "C#",
            "G",
            "A#",
            "E"
          ]
        },
        {
          "id": "dim7-5-sym",
          "label": "Simétrico (Cuerdas 2-5)",
          "startFret": 9,
          "frets": [
            "x",
            10,
            11,
            9,
            11,
            "x"
          ],
          "fingers": [
            null,
            2,
            3,
            1,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "G",
            "C#",
            "E",
            "A#"
          ]
        }
      ]
    }
  },
  "B": {
    "7": {
      "symbol": "B7",
      "name": "Si Dominante (7)",
      "voicings": [
        {
          "id": "open-b7",
          "label": "Abierto (B7)",
          "startFret": 0,
          "frets": [
            "x",
            2,
            1,
            2,
            0,
            2
          ],
          "fingers": [
            null,
            2,
            1,
            3,
            null,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "B",
            "D#",
            "A",
            "B",
            "F#"
          ]
        },
        {
          "id": "caged-e7",
          "label": "CAGED (Forma E7)",
          "startFret": 7,
          "frets": [
            7,
            9,
            7,
            8,
            7,
            7
          ],
          "fingers": [
            1,
            3,
            1,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 7,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "B",
            "F#",
            "A",
            "D#",
            "F#",
            "B"
          ]
        },
        {
          "id": "caged-a7",
          "label": "CAGED (Forma A7)",
          "startFret": 0,
          "frets": [
            "x",
            2,
            4,
            2,
            4,
            2
          ],
          "fingers": [
            null,
            1,
            2,
            1,
            3,
            1
          ],
          "barre": {
            "fret": 2,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "B",
            "F#",
            "A",
            "D#",
            "F#"
          ]
        },
        {
          "id": "caged-c7",
          "label": "CAGED (Forma C7)",
          "startFret": 12,
          "frets": [
            "x",
            14,
            13,
            14,
            12,
            "x"
          ],
          "fingers": [
            null,
            3,
            2,
            4,
            1,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "B",
            "D#",
            "A",
            "B"
          ]
        },
        {
          "id": "drop2-7",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 9,
          "frets": [
            "x",
            "x",
            9,
            11,
            10,
            11
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "B",
            "F#",
            "A",
            "D#"
          ]
        }
      ]
    },
    "maj": {
      "symbol": "B",
      "name": "Si Mayor",
      "voicings": [
        {
          "id": "caged-e",
          "label": "CAGED (Forma E)",
          "startFret": 7,
          "frets": [
            7,
            9,
            9,
            8,
            7,
            7
          ],
          "fingers": [
            1,
            3,
            4,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 7,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "B",
            "F#",
            "B",
            "D#",
            "F#",
            "B"
          ]
        },
        {
          "id": "caged-a",
          "label": "CAGED (Forma A)",
          "startFret": 0,
          "frets": [
            "x",
            2,
            4,
            4,
            4,
            2
          ],
          "fingers": [
            null,
            1,
            2,
            3,
            4,
            1
          ],
          "barre": {
            "fret": 2,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "B",
            "F#",
            "B",
            "D#",
            "F#"
          ]
        },
        {
          "id": "caged-c",
          "label": "CAGED (Forma C)",
          "startFret": 11,
          "frets": [
            "x",
            14,
            13,
            11,
            12,
            11
          ],
          "fingers": [
            null,
            4,
            3,
            1,
            2,
            1
          ],
          "barre": {
            "fret": 11,
            "from": 3,
            "to": 5
          },
          "difficulty": "avanzada",
          "notes": [
            "B",
            "D#",
            "F#",
            "B",
            "D#"
          ]
        },
        {
          "id": "caged-d",
          "label": "CAGED (Forma D)",
          "startFret": 9,
          "frets": [
            "x",
            "x",
            9,
            11,
            12,
            11
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            4,
            3
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "B",
            "F#",
            "B",
            "D#"
          ]
        },
        {
          "id": "triad-f",
          "label": "Tríada Superior (Forma F)",
          "startFret": 7,
          "frets": [
            "x",
            "x",
            9,
            8,
            7,
            7
          ],
          "fingers": [
            null,
            null,
            3,
            2,
            1,
            1
          ],
          "barre": {
            "fret": 7,
            "from": 4,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "B",
            "D#",
            "F#",
            "B"
          ]
        }
      ]
    },
    "m": {
      "symbol": "Bm",
      "name": "Si Menor",
      "voicings": [
        {
          "id": "caged-em",
          "label": "CAGED (Forma Em)",
          "startFret": 7,
          "frets": [
            7,
            9,
            9,
            7,
            7,
            7
          ],
          "fingers": [
            1,
            3,
            4,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 7,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "B",
            "F#",
            "B",
            "D",
            "F#",
            "B"
          ]
        },
        {
          "id": "caged-am",
          "label": "CAGED (Forma Am)",
          "startFret": 0,
          "frets": [
            "x",
            2,
            4,
            4,
            3,
            2
          ],
          "fingers": [
            null,
            1,
            3,
            4,
            2,
            1
          ],
          "barre": {
            "fret": 2,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "B",
            "F#",
            "B",
            "D",
            "F#"
          ]
        },
        {
          "id": "caged-dm",
          "label": "CAGED (Forma Dm)",
          "startFret": 9,
          "frets": [
            "x",
            "x",
            9,
            11,
            12,
            10
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            4,
            2
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "B",
            "F#",
            "B",
            "D"
          ]
        },
        {
          "id": "triad-m-top",
          "label": "Tríada Menor (Cuerdas 1-4)",
          "startFret": 7,
          "frets": [
            "x",
            "x",
            9,
            7,
            7,
            7
          ],
          "fingers": [
            null,
            null,
            3,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 7,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "B",
            "D",
            "F#",
            "B"
          ]
        },
        {
          "id": "caged-cm",
          "label": "Posición Media (Cuerdas 2-5)",
          "startFret": 11,
          "frets": [
            "x",
            14,
            12,
            11,
            12,
            "x"
          ],
          "fingers": [
            null,
            4,
            2,
            1,
            3,
            null
          ],
          "barre": null,
          "difficulty": "avanzada",
          "notes": [
            "B",
            "D",
            "F#",
            "B"
          ]
        }
      ]
    },
    "maj7": {
      "symbol": "Bmaj7",
      "name": "Si Mayor Séptima (Maj7)",
      "voicings": [
        {
          "id": "caged-amaj7",
          "label": "CAGED (Forma Amaj7)",
          "startFret": 0,
          "frets": [
            "x",
            2,
            4,
            3,
            4,
            2
          ],
          "fingers": [
            null,
            1,
            3,
            2,
            4,
            1
          ],
          "barre": {
            "fret": 2,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "B",
            "F#",
            "A#",
            "D#",
            "F#"
          ]
        },
        {
          "id": "drop3-maj7",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 7,
          "frets": [
            7,
            "x",
            8,
            8,
            7,
            "x"
          ],
          "fingers": [
            1,
            null,
            3,
            4,
            2,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "B",
            "A#",
            "D#",
            "F#"
          ]
        },
        {
          "id": "drop2-maj7-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 9,
          "frets": [
            "x",
            "x",
            9,
            11,
            11,
            11
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            2,
            2
          ],
          "barre": {
            "fret": 11,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "B",
            "F#",
            "A#",
            "D#"
          ]
        },
        {
          "id": "caged-cmaj7",
          "label": "CAGED (Forma Cmaj7)",
          "startFret": 11,
          "frets": [
            "x",
            14,
            13,
            11,
            11,
            "x"
          ],
          "fingers": [
            null,
            4,
            3,
            1,
            1,
            null
          ],
          "barre": {
            "fret": 11,
            "from": 3,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "B",
            "D#",
            "F#",
            "A#"
          ]
        },
        {
          "id": "caged-emaj7",
          "label": "CAGED (Forma Emaj7)",
          "startFret": 7,
          "frets": [
            7,
            9,
            8,
            8,
            7,
            7
          ],
          "fingers": [
            1,
            4,
            2,
            3,
            1,
            1
          ],
          "barre": {
            "fret": 7,
            "from": 0,
            "to": 5
          },
          "difficulty": "avanzada",
          "notes": [
            "B",
            "F#",
            "A#",
            "D#",
            "F#",
            "B"
          ]
        }
      ]
    },
    "m7": {
      "symbol": "Bm7",
      "name": "Si Menor Séptima (m7)",
      "voicings": [
        {
          "id": "open-bm7",
          "label": "Abierto (Bm7)",
          "startFret": 0,
          "frets": [
            "x",
            2,
            0,
            2,
            0,
            2
          ],
          "fingers": [
            null,
            2,
            null,
            3,
            null,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "B",
            "D",
            "A",
            "B",
            "F#"
          ]
        },
        {
          "id": "caged-em7",
          "label": "CAGED (Forma Em7)",
          "startFret": 7,
          "frets": [
            7,
            9,
            7,
            7,
            7,
            7
          ],
          "fingers": [
            1,
            3,
            1,
            1,
            1,
            1
          ],
          "barre": {
            "fret": 7,
            "from": 0,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "B",
            "F#",
            "A",
            "D",
            "F#",
            "B"
          ]
        },
        {
          "id": "caged-am7",
          "label": "CAGED (Forma Am7)",
          "startFret": 0,
          "frets": [
            "x",
            2,
            4,
            2,
            3,
            2
          ],
          "fingers": [
            null,
            1,
            3,
            1,
            2,
            1
          ],
          "barre": {
            "fret": 2,
            "from": 1,
            "to": 5
          },
          "difficulty": "media",
          "notes": [
            "B",
            "F#",
            "A",
            "D",
            "F#"
          ]
        },
        {
          "id": "drop3-m7",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 7,
          "frets": [
            7,
            "x",
            7,
            7,
            7,
            "x"
          ],
          "fingers": [
            1,
            null,
            2,
            3,
            4,
            null
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "B",
            "A",
            "D",
            "F#"
          ]
        },
        {
          "id": "drop2-m7",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 9,
          "frets": [
            "x",
            "x",
            9,
            11,
            10,
            10
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            2
          ],
          "barre": {
            "fret": 10,
            "from": 4,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "B",
            "F#",
            "A",
            "D"
          ]
        }
      ]
    },
    "m7b5": {
      "symbol": "Bm7b5",
      "name": "Si Semi-disminuido (m7b5)",
      "voicings": [
        {
          "id": "open-bm7b5",
          "label": "Abierto (Bm7b5)",
          "startFret": 0,
          "frets": [
            "x",
            2,
            0,
            2,
            0,
            1
          ],
          "fingers": [
            null,
            2,
            null,
            3,
            null,
            1
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "B",
            "D",
            "A",
            "B",
            "F"
          ]
        },
        {
          "id": "drop2-m7b5-5",
          "label": "Drop 2 (Raíz en 5ª)",
          "startFret": 0,
          "frets": [
            "x",
            2,
            3,
            2,
            3,
            "x"
          ],
          "fingers": [
            null,
            1,
            3,
            2,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "B",
            "F",
            "A",
            "D"
          ]
        },
        {
          "id": "drop3-m7b5-6",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 6,
          "frets": [
            7,
            "x",
            7,
            7,
            6,
            "x"
          ],
          "fingers": [
            2,
            null,
            3,
            4,
            1,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "B",
            "A",
            "D",
            "F"
          ]
        },
        {
          "id": "drop2-m7b5-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 9,
          "frets": [
            "x",
            "x",
            9,
            10,
            10,
            10
          ],
          "fingers": [
            null,
            null,
            1,
            2,
            2,
            2
          ],
          "barre": {
            "fret": 10,
            "from": 3,
            "to": 5
          },
          "difficulty": "fácil",
          "notes": [
            "B",
            "F",
            "A",
            "D"
          ]
        },
        {
          "id": "drop2-m7b5-inv",
          "label": "Drop 2 (1ª Inversión)",
          "startFret": 12,
          "frets": [
            "x",
            "x",
            12,
            14,
            12,
            13
          ],
          "fingers": [
            null,
            null,
            1,
            4,
            1,
            2
          ],
          "barre": {
            "fret": 12,
            "from": 2,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "D",
            "A",
            "B",
            "F"
          ]
        }
      ]
    },
    "dim7": {
      "symbol": "Bdim7",
      "name": "Si Disminuido Séptima (dim7)",
      "voicings": [
        {
          "id": "dim7-5",
          "label": "Forma en 5ª Cuerda",
          "startFret": 0,
          "frets": [
            "x",
            2,
            3,
            1,
            3,
            "x"
          ],
          "fingers": [
            null,
            2,
            3,
            1,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "B",
            "F",
            "G#",
            "D"
          ]
        },
        {
          "id": "dim7-6",
          "label": "Drop 3 (Raíz en 6ª)",
          "startFret": 6,
          "frets": [
            7,
            "x",
            6,
            7,
            6,
            "x"
          ],
          "fingers": [
            2,
            null,
            1,
            3,
            1,
            null
          ],
          "barre": {
            "fret": 6,
            "from": 2,
            "to": 4
          },
          "difficulty": "media",
          "notes": [
            "B",
            "G#",
            "D",
            "F"
          ]
        },
        {
          "id": "dim7-4",
          "label": "Drop 2 (Raíz en 4ª)",
          "startFret": 9,
          "frets": [
            "x",
            "x",
            9,
            10,
            9,
            10
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "B",
            "F",
            "G#",
            "D"
          ]
        },
        {
          "id": "dim7-sym",
          "label": "Simétrico (Cuerdas 1-4)",
          "startFret": 12,
          "frets": [
            "x",
            "x",
            12,
            13,
            12,
            13
          ],
          "fingers": [
            null,
            null,
            1,
            3,
            2,
            4
          ],
          "barre": null,
          "difficulty": "fácil",
          "notes": [
            "D",
            "G#",
            "B",
            "F"
          ]
        },
        {
          "id": "dim7-5-sym",
          "label": "Simétrico (Cuerdas 2-5)",
          "startFret": 4,
          "frets": [
            "x",
            5,
            6,
            4,
            6,
            "x"
          ],
          "fingers": [
            null,
            2,
            3,
            1,
            4,
            null
          ],
          "barre": null,
          "difficulty": "media",
          "notes": [
            "D",
            "G#",
            "B",
            "F"
          ]
        }
      ]
    }
  }
};
