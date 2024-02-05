import React from 'react';
import './navigation.css';

const Navigation = () => {
  return (
    <div className='nav-container'>
        <a className="nav-link" href="">Home</a>
        <div className='ver-div-nav'></div>
        <a className="nav-link" href="">Donation</a>
        <div className='ver-div-nav'></div>
        <a className="nav-link" href="">Contact</a>
    </div>
  )
}

export default Navigation