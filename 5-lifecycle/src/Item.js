import React from 'react'
import './styles/Item.css'

const Item = ({ img = '', text = '', added = false, onAdd }) => (
  <li className='Item' onClick={e => { e.preventDefault(); onAdd(text) }}>
    <article className='Item-content'>
      <img src={img} alt={text}/>
      <div className={`cover ${added ? 'added' : '' }`}>
        <p>{text}</p>
      </div>
    </article>
  </li>
)

export default Item
