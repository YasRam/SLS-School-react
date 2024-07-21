import React from 'react'
import Card from '../Card/Card'

export default function Upcoming() {
  return (
    <>
      <h2>Upcoming events</h2>
      <p className='text-black-50 w-50 m-auto'>Etiam porttitor risus massa nec condiment gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat</p>
      <div className="container">
        <div className="row">
          <Card />
          <Card />
          <Card />
        </div>
      </div>

    </>
  )
}
