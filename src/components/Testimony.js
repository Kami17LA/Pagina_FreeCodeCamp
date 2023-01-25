import React from "react"; /* usa todo el poder de react en el componente */

function Testimony() {
  return(
    <div className="testimony-container">
      <img className="testimony-img" 
      src={require ("../images/image-2.png")}
      alt="foto de Emma"/>
      <div className="text-testimony-content">
        <p className="name-testimony">Lorem Ipsum </p>
        <p className="position-testimony">Lorem Ipsum Lorem Ipsum</p>
        <p className="text-testimony">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. </p>
      </div>

    </div>
  )
}

export default Testimony;