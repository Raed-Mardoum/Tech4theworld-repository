import React from 'react';
import './copyright.css';

const Copyright = () => {
  return (
    <div className='copyright-container'>
        <h1 className='copyright-title'>Tech4theworld</h1>
        <img className="copyright-globe" src="https://upload.wikimedia.org/wikipedia/commons/2/22/Earth_Western_Hemisphere_transparent_background.png" alt="globe" />

        <div className='copyright-vertical-div'></div>

        <div className='copyright-info'>

          <i class="fa fa-facebook-official" aria-hidden="true"></i>
          
          <i class="fa fa-twitter-square" aria-hidden="true"></i>
          
          <i class="fa fa-instagram" aria-hidden="true"></i>
          
          <i class="fa fa-youtube-play" aria-hidden="true"></i>


          <p className='copyright-icon-label'>Facebook</p>

          <p className='copyright-icon-label'>Twitter</p>          
          
          <p className='copyright-icon-label'>Instagram</p>          
          
          <p className='copyright-icon-label'>Youtube</p>          
        
        </div>
  
    </div>
  )
}

export default Copyright