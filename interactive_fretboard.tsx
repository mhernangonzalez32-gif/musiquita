import React, { useState, useMemo } from 'react';
import { Music, Settings2, Guitar } from 'lucide-react';

const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Afinación estándar, de la cuerda más aguda (1ra) a la más grave (6ta)
const TUNING = ['E', 'B', 'G', 'D', 'A', 'E']; 
const NUM_FRETS = 15;

const SCALES = {
  'All Notes': { name: 'Todas las Notas', intervals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  'Major': { name: 'Mayor (Jónica)', intervals: [0, 2, 4, 5, 7, 9, 11] },
  'Natural Minor': { name: 'Menor Natural (Eólica)', intervals: [0, 2, 3, 5, 7, 8, 10] },
  'Major Pentatonic': { name: 'Pentatónica Mayor', intervals: [0, 2, 4, 7, 9] },
  'Minor Pentatonic': { name: 'Pentatónica Menor', intervals: [0, 3, 5, 7, 10] },
  'Blues': { name: 'Escala Blues', intervals: [0, 3, 5, 6, 7, 10] },
  'Dorian': { name: 'Dórico', intervals: [0, 2, 3, 5, 7, 9, 10] },
  'Mixolydian': { name: 'Mixolidio', intervals: [0, 2, 4, 5, 7, 9, 10] },
  'Harmonic Minor': { name: 'Menor Armónica', intervals: [0, 2, 3, 5, 7, 8, 11] },
};

const MARKERS = [3, 5, 7, 9, 12, 15]; // Posiciones de los inlays (puntos en el mástil)

export default function FretboardVisualizer() {
  const [rootNote, setRootNote] = useState('G');
  const [scaleType, setScaleType] = useState('Major Pentatonic');

  // Calcula qué notas pertenecen a la escala seleccionada
  const activeNotes = useMemo(() => {
    const rootIndex = NOTES.indexOf(rootNote);
    const intervals = SCALES[scaleType].intervals;
    
    return intervals.map(interval => {
      const noteIndex = (rootIndex + interval) % 12;
      return NOTES[noteIndex];
    });
  }, [rootNote, scaleType]);

  // Función para obtener la nota en una cuerda y traste específico
  const getNoteAtFret = (openNote, fret) => {
    const openIndex = NOTES.indexOf(openNote);
    const noteIndex = (openIndex + fret) % 12;
    return NOTES[noteIndex];
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6 font-sans flex flex-col items-center justify-center">
      
      {/* Header & Controls */}
      <div className="w-full max-w-6xl mb-12 bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-2xl">
        <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
          <Guitar className="w-8 h-8 text-emerald-500" />
          <h1 className="text-2xl font-bold text-white tracking-wide">
            Fretboard<span className="text-emerald-500">Master</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Root Note Selector */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-400 font-medium flex items-center gap-2">
              <Music className="w-4 h-4" />
              Nota Raíz (Tónica)
            </label>
            <div className="flex flex-wrap gap-2">
              {NOTES.map(note => (
                <button
                  key={note}
                  onClick={() => setRootNote(note)}
                  className={`w-10 h-10 rounded-lg font-bold transition-all duration-200 ${
                    rootNote === note 
                      ? 'bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.4)] scale-110' 
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {note}
                </button>
              ))}
            </div>
          </div>

          {/* Scale Type Selector */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-400 font-medium flex items-center gap-2">
              <Settings2 className="w-4 h-4" />
              Tipo de Escala
            </label>
            <select
              value={scaleType}
              onChange={(e) => setScaleType(e.target.value)}
              className="w-full bg-slate-800 text-white border border-slate-700 rounded-xl p-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors cursor-pointer appearance-none"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path শাস্ত্র'%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2em' }}
            >
              {Object.entries(SCALES).map(([key, data]) => (
                <option key={key} value={key}>{data.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Fretboard Container */}
      <div className="w-full max-w-6xl overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
        <div className="min-w-[1000px] relative">
          
          {/* Fret Numbers Header */}
          <div className="flex mb-2 text-slate-500 text-sm font-bold select-none pl-[60px]">
            {Array.from({ length: NUM_FRETS + 1 }).map((_, i) => (
              <div key={i} className="flex-1 text-center">
                {i === 0 ? 'Nut' : i}
              </div>
            ))}
          </div>

          <div className="bg-[#2c1e16] border-4 border-[#1a120c] rounded-md relative shadow-2xl flex flex-col pt-3 pb-3">
            
            {/* Inlays (Fret Markers) Background Layer */}
            <div className="absolute inset-0 z-0 flex pl-[60px]">
              {Array.from({ length: NUM_FRETS + 1 }).map((_, i) => (
                <div key={i} className="flex-1 relative border-r border-white/5 last:border-r-0">
                  {MARKERS.includes(i) && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      {i === 12 ? (
                        <div className="flex flex-col gap-8">
                          <div className="w-4 h-4 rounded-full bg-slate-300/30"></div>
                          <div className="w-4 h-4 rounded-full bg-slate-300/30"></div>
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded-full bg-slate-300/30"></div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Strings and Notes */}
            {TUNING.map((openNote, stringIndex) => {
              // String thickness visualization (thicker for lower notes)
              const stringThickness = 1 + (TUNING.length - 1 - stringIndex) * 0.5;

              return (
                <div key={stringIndex} className="flex relative h-10 group">
                  {/* The physical String line */}
                  <div 
                    className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-b from-slate-400 to-slate-500 shadow-sm pointer-events-none"
                    style={{ height: `${stringThickness}px` }}
                  />

                  {/* Nut (Traste 0) */}
                  <div className="w-[60px] flex-shrink-0 relative z-20 flex items-center justify-center border-r-8 border-slate-950 bg-black/20">
                    <NoteCircle 
                      note={getNoteAtFret(openNote, 0)} 
                      rootNote={rootNote}
                      activeNotes={activeNotes}
                      scaleType={scaleType}
                    />
                  </div>

                  {/* Frets 1 to NUM_FRETS */}
                  {Array.from({ length: NUM_FRETS }).map((_, fretIndex) => {
                    const fretNumber = fretIndex + 1;
                    const note = getNoteAtFret(openNote, fretNumber);
                    
                    return (
                      <div 
                        key={fretNumber} 
                        className="flex-1 relative z-20 flex items-center justify-center hover:bg-white/5 transition-colors"
                      >
                        <NoteCircle 
                          note={note} 
                          rootNote={rootNote}
                          activeNotes={activeNotes}
                          scaleType={scaleType}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="mt-8 flex gap-6 text-sm text-slate-400 font-medium">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]"></div>
          Nota Raíz (Tónica)
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
          Notas de la Escala
        </div>
      </div>

    </div>
  );
}

function NoteCircle({ note, rootNote, activeNotes, scaleType }) {
  const isRoot = note === rootNote;
  const isActive = activeNotes.includes(note);
  const isAllNotesMode = scaleType === 'All Notes';

  // Ocultar la nota si no pertenece a la escala seleccionada (excepto si estamos en "All Notes")
  if (!isActive && !isAllNotesMode) {
    return null;
  }

  // Estilos condicionales basados en el estado de la nota
  let bgClass = "bg-slate-700 text-slate-300 shadow-md"; // Defecto para "All Notes" sin ser raíz
  if (isRoot) {
    bgClass = "bg-rose-500 text-white shadow-[0_0_12px_rgba(244,63,94,0.8)] z-30 scale-110 ring-2 ring-white/20";
  } else if (isActive && !isAllNotesMode) {
    bgClass = "bg-emerald-500 text-white shadow-[0_0_10px_rgba(16,185,129,0.5)] ring-1 ring-white/10";
  }

  return (
    <div className={`
      w-7 h-7 flex items-center justify-center rounded-full font-bold text-xs 
      transition-all duration-300 cursor-default select-none
      ${bgClass}
    `}>
      {note}
    </div>
  );
}