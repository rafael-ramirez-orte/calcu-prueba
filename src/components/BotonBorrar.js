import React from 'react';
import '../stylesheets/BotonBorrar.css';

const BotonBorrar = (props) => (
  <div className='boton-borrar' onClick={props.darBorrar}>
    {props.children}
  </div>
);

export default BotonBorrar;
