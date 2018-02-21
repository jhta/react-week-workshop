import React from 'react'
import Button from './Button'
import './styles/FixedBar.css'

const FixedBar = ({ show = false, count = 0 }) => show
  ? (
      <section className='FixedBar' >
        <p>{ `llevas ${count} productos!` }</p>
        <div className=''>
          <Button text='Finalizar'/>
        </div>
      </section>
    )
  : null

export default FixedBar
