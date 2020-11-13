import React from 'react'
import CarColor from './CarColor'

export default ({
  color,
  mileage,
  registration,
  topSpeed
}) => (
  <div className='car-stats'>
    <CarColor color={ color }></CarColor>
    <span>Mileage: { mileage || 'Unknown' }</span>
    <span>Top Speed: { topSpeed || 'Unknown' }</span>
  </div>
)
