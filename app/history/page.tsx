import Link from "next/link";

// Mock data
const workouts = [
  {
    id: 1,
    date: "Nov 15, 2025",
    exercise: "Bench Press",
    sets: [
      { set: 1, reps: 10, weight: 60 },
      { set: 2, reps: 10, weight: 60 },
      { set: 3, reps: 8, weight: 60 },
    ],
  },
  {
    id: 2,
    date: "Nov 15, 2025",
    exercise: "Squat",
    sets: [
      { set: 1, reps: 8, weight: 100 },
      { set: 2, reps: 8, weight: 100 },
      { set: 3, reps: 8, weight: 100 },
      { set: 4, reps: 6, weight: 100 },
    ],
  },
  {
    id: 3,
    date: "Nov 13, 2025",
    exercise: "Deadlift",
    sets: [
      { set: 1, reps: 6, weight: 120 },
      { set: 2, reps: 6, weight: 120 },
      { set: 3, reps: 5, weight: 120 },
      { set: 4, reps: 5, weight: 120 },
    ],
  },
  {
    id: 4,
    date: "Nov 13, 2025",
    exercise: "Overhead Press",
    sets: [
      { set: 1, reps: 10, weight: 40 },
      { set: 2, reps: 10, weight: 40 },
      { set: 3, reps: 8, weight: 40 },
    ],
  },
];

export default function History() {
  return (
    <div className="min-h-screen p-4 pb-20">
      <main className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Workout History</h1>
          <p className="text-gray-400 text-sm mt-1">All your workouts</p>
        </header>

        {/* Workouts List */}
        <div className="space-y-6">
          {/* Group by date */}
          {Array.from(new Set(workouts.map((w) => w.date))).map((date) => (
            <div key={date}>
              <h2 className="text-sm font-medium text-gray-400 mb-3">{date}</h2>
              <div className="space-y-3">
                {workouts
                  .filter((w) => w.date === date)
                  .map((workout) => (
                    <div
                      key={workout.id}
                      className="bg-card border border-border rounded-lg p-4"
                    >
                      {/* Exercise Header */}
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-lg">
                          {workout.exercise}
                        </h3>
                        <button className="text-gray-400 hover:text-danger transition-colors">
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

                      {/* Sets */}
                      <div className="space-y-1">
                        {workout.sets.map((set) => (
                          <div
                            key={set.set}
                            className="flex items-center text-sm text-gray-300"
                          >
                            <span className="w-16">Set {set.set}:</span>
                            <span className="flex-1">
                              {set.reps} reps @ {set.weight}kg
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Summary */}
                      <div className="mt-3 pt-3 border-t border-border text-xs text-gray-400">
                        {workout.sets.length} sets •{" "}
                        {workout.sets.reduce(
                          (sum, s) => sum + s.reps * s.weight,
                          0
                        )}
                        kg total volume
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (hidden for now since we have mock data) */}
        {/* <div className="text-center py-12 text-gray-400">
          <svg
            className="w-16 h-16 mx-auto mb-4 opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          <p>No workouts yet</p>
          <Link href="/add" className="text-primary hover:underline mt-2 inline-block">
            Add your first workout →
          </Link>
        </div> */}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="max-w-2xl mx-auto flex justify-around py-3">
          <Link
            href="/"
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs font-medium">Home</span>
          </Link>
          <div className="flex flex-col items-center text-primary">
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs font-medium">History</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
