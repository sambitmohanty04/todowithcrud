import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCSN1ixQVTbFKrcdOGSU_pu8GipG09EeMY",
    authDomain: "portfolio-f0fc5.firebaseapp.com",
    projectId: "portfolio-f0fc5",
    storageBucket: "portfolio-f0fc5.appspot.com",
    messagingSenderId: "1082100755463",
    appId: "1:1082100755463:web:184466272499f7731d8ea2",
    measurementId: "G-QPHDX11H4S"
  }


  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)