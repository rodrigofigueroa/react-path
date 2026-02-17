import React from 'react'
import './Result.css'

const Result = ({ value = 0 } ) => (
    <section className="input-text">
      <span>
          { value }
      </span>
    </section>
  )

export default Result