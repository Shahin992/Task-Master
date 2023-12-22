
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyBJPNwuXo_t7O8WhBkaJZDlSRlNh6XnbNw",
  
    authDomain: "task-0master.firebaseapp.com",
  
    projectId: "task-0master",
  
    storageBucket: "task-0master.appspot.com",
  
    messagingSenderId: "66063979923",
  
    appId: "1:66063979923:web:3f69747c600b7e9f3b4466"
  
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth