import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBoCIX73LJAyEF8Cm5scOrPCiXWhuuhc5E",
    authDomain: "reactnative-b924a.firebaseio.com",
    databaseURL: "https://reactnative-b924a.firebaseio.com/",
    projectId: "reactnative-b924a",
    storageBucket: "reactnative-b924a.appspot.com",
    messagingSenderId: "482513920225",
    appId: "1:228889421337:android:28e709067e583f37496c88", 
    measurementId: "G-YPN0D17YL4"
  }
  
  const database = firebase
  firebase.initializeApp(firebaseConfig)
  
  export default { firebase, database }