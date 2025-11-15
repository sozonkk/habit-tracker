# 🎯 FINALNA SPECYFIKACJA - Gym Workout Tracker

**Data:** 2025-11-15
**Target Start:** 2025-11-17 (za 2 dni)
**Type:** Single-user, Mobile-first Progressive Web App
**Database:** Google Sheets API

---

## ✅ ZATWIERDZONE DECYZJE

### 1. **Typ Użytkownika & Platforma**
- ✅ Single-user (tylko dla Ciebie, bez logowania)
- ✅ Mobile-first (głównie telefon na siłowni)
- ✅ Live tracking (między seriami)
- ✅ Offline mode: **Phase 2** (MVP wymaga internetu)
- ✅ PWA: **Phase 2** (najpierw standard web app)

### 2. **System Planowania**
- ✅ **Template-based** z auto-progresją (Opcja C)
- ✅ **Hybrid plan:** Planned + Substituted + FLY exercises
- ✅ **Week-over-week comparison** (pokazuje wyniki z poprzedniego tygodnia)
- ✅ **Smart progression:** Aplikacja sugeruje progresję (weight +2.5kg lub reps +1)
- ✅ Niedokończone serie pokazane jako flagowane w następnym tygodniu

### 3. **Biblioteka Ćwiczeń**
- ✅ **100 built-in ćwiczeń** (predefiniowane)
- ✅ **Kategorie:** Nogi, Ręce, Klatka, Plecy, Barki, Inne
- ✅ **Custom exercises:** Możliwość dodawania własnych (wybór kategorii)
- ✅ Wyświetlanie jako "Moje ćwiczenia" w aplikacji

### 4. **Trackowane Dane**

**Podstawowe (obowiązkowe):**
- Exercise name
- Sets
- Reps
- Weight (kg)

**Opcjonalne (ale dostępne):**
- RPE (1-10 skala)
- RIR (0-5)
- Tempo (3-0-1-0 format)
- Notes (pole tekstowe)

**Pre-workout (opcjonalne):**
- Body weight (kg) - przed treningiem, możliwość pominięcia/przepisania ostatniej

**NIE trackujemy (na razie):**
- Energy/Mood - Phase 2

**Jednostki:**
- Waga: kg
- Dystans (jeśli cardio): km

---

## 🏠 HOME SCREEN

**Sekcje (w kolejności):**

1. **Personalized Greeting**
   ```
   Hi, [Imię]! 👋
   ```

2. **Streak**
   ```
   🔥 5 workouts streak
   (nie dni, tylko treningi z rzędu)
   ```

3. **This Week Progress**
   ```
   This week: 3/4 workouts ✅✅✅⬜
   Progress bar: 75%
   ```

4. **Today's Workout**
   ```
   Today: Monday - Push Day
   4 exercises • ~60 min

   [Start Workout] ← duży button
   [View Plan]
   ```

**Bottom Navigation:**
- 🏠 Home
- 📊 Stats
- 📅 History
- ⚙️ Settings

---

## 📊 STATISTICS SCREEN

**Sekcje:**

1. **Frequency**
   ```
   This week: 4 workouts
   Avg/week (last 4 weeks): 3.5
   Total workouts: 47
   ```

2. **Personal Records**
   ```
   💪 Your PRs:
   Bench Press: 70kg (Nov 10) 🆕 NEW!
   Squat: 110kg (Nov 8)
   Deadlift: 120kg (Oct 30)

   [View All PRs]
   ```

3. **Progress dla Ćwiczenia**
   ```
   📈 Select exercise: [Bench Press ▼]

   [Line Chart: 50→55→60→65kg over 8 weeks]

   Last 8 weeks: +15kg (+30%)
   ```

4. **Workout Duration**
   ```
   ⏱️ Avg workout time: 62 min
   This week avg: 58 min
   Shortest: 45 min
   Longest: 85 min
   ```

**Alternative view:**
- Tab switch: Line Chart ↔ Bar Chart (volume per week)

---

## 🎯 GOALS SCREEN

**Możliwe cele:**

1. **Weight Target**
   ```
   Goal: Squat 120kg by Dec 31
   Current: 110kg
   Progress: 92% ━━━━━━━━━⚪
   Remaining: +10kg in 6 weeks
   ```

