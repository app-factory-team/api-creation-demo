import React from 'react'
import ReactSpeedometer from 'react-d3-speedometer'

export default ({
  speed
}) => (
  <ReactSpeedometer
    value={ speed }
    maxSegmentLabels={0}
    segments={200}
    minValue={0}
    maxValue={ Math.max(140, speed + 20) }
    startColor={'#cbdcec'}
    endColor={'#963694'}
    needleColor={'black'}
    currentValueText={'Top Speed: ${value} mph'}
  />
)
