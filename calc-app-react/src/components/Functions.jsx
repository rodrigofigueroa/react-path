import React from 'react'
import Button from './Button';


const ComponenteFunctions  = ({ clickHandlerLimpiar, clickHandlerEliminar }) => {
  return (
    <section className="functions">
        <Button type='round-a' text={ 'Limpiar' } clickHandler={ clickHandlerLimpiar } />
        <Button type={ '' } text={ 'Borrar' }  clickHandler={ clickHandlerEliminar } />
    </section>
  )
}

export default ComponenteFunctions