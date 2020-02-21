import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAIdcqIZvSBhSc2wnRchdwaAuj-IJty_ow",
  authDomain: "net-ninja-mario-plan-7c162.firebaseapp.com",
  databaseURL: "https://net-ninja-mario-plan-7c162.firebaseio.com",
  projectId: "net-ninja-mario-plan-7c162",
  storageBucket: "net-ninja-mario-plan-7c162.appspot.com",
  messagingSenderId: "672929673550",
  appId: "1:672929673550:web:9bcb5ee682b6244d67ae1f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true};
firestore.settings(settings);

export default firebase;