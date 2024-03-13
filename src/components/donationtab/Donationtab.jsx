import React from 'react';
import './donationtab.css';

const Donationtab = (props) => {
  return (
    <div className='donate_element'>
        <img src={props.cover} />
        <h2>{props.donate_description}</h2>
        <p>Goal completion: {props.donate_value}</p>
    </div>
  )
}

export default Donationtab