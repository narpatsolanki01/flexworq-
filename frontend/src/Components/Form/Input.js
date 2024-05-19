import React from 'react'

function Input({ col, placeholder, onChnage, value, name }) {
  return (
    col ? <div className={`col-12 col-lg-${col}`}>
      <input type="text" name={name?name:''} onChange={onChnage} className='form-control py-2 mt-2 bg-light-dark border-0 rounded-1 placeholder-f-13' placeholder={`Enter your ${placeholder}`} value={value ? value : ''} />
    </div> : <div>
      <input type="text" name={name?name:''} onChange={onChnage} className='form-control py-2 bg-light-dark border-0 rounded-1 placeholder-f-13' placeholder={`Enter your ${placeholder}`} value={value ? value : ''} />
    </div>
  )
}

export default Input