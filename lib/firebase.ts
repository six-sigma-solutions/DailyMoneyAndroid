
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut as firebaseSignOut, onAuthStateChanged, User } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebaseConfig } from "../firebaseConfig";


const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Optionally set AsyncStorage for Firebase Auth if needed (for older SDKs or custom setups)
// Example for react-native-firebase or if you see storage errors:
// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// const auth = initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });


const auth = getAuth(app);
export { auth };

export async function signIn(email: string, password: string) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export async function signUp(email: string, password: string) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export async function resetPassword(email: string) {
  await sendPasswordResetEmail(auth, email);
}

export async function signOut() {
  await firebaseSignOut(auth);
}

export function onAuth(cb: (u: User | null) => void) {
  return onAuthStateChanged(auth, cb);
}
