"use client";

import Link from "next/link";
import { useState } from "react";

export default function AddWorkout() {
  const [exercise, setExercise] = useState("Wyciskanie Sztangi");
  const [sets, setSets] = useState("3");
  const [reps, setReps] = useState("10");
  const [weight, setWeight] = useState("60");
  const [notes, setNotes] = useState("");

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

  const handleSave = () => {
    // Mock save - w przyszłości zapisze do bazy
    alert(`Zapisano: ${exercise}\n${sets} serie × ${reps} powtórzeń @ ${weight}kg`);
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
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
          {/* Exercise Select */}
          <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-4">
            <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Ćwiczenie</label>
            <select
              value={exercise}
              onChange={(e) => setExercise(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            >
              {exercises.map((ex) => (
                <option key={ex} value={ex}>{ex}</option>
              ))}
            </select>
          </div>

          {/* Sets, Reps, Weight Grid */}
          <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-4">
            <label className="block text-sm font-medium text-gray-400 mb-3 uppercase tracking-wide">Parametry</label>
            <div className="grid grid-cols-3 gap-3">
              {/* Sets */}
              <div>
                <label className="block text-xs text-gray-500 mb-2">Serie</label>
                <input
                  type="number"
                  value={sets}
                  onChange={(e) => setSets(e.target.value)}
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-3 py-3 text-white text-center font-mono focus:outline-none focus:border-primary transition-colors"
                  min="1"
                  max="10"
                />
              </div>

              {/* Reps */}
              <div>
                <label className="block text-xs text-gray-500 mb-2">Powt.</label>
                <input
                  type="number"
                  value={reps}
                  onChange={(e) => setReps(e.target.value)}
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-3 py-3 text-white text-center font-mono focus:outline-none focus:border-primary transition-colors"
                  min="1"
                  max="50"
                />
              </div>

              {/* Weight */}
              <div>
                <label className="block text-xs text-gray-500 mb-2">Ciężar (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-3 py-3 text-white text-center font-mono focus:outline-none focus:border-primary transition-colors"
                  min="0"
                  step="2.5"
                />
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-4">
            <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Notatki (opcjonalne)</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary resize-none transition-colors"
              rows={3}
              placeholder="Jak się czułeś?"
            />
          </div>

          {/* Preview */}
          <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-4">
            <p className="text-sm text-gray-400 mb-2">Podgląd:</p>
            <p className="font-medium">{exercise}</p>
            <p className="text-sm text-gray-400 font-mono">{sets}×{reps} · {weight}kg</p>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-primary hover:bg-[#4F90FF] text-white font-medium py-4 rounded-lg transition-colors"
          >
            Zapisz Trening
          </button>
        </form>
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
