import React from "react";
import Swal from "sweetalert2";
import { setConstantValue } from "typescript";

import background from "./../../assets/images/login-background.jpg";
import "./styles.css";

const Login = () => {
  const [isActiveMail, setIsActiveMail] = React.useState(false);
  const [isActivePassword, setIsActivePassword] = React.useState(false);

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

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log("jasidjasi");
    console.log(event);

    // const login = event.target;
    const login: any = document.querySelector("#login-mail");
    const password: any = document.querySelector("#login-password");

    if (login.value === "vitoorfraga0@gmail.com") {
      if (password.value === "1234") {
        console.log("Logou Pae :)");
      }
    } else {
      Swal.fire({
        title: "Ops!",
        text: "E-mail ou senha incorretos!",
        icon: "error",
        confirmButtonText: "Tente Novamente",
      });
    }
  }

  return (
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
            <button type="submit">Cadastrar Produto</button>
          </div>
        </form>
      </div>

      <div className="background">
        <img src={background} alt="" />
      </div>
    </div>
  );
};

export default Login;
