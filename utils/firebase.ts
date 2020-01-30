import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAENC7jaG2n2vysRrEjC_mS3Hwbmxf9fuA",
  authDomain: "twitter-sliding-puzzle.firebaseapp.com",
  databaseURL: "https://twitter-sliding-puzzle.firebaseio.com",
  projectId: "twitter-sliding-puzzle",
  storageBucket: "twitter-sliding-puzzle.appspot.com",
  messagingSenderId: "853729284482",
  appId: "1:853729284482:web:2ead63f88e75567501ff9b",
  measurementId: "G-3TGRQETH90",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

export default firebase;
