import Link from "next/link";

// Mock stats data
const stats = {
  totalWorkouts: 12,
  thisWeek: 3,
  thisMonth: 12,
  streak: 5,
  topExercises: [
    { name: "Przysiady", count: 8, totalWeight: 6400 },
    { name: "Wyciskanie Sztangi", count: 7, totalWeight: 4200 },
    { name: "Martwy Ciąg", count: 6, totalWeight: 7200 },
  ],
  personalRecords: [
    { exercise: "Przysiady", weight: 100, reps: 8, date: "15 lis" },
    { exercise: "Martwy Ciąg", weight: 120, reps: 6, date: "13 lis" },
    { exercise: "Wyciskanie Sztangi", weight: 60, reps: 10, date: "15 lis" },
  ],
  weeklyProgress: [
    { day: "Pn", workouts: 1 },
    { day: "Wt", workouts: 0 },
    { day: "Śr", workouts: 1 },
    { day: "Cz", workouts: 0 },
    { day: "Pt", workouts: 1 },
    { day: "So", workouts: 0 },
    { day: "Nd", workouts: 0 },
  ],
};

export default function Stats() {
  const maxWorkouts = Math.max(...stats.weeklyProgress.map(d => d.workouts));

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-2xl mx-auto p-4">
        {/* Header */}
        <header className="mb-6 py-2">
          <h1 className="text-2xl font-semibold tracking-tight">Statystyki</h1>
          <p className="text-gray-400 text-sm mt-1">Twoje postępy i rekordy</p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-4">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Ten Tydzień</p>
            <p className="text-3xl font-semibold">{stats.thisWeek}</p>
            <p className="text-xs text-gray-500 mt-1">treningi</p>
          </div>

          <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-4">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Seria 🔥</p>
            <p className="text-3xl font-semibold">{stats.streak}</p>
            <p className="text-xs text-gray-500 mt-1">dni</p>
          </div>

          <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-4">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Ten Miesiąc</p>
            <p className="text-3xl font-semibold">{stats.thisMonth}</p>
            <p className="text-xs text-gray-500 mt-1">treningi</p>
          </div>

          <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-4">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Łącznie</p>
            <p className="text-3xl font-semibold">{stats.totalWorkouts}</p>
            <p className="text-xs text-gray-500 mt-1">treningi</p>
          </div>
        </div>

        {/* Weekly Chart */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-4 mb-4">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">Aktywność w tym tygodniu</h2>
          <div className="flex items-end justify-between gap-2 h-32">
            {stats.weeklyProgress.map((day) => (
              <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-[#1A1A1A] rounded-t-lg relative"
                     style={{
                       height: `${maxWorkouts > 0 ? (day.workouts / maxWorkouts) * 100 : 0}%`,
                       minHeight: day.workouts > 0 ? '20%' : '0%'
                     }}>
                  {day.workouts > 0 && (
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-500 to-green-400 rounded-t-lg"></div>
                  )}
                </div>
                <p className="text-xs text-gray-500 font-medium">{day.day}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Exercises */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-4 mb-4">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">Najczęstsze Ćwiczenia</h2>
          <div className="space-y-3">
            {stats.topExercises.map((ex, idx) => (
              <div key={ex.name}>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">{ex.name}</span>
                  <span className="text-sm text-gray-400">{ex.count} razy</span>
                </div>
                <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-primary rounded-full"
                    style={{ width: `${(ex.count / stats.topExercises[0].count) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Łączny ciężar: {ex.totalWeight.toLocaleString()}kg</p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Records */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-4 mb-4">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">Rekordy Osobiste</h2>
          <div className="space-y-2">
            {stats.personalRecords.map((record) => (
              <div
                key={record.exercise}
                className="flex justify-between items-center p-3 bg-[#1A1A1A] rounded-lg"
              >
                <div>
                  <p className="font-medium">{record.exercise}</p>
                  <p className="text-xs text-gray-500">{record.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono font-semibold text-primary">{record.weight}kg</p>
                  <p className="text-xs text-gray-500">{record.reps} powtórzeń</p>
                </div>
              </div>
            ))}
          </div>
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

          <div className="flex flex-col items-center text-primary p-2">
            <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 13H5V17H7V9H9V17H11V5H13V17H15V11H17V17H19V13H21V19C21 19.55 20.55 20 20 20H4C3.45 20 3 19.55 3 19V13Z"/>
            </svg>
            <span className="text-xs font-medium">Statystyki</span>
          </div>

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
