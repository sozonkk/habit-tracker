import Link from "next/link";

// Mock data
const workouts = [
  {
    id: 1,
    date: "15 listopada 2024",
    dateShort: "15 lis",
    exercise: "Wyciskanie Sztangi",
    sets: [
      { set: 1, reps: 10, weight: 60 },
      { set: 2, reps: 10, weight: 60 },
      { set: 3, reps: 8, weight: 60 },
    ],
  },
  {
    id: 2,
    date: "15 listopada 2024",
    dateShort: "15 lis",
    exercise: "Przysiady",
    sets: [
      { set: 1, reps: 8, weight: 100 },
      { set: 2, reps: 8, weight: 100 },
      { set: 3, reps: 8, weight: 100 },
      { set: 4, reps: 6, weight: 100 },
    ],
  },
  {
    id: 3,
    date: "13 listopada 2024",
    dateShort: "13 lis",
    exercise: "Martwy Ciąg",
    sets: [
      { set: 1, reps: 6, weight: 120 },
      { set: 2, reps: 6, weight: 120 },
      { set: 3, reps: 5, weight: 120 },
      { set: 4, reps: 5, weight: 120 },
    ],
  },
  {
    id: 4,
    date: "13 listopada 2024",
    dateShort: "13 lis",
    exercise: "Wyciskanie Nad Głowę",
    sets: [
      { set: 1, reps: 10, weight: 40 },
      { set: 2, reps: 10, weight: 40 },
      { set: 3, reps: 8, weight: 40 },
    ],
  },
  {
    id: 5,
    date: "11 listopada 2024",
    dateShort: "11 lis",
    exercise: "Wiosłowanie Sztangą",
    sets: [
      { set: 1, reps: 10, weight: 70 },
      { set: 2, reps: 10, weight: 70 },
      { set: 3, reps: 8, weight: 70 },
      { set: 4, reps: 8, weight: 70 },
    ],
  },
];

export default function History() {
  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-2xl mx-auto p-4">
        {/* Header */}
        <header className="mb-6 py-2">
          <h1 className="text-2xl font-semibold tracking-tight">Historia Treningów</h1>
          <p className="text-gray-400 text-sm mt-1">Wszystkie Twoje treningi</p>
        </header>

        {/* Workouts List */}
        <div className="space-y-6">
          {/* Group by date */}
          {Array.from(new Set(workouts.map((w) => w.date))).map((date) => (
            <div key={date}>
              <h2 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wide">{date}</h2>
              <div className="space-y-3">
                {workouts
                  .filter((w) => w.date === date)
                  .map((workout) => (
                    <div
                      key={workout.id}
                      className="bg-[#151515] border border-[#2A2A2A] rounded-lg p-3 hover:border-[#3A3A3A] transition-colors"
                    >
                      {/* Exercise Header */}
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium tracking-tight">{workout.exercise}</h3>
                        <button className="text-gray-500 hover:text-red-400 transition-colors p-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                          </svg>
                        </button>
                      </div>

                      {/* Sets in one line */}
                      <p className="text-sm text-gray-400 font-mono mb-2">
                        {workout.sets.map((s) => `${s.reps}×${s.weight}kg`).join(' · ')}
                      </p>

                      {/* Summary */}
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{workout.sets.length} {workout.sets.length === 1 ? 'seria' : 'serie'}</span>
                        <span className="font-mono">
                          Volume: {workout.sets.reduce((sum, s) => sum + s.reps * s.weight, 0)}kg
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
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
              <path d="M9 11H7V13H9V11ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z"/>
            </svg>
            <span className="text-xs font-medium">Historia</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
