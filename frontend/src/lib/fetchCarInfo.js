import { carInfoUrl } from '../constants'

export default (setCarData, setSearchError) => async registration => {
  try {
    const response = await fetch(`${carInfoUrl}${registration}`)
    const newCarData = await response.json()
    setCarData(newCarData)
    setSearchError(false)
  } catch (error) {
    setSearchError(true)
  }
}
