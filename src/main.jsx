import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCS2R2uexhfm0FR--hhzZcokgB9IY2sXpo",
  authDomain: "plastico-records.firebaseapp.com",
  projectId: "plastico-records",
  storageBucket: "plastico-records.appspot.com",
  messagingSenderId: "434467547929",
  appId: "1:434467547929:web:5a5f1852fac6618be6b388",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
