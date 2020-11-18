import React from 'react'
import { ReactComponent as Car } from './car.svg'

export default ({
  color
}) => (
  <div className='car-color'>
    <Car className='car-image' fill={ color }></Car>
    <span>Color: { color }</span>
  </div>
)
