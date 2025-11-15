"use client";

import Link from "next/link";
import { useState } from "react";

export default function AddWorkout() {
  const [sets, setSets] = useState("3");
  const [reps, setReps] = useState("10");
  const [weight, setWeight] = useState("60");
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
          <h1 className="text-2xl font-bold">Add Workout</h1>
        </header>

        {/* Form */}
        <form className="space-y-6">
          {/* Exercise Select */}
          <div>
            <label className="block text-sm font-medium mb-2">Exercise</label>
            <select className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary">
              {exercises.map((ex) => (
                <option key={ex} value={ex}>
                  {ex}
                </option>
              ))}
            </select>
          </div>

          {/* Sets */}
          <div>
            <label className="block text-sm font-medium mb-2">Sets</label>
            <input
              type="number"
              value={sets}
              onChange={(e) => setSets(e.target.value)}
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
              min="1"
              max="10"
            />
          </div>

          {/* Reps */}
          <div>
            <label className="block text-sm font-medium mb-2">Reps</label>
            <input
              type="number"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
              min="1"
              max="50"
            />
          </div>

          {/* Weight */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Weight (kg)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
              min="0"
              step="2.5"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Notes (optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary resize-none"
              rows={3}
              placeholder="How did it feel?"
            />
          </div>

          {/* Save Button */}
          <button
            type="button"
            onClick={() => alert("Coming soon! Will save to Google Sheets")}
            className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-4 rounded-lg transition-colors"
          >
            Save Workout
          </button>
        </form>
      </main>
    </div>
  );
}
