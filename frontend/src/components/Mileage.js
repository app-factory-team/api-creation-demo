import React from 'react'
import ReactSpeedometer from 'react-d3-speedometer'

export default ({ mileage }) => (
  <ReactSpeedometer
    value={ mileage }
    maxSegmentLabels={6}
    segments={5}
    minValue={0}
    maxValue={ Math.max(200000, mileage + 20) }
    startColor={'#96b753'}
    endColor={'#f03434'}
    needleColor={'black'}
    currentValueText={'Mileage: ${value} miles'}
  />
)
