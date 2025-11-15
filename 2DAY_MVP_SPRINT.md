# 🚀 2-DAY MVP SPRINT - Action Plan

**Goal:** Working workout tracker w 2 dni
**User:** Bartek
**Start:** 2025-11-15 (TERAZ)
**Deadline:** 2025-11-17 EOD

---

## ⚡ ULTRA-LEAN MVP SCOPE

### ✅ WHAT'S IN:
1. Add workout manually (exercise, sets, reps, weight)
2. Google Sheets sync (real-time save)
3. History (list of workouts)
4. Home screen (Hi Bartek, quick add button)
5. 100 built-in exercises (hardcoded)
6. Dark theme, mobile-first

### ❌ WHAT'S OUT (Phase 2):
- Template builder
- Smart progression
- Week-over-week comparison
- Stats/charts/goals
- FLY/Substitution
- Custom exercises
- RPE/RIR/Tempo
- Offline mode

---

## 📅 DAY-BY-DAY BREAKDOWN

### **DAY 1 (Nov 15-16): DESIGN SYSTEM + STATIC UI**

#### Morning (4h):
- [x] Next.js 14 setup
- [x] Tailwind + shadcn/ui config
- [x] Design tokens (colors, fonts)
- [x] Base layout (navigation)
- [x] Deploy to Vercel (empty app)

#### Afternoon (4h):
- [ ] Home screen (static)
- [ ] Add workout form (static)
- [ ] History list (static, mock data)
- [ ] Exercise picker component
- [ ] Mobile responsive check

#### Evening (2h):
- [ ] Polish UI
- [ ] Dark theme perfection
- [ ] Deploy → Bartek can click around

**Deliverable:** Beautiful UI, no backend, mock data

---

### **DAY 2 (Nov 17): GOOGLE SHEETS + LOGIC**

#### Morning (3h):
- [ ] Google Cloud setup (with Bartek)
  - Create project
  - Enable Sheets API
  - Service Account + JSON key
  - Create Sheet + share with SA
- [ ] Test connection (read/write)

#### Afternoon (4h):
- [ ] Add workout → save to Sheets
- [ ] History → read from Sheets
- [ ] Delete workout
- [ ] Loading states
- [ ] Error handling

#### Evening (2h):
- [ ] Bug fixes
- [ ] Final testing
- [ ] Deploy to Vercel
- [ ] 🎉 **MVP DONE!**

**Deliverable:** Working app - add workouts, see history, all in Sheets

---

## 🛠️ TECH STACK (simplified)

**Frontend:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui (Button, Input, Select, Card)
- date-fns (dates)

**Backend:**
- Next.js API Routes
- Google Sheets API (googleapis package)
- Service Account auth

**Hosting:**
- Vercel (auto-deploy from GitHub)
- Branch: `claude/gym-workout-tracker-app-01TwQQnhAJCv3S1EPdQC1MVr`

**No extras:**
- ❌ No state management (React useState enough)
- ❌ No form library (native inputs)
- ❌ No charts (Phase 2)
- ❌ No PWA (Phase 2)

---

## 📊 GOOGLE SHEETS STRUCTURE (simplified)

**Single sheet: "Workouts"**

Columns:
```
A: ID
B: Timestamp
C: Date (YYYY-MM-DD)
D: Exercise
E: Set_Number
F: Reps
G: Weight_kg
H: Notes
```

Example data:
```
| ID | Timestamp           | Date       | Exercise    | Set | Reps | Weight | Notes |
|----|---------------------|------------|-------------|-----|------|--------|-------|
| 1  | 2025-11-15 10:45:00 | 2025-11-15 | Bench Press | 1   | 10   | 60     | Good  |
| 2  | 2025-11-15 10:47:00 | 2025-11-15 | Bench Press | 2   | 10   | 60     |       |
| 3  | 2025-11-15 10:50:00 | 2025-11-15 | Squat       | 1   | 8    | 100    |       |
```

**Later można rozbudować o więcej kolumn (RPE, RIR, etc.)**

---

## 🎨 DESIGN SYSTEM (Quick Reference)

**Colors:**
```
Background: #0A0A0A (almost black)
Card: #1A1A1A (dark gray)
Border: #2A2A2A (lighter gray)
Text: #FFFFFF (white)
Muted: #A0A0A0 (gray)
Primary: #3B82F6 (blue)
Success: #10B981 (green)
Warning: #F59E0B (orange)
Danger: #EF4444 (red)
```

**Typography:**
- Font: System font stack (fast loading)
- Heading: 24px bold
- Body: 16px regular
- Small: 14px regular

**Spacing:**
- Mobile padding: 16px
- Card gap: 12px
- Section gap: 24px

**Components (shadcn/ui):**
- Button (primary, secondary, ghost)
- Input (text, number)
- Select (dropdown)
- Card
- Badge

