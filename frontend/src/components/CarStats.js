import React from 'react'
import CarColor from './CarColor'
import TopSpeed from './TopSpeed'
import Mileage from './Mileage'

export default ({
  color,
  mileage,
  registration,
  topSpeed
}) => (
  <div className='car-stats'>
    <CarColor color={ color } />
    <TopSpeed speed={ topSpeed } />
    <Mileage mileage={ mileage } />
  </div>
)
