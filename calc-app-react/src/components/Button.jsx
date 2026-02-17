import React from 'react'

const Button = ({ text, type, children, clickHandler }) => (
    <button className={ `${ type }` } onClick={ e => clickHandler( text ) }>
      { text }
    </button>
  )

export default Button