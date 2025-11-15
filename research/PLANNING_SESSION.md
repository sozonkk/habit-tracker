# 📋 Sesja Planowania - Gym Workout Tracker

## 🎯 CEL APLIKACJI

**Problem do rozwiązania:**
Potrzebujesz śledzić treningi siłowe (ćwiczenia, serie, powtórzenia, ciężar) żeby:
1. Mieć bazę wiedzy dla AI asystenta (później)
2. Widzieć postępy w czasie
3. Nie musieć pamiętać co robiłeś ostatnio

**Użytkownik:** Ty (single user lub multi-user?)
**Platforma:** PWA (działa na telefonie jak aplikacja)
**Baza danych:** Google Sheets

---

## ❓ PYTANIA DO USTALENIA

### 1. Podstawowe założenia

**Q1: Single-user czy multi-user?**
- [ ] Single user (tylko dla Ciebie, bez logowania)
- [ ] Multi-user (konta, logowanie, każdy ma swoje dane)

**Q2: Gdzie głównie będziesz używał aplikacji?**
- [ ] Głównie na telefonie (na siłowni)
- [ ] Głównie na komputerze (w domu po treningu)
- [ ] 50/50 (telefon + komputer)

**Q3: Kiedy będziesz wpisywał dane?**
- [ ] Na żywo podczas treningu (między seriami)
- [ ] Po treningu (retrospektywnie)
- [ ] Oba przypadki

**Dlaczego to ważne?**
Jeśli wpisujesz na żywo → priorytet na szybkość, duże przyciski, timer
Jeśli po treningu → priorytet na batch input, import danych

---

### 2. Google Sheets - Szczegóły integracji

**Q4: Masz już Google Sheets przygotowany?**
- [ ] Tak, mam już sheet z danymi
- [ ] Nie, zaczynamy od zera

**Q5: Struktura danych w Google Sheets - którą opcję preferujesz?**

**Opcja A: Jeden sheet "Workouts" - wszystko w jednym miejscu**
```
| Timestamp  | Date       | Exercise    | Sets | Reps | Weight | Unit | Notes        |
|------------|------------|-------------|------|------|--------|------|--------------|
| 10:45      | 2025-11-15 | Bench Press | 3    | 10   | 60     | kg   | Felt strong  |
| 10:58      | 2025-11-15 | Squat       | 4    | 8    | 100    | kg   |              |
```

**Opcja B: Dwa sheety - oddzielne workouts i exercises**
```
Sheet "Workouts":
| ID | Date       | Exercise_ID | Sets | Reps | Weight | Unit | Notes |
|----|------------|-------------|------|------|--------|------|-------|
| 1  | 2025-11-15 | BP001       | 3    | 10   | 60     | kg   | ...   |

Sheet "Exercises":
| ID    | Name        | Category | Muscle_Group    |
|-------|-------------|----------|-----------------|
| BP001 | Bench Press | Strength | Chest, Triceps  |
```

**Opcja C: Trzy sheety - dodajemy templates**
```
+ Sheet "Templates":
| Template_Name | Exercises                    |
|---------------|------------------------------|
| Push Day      | BP001, SP001, TC001          |
```

**Którą opcję wybierasz?** (A/B/C)

**Q6: Chcesz trackować dodatkowe rzeczy?**
- [ ] RPE (Rate of Perceived Exertion) - 1-10 jak trudne było
- [ ] Tempo (3-0-1-0 format)
- [ ] Rest time między seriami
- [ ] Duration całego treningu
- [ ] Body weight (waga ciała przed treningiem)
- [ ] Mood/energy przed treningiem
- [ ] Inne: ___________

---

### 3. Funkcje - MVP vs Future

**Przejdźmy przez każdą funkcję i zdecydujmy:**

#### CORE FEATURES (Bez tego aplikacja nie ma sensu)

**✅ 1. Dodawanie treningu**
```
Podstawowy flow:
1. Klikasz "+" (FAB button)
2. Wybierasz ćwiczenie z listy
3. Wpisujesz: serie, powtórzenia, ciężar
4. Klikasz "Save" → trafia do Google Sheets

Pytania:
```
- **Q7:** Czy chcesz móc dodać kilka ćwiczeń na raz (jak cały trening), czy jedno po drugim?
  - [ ] Jedno po drugim (prostsze)
  - [ ] Batch add - cały trening na raz

