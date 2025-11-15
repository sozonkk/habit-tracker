import Link from "next/link";

// Mock PR data (Personal Records)
const personalRecords = [
  {
    exercise: "Bench Press",
    oneRepMax: 100,
    bestSet: { weight: 80, reps: 8 },
    lastUpdate: "Nov 15, 2025",
  },
  {
    exercise: "Squat",
    oneRepMax: 140,
    bestSet: { weight: 120, reps: 6 },
    lastUpdate: "Nov 13, 2025",
  },
  {
    exercise: "Deadlift",
    oneRepMax: 160,
    bestSet: { weight: 140, reps: 5 },
    lastUpdate: "Nov 13, 2025",
  },
  {
    exercise: "Overhead Press",
    oneRepMax: 60,
    bestSet: { weight: 50, reps: 8 },
    lastUpdate: "Nov 10, 2025",
  },
];

export default function Stats() {
  return (
    <div className="min-h-screen p-4 pb-20">
      <main className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Statystyki</h1>
          <p className="text-gray-400 text-sm mt-1">
            Twoje rekordy osobiste
          </p>
        </header>

        {/* Personal Records */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Rekordy osobiste</h2>
          <div className="space-y-3">
            {personalRecords.map((pr) => (
              <div
                key={pr.exercise}
                className="bg-card border border-border rounded-lg p-4"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg">{pr.exercise}</h3>
                  <span className="text-xs text-gray-400">
                    {pr.lastUpdate}
                  </span>
                </div>

                {/* 1RM - One Rep Max */}
                <div className="mb-3 p-3 bg-primary/10 border border-primary/30 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">
                      1RM (x1 powtórzenie)
                    </span>
                    <span className="text-2xl font-bold text-primary">
                      {pr.oneRepMax} kg
                    </span>
                  </div>
                </div>

                {/* Best Set */}
                <div className="text-sm text-gray-400">
                  <span>Najlepszy set: </span>
                  <span className="text-white font-medium">
                    {pr.bestSet.weight}kg × {pr.bestSet.reps} powt.
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Stats */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Ogólne statystyki</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-1">
                Treningi w tym miesiącu
              </div>
              <div className="text-2xl font-bold">12</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-1">
                Łączny wolumen
              </div>
              <div className="text-2xl font-bold">24,500 kg</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-1">Seria z rzędu</div>
              <div className="text-2xl font-bold">7 dni</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-1">
                Ulubione ćwiczenie
              </div>
              <div className="text-lg font-bold">Bench Press</div>
            </div>
          </div>
        </section>
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
          <Link
            href="/stats"
            className="flex flex-col items-center text-primary"
          >
            <svg
              className="w-6 h-6 mb-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            <span className="text-xs font-medium">Stats</span>
          </Link>
          <Link
            href="/history"
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs font-medium">History</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
