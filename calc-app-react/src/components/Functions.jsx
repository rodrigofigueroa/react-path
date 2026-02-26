import React from 'react'
import Button from './Button';


const ComponenteFunctions  = ({ clickHandlerLimpiar, clickHandlerEliminar }) => {
  return (
    <section className="functions">
        <Button type='round-a button-long-text' text={ 'Limpiar' } clickHandler={ clickHandlerLimpiar } />
        <Button type={ 'button-long-text' } text={ 'Borrar' }  clickHandler={ clickHandlerEliminar } />
    </section>
  )
}

export default ComponenteFunctions