import React  from 'react'
import Result from './components/Result'
import './App.css'
import './Calc.css'

const App = () => (
  <main className="container">
    <h1>Calc APP</h1>
    <section className="con-calculator">
      <Result />
      <section className='cont-1'>
          <section className="numbers">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
          </section>

          <section className="functions">
              <button className='round-a'>Limpiar</button>
              <button>Borrar</button>
          </section>

      </section>

      <section className='cont-2'>

        <section className="math-operators">      
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>/</button>
          <button className='round-b'>=</button>

        </section>
      </section>

      
    </section>
  </main>
)

export default App