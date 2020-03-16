import React from 'react'

export default ({
  inputReg, setInputReg, setConfirmedInputReg, searchError
}) => (
  <div>
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
  </div>
)
