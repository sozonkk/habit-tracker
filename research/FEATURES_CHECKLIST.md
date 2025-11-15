# ✅ Checklist Funkcji - Gym Workout Tracker

## 🎯 MUST-HAVE (MVP - Week 1)

### Core Functionality:
- [ ] **Quick Add Workout**
  - Wybór ćwiczenia (dropdown/autocomplete)
  - Serie, Powtórzenia, Ciężar
  - Opcjonalne: Notatki
  - Auto-save do Google Sheets

- [ ] **Historia Treningów**
  - Lista ostatnich treningów (grupowanie po dniach)
  - Możliwość edycji
  - Możliwość usunięcia
  - "Repeat last workout" button

- [ ] **Google Sheets Integration**
  - API setup
  - Auto-sync każdego treningu
  - Struktura: Date | Exercise | Sets | Reps | Weight | Notes

### UI/Navigation:
- [ ] **Home Screen**
  - Quick stats (last workout date, streak)
  - FAB (Floating Action Button) - "Add Workout"
  - Recent workouts preview

- [ ] **Bottom Navigation**
  - Home
  - Workouts (history)
  - Stats
  - Profile/Settings

---

## 📊 SHOULD-HAVE (Week 2-3)

### Analytics & Insights:
- [ ] **Proste Statystyki**
  - Wykres postępów dla wybranego ćwiczenia
  - Total workouts this week/month
  - Volume per muscle group

- [ ] **Streak Tracking**
  - Licznik dni z rzędu
  - Kalendarz z zaznaczonymi dniami
  - Streak achievements/badges

- [ ] **Progress Charts**
  - Line chart: ciężar w czasie dla ćwiczenia
  - Bar chart: treningi per tydzień
  - Pie chart: rozkład grup mięśniowych

### UX Improvements:
- [ ] **Szablony Treningów**
  - Zapisane workout plans (Push Day, Leg Day, etc.)
  - Quick start z szablonu
  - Edycja przed rozpoczęciem

- [ ] **Rest Timer**
  - Countdown timer (30s, 60s, 90s, custom)
  - Sound notification
  - Auto-start po zapisaniu serii

- [ ] **PWA Support**
  - Manifest.json
  - Service Worker
  - Offline mode
  - Install prompt

---

## 🌟 NICE-TO-HAVE (Week 4+)

### Advanced Features:
- [ ] **Biblioteka Ćwiczeń**
  - Lista wszystkich ćwiczeń
  - Ikony + opisy
  - Filtrowanie po muscle group
  - Custom ćwiczenia (user-created)

- [ ] **Muscle Group Visualization**
  - Wizualizacja ciała (jak Peloton)
  - Highlight aktywnych mięśni
  - Interactive selection

- [ ] **Personalization**
  - User profile (name, goals, etc.)
  - Personalized greetings
  - Custom preferences (units: kg/lbs, timer defaults)

- [ ] **AI Coaching (Future)**
  - Claude API integration
  - Analiza postępów
  - Sugestie treningów
  - Form tips

### Social & Sharing:
- [ ] **Export Options**
  - PDF report
  - CSV export
  - Share workout to social media

- [ ] **Multi-user Support**
  - Authentication (NextAuth)
  - User accounts
  - Private workouts

---

## 🎨 UI/UX COMPONENTS

### Design System:
- [ ] **Color Palette**
  - Primary: #3B82F6 (blue)
  - Success: #10B981 (green)
  - Warning: #F59E0B (orange)
  - Error: #EF4444 (red)
  - Background: #0F0F0F (dark)
  - Card: #1A1A1A (darker gray)
  - Text: #FFFFFF (white)
  - Muted: #6B7280 (gray)

- [ ] **Components** (shadcn/ui):
  - Button (primary, secondary, ghost)
  - Input (text, number, select)
  - Card
  - Dialog/Modal
  - Dropdown
  - Toast notifications
  - Progress bars/rings
  - Charts (Recharts)

- [ ] **Layout Patterns**:
  - Card-based design
  - Bottom navigation (fixed)
  - FAB (Floating Action Button)
  - Horizontal scroll for chips/filters
  - Skeleton loaders
  - Pull to refresh

---

## 📐 Screens Mockup Checklist

