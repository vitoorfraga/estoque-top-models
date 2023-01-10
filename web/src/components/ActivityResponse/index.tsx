import React from 'react'
import loadingGiff from "./../../assets/icons/loading-win98-transparent.gif"
import "./styles.css"

export const showActivityIndicator = () => {document.getElementById('activity-response').style.display = 'flex'
console.log('MOSTRAR')}
export const hideActivityIndicator = () => {document.getElementById('activity-response').style.display = 'none'
}


export default function ActivityResponse(){
  return(
    <div id='activity-response' className="activity-response">
      <img src={loadingGiff} />
      <p>Carregando...</p>
    </div>
  )
}