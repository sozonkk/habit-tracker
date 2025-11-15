import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-2xl mx-auto p-4">
        {/* Header */}
        <header className="flex justify-between items-start mb-6 py-2">
          <div>
            <h1 className="text-2xl font-semibold mb-1 tracking-tight">Cześć, Bartek 👋</h1>
            <p className="text-sm text-gray-400">Piątek, 15 listopada</p>
          </div>

          {/* Streak Badge */}
          <div className="flex items-center gap-2 bg-[#151515] px-3 py-2 rounded-xl border border-[#252525]">
            <span className="text-lg">🔥</span>
            <span className="text-sm font-semibold">5</span>
          </div>
        </header>

        {/* Week Progress Card */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-4 mb-4">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">Ten Tydzień</h2>

          {/* Progress Bar */}
          <div className="mb-2">
            <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden mb-2">
              <div className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all duration-300" style={{width: '75%'}}></div>
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span><strong className="text-white font-medium">3</strong> z 4 treningów</span>
              <span><strong className="text-white font-medium">75%</strong> ukończone</span>
            </div>
          </div>
        </div>

        {/* Today's Workout */}
        <div className="bg-[#151515] border border-[#3A3A3A] rounded-xl p-4 mb-4 relative">
          <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-primary rounded-r"></div>

          <div className="flex items-center gap-3 mb-3 pl-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.57 14.86L22 13.43L20.57 12L17 15.57L8.43 7L12 3.43L10.57 2L9.14 3.43L7.71 2L5.57 4.14L4.14 2.71L2.71 4.14L4.14 5.57L2 7.71L3.43 9.14L2 10.57L3.43 12L7 8.43L15.57 17L12 20.57L13.43 22L14.86 20.57L16.29 22L18.43 19.86L19.86 21.29L21.29 19.86L19.86 18.43L22 16.29L20.57 14.86Z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight">Dzień Pchający</h3>
              <p className="text-sm text-gray-400">4 ćwiczenia · 60 min</p>
            </div>
          </div>

          <button className="w-full bg-primary hover:bg-[#4F90FF] text-white font-medium py-3 px-4 rounded-lg transition-colors ml-3">
            Rozpocznij Trening
          </button>
        </div>

        {/* Recent Workouts */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold tracking-tight">Ostatnie Treningi</h2>
            <Link href="/history" className="text-sm text-primary font-medium flex items-center gap-1">
              Zobacz wszystkie
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center p-4 bg-[#151515] border border-[#2A2A2A] rounded-lg hover:border-[#3A3A3A] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#1A1A1A] rounded-md flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="4" y="10" width="16" height="4" rx="1"/>
                    <circle cx="6" cy="12" r="2"/>
                    <circle cx="18" cy="12" r="2"/>
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Wyciskanie Sztangi</div>
                  <div className="text-sm text-gray-400 font-mono">3×10 · 60kg</div>
                </div>
              </div>
              <div className="text-xs text-gray-500 font-medium">15 lis</div>
            </div>

            <div className="flex justify-between items-center p-4 bg-[#151515] border border-[#2A2A2A] rounded-lg hover:border-[#3A3A3A] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#1A1A1A] rounded-md flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3L4 9V21H9V14H15V21H20V9L12 3Z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Przysiady</div>
                  <div className="text-sm text-gray-400 font-mono">4×8 · 100kg</div>
                </div>
              </div>
              <div className="text-xs text-gray-500 font-medium">13 lis</div>
            </div>

            <div className="flex justify-between items-center p-4 bg-[#151515] border border-[#2A2A2A] rounded-lg hover:border-[#3A3A3A] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#1A1A1A] rounded-md flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="8" y="4" width="8" height="3" rx="1"/>
                    <path d="M10 7L8 21H16L14 7H10Z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Martwy Ciąg</div>
                  <div className="text-sm text-gray-400 font-mono">4×6 · 120kg</div>
                </div>
              </div>
              <div className="text-xs text-gray-500 font-medium">11 lis</div>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#151515] border-t border-[#2A2A2A]">
        <div className="max-w-2xl mx-auto grid grid-cols-4 py-2">
          <div className="flex flex-col items-center text-primary p-2">
            <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"/>
            </svg>
            <span className="text-xs font-medium">Główna</span>
          </div>

          <Link href="/add" className="flex flex-col items-center text-gray-500 hover:text-gray-400 transition-colors p-2">
            <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
            </svg>
            <span className="text-xs font-medium">Dodaj</span>
          </Link>

          <button className="flex flex-col items-center text-gray-500 hover:text-gray-400 transition-colors p-2">
            <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 13H5V17H7V9H9V17H11V5H13V17H15V11H17V17H19V13H21V19C21 19.55 20.55 20 20 20H4C3.45 20 3 19.55 3 19V13Z"/>
            </svg>
            <span className="text-xs font-medium">Statystyki</span>
          </button>

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