- **Q8:** Lista ćwiczeń - skąd się bierze?
  - [ ] Hardcoded lista (ja zrobię listę najpopularniejszych)
  - [ ] Custom - możesz dodawać swoje ćwiczenia
  - [ ] Import z zewnętrznego API (np. ExerciseDB)
  - [ ] Mix - predefiniowane + custom

- **Q9:** Jak wybierasz ćwiczenie?
  - [ ] Dropdown/Select
  - [ ] Autocomplete z wyszukiwaniem
  - [ ] Lista z kategoriami (Chest → Bench Press, Incline Press...)
  - [ ] Ostatnio używane na górze

**✅ 2. Historia treningów**
```
Lista ostatnich treningów:
- Dzisiaj: Bench Press 3x10 @ 60kg
- Wczoraj: Squat 4x8 @ 100kg
```

- **Q10:** Jak chcesz przeglądać historię?
  - [ ] Prosta lista (najnowsze na górze)
  - [ ] Grupowanie po dniach
  - [ ] Grupowanie po ćwiczeniach
  - [ ] Kalendarz (klikasz dzień → widzisz treningi)

- **Q11:** Co możesz robić z historią?
  - [ ] Tylko przeglądanie
  - [ ] Edycja (zmiana wartości)
  - [ ] Usuwanie
  - [ ] Kopiowanie (repeat workout)
  - [ ] Wszystkie powyższe

**✅ 3. Google Sheets sync**
- **Q12:** Jak często syncować?
  - [ ] Real-time (każde dodanie → od razu do Sheets)
  - [ ] Batch (zbiera kilka, wysyła co 5min)
  - [ ] Manual (przycisk "Sync Now")

- **Q13:** Offline mode?
  - [ ] Tak - zapisuje lokalnie, sync jak wrócisz online
  - [ ] Nie - wymaga internetu zawsze

---

#### STATS & ANALYTICS (Motywacja i postępy)

**📊 4. Podstawowe statystyki**
```
- Streak (ile dni z rzędu trenowałeś)
- Total workouts this week/month
- Favorite exercise (najczęściej wykonywane)
```

- **Q14:** Które statystyki Cię interesują najbardziej?
  - [ ] Streak (🔥 5 dni z rzędu)
  - [ ] Volume (total kg lifted this week)
  - [ ] Frequency (ile razy trenowałeś)
  - [ ] Personal Records (PR - najcięższe ever dla każdego ćwiczenia)
  - [ ] Progress (% improvement w ostatnim miesiącu)
  - [ ] Time under tension (ile minut treningu)

**📈 5. Wykresy postępów**
```
Wykres liniowy: ciężar w czasie dla wybranego ćwiczenia
Bench Press: 50kg → 55kg → 60kg → 65kg
```

- **Q15:** Jakie wykresy chcesz?
  - [ ] Line chart (ciężar w czasie)
  - [ ] Bar chart (volume per week)
  - [ ] Pie chart (rozkład grup mięśniowych)
  - [ ] Heatmap (calendar z aktywnością)
  - [ ] All of the above

- **Q16:** Czasem chcesz porównywać?
  - [ ] Tylko jeden exercise na raz
  - [ ] Porównywanie 2-3 exercises obok siebie
  - [ ] Porównywanie różnych okresów (ten miesiąc vs poprzedni)

---

#### UX IMPROVEMENTS (Wygoda użytkowania)

**⏱️ 6. Rest Timer**
```
Zapisujesz serię → timer automatycznie zaczyna odliczać 60s
Możesz skupić się na przerwie, nie musisz patrzeć na zegarek
```

- **Q17:** Timer - potrzebny w MVP?
  - [ ] TAK - super ważne dla mnie
  - [ ] NIE - można dodać później
  - [ ] MOŻE - jeśli starczy czasu

