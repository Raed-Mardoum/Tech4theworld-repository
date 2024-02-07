import React from 'react';
import './content.css';

const Content = (props) => {
  return (
    <div className='content'>
      <div className="context">

        <h1>{props.header}</h1>

        <p>{props.text}</p>

      </div>

      <img src={props.link}/>
    </div>
  )
}

export default Content