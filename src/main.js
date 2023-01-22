import { createApp } from "vue";
import App from "./App.vue";
import VueRouter from "./router/index";

import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkg307UITzAN8vrM7O-cchpH7Zu2ovPUc",
    authDomain: "vite-project-7c24e.firebaseapp.com",
    projectId: "vite-project-7c24e",
    storageBucket: "vite-project-7c24e.appspot.com",
    messagingSenderId: "719924618861",
    appId: "1:719924618861:web:f79440cb088db6df9bc164",
    measurementId: "G-ZJZNQ0KZ6Y"
  };

// Initialize Firebase
// const app = initializeApp(firebaseConfig); ここだけ少し変更しています
initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount("#app");