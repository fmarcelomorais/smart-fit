import	'./Radio.css'
import React from 'react'

const Radio = ({name, options, set}) => {
  return (
    <div className='options'>
        {options.map((opt, i) => (
            <div  key={i}>
            <label htmlFor={i}>
            <input 
                type='radio' 
                id={i} 
                name={name} 
                value={opt.hour}  
                onChange={({target}) => set(target.value)}
                />
                {opt.hour}
            </label>        
            <p>{opt.weekdays}</p>
            <hr />
            </div>
    ))}
    </div>
  )
}

export default Radio