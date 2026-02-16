import React from 'react'
import './Result.css'

const Result = ({ value = 0 } ) => {
  console.log( 'Renderizando Result', value )
  return (
    <section className="input-text">
      <span>
          { value }
      </span>
    </section>
  )
}

export default Result