---

## 📱 SCREENS (MVP only)

### 1. Home Screen
```
┌─────────────────────────────────┐
│ Hi, Bartek! 👋                  │
│                                 │
│ [+ Add Workout] ← big button    │
│                                 │
│ Recent Workouts:                │
│ ┌─────────────────────────────┐ │
│ │ Nov 15 - Bench Press        │ │
│ │ 3 sets • 60 kg              │ │
│ └─────────────────────────────┘ │
│                                 │
│ [View All →]                    │
└─────────────────────────────────┘
  🏠 Home    📋 History
```

### 2. Add Workout
```
┌─────────────────────────────────┐
│ ← Add Workout                   │
│                                 │
│ Exercise:                       │
│ [Bench Press          ▼]        │
│                                 │
│ Sets: [3]                       │
│ Reps: [10]                      │
│ Weight (kg): [60]               │
│                                 │
│ Notes (optional):               │
│ [...........................]   │
│                                 │
│ [Save Workout]                  │
└─────────────────────────────────┘
```

### 3. History
```
┌─────────────────────────────────┐
│ Workout History                 │
│                                 │
│ Nov 15, 2025                    │
│ ┌─────────────────────────────┐ │
│ │ Bench Press                 │ │
│ │ Set 1: 10 @ 60kg            │ │
│ │ Set 2: 10 @ 60kg            │ │
│ │ Set 3: 8 @ 60kg             │ │
│ │                         [×] │ │ ← delete
│ └─────────────────────────────┘ │
│                                 │
│ Nov 13, 2025                    │
│ ┌─────────────────────────────┐ │
│ │ Squat • 4 sets • 100kg      │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
  🏠 Home    📋 History
```

---

## 🔑 GOOGLE SHEETS SETUP (będziemy robić razem)

### Step 1: Google Cloud Console
1. Go to: https://console.cloud.google.com/
2. Create project: "GymTrackerMVP"
3. Enable "Google Sheets API"

### Step 2: Service Account
1. Create service account: "gym-tracker-sa"
2. Download JSON key
3. Save as `service-account-key.json` (DON'T commit to git!)

### Step 3: Google Sheet
1. Create new sheet: "GymTrackerData"
2. Share with service account email (from JSON)
3. Give "Editor" permissions
4. Copy sheet ID from URL

### Step 4: Environment Variables
```
GOOGLE_SHEET_ID=your_sheet_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=...
GOOGLE_PRIVATE_KEY=...
```

**Zrobimy to jutro razem krok po kroku!**

---

## ✅ SUCCESS CRITERIA

**End of Day 2, aplikacja musi:**
1. ✅ Wyświetlić "Hi, Bartek!"
2. ✅ Formularz dodawania treningu (exercise, sets, reps, weight)
3. ✅ Zapisać dane do Google Sheets
4. ✅ Pokazać historię z Google Sheets
5. ✅ Działać na telefonie (responsive)
6. ✅ Być deployed na Vercel (live URL)

**Nie musi (Phase 2):**
- ❌ Planowanie tygodniowe
- ❌ Progresja
- ❌ Statystyki
- ❌ Wykresy

---

## 🚨 RISKS & MITIGATION

**Risk 1: Google Sheets API setup zbyt długi**
- Mitigation: Robię tutorial w advance, testujemy razem w 30 min

**Risk 2: Zbyt dużo funkcji, nie zdążymy**
- Mitigation: Ultra-lean scope (3 screeny, basic CRUD)

**Risk 3: Bugs w deploymencie**
- Mitigation: Deploy early Day 1 (catch issues wcześnie)

**Risk 4: Mobile UI nie działa**
- Mitigation: Tailwind mobile-first, testujemy na telefonie na bieżąco

---

## 📞 COMMUNICATION

**Daily syncs:**
- Morning: Plan dnia (co robię dziś)
- Evening: Demo + feedback (co zrobiłem, co dalej)

**Questions & blockers:**
- Pytam jak nie wiem (nie zakładam!)
- Pokazuję progress co 2-3h (screenshots)

---

## 🎯 NEXT IMMEDIATE STEPS

1. **TERAZ:** Setup Next.js projektu
2. **Za 1h:** Deploy pustej apki na Vercel
3. **Za 2h:** Pierwszy screen (Home) static
4. **Jutro rano:** Google Sheets setup z Tobą
5. **Jutro wieczór:** 🎉 Working MVP!

---

## 💪 LET'S GO!

**Timeline jest agresywny, ale DOABLE jeśli:**
- Zero feature creep (tylko MVP scope!)
- Szybkie decyzje (nie perfect, just working)
- Współpraca na Sheets setup (30 min razem)
- Testujesz na bieżąco (feedback szybko)

**Bartek, jesteś gotowy na sprint?** 🚀

Starting in 3... 2... 1... GO! 🔥
