"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

type PersonalRecord = {
  exercise: string;
  weight: number;
  reps: number;
  oneRM: number | null;
  date: string;
};

type StatsData = {
  user: {
    streak: number;
  };
  workoutsThisWeek: number;
  totalWorkouts: number;
  totalVolume: number;
  personalRecords: PersonalRecord[];
};

function formatDateShort(dateString: string) {
  const date = new Date(dateString);
  const months = ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'];
  const day = date.getDate();
  const month = months[date.getMonth()];
  return `${day} ${month}`;
}

export default function Stats() {
  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/stats');
      if (!response.ok) {
        throw new Error('Failed to fetch stats');
      }
      const data = await response.json();
      setStats(data);
    } catch (err) {
      console.error('Error fetching stats:', err);
      setError('Nie udało się pobrać statystyk');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pb-20 flex items-center justify-center">
        <div className="text-gray-400">Ładowanie statystyk...</div>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="min-h-screen pb-20 flex items-center justify-center">
        <div className="text-red-400">{error || 'Błąd ładowania'}</div>
      </div>
    );
  }

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
          {/* Streak */}
          <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🔥</span>
              <span className="text-sm text-gray-400 uppercase tracking-wide">Streak</span>
            </div>
            <div className="text-3xl font-bold font-mono">{stats.user.streak}</div>
            <div className="text-xs text-gray-500 mt-1">{stats.user.streak === 1 ? 'dzień' : 'dni'} z rzędu</div>
          </div>

          {/* This Week */}
          <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">💪</span>
              <span className="text-sm text-gray-400 uppercase tracking-wide">Ten tydzień</span>
            </div>
            <div className="text-3xl font-bold font-mono">{stats.workoutsThisWeek}</div>
            <div className="text-xs text-gray-500 mt-1">{stats.workoutsThisWeek === 1 ? 'trening' : 'treningi'}</div>
          </div>

          {/* Total Workouts */}
          <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">📊</span>
              <span className="text-sm text-gray-400 uppercase tracking-wide">Łącznie</span>
            </div>
            <div className="text-3xl font-bold font-mono">{stats.totalWorkouts}</div>
            <div className="text-xs text-gray-500 mt-1">{stats.totalWorkouts === 1 ? 'trening' : 'treningów'}</div>
          </div>

          {/* Volume This Week */}
          <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">⚡</span>
              <span className="text-sm text-gray-400 uppercase tracking-wide">Volume</span>
            </div>
            <div className="text-3xl font-bold font-mono">{(stats.totalVolume / 1000).toFixed(1)}</div>
            <div className="text-xs text-gray-500 mt-1">ton ten tydzień</div>
          </div>
        </div>

        {/* Personal Records */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4 tracking-tight">Rekordy Osobiste</h2>
          {stats.personalRecords.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              Brak rekordów osobistych
            </div>
          ) : (
            <div className="space-y-3">
              {stats.personalRecords.map((record, idx) => (
                <div key={idx} className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-lg">{record.exercise}</h3>
                    <span className="text-xs text-gray-500">{formatDateShort(record.date)}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold font-mono text-primary">{record.weight}</span>
                      <span className="text-sm text-gray-500">kg</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-semibold font-mono">{record.reps}</span>
                      <span className="text-sm text-gray-500">{record.reps === 1 ? 'powtórzenie' : 'powtórzeń'}</span>
                    </div>
                  </div>
                  {record.oneRM && (
                    <div className="flex items-center gap-2 pt-2 border-t border-[#252525] mt-3">
                      <span className="text-xs text-gray-500">1RM (szacowane):</span>
                      <span className="text-sm font-mono font-semibold text-emerald-400">{record.oneRM}kg</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
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

          <div className="flex flex-col items-center text-primary p-2">
            <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 13H5V17H7V9H9V17H11V5H13V17H15V11H17V17H19V13H21V19C21 19.55 20.55 20 20 20H4C3.45 20 3 19.55 3 19V13Z"/>
            </svg>
            <span className="text-xs font-medium">Statystyki</span>
          </div>

          <Link href="/history" className="flex flex-col items-center text-gray-500 hover:text-gray-400 transition-colors p-2">
            <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 3C8.03 3 4 7.03 4 12H1L4.89 15.89L4.96 16.03L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 19.99 10.51 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z"/>
            </svg>
            <span className="text-xs font-medium">Historia</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
