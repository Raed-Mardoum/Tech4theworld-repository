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

        <ul className="content-list" style={{display: props.hide_list}}>
          <li>{props.contentbullet1}</li>
          <li>{props.contentbullet2}</li>
          <li>{props.contentbullet3}</li>
          <li>{props.contentbullet4}</li>
        </ul>

      </div>

      <img className='content-img' src={props.link}/>
    </div>
  )
}

export default Content