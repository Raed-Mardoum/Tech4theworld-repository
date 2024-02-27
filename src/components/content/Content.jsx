import React from 'react';
import './content.css';

const Content = (props) => {
  return (
    <div className='content'>
      <div className="context">

        <h1>{props.header}</h1>

        <p className='text'>{props.text1}</p>
        <p className='text'>{props.text2}</p>
        <p className='text'>{props.text3}</p>

      </div>

      <img src={props.link}/>
    </div>
  )
}

export default Content