import React from "react";

import { signInWithEmailAndPassword } from "firebase/auth"
import { Children, createContext, useContext, useState } from "react"
import { auth } from "../Firebase"

const AuthContext = createContext(null);

const useAuth = () => {
  return useContext(AuthContext);
}

const user = (email: string, password: string) => {
  const [user, setUser] = useState('');

  setUser('VAMO TIME')

  return console.log(user)
}


export const AuthProvider = (type: string) => {
  
  console.log(useContext)
}

export const meuTeste = (email: string, password: string) => {
  const user = signInWithEmailAndPassword(auth, email, password)
  return user
}