import './Checkbox.css'
import React from 'react'

const Checkbox = ({label, value, set}) => {

  const handleChange = ({target}) => {
    if(target.checked){
      set(true)
    }else{
      set(false)
    }
  }
  return (
    <div className='chbox'>
        <input 
            type="checkbox" 
            name="closed" 
            id="closed" 
            checked={value} 
            onChange={handleChange}
        />
        <label htmlFor="closed">{label}</label>
    </div>
  )
}

export default Checkbox