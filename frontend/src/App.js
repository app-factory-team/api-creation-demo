import React, { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchError from './components/SearchError'
import CarStats from './components/CarStats'
import fetchCarInfo from './lib/fetchCarInfo'
import Header from './components/Header'
import Footer from './components/Footer'

export default () => {
  const [inputReg, setInputReg] = useState('')
  const [confirmedInputReg, setConfirmedInputReg] = useState('')
  const [carData, setCarData] = useState(undefined)
  const [searchError, setSearchError] = useState(false)

  useEffect(() => {
    if (confirmedInputReg) fetchCarInfo(setCarData, setSearchError)(confirmedInputReg)
  }, [confirmedInputReg, searchError])

  return (
    <div className='App'>
      <Header />
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
      <Footer />
    </div>
  )
}
