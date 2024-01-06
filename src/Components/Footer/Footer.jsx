import './Footer.css'
import React from 'react'
import logo from '../../images/logo.svg'


const Footer = () => {
    const year = new Date(Date.now()).getFullYear()
  return (
    <footer className='container-fluid'>
        <div className="footer">
            <img src={logo} alt="logo" />
            <p>Todos os direitos reservados {year}</p>
        </div>
    </footer>
  )
}

export default Footer