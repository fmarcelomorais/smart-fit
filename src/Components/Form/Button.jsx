import './Button.css'
import React from 'react'

const Button = ({value, classe, set}) => {
  return (
    < >
        <button className={`btn btn-${classe}`} onClick={set}>{value}</button>
    </>
  )
}

export default Button