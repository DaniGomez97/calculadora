import React from "react";
import "../hojas-de-estilo/BotonClear.css";

function BotonClear(props) {
  return (
    <div className="btn-clear" onClick={props.manejarClear}>
      {props.children}{" "}
      {/*Realmente no hace falta children ya q el btn es fijo y siempre sera de Clear*/}
    </div>
  );
}

export default BotonClear;
