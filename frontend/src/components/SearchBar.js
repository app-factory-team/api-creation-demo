import React from 'react'

export default ({
  inputReg,
  searchError,
  setConfirmedInputReg,
  setInputReg
}) => (
  <form
    className='search'
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
      maxLength='10'
      className={ searchError ? 'interactable search-bar search-error' : 'interactable search-bar' }
    />
    <button type='submit' className='interactable search-button'>🔎 Search</button>
  </form>
)
