import Link from "next/link";

export default function Settings() {
  return (
    <div className="min-h-screen p-4 pb-20">
      <main className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-gray-400 text-sm mt-1">Customize your experience</p>
        </header>

        {/* Settings Sections */}
        <div className="space-y-6">
          {/* Profile */}
          <section className="bg-card border border-border rounded-lg p-4">
            <h2 className="font-semibold mb-4">Profile</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  defaultValue="Bartek"
                  className="w-full bg-background border border-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Body Weight (kg)
                </label>
                <input
                  type="number"
                  defaultValue="80"
                  className="w-full bg-background border border-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                  step="0.1"
                />
              </div>
            </div>
          </section>

          {/* Units */}
          <section className="bg-card border border-border rounded-lg p-4">
            <h2 className="font-semibold mb-4">Units</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Weight Unit</span>
                <select className="bg-background border border-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-primary">
                  <option value="kg">Kilograms (kg)</option>
                  <option value="lbs">Pounds (lbs)</option>
                </select>
              </div>
            </div>
          </section>

          {/* Data */}
          <section className="bg-card border border-border rounded-lg p-4">
            <h2 className="font-semibold mb-4">Data</h2>
            <div className="space-y-3">
              <button className="w-full bg-background border border-border hover:border-primary text-left px-4 py-3 rounded-lg transition-colors">
                <div className="font-medium">Export Data</div>
                <div className="text-xs text-gray-400 mt-1">
                  Download your workout data
                </div>
              </button>
              <button className="w-full bg-background border border-danger hover:bg-danger/10 text-danger text-left px-4 py-3 rounded-lg transition-colors">
                <div className="font-medium">Clear All Data</div>
                <div className="text-xs text-gray-400 mt-1">
                  This action cannot be undone
                </div>
              </button>
            </div>
          </section>

          {/* About */}
          <section className="bg-card border border-border rounded-lg p-4">
            <h2 className="font-semibold mb-4">About</h2>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex justify-between">
                <span>Version</span>
                <span>1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span>Database</span>
                <span>Google Sheets</span>
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
          <Link
            href="/stats"
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
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
          <div className="flex flex-col items-center text-primary">
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs font-medium">Settings</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
