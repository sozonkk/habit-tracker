"use client";

import Link from "next/link";
import { useState } from "react";

type Set = {
  id: number;
  reps: number;
  weight: number;
};

type Exercise = {
  id: number;
  name: string;
  sets: Set[];
};

export default function AddWorkout() {
  const [selectedExercise, setSelectedExercise] = useState("Bench Press");
  const [currentSets, setCurrentSets] = useState<Set[]>([
    { id: 1, reps: 10, weight: 60 },
  ]);
  const [addedExercises, setAddedExercises] = useState<Exercise[]>([]);
  const [notes, setNotes] = useState("");

  // Mock exercises list
  const exercises = [
    "Bench Press",
    "Squat",
    "Deadlift",
    "Overhead Press",
    "Barbell Row",
    "Pull-ups",
    "Dips",
    "Bicep Curl",
    "Tricep Extension",
    "Leg Press",
  ];

  const addSet = () => {
    const newId = Math.max(...currentSets.map((s) => s.id), 0) + 1;
    setCurrentSets([...currentSets, { id: newId, reps: 10, weight: 60 }]);
  };

  const removeSet = (id: number) => {
    if (currentSets.length > 1) {
      setCurrentSets(currentSets.filter((s) => s.id !== id));
    }
  };

  const updateSet = (id: number, field: "reps" | "weight", value: number) => {
    setCurrentSets(
      currentSets.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  const addExercise = () => {
    if (currentSets.length === 0) return;

    const newExercise: Exercise = {
      id: Date.now(),
      name: selectedExercise,
      sets: currentSets,
    };

    setAddedExercises([...addedExercises, newExercise]);
    // Reset for next exercise
    setCurrentSets([{ id: 1, reps: 10, weight: 60 }]);
  };

  const removeExercise = (id: number) => {
    setAddedExercises(addedExercises.filter((e) => e.id !== id));
  };

  const saveWorkout = () => {
    if (addedExercises.length === 0) {
      alert("Dodaj przynajmniej jedno ćwiczenie!");
      return;
    }
    alert("Wkrótce! Zapisze do Google Sheets");
    // TODO: Save to Google Sheets
  };

  return (
    <div className="min-h-screen p-4 pb-20">
      <main className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="mb-6 flex items-center">
          <Link href="/" className="mr-4 text-gray-400 hover:text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>
          <h1 className="text-2xl font-bold">Dodaj Trening</h1>
        </header>

        {/* Add Exercise Form */}
        <div className="mb-6 bg-card border border-border rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Dodaj ćwiczenie</h2>

          {/* Exercise Select */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Ćwiczenie</label>
            <select
              value={selectedExercise}
              onChange={(e) => setSelectedExercise(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
            >
              {exercises.map((ex) => (
                <option key={ex} value={ex}>
                  {ex}
                </option>
              ))}
            </select>
          </div>

          {/* Sets */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium">Serie</label>
              <button
                type="button"
                onClick={addSet}
                className="text-primary hover:text-blue-400 text-sm font-medium"
              >
                + Dodaj serię
              </button>
            </div>

            <div className="space-y-2">
              {currentSets.map((set, index) => (
                <div
                  key={set.id}
                  className="flex items-center gap-2 bg-background rounded-lg p-3"
                >
                  <span className="text-sm text-gray-400 w-12">
                    Seria {index + 1}
                  </span>
                  <div className="flex-1 flex gap-2">
                    <div className="flex-1">
                      <input
                        type="number"
                        value={set.reps}
                        onChange={(e) =>
                          updateSet(set.id, "reps", parseInt(e.target.value))
                        }
                        className="w-full bg-card border border-border rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                        placeholder="Powt."
                        min="1"
                      />
                      <span className="text-xs text-gray-400 block mt-1">
                        powtórzenia
                      </span>
                    </div>
                    <div className="flex-1">
                      <input
                        type="number"
                        value={set.weight}
                        onChange={(e) =>
                          updateSet(set.id, "weight", parseFloat(e.target.value))
                        }
                        className="w-full bg-card border border-border rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                        placeholder="Ciężar"
                        min="0"
                        step="2.5"
                      />
                      <span className="text-xs text-gray-400 block mt-1">
                        kg
                      </span>
                    </div>
                  </div>
                  {currentSets.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSet(set.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Add Exercise Button */}
          <button
            type="button"
            onClick={addExercise}
            className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Dodaj ćwiczenie
          </button>
        </div>

        {/* Added Exercises Preview */}
        {addedExercises.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">
              Podgląd treningu ({addedExercises.length})
            </h2>
            <div className="space-y-3">
              {addedExercises.map((exercise) => (
                <div
                  key={exercise.id}
                  className="bg-card border border-border rounded-lg p-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{exercise.name}</h3>
                    <button
                      type="button"
                      onClick={() => removeExercise(exercise.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="space-y-1">
                    {exercise.sets.map((set, idx) => (
                      <div
                        key={set.id}
                        className="text-sm text-gray-300 flex items-center"
                      >
                        <span className="w-16">Seria {idx + 1}:</span>
                        <span>
                          {set.reps} powt. @ {set.weight}kg
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Notes */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Notatki (opcjonalnie)
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary resize-none"
            rows={3}
            placeholder="Jak się czułeś?"
          />
        </div>

        {/* Save Workout Button */}
        <button
          type="button"
          onClick={saveWorkout}
          disabled={addedExercises.length === 0}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          Zapisz trening
        </button>
      </main>
    </div>
  );
}
