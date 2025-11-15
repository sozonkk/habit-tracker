# 🚀 Deployment Guide - Vercel

## ✅ Day 1 Progress Update

**DONE:**
- ✅ Next.js 14 setup
- ✅ Tailwind CSS + Dark theme
- ✅ Home screen (static UI)
- ✅ Mobile-first design
- ✅ Code pushed to GitHub

**Next:**
- 📦 Deploy to Vercel (you can do this now!)
- 🎨 Add workout form (static)
- 📋 History screen (static)

---

## 🌐 Deploy to Vercel (5 minutes)

### Step 1: Create Vercel Account
1. Go to: https://vercel.com/signup
2. Sign up with **GitHub** (easiest)
3. Authorize Vercel to access your GitHub

### Step 2: Import Project
1. Click "Add New..." → "Project"
2. Find repository: `sozonkk/habit-tracker`
3. Click "Import"

### Step 3: Configure Project
```
Framework Preset: Next.js
Root Directory: ./
Build Command: pnpm build (auto-detected)
Output Directory: .next (auto-detected)
Install Command: pnpm install (auto-detected)
```

**Environment Variables:** (none needed yet, Day 2 będzie Google Sheets)

### Step 4: Deploy!
1. Click "Deploy"
2. Wait 2-3 min (Vercel builds your app)
3. 🎉 **DONE!** You'll get a live URL like: `https://habit-tracker-xyz.vercel.app`

---

## 📱 Test on Phone

1. Open URL on your phone
2. Should see:
   - "Hi, Bartek! 👋"
   - Blue "+ Add Workout" button
   - Mock workouts (Bench Press, Squat)
   - Bottom navigation

---

## 🔄 Auto-Deploy

**Good news:** Every time you push to GitHub, Vercel auto-deploys!

```bash
git push
# → Vercel automatically builds & deploys
# → New version live in ~2 min
```

---

## ⚙️ Vercel Dashboard

Access: https://vercel.com/dashboard

**Useful tabs:**
- **Deployments:** See all deploys, rollback if needed
- **Settings → Domains:** Add custom domain (optional)
- **Settings → Environment Variables:** Add Google Sheets creds (Day 2)

---

## 🐛 Troubleshooting

**Build fails?**
- Check "Deployments" tab for error logs
- Usually missing env variables or dependency issues

**Old version showing?**
- Hard refresh: Ctrl+Shift+R (Cmd+Shift+R on Mac)
- Clear cache

**Can't find repo?**
- Re-authorize GitHub permissions in Vercel settings

---

## 📝 Next Steps (Day 1 Evening)

After deploy, I'll add:
1. Add workout form screen (static)
2. History screen with mock data
3. Polish navigation between screens

**Tomorrow (Day 2):**
- Google Sheets setup (together!)
- Connect form → save to Sheets
- Read from Sheets → show in history
- 🎉 **MVP DONE!**

---

**Deploy now and send me the URL!** 🚀
