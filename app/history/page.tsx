"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

type WorkoutSet = {
  reps: number;
  weight: number;
};

type WorkoutExercise = {
  name: string;
  sets: WorkoutSet[];
};

type Workout = {
  id: string;
  date: string;
  exercises: WorkoutExercise[];
  notes?: string;
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const months = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

function formatDateShort(dateString: string) {
  const date = new Date(dateString);
  const months = ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'];
  const day = date.getDate();
  const month = months[date.getMonth()];
  return `${day} ${month}`;
}

export default function History() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      const response = await fetch('/api/workouts');
      if (!response.ok) {
        throw new Error('Failed to fetch workouts');
      }
      const data = await response.json();
      setWorkouts(data);
    } catch (err) {
      console.error('Error fetching workouts:', err);
      setError('Nie udało się pobrać historii treningów');
    } finally {
      setLoading(false);
    }
  };

  // Group workouts by date
  const workoutsByDate = workouts.reduce((acc, workout) => {
    const dateKey = formatDate(workout.date);
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(workout);
    return acc;
  }, {} as Record<string, Workout[]>);

  if (loading) {
    return (
      <div className="min-h-screen pb-20 flex items-center justify-center">
        <div className="text-gray-400">Ładowanie historii...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pb-20 flex items-center justify-center">
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-2xl mx-auto p-4">
        {/* Header */}
        <header className="mb-6 py-2">
          <h1 className="text-2xl font-semibold tracking-tight">Historia Treningów</h1>
          <p className="text-gray-400 text-sm mt-1">Wszystkie Twoje treningi</p>
        </header>

        {/* Workouts List */}
        {workouts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 mb-4">Nie masz jeszcze żadnych treningów</p>
            <Link href="/add" className="text-primary font-medium">
              Dodaj pierwszy trening →
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Group by date */}
            {Object.entries(workoutsByDate).map(([date, dayWorkouts]) => (
              <div key={date}>
                <h2 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wide">{date}</h2>
                <div className="space-y-2">
                  {dayWorkouts.map((workout) =>
                    workout.exercises.map((exercise, exIdx) => (
                      <div
                        key={`${workout.id}-${exIdx}`}
                        className="bg-[#151515] border border-[#2A2A2A] rounded-lg p-3 hover:border-[#3A3A3A] transition-colors"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium">{exercise.name}</div>
                          <div className="text-xs text-gray-500 font-medium">{formatDateShort(workout.date)}</div>
                        </div>
                        <p className="text-sm text-gray-400 font-mono mb-2">
                          {exercise.sets.map((s) => `${s.reps}×${s.weight}kg`).join(' · ')}
                        </p>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{exercise.sets.length} {exercise.sets.length === 1 ? 'seria' : 'serie'}</span>
                          <span className="font-mono">
                            Volume: {exercise.sets.reduce((sum, s) => sum + s.reps * s.weight, 0)}kg
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#151515] border-t border-[#2A2A2A]">
        <div className="max-w-2xl mx-auto grid grid-cols-5 py-2">
          <Link href="/" className="flex flex-col items-center text-gray-500 hover:text-gray-400 transition-colors p-2">
            <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"/>
            </svg>
            <span className="text-xs font-medium">Główna</span>
          </Link>

          <Link href="/treningi" className="flex flex-col items-center text-gray-500 hover:text-gray-400 transition-colors p-2">
            <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 11H7V13H9V11ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z"/>
            </svg>
            <span className="text-xs font-medium">Treningi</span>
          </Link>

          <Link href="/add" className="flex flex-col items-center text-gray-500 hover:text-gray-400 transition-colors p-2">
            <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
            </svg>
            <span className="text-xs font-medium">Dodaj</span>
          </Link>

          <Link href="/stats" className="flex flex-col items-center text-gray-500 hover:text-gray-400 transition-colors p-2">
            <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 13H5V17H7V9H9V17H11V5H13V17H15V11H17V17H19V13H21V19C21 19.55 20.55 20 20 20H4C3.45 20 3 19.55 3 19V13Z"/>
            </svg>
            <span className="text-xs font-medium">Statystyki</span>
          </Link>

          <div className="flex flex-col items-center text-primary p-2">
            <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 3C8.03 3 4 7.03 4 12H1L4.89 15.89L4.96 16.03L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 19.99 10.51 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z"/>
            </svg>
            <span className="text-xs font-medium">Historia</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
