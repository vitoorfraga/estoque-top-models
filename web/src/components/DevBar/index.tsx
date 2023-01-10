import React from 'react'
import "./styles.css"

// Definindo Props
interface DevBar{
  name: string;
  imgURL: string;
  linkedinURL: string;
}

const DevBar = (props: DevBar) => {
  return (
    <div>
      <a href={props.linkedinURL} className="dev-person">
        <img src={props.imgURL} alt={`${props.name} Foto.`} />
        <span className="dev-name">{props.name}</span>
    </a>
    </div>
  )
}

export default DevBar
