import React from "react";
import "../hojas-de-estilo/Boton.css";

function Boton(props) {
  /* Le decimos que props se pase x param como 'valor' */
  const esOperador = (valor) => {
    return isNaN(valor) && valor != "." && valor != "=";
  };
  /*isNaN devolvera true (si no es un numero) o false */

  return (
    /*Nos va a dar dos clases, boton-contenedor y luego la otra con el condicional*/
    /*Una general para el estilo de todos los botones y otra para las func */
    /*Es operador es una funcion que está arriba. Le pasamos por parametro props.*/

    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      onClick={() => props.manejarClick(props.children)}
      /* Cuando haya un Click, HAZ LA FUNCION de llamar a la funcion manejarClick */
    >
      {props.children}{" "}
      {/* Al tener cada btn un valor diferente, le ponemos children y lo ponemos entre > <*/}
    </div>
  );
}

export default Boton;
