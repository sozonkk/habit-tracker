"use client";

import Link from "next/link";
import { useState } from "react";

type SetData = {
  reps: string;
  weight: string;
};

type ExerciseData = {
  name: string;
  sets: SetData[];
  notes: string;
};

export default function AddWorkout() {
  const [selectedExercise, setSelectedExercise] = useState("Wyciskanie Sztangi");
  const [currentSets, setCurrentSets] = useState<SetData[]>([{ reps: "10", weight: "60" }]);
  const [notes, setNotes] = useState("");
  const [workout, setWorkout] = useState<ExerciseData[]>([]);

  // Mock exercises list
  const exercises = [
    "Wyciskanie Sztangi",
    "Przysiady",
    "Martwy Ciąg",
    "Wyciskanie Nad Głowę",
    "Wiosłowanie Sztangą",
    "Podciąganie",
    "Pompki na Poręczach",
    "Uginanie Ramion ze Sztangą",
    "Prostowanie Ramion",
    "Leg Press",
  ];

  const addSet = () => {
    setCurrentSets([...currentSets, { reps: "10", weight: "60" }]);
  };

  const removeSet = (index: number) => {
    if (currentSets.length > 1) {
      setCurrentSets(currentSets.filter((_, i) => i !== index));
    }
  };

  const updateSet = (index: number, field: 'reps' | 'weight', value: string) => {
    const newSets = [...currentSets];
    newSets[index][field] = value;
    setCurrentSets(newSets);
  };

  const addExerciseToWorkout = () => {
    const newExercise: ExerciseData = {
      name: selectedExercise,
      sets: [...currentSets],
      notes: notes,
    };
    setWorkout([...workout, newExercise]);

    // Reset form
    setCurrentSets([{ reps: "10", weight: "60" }]);
    setNotes("");
  };

  const removeExercise = (index: number) => {
    setWorkout(workout.filter((_, i) => i !== index));
  };

  const saveWorkout = () => {
    const summary = workout.map(ex =>
      `${ex.name}: ${ex.sets.length} serie`
    ).join('\n');
    alert(`Zapisano trening!\n\n${summary}`);
  };

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-2xl mx-auto p-4">
        {/* Header */}
        <header className="flex items-center mb-6 py-2">
          <Link href="/" className="mr-3 text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight">Dodaj Trening</h1>
        </header>

        {/* Form */}
        <div className="space-y-4">
          {/* Exercise Select */}
          <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-4">
            <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Ćwiczenie</label>
            <select
              value={selectedExercise}
              onChange={(e) => setSelectedExercise(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            >
              {exercises.map((ex) => (
                <option key={ex} value={ex}>{ex}</option>
              ))}
            </select>
          </div>

          {/* Sets */}
          <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-4">
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-medium text-gray-400 uppercase tracking-wide">Serie</label>
              <button
                onClick={addSet}
                className="text-primary text-sm font-medium flex items-center gap-1"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
                </svg>
                Dodaj serię
              </button>
            </div>

            <div className="space-y-2">
              {currentSets.map((set, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 w-16">Seria {index + 1}</span>
                  <input
                    type="number"
                    value={set.reps}
                    onChange={(e) => updateSet(index, 'reps', e.target.value)}
                    placeholder="Powt."
                    className="flex-1 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-3 py-2 text-white text-center font-mono focus:outline-none focus:border-primary transition-colors"
                    min="1"
                  />
                  <span className="text-gray-500">×</span>
                  <input
                    type="number"
                    value={set.weight}
                    onChange={(e) => updateSet(index, 'weight', e.target.value)}
                    placeholder="kg"
                    className="flex-1 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-3 py-2 text-white text-center font-mono focus:outline-none focus:border-primary transition-colors"
                    min="0"
                    step="2.5"
                  />
                  <span className="text-gray-500 text-sm">kg</span>
                  {currentSets.length > 1 && (
                    <button
                      onClick={() => removeSet(index)}
                      className="text-gray-500 hover:text-red-400 transition-colors p-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-4">
            <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Notatki (opcjonalne)</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary resize-none transition-colors"
              rows={2}
              placeholder="Jak się czułeś?"
            />
          </div>

          {/* Add Exercise Button */}
          <button
            onClick={addExerciseToWorkout}
            className="w-full bg-[#1A1A1A] hover:bg-[#252525] border border-[#2A2A2A] text-white font-medium py-3 rounded-lg transition-colors"
          >
            + Dodaj ćwiczenie do treningu
          </button>
        </div>

        {/* Workout Preview */}
        {workout.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-3">Podgląd treningu ({workout.length} {workout.length === 1 ? 'ćwiczenie' : 'ćwiczenia'})</h2>
            <div className="space-y-2">
              {workout.map((ex, idx) => (
                <div key={idx} className="bg-[#151515] border border-[#2A2A2A] rounded-lg p-3">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{ex.name}</h3>
                      <p className="text-sm text-gray-400 font-mono">
                        {ex.sets.map((s, i) => `${s.reps}×${s.weight}kg`).join(', ')}
                      </p>
                      {ex.notes && <p className="text-xs text-gray-500 mt-1">{ex.notes}</p>}
                    </div>
                    <button
                      onClick={() => removeExercise(idx)}
                      className="text-gray-500 hover:text-red-400 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={saveWorkout}
              className="w-full bg-primary hover:bg-[#4F90FF] text-white font-medium py-4 rounded-lg transition-colors mt-4"
            >
              Zapisz trening ({workout.length} {workout.length === 1 ? 'ćwiczenie' : 'ćwiczenia'})
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#151515] border-t border-[#2A2A2A]">
        <div className="max-w-2xl mx-auto grid grid-cols-4 py-2">
          <Link href="/" className="flex flex-col items-center text-gray-500 hover:text-gray-400 transition-colors p-2">
            <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"/>
            </svg>
            <span className="text-xs font-medium">Główna</span>
          </Link>

          <div className="flex flex-col items-center text-primary p-2">
            <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
            </svg>
            <span className="text-xs font-medium">Dodaj</span>
          </div>

          <Link href="/stats" className="flex flex-col items-center text-gray-500 hover:text-gray-400 transition-colors p-2">
            <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 13H5V17H7V9H9V17H11V5H13V17H15V11H17V17H19V13H21V19C21 19.55 20.55 20 20 20H4C3.45 20 3 19.55 3 19V13Z"/>
            </svg>
            <span className="text-xs font-medium">Statystyki</span>
          </Link>

          <Link href="/history" className="flex flex-col items-center text-gray-500 hover:text-gray-400 transition-colors p-2">
            <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 11H7V13H9V11ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z"/>
            </svg>
            <span className="text-xs font-medium">Historia</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
