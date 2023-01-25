import React from "react"; /* usa todo el poder de react en el componente */
import './Testimony.css'

function Testimony(props) {
  return(
    <div className="testimony-container">
      <img className="testimony-img" 
      src={require ("../images/image-2.png")}
      alt="foto de Emma"/>
      <div className="text-testimony-content">
        <p className="name-testimony">{props.name} in {props.city} </p>
        <p className="position-testimony">{props.position} at {props.company}</p>
        <p className="text-testimony">"{props.text}"</p>
      </div>

    </div>
  )
}

export default Testimony;