2. **Frequency Goal**
   ```
   Goal: Train 4×/week
   This week: 3/4 ⬜⬜⬜✅
   Last 4 weeks avg: 3.5/4 (88%)
   ```

**Actions:**
- [+ Add New Goal]
- [Edit] [Delete] per goal

---

## 🏋️ WORKOUT FLOW

### **Start Workout (Manual Select)**

```
┌─────────────────────────────────┐
│ Start a workout                 │
│                                 │
│ ○ Monday - Push Day             │ ← dzisiejszy plan (highlighted)
│   4 exercises • 60 min          │
│                                 │
│ ○ Wednesday - Pull Day          │
│   5 exercises • 70 min          │
│                                 │
│ ○ Friday - Legs                 │
│   4 exercises • 65 min          │
│                                 │
│ ─────────────────────────────── │
│ ○ Custom workout                │
│                                 │
│ [Continue]                      │
└─────────────────────────────────┘
```

### **Pre-Workout Screen**

```
┌─────────────────────────────────┐
│ Before we start...              │
│                                 │
│ Body weight (optional):         │
│ [75] kg                         │ ← last recorded, can edit
│ [Skip] [Use 75kg] [Update]      │
│                                 │
│ [Start Exercises →]             │
└─────────────────────────────────┘
```

### **During Exercise**

```
┌─────────────────────────────────────┐
│ ← Bench Press              1/4      │ ← back button, exercise 1 of 4
├─────────────────────────────────────┤
│ 📊 Last week (Nov 11):              │
│   ✅ Set 1: 8 @ 60kg                │
│   ✅ Set 2: 8 @ 60kg                │
│   ⚠️  Set 3: 7 @ 60kg                │
│   ❌ Set 4: skipped                  │
├─────────────────────────────────────┤
│ 📅 This week: 4×8 @ 62.5kg         │
│                                     │
│ ✅ Set 1: 8 @ 62.5kg               │ ← done
│                                     │
│ ⬜ Set 2: [Tap to record]          │ ← active
│    Reps: [8_____]                   │
│    Weight: [62.5] kg                │
│    ▼ Optional fields:               │
│       RPE: ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪ (1-10)    │
│       RIR: [___] (0-5)              │
│       Tempo: [3-0-1-0]              │
│       Notes: [________]             │
│                                     │
│    [✓ Save Set]                     │
│                                     │
│ ⬜ Set 3: 8 @ 62.5kg (planned)     │
│ ⬜ Set 4: 8 @ 62.5kg (planned)     │
│                                     │
│ [+ Add Extra Set] [Finish Exercise →]│
└─────────────────────────────────────┘
```

### **After Exercise - Quick Actions**

```
┌─────────────────────────────────┐
│ Bench Press completed! ✅       │
│ 4 sets done                     │
│                                 │
│ Next: Shoulder Press            │
│                                 │
│ [Continue to Next →]            │
│ [Add FLY Exercise]              │
│ [Finish Workout]                │
└─────────────────────────────────┘
```

### **FLY Exercise (Extra)**

```
┌─────────────────────────────────┐
│ Add FLY Exercise                │
│                                 │
│ Search: [cable fl____]          │
│                                 │
│ Results:                        │
│ ○ Cable Flies (Chest)           │
│ ○ Cable Crossover (Chest)       │
│                                 │
│ [Continue]                      │
└─────────────────────────────────┘
```

### **Substitution**

```
┌─────────────────────────────────┐
│ Shoulder Press (planned)        │
│                                 │
│ Equipment occupied?             │
│                                 │
│ [Do as planned]                 │
│ [Substitute exercise]           │
│ [Skip this exercise]            │
└─────────────────────────────────┘

If substitute:
→ Shows exercise picker
→ Marks original as "SUBSTITUTED"
→ Tracks new exercise with original's plan
```

### **Workout Complete**

```
┌─────────────────────────────────┐
│ 🎉 Great workout!               │
│                                 │
│ Monday - Push Day ✅            │
│                                 │
│ Duration: 58 min                │
│ Exercises: 4                    │
│ Total sets: 14                  │
│ Volume: 3,250 kg                │
│                                 │
│ 🆕 New PR: Bench Press 62.5kg! │
│                                 │
│ [View Summary] [Done]           │
└─────────────────────────────────┘
```

---

## 📅 HISTORY SCREEN

