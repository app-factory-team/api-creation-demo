import { carInfoUrl } from '../constants'

export default (setCarData, setSearchError) => async registration => {
  try {
    // const response = await fetch(`${carInfoUrl}${registration}`)
    // const newCarData = await response.json()
    const newCarData = {
      registration: 'ABC123D',
      color: 'blue',
      mileage: 10021,
      topSpeed: 100
    }
    setCarData(newCarData)
    setSearchError(false)
  } catch (error) {
    setSearchError(true)
  }
}
