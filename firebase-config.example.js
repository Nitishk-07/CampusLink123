// firebase-config.example.js
// ✅ This file IS committed to GitHub — it's a template with no real secrets.
//
// HOW TO SET UP:
//   1. Copy this file:  cp firebase-config.example.js firebase-config.js
//   2. Fill in your real values from Firebase Console → Project Settings
//   3. The real firebase-config.js is in .gitignore, so it stays local

export const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID",
  measurementId:     "YOUR_MEASUREMENT_ID"
};

// Optional extras (leave blank to use built-in fallbacks)
export const SCORECARD_KEY  = '';   // free at api.data.gov — enables full US college search
export const LOGO_DEV_TOKEN = '';   // free at logo.dev     — shows real college logos
