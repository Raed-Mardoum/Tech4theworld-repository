import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className='Contact-background'>
        <h1>Contact information</h1>

        <div className='contact-content'>

          <div className='contact-content-div'>

            <h3>Email: </h3>
            <p>raedmrdom@gmail.com</p>

            <h3>Phone number: </h3>
            <p>050-2527425</p>

          </div>

          <div className='contact-content-div'>

            <h3>Social: </h3>
            <div className='social'>

              <i className="fa fa-facebook-official" aria-hidden="true"></i>
              
              <i className="fa fa-twitter-square" aria-hidden="true"></i>
              
              <i className="fa fa-instagram" aria-hidden="true"></i>
              
              <i className="fa fa-youtube-play" aria-hidden="true"></i>

            </div>

          </div>

        </div>



    </div>
  )
}

export default Contact