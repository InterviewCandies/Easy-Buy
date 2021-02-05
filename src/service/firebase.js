import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDj__tRzAwShwpJStCVwWM71zh0VjUyykA",
  authDomain: "easybuy-34cf0.firebaseapp.com",
  projectId: "easybuy-34cf0",
  storageBucket: "easybuy-34cf0.appspot.com",
  messagingSenderId: "431527227595",
  appId: "1:431527227595:web:72beba873bab4594672b4e",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database;