- **Q18:** Jak ma działać?
  - [ ] Auto-start po zapisaniu serii
  - [ ] Manual start (klikasz przycisk)
  - [ ] Predefiniowane czasy (30s, 60s, 90s, 2min)
  - [ ] Custom czas

**📝 7. Szablony treningów**
```
Zapisujesz "Push Day":
- Bench Press 4x8
- Shoulder Press 3x10
- Tricep Dips 3x12

Następnym razem: klikasz "Start Push Day" → autofill
```

- **Q19:** Szablony - potrzebne w MVP?
  - [ ] TAK - trenuję według planu, to kluczowe
  - [ ] NIE - freestyle, za każdym razem coś innego
  - [ ] PÓŹNIEJ - fajne, ale nie w pierwszej wersji

**🔁 8. Quick Repeat**
```
Ostatni trening: Bench Press 3x10 @ 60kg
Quick button: "Repeat" → od razu wstawia te same wartości
```

- **Q20:** Quick Repeat - przydatne?
  - [ ] TAK - często powtarzam te same treningi
  - [ ] NIE - zawsze są różnice
  - [ ] Częściowo - powtarzam ćwiczenia, ale zmieniam ciężar

---

#### PERSONALIZATION (Dopasowanie do Ciebie)

**👤 9. User profile**
```
Imię: Wojtek
Preferred unit: kg
Default rest time: 60s
```

- **Q21:** Co chcesz customizować?
  - [ ] Imię (do wyświetlania "Hi, Wojtek")
  - [ ] Jednostki (kg vs lbs)
  - [ ] Default rest time
  - [ ] Workout goals (ile razy w tygodniu)
  - [ ] Theme (dark/light - ale dark jest default)
  - [ ] Nic - domyślne ustawienia ok

**🎯 10. Goals & Targets**
```
Cel: 4 treningi w tygodniu
Progress: 3/4 ✅✅✅⬜
```

- **Q22:** Cele - chcesz to trackować?
  - [ ] TAK - frequency goal (X treningów/tydzień)
  - [ ] TAK - weight goal (osiągnąć 100kg w squat)
  - [ ] TAK - volume goal (total 10,000kg/tydzień)
  - [ ] NIE - wolę bez celów, tylko tracking

---

#### ADVANCED FEATURES (Nice-to-have)

**🤖 11. AI Assistant (Future - Week 4+)**
```
Claude analizuje Twoje dane z Google Sheets:
- "Last time you did 3x10 at 60kg, try 3x8 at 65kg"
- "You haven't trained legs in 5 days"
- "Your bench press improved 15% this month!"
```

- **Q23:** Jaki coaching chciałbyś od AI?
  - [ ] Suggestions (co trenować dziś)
  - [ ] Progress analysis (jak Ci idzie)
  - [ ] Form tips (przypomnienie o technice)
  - [ ] Deload reminders (kiedy zrobić tydzień lżejszy)
  - [ ] Wszystko powyższe
  - [ ] Na razie nie wiem, zobaczymy później

**📱 12. PWA - Instalacja na telefonie**
- **Q24:** To jest must-have czy nice-to-have?
  - [ ] MUST - chcę ikonę na ekranie głównym
  - [ ] NICE - fajnie, ale przeglądarka też ok

**🔔 13. Notifications**
```
"Hej! Nie trenowałeś od 3 dni"
"Reminder: Today is Leg Day"
```

- **Q25:** Push notifications - chcesz?
  - [ ] TAK - przypomnienia o treningach
  - [ ] TAK - celebration (new PR!)
  - [ ] NIE - wolę bez notyfikacji

**📤 14. Export / Backup**
- **Q26:** Oprócz Google Sheets, chcesz eksportować dane?
  - [ ] PDF report (miesięczne podsumowanie)
  - [ ] CSV export
  - [ ] JSON backup
  - [ ] Share workout na social media (screenshot)
  - [ ] Nie - Google Sheets wystarczy

---

## 🏗️ TECHNICAL DETAILS

### Google Sheets API Setup

**Q27:** Masz już doświadczenie z Google Cloud Platform?
- [ ] Tak, znam GCP
- [ ] Nie, będę potrzebował pomocy z setupem
- [ ] Nigdy nie słyszałem, ale chętnie się nauczę

