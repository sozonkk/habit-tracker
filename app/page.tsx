import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-4 pb-20 sm:p-8">
      <main className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl font-bold mb-1">Hi, Bartek! 👋</h1>
          <p className="text-gray-400 text-sm">Ready to crush it today?</p>
        </header>

        {/* Quick Add Button */}
        <Link
          href="/add"
          className="block w-full bg-primary hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg mb-8 transition-colors text-center"
        >
          + Add Workout
        </Link>

        {/* Recent Workouts */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Recent Workouts</h2>

          {/* Mock workout card */}
          <div className="bg-card border border-border rounded-lg p-4 mb-3">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold">Bench Press</h3>
              <span className="text-xs text-gray-400">Nov 15</span>
            </div>
            <p className="text-sm text-gray-400">3 sets • 60 kg</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4 mb-3">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold">Squat</h3>
              <span className="text-xs text-gray-400">Nov 13</span>
            </div>
            <p className="text-sm text-gray-400">4 sets • 100 kg</p>
          </div>

          <Link
            href="/history"
            className="block w-full text-center text-sm text-gray-400 hover:text-white py-2 transition-colors"
          >
            View All →
          </Link>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="max-w-2xl mx-auto flex justify-around py-3">
          <div className="flex flex-col items-center text-primary">
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs font-medium">Home</span>
          </div>
          <Link
            href="/stats"
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
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
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-medium">History</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
