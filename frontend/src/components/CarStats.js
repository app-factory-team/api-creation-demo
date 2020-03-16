import React from 'react'

export default ({ registration, color, mileage, topSpeed}) => {
  return (
    <div className='carStats'>
      <span>Registration: { registration }</span>
      <span>Color: { color || 'Unknown' }</span>
      <span>Mileage: { mileage || 'Unknown' }</span>
      <span>Top Speed: { topSpeed || 'Unknown' }</span>
    </div>
  )
}