**Q28:** Jak chcesz authenticować aplikację do Sheets?
- **Opcja A: Service Account** (prostsze, ale wszyscy użytkownicy mają dostęp do tego samego sheetu)
- **Opcja B: OAuth** (każdy user loguje się swoim Google, ma swój sheet)

**Q29:** Privacy - jak ważne?
- [ ] Tylko ja - Service Account ok
- [ ] Może ktoś jeszcze użyje - trzeba OAuth

---

### Tech Stack - Finalne decyzje

**Q30:** Framework preference?
- [ ] Next.js (Twoja rekomendacja - full-stack)
- [ ] React + separate backend (więcej pracy)
- [ ] Inne: _________

**Q31:** Styling?
- [ ] Tailwind CSS + shadcn/ui (moja rekomendacja)
- [ ] Styled Components
- [ ] CSS Modules
- [ ] Inne: _________

**Q32:** Hosting?
- [ ] Vercel (darmowe, łatwe)
- [ ] Railway (masz dostęp)
- [ ] SEO Host (masz dostęp)
- [ ] Inne: _________

---

## 🚀 TIMELINE & PRIORITIES

**Q33:** Jak szybko chcesz mieć działającą wersję?
- [ ] ASAP - podstawowy MVP w 1 tydzień
- [ ] Spokojnie - wolę więcej funkcji, nawet jeśli 2-3 tygodnie
- [ ] Nie śpieszę się - zróbmy to dobrze, nawet miesiąc

**Q34:** Priorytet MVP - wybierz MAX 5 funkcji, które MUSZĄ być w pierwszej wersji:**

```
□ Dodawanie treningu (podstawowe: exercise, sets, reps, weight)
□ Historia treningów (lista)
□ Google Sheets sync
□ Streak tracking
□ Wykresy postępów
□ Rest timer
□ Szablony treningów
□ PWA (instalacja na telefonie)
□ Quick repeat workout
□ Personal Records tracking
```

**Q35:** Co możemy pominąć/dodać później?
```
Lista rzeczy na "Phase 2":
-
-
-
```

---

## 💭 INNE PRZEMYŚLENIA

**Q36:** Czy jest coś, czego NIE chcesz w aplikacji?
```
Przykłady:
- Nie chcę social features (no posting, no friends)
- Nie chcę dużo klikania
- Nie chcę skomplikowanego UI
- Inne: _________
```

**Q37:** Czy są jakieś aplikacje, których NIE lubisz i dlaczego?
```
np. "Strong app jest ok, ale za dużo klikania"
```

**Q38:** Inne uwagi/pomysły?
```
Dowolne przemyślenia, które masz:
```

---

## 📝 MOJE NOTATKI (wypełnię po Twoich odpowiedziach)

### Finalne Decyzje:
```
User Type: [single/multi]
Primary Device: [mobile/desktop/both]
Input Timing: [live/post-workout/both]

Google Sheets Structure: [A/B/C]
Auth Method: [Service Account/OAuth]

MVP Features (Top 5):
1.
2.
3.
4.
5.

Phase 2 Features:
-
-

Tech Stack:
- Framework: Next.js 14
- Styling: Tailwind + shadcn/ui
- Database: Google Sheets API
- Hosting: [Vercel/Railway/SEO Host]
- PWA: [Yes/No]
- Auth: [Service Account/OAuth/None]

Timeline: [1 week / 2-3 weeks / 1 month]
```

---

## ✅ NASTĘPNE KROKI PO WYPEŁNIENIU

1. Przeczytaj wszystkie pytania
2. Odpowiedz na te, które są dla Ciebie ważne
3. Możesz pominąć pytania, gdzie nie masz preferencji (użyję defaults)
4. Jak będę miał Twoje odpowiedzi → zrobię konkretny plan implementacji
5. Potem przejdziemy do UI design
6. Potem startujemy z kodem!

**Gotowy? Odpowiadaj jak chcesz - możesz numerami (Q1: opcja A) lub po prostu opisowo!** 🚀
