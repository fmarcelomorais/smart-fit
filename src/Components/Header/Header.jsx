import './Header.css'
import logo from '../../images/logo.svg'
import React from 'react'

const Header = () => {
  return (
    <header className='container-fluid'>
        <div className="header-logo">
          <img src={logo} alt='logomarca' />
        </div>
    </header>
  )
}

export default Header