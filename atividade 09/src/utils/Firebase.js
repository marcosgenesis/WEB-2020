import firebase from "firebase/app";
import "firebase/firestore";
import FirebaseKey from "../keys/firebase_key";
export default class Firebasse {
  constructor() {
    firebase.initializeApp(FirebaseKey);
  }
  getFirestore() {
    return firebase.firestore();
  }
}
