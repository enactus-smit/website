import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCMVW8cKt7qwzOUdZevqF6I8thZwuupXrk",
  authDomain: "dnajsd-f03e4.firebaseapp.com",
  projectId: "dnajsd-f03e4",
  storageBucket: "dnajsd-f03e4.appspot.com",
  messagingSenderId: "704538692042",
  appId: "1:704538692042:web:70ba54082b8b7b1ee2e733",
  measurementId: "G-R4169C1M4N"
};
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);




export { storage, app as default };



