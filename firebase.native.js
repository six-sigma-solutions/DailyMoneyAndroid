// firebase.native.js - Android Native Firebase ONLY

// Native Firebase Auth instance
export const authInstance = auth();

// Auth functions
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

export default authInstance;
