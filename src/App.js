import './App.css';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonBorrar';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcuResul = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Ingresar valores para realizar operacioens.");
    }
  };

  return (
    <div className='App'>
      <div className='calcu-conte'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton darClic={agregarInput}>+</Boton>
          <Boton darClic={agregarInput}>-</Boton>
          <Boton darClic={agregarInput}>*</Boton>
          <Boton darClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Boton darClic={agregarInput}>1</Boton>
          <Boton darClic={agregarInput}>2</Boton>
          <Boton darClic={agregarInput}>3</Boton>
          <Boton darClic={agregarInput}>4</Boton>
        </div>
        <div className='fila'>
          <Boton darClic={agregarInput}>5</Boton>
          <Boton darClic={agregarInput}>6</Boton>
          <Boton darClic={agregarInput}>7</Boton>
          <Boton darClic={agregarInput}>8</Boton>
        </div>
        <div className='fila'>
          <Boton darClic={agregarInput}>9</Boton>
          <Boton darClic={agregarInput}>0</Boton>
          <Boton darClic={calcuResul}>=</Boton>
        </div>
        <div className='fila'>
          <BotonClear darBorrar={() => setInput('')}>
            Borrar
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
