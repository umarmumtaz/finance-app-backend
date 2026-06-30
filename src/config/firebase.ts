// // src/config/firebase.ts
// import dotenv from 'dotenv'
// dotenv.config()

// import { initializeApp, cert, getApps } from 'firebase-admin/app'
// import { getAuth } from 'firebase-admin/auth'

// if (getApps().length === 0) {
//   initializeApp({
//     credential: cert({
//       projectId:   process.env.FIREBASE_PROJECT_ID   as string,
//       clientEmail: process.env.FIREBASE_CLIENT_EMAIL as string,
//       privateKey:  process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
//     }),
//   })
// }

// export const adminAuth = getAuth()






// src/config/db.ts
// src/config/firebase.ts
import dotenv from "dotenv";
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

dotenv.config();

const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

if (!privateKey) {
  throw new Error("Missing FIREBASE_PRIVATE_KEY in .env");
}

if (getApps().length === 0) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey,
    }),
  });
}

export const adminAuth = getAuth();
