import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt-tIaw-ToPQRP8Tng4UryoWH1l9cKj_0",
  authDomain: "vuexfirebase-c0869.firebaseapp.com",
  projectId: "vuexfirebase-c0869",
  storageBucket: "vuexfirebase-c0869.appspot.com",
  messagingSenderId: "450837333827",
  appId: "1:450837333827:web:bc1661ca2b4c94452e11f6"
};

initializeApp(firebaseConfig);
const app = createApp(App)

app.use(router)

app.mount('#app')