```
┌─────────────────────────────────┐
│ Workout History           🔍    │
├─────────────────────────────────┤
│ 📅 This Week                    │
│                                 │
│ ✅ Monday, Nov 11 - Push Day    │
│    4 exercises • 58 min         │
│    Volume: 3,250 kg             │
│    [View Details →]             │
│                                 │
│ ✅ Wednesday, Nov 13 - Pull     │
│    5 exercises • 68 min         │
│    Volume: 4,100 kg             │
│    [View Details →]             │
│                                 │
│ ⬜ Friday, Nov 15 - Legs        │
│    (planned)                    │
│                                 │
├─────────────────────────────────┤
│ 📅 Last Week (Nov 4-10)         │
│                                 │
│ ✅ Monday - Push (4 ex)         │
│ ✅ Wednesday - Pull (5 ex)      │
│ ✅ Friday - Legs (4 ex)         │
│ ✅ Sunday - Push (4 ex)         │
│                                 │
│ [View More ↓]                   │
└─────────────────────────────────┘
```

**Workout Detail View:**
```
┌─────────────────────────────────┐
│ ← Monday, Nov 11 - Push Day     │
├─────────────────────────────────┤
│ Duration: 58 min                │
│ Total Volume: 3,250 kg          │
│ Body Weight: 75kg               │
│                                 │
│ ✅ Bench Press                  │
│    Set 1: 8 @ 62.5kg RPE 7     │
│    Set 2: 8 @ 62.5kg RPE 8     │
│    Set 3: 8 @ 62.5kg RPE 9     │
│    Set 4: 8 @ 62.5kg RPE 9     │
│                                 │
│ ✅ Shoulder Press               │
│    Set 1: 10 @ 30kg            │
│    ...                          │
│                                 │
│ [Edit Workout] [Delete]         │
└─────────────────────────────────┘
```

---

## ⚙️ SETTINGS / TEMPLATES SCREEN

### **Weekly Template Management**

```
┌─────────────────────────────────┐
│ Weekly Template                 │
├─────────────────────────────────┤
│ Monday - Push Day               │
│   • Bench Press: 4×8            │
│   • Shoulder Press: 3×10        │
│   • Tricep Dips: 3×12           │
│   • Cable Flies: 3×15           │
│   [Edit]                        │
│                                 │
│ Wednesday - Pull Day            │
│   • Deadlift: 4×6               │
│   • Pull-ups: 3×10              │
│   • Barbell Row: 4×8            │
│   • Bicep Curl: 3×12            │
│   • Face Pulls: 3×15            │
│   [Edit]                        │
│                                 │
│ Friday - Legs                   │
│   • Squat: 4×8                  │
│   • Leg Press: 3×12             │
│   • Leg Curl: 3×12              │
│   • Calf Raises: 4×15           │
│   [Edit]                        │
│                                 │
│ Sunday - Push Day (repeat)      │
│   [Copy from Monday]            │
│                                 │
│ ─────────────────────────────── │
│ [+ Add Training Day]            │
│ [Reset Template]                │
└─────────────────────────────────┘
```

### **Exercise Library**

```
┌─────────────────────────────────┐
│ My Exercises              [+]   │ ← add custom
├─────────────────────────────────┤
│ 🔍 Search: [________]           │
│                                 │
│ Filter: [All ▼] [Category ▼]   │
│                                 │
│ 🏋️ Klatka (25)                 │
│   • Bench Press (Barbell) 🔒   │
│   • Bench Press (Dumbbell) 🔒  │
│   • Cable Flies 🔒              │
│   • Cable Crossover 21s ✏️     │ ← custom
│                                 │
│ 🦵 Nogi (18)                    │
│   • Squat (Barbell) 🔒          │
│   • Leg Press 🔒                │
│   ...                           │
│                                 │
│ 💪 Ręce (22)                    │
│ 🔙 Plecy (20)                   │
│ 💪 Barki (15)                   │
│ 📦 Inne (10)                    │
│                                 │
│ 🔒 = Built-in                   │
│ ✏️ = Your custom                │
└─────────────────────────────────┘
```

### **Profile Settings**

