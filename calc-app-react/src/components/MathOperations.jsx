import React  from 'react'
import Button from './Button'

const MathOperations = ({ clickOperation, clickEqual }) => {
  return (
    <section className="math-operators">
      <Button clickHandler={ clickOperation } text="+" />
      <Button clickHandler={ clickOperation } text="-" />
      <Button clickHandler={ clickOperation } text="*" />
      <Button clickHandler={ clickOperation } text="/" />
      <Button clickHandler={ clickEqual } text="=" type='round-b' />
    </section>
  )
}

export default MathOperations