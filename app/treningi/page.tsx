"use client";

import Link from "next/link";
import { useState } from "react";

type WorkoutTemplate = {
  id: number;
  name: string;
  exercises: string[];
  recurrence: "weekly" | "biweekly" | "custom";
  dayOfWeek: number; // 0-6 (Mon-Sun)
  icon: string;
  lastCompleted?: string;
};

type ScheduledWorkout = {
  id: number;
  templateId: number;
  date: string;
  dateShort: string;
  name: string;
  completed: boolean;
};

// Mock data
const templates: WorkoutTemplate[] = [
  {
    id: 1,
    name: "Dzień Pchający",
    exercises: ["Wyciskanie Sztangi", "Wyciskanie Nad Głowę", "Pompki na Poręczach", "Prostowanie Ramion"],
    recurrence: "weekly",
    dayOfWeek: 1, // Monday
    icon: "💪",
    lastCompleted: "13 lis",
  },
  {
    id: 2,
    name: "Dzień Ciągnący",
    exercises: ["Martwy Ciąg", "Wiosłowanie Sztangą", "Podciąganie", "Uginanie Ramion"],
    recurrence: "weekly",
    dayOfWeek: 3, // Wednesday
    icon: "🏋️",
    lastCompleted: "15 lis",
  },
  {
    id: 3,
    name: "Nogi",
    exercises: ["Przysiady", "Leg Press", "Martwy Ciąg Rumuński"],
    recurrence: "weekly",
    dayOfWeek: 5, // Friday
    icon: "🦵",
    lastCompleted: "10 lis",
  },
];

const scheduledWorkouts: ScheduledWorkout[] = [
  { id: 1, templateId: 1, date: "18 listopada 2024", dateShort: "18 lis (Pn)", name: "Dzień Pchający", completed: false },
  { id: 2, templateId: 2, date: "20 listopada 2024", dateShort: "20 lis (Śr)", name: "Dzień Ciągnący", completed: false },
  { id: 3, templateId: 3, date: "22 listopada 2024", dateShort: "22 lis (Pt)", name: "Nogi", completed: false },
  { id: 4, templateId: 1, date: "25 listopada 2024", dateShort: "25 lis (Pn)", name: "Dzień Pchający", completed: false },
];

export default function Treningi() {
  const [showAddTemplate, setShowAddTemplate] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<WorkoutTemplate | null>(null);

  const handleStartWorkout = (workout: ScheduledWorkout) => {
    // In real app, this would navigate to workout with pre-filled data from last week
    alert(`Rozpoczynanie: ${workout.name}\n\nWyniki z poprzedniego tygodnia zostaną automatycznie skopiowane!`);
  };

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-2xl mx-auto p-4">
        {/* Header */}
        <header className="mb-6 py-2">
          <h1 className="text-2xl font-semibold tracking-tight">Plany Treningowe</h1>
          <p className="text-gray-400 text-sm mt-1">Zarządzaj swoimi treningami</p>
        </header>

        {/* Upcoming Workouts */}
        <div className="mb-6">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">Nadchodzące Treningi</h2>
          <div className="space-y-2">
            {scheduledWorkouts.slice(0, 4).map((workout) => {
              const template = templates.find(t => t.id === workout.templateId);
              return (
                <div
                  key={workout.id}
                  className="bg-[#151515] border border-[#2A2A2A] rounded-lg p-3 hover:border-[#3A3A3A] transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#1A1A1A] rounded-lg flex items-center justify-center text-xl">
                        {template?.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{workout.name}</h3>
                        <p className="text-xs text-gray-500">{workout.dateShort}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleStartWorkout(workout)}
                      className="bg-primary hover:bg-[#4F90FF] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                    >
                      Rozpocznij
                    </button>
                  </div>
                  <p className="text-xs text-gray-400">
                    {template?.exercises.slice(0, 3).join(" · ")}
                    {template && template.exercises.length > 3 && ` +${template.exercises.length - 3}`}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Templates Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide">Szablony Treningów</h2>
            <button
              onClick={() => setShowAddTemplate(!showAddTemplate)}
              className="text-primary text-sm font-medium flex items-center gap-1"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
              </svg>
              Nowy szablon
            </button>
          </div>

          {showAddTemplate && (
            <div className="bg-[#151515] border border-primary/50 rounded-xl p-4 mb-3">
              <h3 className="font-medium mb-3">Nowy Szablon</h3>
              <p className="text-sm text-gray-400">
                Funkcja w przygotowaniu - możliwość dodania własnego szablonu z harmonogramem
              </p>
            </div>
          )}

          <div className="space-y-3">
            {templates.map((template) => (
              <div
                key={template.id}
                className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-4 hover:border-[#3A3A3A] transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center text-2xl">
                      {template.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{template.name}</h3>
                      <p className="text-xs text-gray-500">
                        {template.recurrence === "weekly" ? "Co tydzień" : "Co 2 tygodnie"} ·
                        {" "}{["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "So"][template.dayOfWeek]}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedTemplate(selectedTemplate?.id === template.id ? null : template)}
                    className="text-gray-500 hover:text-gray-400 transition-colors p-1"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                    </svg>
                  </button>
                </div>

                {/* Exercises List */}
                <div className="space-y-1 mb-3">
                  {template.exercises.map((exercise, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      <span>{exercise}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 pt-3 border-t border-[#1A1A1A] text-xs text-gray-500">
                  <span>{template.exercises.length} ćwiczeń</span>
                  {template.lastCompleted && (
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      Ostatnio: {template.lastCompleted}
                    </span>
                  )}
                </div>

                {/* Edit Options */}
                {selectedTemplate?.id === template.id && (
                  <div className="mt-3 pt-3 border-t border-[#1A1A1A] flex gap-2">
                    <button className="flex-1 bg-[#1A1A1A] hover:bg-[#252525] text-white text-sm font-medium py-2 rounded-lg transition-colors">
                      Edytuj
                    </button>
                    <button className="flex-1 bg-[#1A1A1A] hover:bg-[#252525] text-white text-sm font-medium py-2 rounded-lg transition-colors">
                      Harmonogram
                    </button>
                    <button className="bg-[#1A1A1A] hover:bg-red-900/20 text-red-400 text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                      Usuń
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-[#151515] border border-[#2A2A2A] rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/>
              </svg>
            </div>
            <div className="text-sm">
              <p className="text-gray-300 font-medium mb-1">Automatyczne kopiowanie wyników</p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Gdy rozpoczniesz trening z harmonogramu, wyniki z poprzedniego tygodnia zostaną automatycznie skopiowane.
                Możesz je dostosować według potrzeb.
              </p>
            </div>
          </div>
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

          <div className="flex flex-col items-center text-primary p-2">
            <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 11H7V13H9V11ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z"/>
            </svg>
            <span className="text-xs font-medium">Treningi</span>
          </div>

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