```
┌─────────────────────────────────┐
│ Profile                         │
├─────────────────────────────────┤
│ Name: [Wojtek_______]           │
│                                 │
│ Preferred Units:                │
│   Weight: ● kg  ○ lbs           │
│   Distance: ● km  ○ miles       │
│                                 │
│ Auto-Progression:               │
│   ● Enabled (suggest +2.5kg)    │
│   ○ Disabled (manual)           │
│                                 │
│ Week Starts On:                 │
│   [Monday ▼]                    │
│                                 │
│ [Save Changes]                  │
└─────────────────────────────────┘
```

---

## 📊 GOOGLE SHEETS STRUCTURE

### **Single Sheet: "GymTracker"**

**Kolumny:**

```
A: ID (auto-increment)
B: Timestamp (2025-11-15 10:45:23)
C: Date (2025-11-15)
D: Week_Number (1, 2, 3...)
E: Day_Name (Monday, Wednesday, Friday)
F: Workout_Type (Push Day, Pull Day, Legs)
G: Entry_Type (PLANNED / COMPLETED / SUBSTITUTED / FLY)
H: Exercise_Name (Bench Press)
I: Exercise_Category (Klatka, Nogi, etc.)
J: Set_Number (1, 2, 3, 4)
K: Reps_Planned (8)
L: Reps_Done (8)
M: Weight_Planned_kg (60)
N: Weight_Done_kg (62.5)
O: RPE (7, optional)
P: RIR (2, optional)
Q: Tempo (3-0-1-0, optional)
R: Notes (text, optional)
S: Status (TODO / COMPLETED / PARTIAL / SKIPPED)
T: Body_Weight_kg (75, once per workout)
U: Workout_Duration_min (58, once per workout)
V: Created_At (timestamp)
W: Updated_At (timestamp)
```

**Przykładowe dane:**

```
| ID | Timestamp           | Date       | Week | Day | Workout  | Type      | Exercise      | Category | Set | R_Plan | R_Done | W_Plan | W_Done | RPE | RIR | Tempo    | Notes | Status    | BW | Duration |
|----|---------------------|------------|------|-----|----------|-----------|---------------|----------|-----|--------|--------|--------|--------|-----|-----|----------|-------|-----------|----|---------:|
| 1  | 2025-11-11 10:45:00 | 2025-11-11 | 1    | Mon | Push Day | PLANNED   | Bench Press   | Klatka   | 1   | 8      | 8      | 60     | 60     | 7   | 2   | 3-0-1-0  |       | COMPLETED | 75 | 58       |
| 2  | 2025-11-11 10:47:00 | 2025-11-11 | 1    | Mon | Push Day | PLANNED   | Bench Press   | Klatka   | 2   | 8      | 8      | 60     | 60     | 8   | 1   | 3-0-1-0  |       | COMPLETED | 75 | 58       |
| 3  | 2025-11-11 10:50:00 | 2025-11-11 | 1    | Mon | Push Day | PLANNED   | Bench Press   | Klatka   | 3   | 8      | 7      | 60     | 60     | 9   | 0   | 3-0-1-0  | Hard! | PARTIAL   | 75 | 58       |
| 4  | 2025-11-11 10:51:00 | 2025-11-11 | 1    | Mon | Push Day | PLANNED   | Bench Press   | Klatka   | 4   | 8      | -      | 60     | -      | -   | -   | -        |       | SKIPPED   | 75 | 58       |
| 5  | 2025-11-11 11:15:00 | 2025-11-11 | 1    | Mon | Push Day | FLY       | Cable Flies   | Klatka   | 1   | -      | 12     | -      | 20     | 6   | 3   | 2-0-1-0  |       | COMPLETED | 75 | 58       |
| 6  | 2025-11-18 10:45:00 | 2025-11-18 | 2    | Mon | Push Day | PLANNED   | Bench Press   | Klatka   | 1   | 8      | -      | 62.5   | -      | -   | -   | -        |       | TODO      | -  | -        |
```

**Dla AI Assistant:**
- Filtrowanie: `Entry_Type = PLANNED` → główny plan treningowy
- Filtrowanie: `Status = COMPLETED` → faktycznie wykonane
- Filtrowanie: `Entry_Type = FLY` → dodatkowe ćwiczenia
- Analiza postępów: `Weight_Done_kg` over time dla każdego `Exercise_Name`
- Streak calculation: liczba unikalnych `Date` z `Status != SKIPPED`

---

## 🚀 MVP FEATURES - FINALNA LISTA

