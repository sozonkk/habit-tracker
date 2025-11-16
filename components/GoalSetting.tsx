"use client";

import { useState } from 'react';
import { Target, TrendingUp, Calendar, Award, Plus, Edit2, Trash2 } from 'lucide-react';

interface GoalSettingProps {
  onNavigate: (screen: string) => void;
}

export function GoalSetting({ onNavigate }: GoalSettingProps) {
  const [view, setView] = useState<'list' | 'create'>('list');

  const goals = [
    {
      id: 1,
      title: 'Zwiększ przysiad o 10kg',
      category: 'Siła',
      currentValue: 100,
      targetValue: 110,
      unit: 'kg',
      deadline: '31 grudnia 2024',
      progress: 70,
      icon: TrendingUp,
      color: 'emerald',
    },
    {
      id: 2,
      title: '20 treningów w miesiącu',
      category: 'Częstotliwość',
      currentValue: 16,
      targetValue: 20,
      unit: 'treningów',
      deadline: '30 listopada 2024',
      progress: 80,
      icon: Calendar,
      color: 'purple',
    },
    {
      id: 3,
      title: 'Spal 20000 kalorii',
      category: 'Cardio',
      currentValue: 14500,
      targetValue: 20000,
      unit: 'kcal',
      deadline: '30 listopada 2024',
      progress: 72,
      icon: Award,
      color: 'orange',
    },
    {
      id: 4,
      title: 'Wyciskanie 100kg',
      category: 'Siła',
      currentValue: 85,
      targetValue: 100,
      unit: 'kg',
      deadline: '31 stycznia 2025',
      progress: 85,
      icon: TrendingUp,
      color: 'blue',
    },
  ];

  const achievements = [
    { id: 1, title: 'Seria 30 dni', date: 'Październik 2024', icon: '🔥' },
    { id: 2, title: 'Pierwszy Przysiad 100kg', date: 'Wrzesień 2024', icon: '💪' },
    { id: 3, title: '100 treningów', date: 'Sierpień 2024', icon: '🏆' },
  ];

  if (view === 'create') {
    return <GoalCreator onBack={() => setView('list')} />;
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl mb-1">Cele treningowe</h1>
          <p className="text-gray-400 text-sm">Śledź swoje postępy</p>
        </div>
        <button
          onClick={() => setView('create')}
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center transition-colors"
        >
          <Plus className="w-6 h-6" />
        </button>
      </div>

      {/* Progress Overview */}
      <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 rounded-2xl p-5 border border-emerald-500/20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-400 mb-1">Ogólny postęp</p>
            <p className="text-3xl">76%</p>
          </div>
          <Target className="w-12 h-12 text-emerald-400" />
        </div>
        <div className="h-3 bg-black/20 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500" style={{ width: '76%' }} />
        </div>
        <p className="text-xs text-gray-400 mt-2">3 z 4 celów na dobrej drodze</p>
      </div>

      {/* Active Goals */}
      <div className="space-y-3">
        <h2 className="text-lg">Aktywne cele</h2>
        <div className="space-y-3">
          {goals.map((goal) => {
            const Icon = goal.icon;
            const getColorClasses = (color: string) => {
              const colors: any = {
                emerald: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/20',
                purple: 'from-purple-500/20 to-purple-600/10 border-purple-500/20',
                orange: 'from-orange-500/20 to-orange-600/10 border-orange-500/20',
                blue: 'from-blue-500/20 to-blue-600/10 border-blue-500/20',
              };
              return colors[color] || colors.emerald;
            };

            const getProgressColor = (progress: number) => {
              if (progress >= 80) return 'bg-emerald-500';
              if (progress >= 50) return 'bg-yellow-500';
              return 'bg-orange-500';
            };

            return (
              <div
                key={goal.id}
                className={`bg-gradient-to-br ${getColorClasses(goal.color)} rounded-2xl p-4 border`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3>{goal.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">{goal.category}</p>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-400">{goal.deadline}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-black/20 rounded-xl p-3 mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Postęp</span>
                    <span className="text-sm">{goal.progress}%</span>
                  </div>
                  <div className="h-2 bg-black/30 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getProgressColor(goal.progress)}`}
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-400">
                      {goal.currentValue} {goal.unit}
                    </span>
                    <span className="text-xs text-gray-400">
                      {goal.targetValue} {goal.unit}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">
                    Pozostało: {goal.targetValue - goal.currentValue} {goal.unit}
                  </span>
                  {goal.progress >= 80 && (
                    <span className="text-emerald-400">🔥 Prawie skończone!</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Achievements */}
      <div className="space-y-3">
        <h2 className="text-lg">Osiągnięcia</h2>
        <div className="grid grid-cols-1 gap-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-[#1a1a1a] rounded-xl p-4 border border-gray-800 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center text-2xl">
                {achievement.icon}
              </div>
              <div className="flex-1">
                <h3 className="mb-1">{achievement.title}</h3>
                <p className="text-sm text-gray-400">{achievement.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Motivation Quote */}
      <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-2xl p-5 border border-purple-500/20 text-center">
        <p className="text-lg mb-2">"Sukces to suma małych wysiłków powtarzanych dzień po dniu."</p>
        <p className="text-sm text-gray-400">- Robert Collier</p>
      </div>

      {/* Stats Summary */}
      <div className="bg-[#1a1a1a] rounded-2xl p-5 border border-gray-800">
        <h2 className="text-lg mb-4">Podsumowanie</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-400 mb-1">Ukończone cele</p>
            <p className="text-2xl">12</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">Aktywne cele</p>
            <p className="text-2xl">4</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">Wskaźnik sukcesu</p>
            <p className="text-2xl">85%</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">Osiągnięcia</p>
            <p className="text-2xl">18</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Goal Creator Component
function GoalCreator({ onBack }: { onBack: () => void }) {
  const [goalType, setGoalType] = useState('strength');
  const [title, setTitle] = useState('');
  const [targetValue, setTargetValue] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [deadline, setDeadline] = useState('');

  const goalTypes = [
    { id: 'strength', label: 'Siła', icon: TrendingUp, color: 'emerald' },
    { id: 'frequency', label: 'Częstotliwość', icon: Calendar, color: 'purple' },
    { id: 'cardio', label: 'Cardio', icon: Award, color: 'orange' },
    { id: 'custom', label: 'Własny', icon: Target, color: 'blue' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="text-gray-400 hover:text-white">
          ← Powrót
        </button>
        <h1 className="text-xl">Nowy cel</h1>
        <div className="w-10" />
      </div>

      {/* Goal Type Selection */}
      <div className="space-y-3">
        <label className="text-sm text-gray-400">Typ celu</label>
        <div className="grid grid-cols-2 gap-3">
          {goalTypes.map((type) => {
            const Icon = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => setGoalType(type.id)}
                className={`p-4 rounded-xl border transition-colors ${
                  goalType === type.id
                    ? 'bg-emerald-500/20 border-emerald-500/50'
                    : 'bg-[#1a1a1a] border-gray-800'
                }`}
              >
                <Icon className="w-6 h-6 mb-2" />
                <p className="text-sm">{type.label}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Goal Title */}
      <div className="space-y-2">
        <label className="text-sm text-gray-400">Nazwa celu</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="np. Zwiększ przysiad o 10kg"
          className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl px-4 py-3 text-white placeholder:text-gray-600"
        />
      </div>

      {/* Current & Target Values */}
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Wartość obecna</label>
          <input
            type="number"
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            placeholder="100"
            className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl px-4 py-3 text-white placeholder:text-gray-600"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Wartość docelowa</label>
          <input
            type="number"
            value={targetValue}
            onChange={(e) => setTargetValue(e.target.value)}
            placeholder="110"
            className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl px-4 py-3 text-white placeholder:text-gray-600"
          />
        </div>
      </div>

      {/* Deadline */}
      <div className="space-y-2">
        <label className="text-sm text-gray-400">Termin wykonania</label>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl px-4 py-3 text-white"
        />
      </div>

      {/* Suggested Goals */}
      <div className="space-y-3">
        <h3 className="text-sm text-gray-400">Sugerowane cele</h3>
        <div className="space-y-2">
          {[
            { title: 'Zwiększ przysiad o 10kg', current: 100, target: 110 },
            { title: '20 treningów w miesiącu', current: 0, target: 20 },
            { title: 'Wyciskanie 100kg', current: 85, target: 100 },
          ].map((suggestion, idx) => (
            <button
              key={idx}
              onClick={() => {
                setTitle(suggestion.title);
                setCurrentValue(suggestion.current.toString());
                setTargetValue(suggestion.target.toString());
              }}
              className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-3 text-left hover:border-emerald-500/30 transition-colors"
            >
              <p className="text-sm mb-1">{suggestion.title}</p>
              <p className="text-xs text-gray-400">
                {suggestion.current} → {suggestion.target}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Create Button */}
      <div className="pt-4">
        <button
          onClick={onBack}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl py-4 transition-colors"
        >
          Utwórz cel
        </button>
      </div>
    </div>
  );
}
