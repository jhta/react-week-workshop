import React from 'react'
import Button from './Button'

const Header = ({ onShowContent, onFinish, show = false, showMessageFinish = false }) => (
  <section className='Container' >
    <section className='Block'>
      <h2 className='Title'>Hola Ramiro!</h2>
      <p>Bienvenido a esta maravillosa tienda virtual, seguro vienes a comprar algo genial</p>
    </section>
    {
      show
      ? <section className='Block'>
          <Button
            text='Awesome, voy a comprar'
            onClick={onShowContent}
          />
          <Button
            text='Nope :('
            onClick={onFinish}
          />
        </section>
      : null
    }
    {
      showMessageFinish
      ?  <div className='Block'>
          <p> En otra oportunidad será :/</p>
        </div>
      : null
    }
  </section>
)

export default Header
