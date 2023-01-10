import React from "react";
import DevBar from "../DevBar";
import imagem from "./../../assets/images/background-roupas.jpg"
import "./styles.css"

interface dashboardProps {
  user: object;
}

const Dashboard = () => {
  

  return (
    <div id="dashboard">
      <h1>Bem-Vindo!</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nesciunt sequi, ratione qui cupiditate earum. Voluptas sit ipsa libero inventore, placeat consequuntur sint! Cumque totam eaque, iusto error nulla recusandae.</p>

  
    <div className="devs">
      <DevBar 
        name="Vitor Fraga"
        linkedinURL="smdkasmdkas"
         imgURL={imagem}
        />

      <DevBar 
        name="Eduardo Cruz"
        linkedinURL="smdkasmdkas"
         imgURL={imagem}
        />

      <DevBar 
        name="Hércules"
        linkedinURL="smdkasmdkas"
         imgURL={imagem}
        />

        <DevBar 
        name="Matheus Nogueira"
        linkedinURL="smdkasmdkas"
        imgURL={imagem}
        />
      </div>
    </div>
  )
}

export default Dashboard
