import React  from 'react'
import Result from './components/Result'
import Button from './components/Button';
import MathOperations from './components/MathOperations'
import './App.css'
import './Calc.css'

const App = () => {
  console.log( 'Renderizando' )
  
  const clickHandler = text => {
    console.log( 'clickHandler', text )
  }
  
  const clickHandlerOperations = operation => {
    console.log( operation )
  }

  const clickHandlerEqual = operation => {
    console.log( operation )
  }

  return (
  <main className="container">
    <h1>Calc APP</h1>
    <section className="con-calculator">
      <Result 
        value={ '0' } 
        />
      <section className='cont-1'>
          <section className="numbers">
            <Button text="1" clickHandler={ clickHandler } />
            <Button text="2" clickHandler={ clickHandler } />
            <Button text="3" clickHandler={ clickHandler } />
            <Button text="4" clickHandler={ clickHandler } />
            <Button text="5" clickHandler={ clickHandler } />
            <Button text="6" clickHandler={ clickHandler } />
            <Button text="7" clickHandler={ clickHandler } />
            <Button text="8" clickHandler={ clickHandler } />
            <Button text="9" clickHandler={ clickHandler } />
            <Button text="0" clickHandler={ clickHandler } />
          </section>

          <section className="functions">
              <button className='round-a'>Limpiar</button>
              <button>Borrar</button>
          </section>

      </section>

      <section className='cont-2'>
        <MathOperations clickOperation={ clickHandlerOperations } clickEqual={ clickHandlerEqual } />
      </section>

      
    </section>
  </main>
)}

export default App