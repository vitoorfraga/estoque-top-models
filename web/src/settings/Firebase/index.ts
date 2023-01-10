import * as firebase from 'firebase/app'
import * as firebaseAuth from 'firebase/auth'
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyBU7vOkPyZNdxEKls6d5ai2ri1ikv-dvEw",
  authDomain: "estoque-top-models.firebaseapp.com",
  projectId: "estoque-top-models",
  storageBucket: "estoque-top-models.appspot.com",
  messagingSenderId: "818876287578",
  appId: "1:818876287578:web:f3f37b1b9b20743726a663",
  measurementId: "G-25L4VG97BQ"
};

// Inicializa o firebase.
export const app = firebase.initializeApp(firebaseConfig);

// Inicializa Authentication e Get
export const auth = getAuth(app)