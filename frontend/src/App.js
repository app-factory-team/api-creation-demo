import React, { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchError from './components/SearchError'
import CarStats from './components/CarStats'

export default () => {
  const [inputReg, setInputReg] = useState('')
  const [confirmedInputReg, setConfirmedInputReg] = useState('')
  const [carData, setCarData] = useState(undefined)
  const [searchError, setSearchError] = useState(false)

  useEffect(() => {
    if (confirmedInputReg) {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:3000/car-info?reg=${confirmedInputReg}`)
          const newCarData = await response.json()
          setCarData(newCarData)
          setSearchError(false)
        } catch (error) {
          setSearchError(true)
        }
      }
      fetchData()
    }
  }, [confirmedInputReg, searchError])

  return (
    <div className='App'>
        <header>Header</header>
        <main>
          <SearchBar
            inputReg={ inputReg }
            setInputReg={ setInputReg }
            setConfirmedInputReg= { setConfirmedInputReg }
            searchError={ searchError }
          />
          { searchError && <SearchError /> }
          { carData && <CarStats { ...carData } /> }
        </main>
        <footer>Footer</footer>
    </div>
  )
}