### **MUST-HAVE (Phase 1 - Week 1-2)**

1. ✅ **Tworzenie tygodniowego szablonu treningowego**
   - Wybór dnia (Mon-Sun)
   - Dodawanie ćwiczeń (z biblioteki built-in)
   - Ustawienie sets × reps
   - Zapisanie jako szablon

2. ✅ **Auto-kopiowanie planu z progresją**
   - Week-over-week kopiowanie
   - Smart progression (jeśli 4×8 ✅ → suggest +2.5kg)
   - Manual adjust przed tygodniem (opcjonalne)

3. ✅ **Start workout z dzisiejszego planu**
   - Manual select workout screen
   - Pre-workout: body weight (optional)
   - Przejście do exercises flow

4. ✅ **Wykonywanie serii z trackowaniem**
   - Reps, Weight (required)
   - RPE, RIR, Tempo, Notes (optional)
   - Save set button
   - Progress indicator (Set 1/4)

5. ✅ **Week-over-week comparison**
   - Pokazuje wyniki z poprzedniego tygodnia
   - Dla każdego ćwiczenia osobno
   - Flaguje niedokończone serie (⚠️ Set 3: 7 @ 60kg)

6. ✅ **Google Sheets sync (real-time)**
   - Zapis każdego setu od razu do Sheets
   - Single sheet structure (z kolumną Type)
   - Wymaga internetu (offline mode = Phase 2)

7. ✅ **Historia treningów**
   - Lista wykonanych workouts (grupowanie po tygodniach)
   - Workout detail view
   - Możliwość edycji/usuwania

8. ✅ **FLY exercises**
   - Dodawanie extra ćwiczeń podczas treningu
   - Search w bibliotece
   - Tracking jako Type = FLY

9. ✅ **Substitution**
   - Zamiana ćwiczenia (sprzęt zajęty)
   - Tracking jako Type = SUBSTITUTED
   - Plan oryginalny nie zmienia się

10. ✅ **Custom exercises**
    - Dodawanie własnych ćwiczeń
    - Wybór kategorii
    - Wyświetlanie jako "Moje ćwiczenia"

### **SHOULD-HAVE (Phase 1 - Week 2)**

11. ✅ **Home Screen Dashboard**
    - Personalized greeting
    - Streak (workout streak, nie dni)
    - This week progress
    - Today's workout card

12. ✅ **Statistics Screen**
    - Frequency stats
    - Personal Records (PRs)
    - Progress chart (line/bar)
    - Workout duration

13. ✅ **Goals**
    - Weight target (X kg w ćwiczeniu)
    - Frequency goal (X workouts/week)
    - Progress tracking

14. ✅ **Built-in Exercise Library**
    - 100 popularnych ćwiczeń
    - Kategorie (nogi, ręce, klatka, plecy, barki, inne)
    - Search & filter

### **PHASE 2 (Po MVP)**

- ⏳ PWA (offline mode, install icon)
- ⏳ Notifications (workout reminders)
- ⏳ Energy/Mood tracking
- ⏳ Advanced charts (heatmap, muscle distribution)
- ⏳ Export/share workouts
- ⏳ AI Assistant integration (Claude API analyzing Sheets data)

---

## 🛠️ TECH STACK

### **Frontend**
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Charts:** Recharts
- **Forms:** react-hook-form + zod validation
- **State:** React Context (lub Zustand jeśli potrzeba)
- **Date handling:** date-fns

### **Backend**
- **API:** Next.js API Routes
- **Database:** Google Sheets API
- **Auth:** Service Account (single-user, no OAuth needed)

### **Hosting & Deploy**
- **Hosting:** Vercel (darmowe tier)
- **Domain:** (opcjonalnie własna domena)
- **CI/CD:** Vercel auto-deploy z GitHub

### **Development Tools**
- **Package Manager:** pnpm
- **Version Control:** Git + GitHub
- **Code Quality:** ESLint + Prettier
- **Testing:** (opcjonalnie Vitest dla critical logic)

---

## 📅 DEVELOPMENT TIMELINE

### **Target Start:** 2025-11-17 (za 2 dni)

**Realistyczna ocena:** MVP z tymi funkcjami to **10-14 dni pracy** (nie 2 dni!)

### **Proposed Timeline:**

#### **Week 1 (Nov 17-23): Core Foundation**

