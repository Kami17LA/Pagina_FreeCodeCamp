import React from "react"; /* usa todo el poder de react en el componente */
import './Testimony.css'

function Testimony(props) {
  return(
    <div className="testimony-container">
      <img className="testimony-img" 
      src={require( `../images/image-${props.image}.png`)}
      alt={props.photo_student} />
      <div className="text-testimony-content">
        <p className="name-testimony"><strong>{props.name}</strong> in {props.city} </p>
        <p className="position-testimony">{props.position} at <strong>{props.company}</strong></p>
        <p className="text-testimony">"{props.text}"</p>
      </div>

    </div>
  )
}

export default Testimony;