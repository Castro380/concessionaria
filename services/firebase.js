import { initializeApp, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

let app
try {
  app - getApp()
} catch (error) {

    const firebaseConfig = {
        apiKey: "AIzaSyCC2oppoxOGUIV0K8XpVxJ8KJ6bx1ucEHI",
        authDomain: "concessionaria-bf78f.firebaseapp.com",
        databaseURL: "https://concessionaria-bf78f-default-rtdb.firebaseio.com",
        projectId: "concessionaria-bf78f",
        storageBucket: "concessionaria-bf78f.appspot.com",
        messagingSenderId: "759369965575",
        appId: "1:759369965575:web:ce5ed64bcb9ed55ced4aa2",
        measurementId: "G-KBRHWKH43G"
      };

  app = initializeApp(firebaseConfig);
}

const db = getDatabase(app)

export { db }