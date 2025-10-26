// firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAaI-bvSXddWBePYlQxZk78qn1L2da3FY8",
  authDomain: "react-native-dm.firebaseapp.com",
  projectId: "react-native-dm",
  storageBucket: "react-native-dm.appspot.com",
  messagingSenderId: "718070565957",
  appId: "1:718070565957:android:bce9544431a2ffb665672c",
};
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;


// Paste your Firebase web config here. You can find this in the Firebase console -> Project settings -> Your apps (Web)
// Example:
// export default {
//   apiKey: "...",
//   authDomain: "your-app.firebaseapp.com",
//   projectId: "your-app-id",
//   storageBucket: "your-app.appspot.com",
//   messagingSenderId: "...",
//   appId: "1:...:web:...",
// };

// Values inferred from android/app/google-services.json. If you have a
// dedicated Web app in Firebase Console, prefer to use that web config.
// const firebaseConfig = {
//   apiKey: "AIzaSyAaI-bvSXddWBePYlQxZk78qn1L2da3FY8",
//   authDomain: "react-native-dm.firebaseapp.com",
//   projectId: "react-native-dm",
//   storageBucket: "react-native-dm.appspot.com",
//   messagingSenderId: "718070565957",
//   appId: "1:718070565957:android:bce9544431a2ffb665672c",
// };

// export default firebaseConfig;
