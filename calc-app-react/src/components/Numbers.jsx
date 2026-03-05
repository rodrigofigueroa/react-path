import React  from 'react'
import Button from './Button'

const Numbers = ({ onClickHandler }) => {
  return (
  <section className="numbers">
    <Button text="1" clickHandler={ onClickHandler } />
    <Button text="2" clickHandler={ onClickHandler } />
    <Button text="3" clickHandler={ onClickHandler } />
    <Button text="4" clickHandler={ onClickHandler } />
    <Button text="5" clickHandler={ onClickHandler } />
    <Button text="6" clickHandler={ onClickHandler } />
    <Button text="7" clickHandler={ onClickHandler } />
    <Button text="8" clickHandler={ onClickHandler } />
    <Button text="9" clickHandler={ onClickHandler } />
    <Button text="0" clickHandler={ onClickHandler } />
  </section>
  )
}

export default Numbers