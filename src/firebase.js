import firebase from 'firebase'

var config = {
  apiKey: process.env.REACT_APP_DEV_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DEV_DB_URL,
  projectId: process.env.REACT_APP_DEV_PROJECT_ID,
  storageBucket: process.env.REACT_APP_DEV_SOTAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DEV_SENDER_ID
  };
firebase.initializeApp(config);
export default firebase;