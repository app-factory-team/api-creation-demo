import React, { useState } from 'react'
import './App.css'
import CarStats from './components/CarStats'

const SearchBar = ({
  inputReg, setInputReg, updateData
}) => (
  <div>
    <span>{ inputReg }</span>
    <form onSubmit={ event => {
      event.preventDefault()
      updateData(inputReg)
      return false
     } }>
      <input
        value={ inputReg }
        onChange={ event => setInputReg(event.target.value) }
        type='text'
        name='reg'
      />
      <button type='submit'>Search</button>
    </form>
  </div>
)

export default () => {
  const [inputReg, setInputReg] = useState('')

  const updateData = console.log

  return (
    <div className='App'>
        <header>Header</header>
        <main>
          <SearchBar
            inputReg={ inputReg }
            setInputReg={ setInputReg }
            updateData= { updateData }
          />
          { inputReg && <CarStats registration={ inputReg } /> }
        </main>
        <footer>Footer</footer>
    </div>
  )
}
