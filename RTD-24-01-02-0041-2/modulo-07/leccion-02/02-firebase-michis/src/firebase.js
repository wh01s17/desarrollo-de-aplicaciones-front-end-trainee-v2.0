import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDvoZ2Pt3iGoi7lttrm8C-eypY6dJedlso',
  authDomain: 'catalogo-de-michis-650c4.firebaseapp.com',
  projectId: 'catalogo-de-michis-650c4',
  storageBucket: 'catalogo-de-michis-650c4.firebasestorage.app',
  messagingSenderId: '43513322555',
  appId: '1:43513322555:web:c0edefd6368466775a501e',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)
