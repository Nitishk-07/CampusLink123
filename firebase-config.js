// firebase-config.js
// ⚠️  THIS FILE IS IN .gitignore — NEVER COMMIT IT TO GITHUB ⚠️
// Contains real secrets. Keep it local only.

export const firebaseConfig = {
  apiKey:            "AIzaSyCxyiAt4FGGwAvq6LoOW6mqimMfV078e-8",
  authDomain:        "campus-link-54a2d.firebaseapp.com",
  projectId:         "campus-link-54a2d",
  storageBucket:     "campus-link-54a2d.firebasestorage.app",
  messagingSenderId: "556068695124",
  appId:             "1:556068695124:web:dd9dfaab19ad30097911c1",
  measurementId:     "G-KJC7G087NW"
};

// Optional extras (leave blank to use built-in fallbacks)
export const SCORECARD_KEY  = '';   // free at api.data.gov — enables full US college search
export const LOGO_DEV_TOKEN = '';   // free at logo.dev     — shows real college logos
