import auth from '@react-native-firebase/auth';

export const authInstance = auth();

export function signIn(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}
export function signUp(email, password) {
  return auth().createUserWithEmailAndPassword(email, password);
}
export function resetPassword(email) {
  return auth().sendPasswordResetEmail(email);
}
export function onAuthStateChanged(cb) {
  return auth().onAuthStateChanged(cb);
}
export function signOut() {
  return auth().signOut();
}
export default authInstance;// Native-first Firebase wrapper that falls back to the web SDK in non-prebuilt runtimes
// (e.g. Expo Go). Avoids requiring native modules at top-level so Metro doesn't crash
// when the native RNFB modules are not present.

let nativeAuthModule = null;
let usingNative = false;

try {
  // Attempt a dynamic require so Metro only resolves this when available at runtime
  // (prebuilt / dev client or bare workflow). If not available, this will throw.
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  nativeAuthModule = require('@react-native-firebase/auth').default;
  if (nativeAuthModule) {
    usingNative = true;
    // eslint-disable-next-line no-console
    console.log('[firebase.native] using @react-native-firebase/auth (native)');
  }
} catch (e) {
  // Native module not available (likely running in Expo Go). We'll fall back.
}

// Define exported API placeholders
let signIn;
let signUp;
let resetPassword;
let onAuthStateChanged;
let signOut;
let auth;

if (usingNative && nativeAuthModule) {
  // Native implementations
  signIn = (email, password) => nativeAuthModule().signInWithEmailAndPassword(email, password);
  signUp = (email, password) => nativeAuthModule().createUserWithEmailAndPassword(email, password);
  resetPassword = (email) => nativeAuthModule().sendPasswordResetEmail(email);
  onAuthStateChanged = (cb) => nativeAuthModule().onAuthStateChanged(cb);
  signOut = () => nativeAuthModule().signOut();
  auth = nativeAuthModule;
} else {
  // Fallback to the web firebase wrapper (firebase.js). Keep same API surface.
  // Use require to avoid static hoisting of the web SDK when running in native-only builds.
  // eslint-disable-next-line global-require
  const web = require('./firebase');
  signIn = web.signIn;
  signUp = web.signUp;
  resetPassword = web.resetPassword;
  onAuthStateChanged = web.onAuthStateChanged;
  signOut = web.signOut;
  auth = web;
}

export { signIn, signUp, resetPassword, onAuthStateChanged, signOut, auth };
