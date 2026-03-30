# Workout Programme — PWA Setup Guide

## 📱 What you're getting
A fully offline-capable Progressive Web App (PWA) that installs on your iPhone or Android home screen like a native app. All your workout data is saved locally on your device.

---

## 🚀 Deploy to GitHub Pages (5 minutes)

### Step 1 — Create the repository
1. Go to **github.com** and sign in as `imenesayah-netizen`
2. Click the **+** button → **New repository**
3. Name it exactly: `Workout-Programme`
4. Set it to **Public**
5. Click **Create repository**

### Step 2 — Upload the files
1. On the new repo page, click **uploading an existing file** (or drag files in)
2. Upload ALL files from this folder:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
3. Click **Commit changes**

### Step 3 — Enable GitHub Pages
1. Go to your repo → **Settings** tab
2. Scroll to **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Set Branch to **main**, folder to **/ (root)**
5. Click **Save**

### Step 4 — Your URL
After ~2 minutes, your app will be live at:
```
https://imenesayah-netizen.github.io/Workout-Programme/
```

---

## 📲 Install on iPhone

1. Open **Safari** on your iPhone (must be Safari, not Chrome)
2. Go to: `https://imenesayah-netizen.github.io/Workout-Programme/`
3. Tap the **Share** button (box with arrow at the bottom)
4. Scroll down and tap **Add to Home Screen**
5. Name it "Workout Programme" → tap **Add**

The app icon will appear on your home screen. It opens full-screen with no browser UI.

## 📲 Install on Android

1. Open **Chrome** on your Android phone
2. Go to: `https://imenesayah-netizen.github.io/Workout-Programme/`
3. Tap the **⋮** menu → **Add to Home screen**
4. Tap **Add**

---

## 💾 How data is saved
- All workout data (checked exercises, notes, RPE, duration) is saved to your **device's local storage**
- Works completely **offline** once installed
- Data persists across sessions automatically
- To back up: your browser's local storage syncs via iCloud (Safari/iPhone) or Google Account (Chrome/Android)

---

## 🔄 Updating the app
If you ever want to update the workouts:
1. Edit `index.html` locally
2. Upload the new version to GitHub (replace the file)
3. GitHub Pages will redeploy in ~1 minute
4. On your phone: open the app → pull to refresh once to get the update

---

## ❓ Troubleshooting

**App not showing after GitHub Pages setup?**
Wait 2–3 minutes and hard refresh. GitHub Pages can take a moment.

**"Add to Home Screen" not appearing on iPhone?**
Make sure you're using Safari, not Chrome or Firefox.

**Data disappeared?**
Check that you're opening the app from the home screen icon, not from a fresh browser tab. The home screen icon preserves local storage.
