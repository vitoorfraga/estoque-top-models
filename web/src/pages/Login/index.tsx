import React, { useState } from "react";
import Swal from "sweetalert2";

import background from "./../../assets/images/login-background.jpg";
import "./styles.css";

import ActivityResponse, {showActivityIndicator, hideActivityIndicator} from "../../components/ActivityResponse";
import { AuthProvider, meuTeste } from "../../settings/Auth";


const Login = () => {
  const [isActiveMail, setIsActiveMail] = React.useState(false);
  const [isActivePassword, setIsActivePassword] = React.useState(false);

  const [login, setLogin] = React.useState(null)
  const [password, setPassword] = React.useState(null)

  const [isLoadingLoggedUser, setisLoadingLoggedUser] = useState(false)
  

  function handleMailChange(text: any) {
    const setValue = text;

    if (text !== "") {
      setIsActiveMail(true);
    } else {
      setIsActiveMail(false);
    }
  }

   function handlePasswordChange(text2: any) {
    const setValue = text2;

    if (text2 !== "") {
      setIsActivePassword(true);
    } else {
      setIsActivePassword(false);
    }
  }
  

   async function handleSubmit(event: any) {
    event.preventDefault();
    showActivityIndicator()

    // const login = event.target;
    const login: any = document.getElementById("login-mail");
    const password: any = document.getElementById("login-password");

    const user = await meuTeste(login.value, password.value)
    console.log(user)
    // await loginWithEmailAndPassword(login.value, password.value)
    // const user = loginWithEmailAndPassword(login.value, password.value)
  }

  return (
  <>
    <ActivityResponse />


    <div className="login-grid">
      <div className="login">
        <div className="login-intro">
          <h1>Login</h1>
          <p>Para acessar seu estoque, entre com suas credenciais.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label className={isActiveMail ? "Active" : ""} htmlFor="E-mail">
              E-mail
            </label>

            <input
              onChange={(e) => handleMailChange(e.target.value)}
              required
              type="email"
              name="login-mail"
              id="login-mail"
              placeholder=""
              />
          </div>

          <div className="form-field">
            <label
              className={isActivePassword ? "Active" : ""}
              htmlFor="password"
              >
              Senha
            </label>
            <input
              onChange={(e) => handlePasswordChange(e.target.value)}
              required
              type="password"
              name=""
              id="login-password"
              placeholder=""
              />
          </div>

          <div className="form-button">
            <button 
            onClick={handleSubmit}
            type="submit">Entrar</button>
          </div>
        </form>
      <button 
        onClick={() => {
          // const user = getLoggedUser()   
          // console.log(user)       
        }}
        style={{marginTop: 30}}>
        Ver usuario
      </button>
      </div>


      <div className="background">
        <img src={background} alt="" />
      </div>
    </div>

    {/* {isLoadingLoggedUser ? showActivityIndicator() : hideActivityIndicator()} */}
  </>
  );
};

export default Login;
