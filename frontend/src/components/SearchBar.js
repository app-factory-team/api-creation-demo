import React from 'react'

export default ({
  inputReg,
  searchError,
  setConfirmedInputReg,
  setInputReg
}) => (
  <form onSubmit={ event => {
    event.preventDefault()
    setConfirmedInputReg(inputReg)
    return false
  } }>
    <input
      value={ inputReg }
      onChange={ event => setInputReg(event.target.value) }
      type='text'
      name='reg'
      autoComplete='off'
      className={ searchError ? 'search-error' : '' }
    />
    <button type='submit'>Search</button>
  </form>
)
