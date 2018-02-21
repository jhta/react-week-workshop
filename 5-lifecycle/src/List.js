import React from 'react'
import Item from './Item'
import './styles/List.css'

const List = ({ show = false, list = [], addItem }) => show
  ? (
      <section className='Container'>
        <ul className='List masonry'>
          {
            list.map((item, index) =>
              <Item
                {...item}
                key={index}
                onAdd={addItem}
              />
            )
          }
        </ul>
      </section>
    )
  : null

export default List
