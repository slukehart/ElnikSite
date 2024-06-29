
import {getFirestore} from "firebase/firestore";
import {getFunctions} from "firebase/functions";
import {getAuth} from "firebase/auth";
import {initializeApp} from "firebase/app";

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: "AIzaSyDT2jSI38A1LhE-zebZdgHdZFVzhDltOm8",
        authDomain: "elnik-72224.firebaseapp.com",
        projectId: "elnik-72224",
        storageBucket: "elnik-72224.appspot.com",
        messagingSenderId: "351305632669",
        appId: "1:351305632669:web:312008e2e14b7c96377d74",
        measurementId: "G-M5JTSF94QE"
    };

    const app = initializeApp(firebaseConfig)

    const auth = getAuth(app)
    const firestore = getFirestore(app)
    const functions = getFunctions(app)


    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)

    nuxtApp.vueApp.provide('functions', functions);
    nuxtApp.provide('functions', functions);

})