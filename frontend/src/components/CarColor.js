import React from 'react'
import { ReactComponent as Car } from './car.svg'

export default ({
  color
}) => (
  <div className='car-color'>
    <div><Car fill={ color }></Car></div>
    <span>Color: { color }</span>
  </div>
)
