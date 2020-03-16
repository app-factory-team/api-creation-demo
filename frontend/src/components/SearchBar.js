import React from 'react'

export default ({
  inputReg,
  searchError,
  setConfirmedInputReg,
  setInputReg
}) => (
  <form
    className='search-bar'
    onSubmit={ event => {
      event.preventDefault()
      setConfirmedInputReg(inputReg)
      return false
    }}
  >
    <input
      value={ inputReg }
      onChange={ event => setInputReg(event.target.value.toUpperCase()) }
      type='text'
      name='reg'
      autoComplete='off'
      maxlength='10'
      className={ searchError ? 'search-error' : '' }
    />
    <button type='submit'>Search</button>
  </form>
)
