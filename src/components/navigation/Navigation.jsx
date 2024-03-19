import React from 'react';
import './navigation.css';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='nav-container'>

        <Link className="nav-link" to="/">Home</Link>
      
        <div className='ver-div-nav'></div>
      
        <Link className="nav-link" to="/donate">Donation</Link>
      
        <div className='ver-div-nav'></div>
      
        <Link className="nav-link" to="/contact">Contact</Link>

    </div>
  )
}

export default Navigation