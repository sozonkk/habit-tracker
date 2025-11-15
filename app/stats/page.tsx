import Link from "next/link";

export default function Stats() {
  return (
    <div className="min-h-screen p-4 pb-20">
      <main className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Statistics</h1>
          <p className="text-gray-400 text-sm mt-1">Your progress overview</p>
        </header>

        {/* Stats Sections */}
        <div className="space-y-6">
          {/* Workout Frequency */}
          <section className="bg-card border border-border rounded-lg p-5">
            <h2 className="font-semibold mb-4">Workout Frequency</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background rounded-lg p-3">
                <div className="text-xs text-gray-400 mb-1">This Week</div>
                <div className="text-2xl font-bold">
                  3<span className="text-sm text-gray-400 ml-1">/ 4</span>
                </div>
              </div>
              <div className="bg-background rounded-lg p-3">
                <div className="text-xs text-gray-400 mb-1">Current Streak</div>
                <div className="text-2xl font-bold">
                  5<span className="text-sm text-gray-400 ml-1">🔥</span>
                </div>
              </div>
            </div>
          </section>

          {/* Personal Records */}
          <section className="bg-card border border-border rounded-lg p-5">
            <h2 className="font-semibold mb-4">Personal Records</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <div>
                  <div className="font-medium">Bench Press</div>
                  <div className="text-xs text-gray-400">12 reps @ 60kg</div>
                </div>
                <div className="text-sm text-gray-400">Nov 15</div>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <div>
                  <div className="font-medium">Squat</div>
                  <div className="text-xs text-gray-400">8 reps @ 100kg</div>
                </div>
                <div className="text-sm text-gray-400">Nov 15</div>
              </div>
              <div className="flex justify-between items-center py-2">
                <div>
                  <div className="font-medium">Deadlift</div>
                  <div className="text-xs text-gray-400">6 reps @ 120kg</div>
                </div>
                <div className="text-sm text-gray-400">Nov 13</div>
              </div>
            </div>
          </section>

          {/* Total Volume */}
          <section className="bg-card border border-border rounded-lg p-5">
            <h2 className="font-semibold mb-4">Total Volume</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background rounded-lg p-3">
                <div className="text-xs text-gray-400 mb-1">This Week</div>
                <div className="text-2xl font-bold">
                  12.5<span className="text-sm text-gray-400 ml-1">tons</span>
                </div>
              </div>
              <div className="bg-background rounded-lg p-3">
                <div className="text-xs text-gray-400 mb-1">All Time</div>
                <div className="text-2xl font-bold">
                  50.2<span className="text-sm text-gray-400 ml-1">tons</span>
                </div>
              </div>
            </div>
          </section>
        </div>
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
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            <span className="text-xs font-medium">Stats</span>
          </div>
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
          <Link
            href="/settings"
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-medium">Settings</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
