import React                from 'react'
import Result               from './components/Result'
import MathOperations       from './components/MathOperations'
import ComponenteFunctions  from './components/Functions'
import Numbers              from './components/Numbers'
import './App.css'
import './Calc.css'

const App = () => {
  console.log( 'Renderizando' )
  
  const clickHandlerOperations = operation => {
    console.log( operation )
  }

  const clickHandlerEqual = equal => {
    console.log( equal )
  }

  const clickHandlerEliminar = clean => {
    console.log( clean )
  }

  const clickHandlerLimpiar = limpiar => {
    console.log( limpiar )
  }

  return (
  <main className="container">
    <h1>Calc APP</h1>
    <section className="con-calculator">
      <Result 
        value={ '0' } 
        />
      <section className='cont-1'>
          <Numbers onClickHandler={ number => {
            console.log( 'COmponent Numbers, number:', number )
          }} />

          <ComponenteFunctions clickHandlerEliminar={ clickHandlerEliminar } clickHandlerLimpiar={ clickHandlerLimpiar } />

      </section>

      <section className='cont-2'>
        <MathOperations clickOperation={ clickHandlerOperations } clickEqual={ clickHandlerEqual } />
      </section>

      
    </section>
  </main>
)}

export default App