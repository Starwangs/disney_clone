import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAJTq59Ot4urV6JHGq7-Wei3_qxhy9RpYA",
    authDomain: "disneyplus-clone-svelte.firebaseapp.com",
    projectId: "disneyplus-clone-svelte",
    storageBucket: "disneyplus-clone-svelte.appspot.com",
    messagingSenderId: "1076420482386",
    appId: "1:1076420482386:web:d376ae36ea46049f59168b"
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()