**Day 1-2: Setup & Infrastructure**
- [ ] Next.js project setup
- [ ] Google Sheets API integration & testing
- [ ] Basic routing structure
- [ ] shadcn/ui setup
- [ ] Database schema w Sheets (create sheet, test CRUD)

**Day 3-4: Exercise Library & Template Builder**
- [ ] Built-in exercises seeding (100 exercises)
- [ ] Exercise library UI (category filtering, search)
- [ ] Add custom exercise flow
- [ ] Weekly template creator UI
- [ ] Save template to Sheets

**Day 5-7: Workout Execution Flow**
- [ ] Start workout screen (manual select)
- [ ] Pre-workout (body weight)
- [ ] Exercise execution UI
- [ ] Set tracking (reps, weight, RPE, RIR, tempo, notes)
- [ ] Week-over-week comparison display
- [ ] Save sets to Sheets (real-time)

#### **Week 2 (Nov 24-30): Features & Polish**

**Day 8-9: FLY & Substitution**
- [ ] FLY exercise flow
- [ ] Substitution flow
- [ ] Workout completion screen
- [ ] Workout summary

**Day 10-11: History & Dashboard**
- [ ] History screen (list workouts)
- [ ] Workout detail view
- [ ] Home screen dashboard (greeting, streak, today's workout)
- [ ] Calculate streak logic

**Day 12-13: Stats & Goals**
- [ ] Statistics screen (frequency, PRs, duration)
- [ ] Progress charts (line/bar)
- [ ] Goals CRUD (create, track, update)
- [ ] PR detection & celebration

**Day 14: Testing & Deploy**
- [ ] End-to-end testing (manual)
- [ ] Fix bugs
- [ ] Deploy to Vercel
- [ ] Google Sheets permissions setup
- [ ] **🚀 GO LIVE!**

---

## ⚠️ IMPORTANT NOTES

### **Google Sheets API Setup (must do before Day 1)**

1. **Create Google Cloud Project:**
   - Go to: https://console.cloud.google.com/
   - Create new project: "GymTrackerApp"

2. **Enable Google Sheets API:**
   - APIs & Services → Enable APIs
   - Search "Google Sheets API" → Enable

3. **Create Service Account:**
   - IAM & Admin → Service Accounts
   - Create service account
   - Download JSON key file

4. **Create Google Sheet:**
   - Create new Sheet: "GymTracker"
   - Share with service account email (from JSON)
   - Give Editor permissions

5. **Test Connection:**
   - Use service account to read/write test data

**Czy masz już Google Cloud account?** Jeśli nie, mogę Ci pomóc z setup.

---

## 🎯 NEXT STEPS

### **Option A: Start Development NOW (fast track)**
Jeśli chcesz zacząć za 2 dni (17 Nov), muszę:
1. Setup projektu dzisiaj/jutro
2. Google Sheets API test jutro
3. Ty instalujesz i testujesz lokalnie w niedzielę
4. Buduję MVP przez następne 2 tygodnie
5. Oddaję working app ~30 Nov

### **Option B: Design First (recommended)**
Przed kodem robimy:
1. **Mockupy UI** (Figma/sketches) - 1-2 dni
2. **Color palette & design system** - pół dnia
3. Wtedy zaczynam kodować z jasną wizją
4. Trochę dłużej (start 19-20 Nov), ale lepszy rezultat

### **Option C: Iterative MVP**
1. **Ultra-MVP** za 2 dni (tylko add workout + Sheets sync)
2. Testujesz, dajesz feedback
3. Dodaję features co 2-3 dni
4. Po 2 tygodniach mamy full MVP

**Którą opcję wybierasz?**

---

## ❓ OSTATNIE PYTANIA

1. **Timeline:** Czy rozumiesz że pełny MVP to 2 tygodnie pracy, nie 2 dni? Która opcja (A/B/C)?

2. **Google Sheets:** Masz już Google Cloud account? Potrzebuję pomocy z setupem?

3. **Imię:** Jak masz na imię? (do personalized greeting "Hi, X")

4. **Design:** Chcesz mockupy przed kodem (Opcja B), czy od razu kodujemy?

5. **Testowanie:** Będziesz testował lokalnie (npm run dev) czy potrzebujesz live URL od razu?

Odpowiedz na te 5 pytań, to ruszamy! 🚀
