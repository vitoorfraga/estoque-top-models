import React from "react";

import { signInWithEmailAndPassword } from "firebase/auth"
import { Children, createContext, useContext, useState } from "react"
import { auth } from "../Firebase"

const AuthContext = createContext(null);
// const [user, setUser] = useState(null);

export const useAuth = () => {
  return useContext(AuthContext);
}


export const AuthProvider = (type: string) => {
  console.log(useContext)
  
    
  const minhafuncao = (email: any, password: any) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const login = () => {
    return console.log('ATIVOU FUNÇÃO LOGIN')
  }

  if(type === 'teste'){
    return minhafuncao()
  }
  else if(type === 'login'){
    return login()
  }
}
    
    
    // const loginWithEmailAndPassword = (email:string, password:string) => {
    //   return signInWithEmailAndPassword(auth, email, password)
    // }
  // const [user, setUset] = React.useState(null);
  // const [loading, setLoading] = React.useState(true)

// Login With E-mail and Password.



// export default function loginWithEmailAndPassword(user:string, password:string){
//   firebaseAuth.signInWithEmailAndPassword(auth, user, password)
// .then(res => {
//   const userFirebase = res
//   console.log('Usuário logou com sucesso.')
//   console.log(userFirebase)
//   hideActivityIndicator()
//   return (
//     userFirebase
//   )
// })
// .catch(error => {
//   console.log(error)
// })
// .finally(() => {
//   return hideActivityIndicator()
// })

// }

// export function handleLogOut(){
//   auth.signOut()
//   .then(() => {
//     window.alert('Sessão encerrada.')
//     window.location.href = '/login'
//   })
//   .catch((error:any) =>{
//     console.log(error)
//   })
// }

// export function viewUser(){
//   const auth = getAuth()
//   const user = auth
//   return user
// }

// export function getLoggedUser(){
//   const user = auth.currentUser
  // const loggedUser  = firebaseAuth.onAuthStateChanged(auth, (user: any) => {
//     return user

// }