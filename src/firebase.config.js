import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDHDcRicEVqULCyo6QdK8epjH1jT2pekKU",
  authDomain: "restaurantapp-8a526.firebaseapp.com",
  databaseURL: "https://restaurantapp-8a526-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-8a526",
  storageBucket: "restaurantapp-8a526.appspot.com",
  messagingSenderId: "957237517132",
  appId: "1:957237517132:web:db675e64259be3b4aa8de9",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
