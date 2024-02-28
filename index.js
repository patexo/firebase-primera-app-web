// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth, EmailAuthProvider } from "firebase/auth";

import * as firebaseui from 'firebaseui';


// Document elements
const startRsvpButton = document.getElementById('startRsvp');

  
let db, auth;

// const db = getFirestore(app);
 

async function main() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCX7y_pI7RoY4J8G1sniAO_bx88rymsw8E",
    authDomain: "primera-app-web.firebaseapp.com",
    projectId: "primera-app-web",
    storageBucket: "primera-app-web.appspot.com",
    messagingSenderId: "375548321796",
    appId: "1:375548321796:web:9447f08470242db2ead551"
  };

  // // Initialize Firebase
  // initializeApp(firebaseConfig);
  initializeApp(firebaseConfig);
  auth = getAuth();

  // FirebaseUI config
  const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      // Email / Password Provider.
      EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // Handle sign-in.
        // Return false to avoid redirect.
        return false;
      },
    },
  };

  const ui = new firebaseui.auth.AuthUI(auth);

  // Listen to RSVP button clicks
  startRsvpButton.addEventListener('click',
  () => {
    alert("frfgf");
    ui.start('#firebaseui-auth-container', uiConfig);
  });
}
main();


