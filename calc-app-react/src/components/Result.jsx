import React from 'react'
import './Result.css'

const Result = props => {
  console.log( 'Renderizando Result', props )
  return (
    <section className="input-text">
      <span>
          { props.value }
      </span>
    </section>
  )
}

export default Result