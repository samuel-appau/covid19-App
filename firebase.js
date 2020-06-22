import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAVXoRF91ZadKBshaNuXUTHSNXYADTvUcw",
  authDomain: "covid19-app-47a49.firebaseapp.com",
  databaseURL: "https://covid19-app-47a49.firebaseio.com",
  projectId: "covid19-app-47a49",
  storageBucket: "covid19-app-47a49.appspot.com",
  messagingSenderId: "431634387632",
  appId: "1:431634387632:web:fe49af97765c6541442175",
  measurementId: "G-RDZ8KLNTWX"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const firebaseDB=firebase.database();
 

  export {firebase,firebaseDB};