### Screen 1: Home
```
┌─────────────────────────┐
│ 👤 Hi, Name        🔔   │
│                         │
│ ┌─────────────────────┐ │
│ │ Today's Activity    │ │
│ │ 🔥 5 day streak     │ │
│ │ 💪 3 workouts/week  │ │
│ └─────────────────────┘ │
│                         │
│ Recent Workouts         │
│ ┌─────────────────────┐ │
│ │ Nov 15 - Chest Day  │ │
│ │ Bench Press 3x10    │ │
│ └─────────────────────┘ │
│                         │
│         [+] FAB         │
└─────────────────────────┘
   Home  Workouts  Stats
```

### Screen 2: Add Workout
```
┌─────────────────────────┐
│ ← Add Workout      Save │
│                         │
│ Exercise:               │
│ [Bench Press       ▼]   │
│                         │
│ Sets:                   │
│ [3]                     │
│                         │
│ Reps:                   │
│ [10]                    │
│                         │
│ Weight (kg):            │
│ [60]                    │
│                         │
│ Notes (optional):       │
│ [...................]   │
│                         │
│    [Save Workout]       │
└─────────────────────────┘
```

### Screen 3: Workout History
```
┌─────────────────────────┐
│ Workout History    🔍   │
│                         │
│ Today, Nov 15           │
│ ┌─────────────────────┐ │
│ │ Bench Press         │ │
│ │ 3 sets × 10 reps    │ │
│ │ 60 kg           [⋮] │ │
│ └─────────────────────┘ │
│                         │
│ Yesterday, Nov 14       │
│ ┌─────────────────────┐ │
│ │ Squat               │ │
│ │ 4 sets × 8 reps     │ │
│ │ 100 kg          [⋮] │ │
│ └─────────────────────┘ │
└─────────────────────────┘
   Home  Workouts  Stats
```

### Screen 4: Stats
```
┌─────────────────────────┐
│ Statistics         ⚙️   │
│                         │
│ This Week               │
│ ┌─────────────────────┐ │
│ │  ╭──────╮            │ │
│ │  │ 75%  │            │ │
│ │  ╰──────╯            │ │
│ │  5/7 days           │ │
│ └─────────────────────┘ │
│                         │
│ Progress: Bench Press   │
│ ┌─────────────────────┐ │
│ │    ╱‾‾‾╲            │ │
│ │  ╱      ╲___        │ │
│ │ 40→50→55→60 kg      │ │
│ └─────────────────────┘ │
└─────────────────────────┘
   Home  Workouts  Stats
```

---

## 🔧 Technical Setup Checklist

### Development Environment:
- [ ] Node.js 18+ installed
- [ ] Git repository initialized
- [ ] VS Code + extensions (Prettier, ESLint, Tailwind IntelliSense)

### Project Setup:
- [ ] `npx create-next-app@latest` (TypeScript, Tailwind, App Router)
- [ ] Install dependencies:
  - `shadcn/ui` (UI components)
  - `recharts` (charts)
  - `next-pwa` (PWA support)
  - `date-fns` (date handling)
  - `zod` (validation)
  - `react-hook-form` (forms)

### Google Sheets API:
- [ ] Google Cloud Project created
- [ ] Google Sheets API enabled
- [ ] Service Account credentials downloaded
- [ ] Share Sheet with service account email
- [ ] Test connection

### Deployment:
- [ ] Vercel account
- [ ] Connect GitHub repo
- [ ] Environment variables set
- [ ] Custom domain (optional)

---

## 📝 Data Models

### Workout Entry:
```typescript
interface WorkoutEntry {
  id: string
  date: Date
  exercise: string
  sets: number
  reps: number
  weight: number
  unit: 'kg' | 'lbs'
  notes?: string
  duration?: number // minutes
  createdAt: Date
  updatedAt: Date
}
```

### Exercise:
```typescript
interface Exercise {
  id: string
  name: string
  category: 'Strength' | 'Cardio' | 'Flexibility'
  muscleGroups: string[] // ['Chest', 'Triceps']
  description?: string
  iconUrl?: string
}
```

### Template:
```typescript
interface WorkoutTemplate {
  id: string
  name: string
  exercises: {
    exerciseId: string
    sets: number
    reps: number
    weight?: number
  }[]
  createdAt: Date
}
```

---

## 🚀 Ready to Build?

**Priorytet funkcji dla MVP:**
1. ✅ Google Sheets integration
2. ✅ Add workout form
3. ✅ Workout history
4. ✅ Basic navigation
5. ✅ Dark mode UI

**Nice-to-have dla MVP:**
- Rest timer
- Quick repeat workout
- Simple stats (count, streak)

**Możemy odkładać na później:**
- Templates
- Advanced charts
- AI coaching
- Social features
