import React from 'react'

export default ({
  color,
  mileage,
  registration,
  topSpeed
}) => (
  <div className='car-stats'>
    <span>Registration: { registration }</span>
    <span>Color: { color || 'Unknown' }</span>
    <span>Mileage: { mileage || 'Unknown' }</span>
    <span>Top Speed: { topSpeed || 'Unknown' }</span>
  </div>
)
