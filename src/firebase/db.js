import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance

var firebaseConfig = {
  apiKey: "AIzaSyDpJXSaZz1cltl7mtSGPknVGJCGhPt_e9E",
  authDomain: "vue-fire-todo-8d99e.firebaseapp.com",
  databaseURL: "https://vue-fire-todo-8d99e-default-rtdb.firebaseio.com",
  projectId: "vue-fire-todo-8d99e",
  storageBucket: "vue-fire-todo-8d99e.appspot.com",
  messagingSenderId: "993386298184",
  appId: "1:993386298184:web:f775c05cd9d0b3ca3ed17d",
};

export const db = firebase.initializeApp(firebaseConfig).firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };
