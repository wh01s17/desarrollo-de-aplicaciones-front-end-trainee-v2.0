import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBagi0gWxruErDNRMSiJK_L9Vw3ZkWwLM4',
  authDomain: 'catalogo-michis-a78e5.firebaseapp.com',
  projectId: 'catalogo-michis-a78e5',
  storageBucket: 'catalogo-michis-a78e5.firebasestorage.app',
  messagingSenderId: '361595612946',
  appId: '1:361595612946:web:f4ddb01baa61fe50520dcb',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)
