import React from 'react'

import { Content, Copyright, Donationtab, Navigation, Contact, Form, Slideshow } from './components'
import './donatepage.css'

const Donate = () => {
  return (
    <div>
        <Navigation />

        <div className='space'></div>

        <Content header="Instructions:" contentbullet1="" contentbullet2="" contentbullet3="" link="https://www.am-cbr.net/wp-content/uploads/2022/10/black-delivery-man-holding-pizza-boxes-using-smart-W8AC8MN.png" />

        <button className='donate-button-initiative'>Create initiative</button>

        <div className='donate-container'>
          <Donationtab cover="https://media.wired.com/photos/64daad6b4a854832b16fd3bc/191:100/w_1280,c_limit/How-to-Choose-a-Laptop-August-2023-Gear.jpg" donate_description="Laptops for students" donate_value="60%" />
          <Donationtab cover="https://dubailocal.ae/assets/more_images/1697602137_b36530d7a2225adc53b6.jpg" donate_description="Reclycling old devices" donate_value="30%" />
          <Donationtab cover="https://media.istockphoto.com/id/1367870390/photo/smiling-happy-healthy-caucasian-senior-old-elderly-man-grandfather-relaxing-resting-on-the.webp?b=1&s=170667a&w=0&k=20&c=JPf9aJ2lTc_sGMhCPMCHX7mpG4ENPJS5_yfahh64uCQ=" donate_description="Donating devices to the elderly" donate_value="20%" />
          <Donationtab cover="https://s44650.pcdn.co/wp-content/uploads/2023/07/malawi-1200-1621575122-1024x683.jpg" donate_description="Providing technology to underdeveloped countries" donate_value="70%" />
          <Donationtab cover="https://s44650.pcdn.co/wp-content/uploads/2023/07/malawi-1200-1621575122-1024x683.jpg" donate_description="Recruiting people to deliver donated devices" donate_value="40%" />
          <Donationtab cover="https://s44650.pcdn.co/wp-content/uploads/2023/07/malawi-1200-1621575122-1024x683.jpg" donate_description="Recruiting people to deliver donated devices" donate_value="40%" />
          <Donationtab cover="https://s44650.pcdn.co/wp-content/uploads/2023/07/malawi-1200-1621575122-1024x683.jpg" donate_description="Recruiting people to deliver donated devices" donate_value="40%" />
          <Donationtab cover="https://s44650.pcdn.co/wp-content/uploads/2023/07/malawi-1200-1621575122-1024x683.jpg" donate_description="Recruiting people to deliver donated devices" donate_value="40%" />
          <Donationtab cover="https://s44650.pcdn.co/wp-content/uploads/2023/07/malawi-1200-1621575122-1024x683.jpg" donate_description="Recruiting people to deliver donated devices" donate_value="40%" />
          <Donationtab cover="https://s44650.pcdn.co/wp-content/uploads/2023/07/malawi-1200-1621575122-1024x683.jpg" donate_description="Recruiting people to deliver donated devices" donate_value="40%" />
          <Donationtab cover="https://s44650.pcdn.co/wp-content/uploads/2023/07/malawi-1200-1621575122-1024x683.jpg" donate_description="Recruiting people to deliver donated devices" donate_value="40%" />
          <Donationtab cover="https://s44650.pcdn.co/wp-content/uploads/2023/07/malawi-1200-1621575122-1024x683.jpg" donate_description="Recruiting people to deliver donated devices" donate_value="40%" />
          <Donationtab cover="https://s44650.pcdn.co/wp-content/uploads/2023/07/malawi-1200-1621575122-1024x683.jpg" donate_description="Recruiting people to deliver donated devices" donate_value="40%" />
          <Donationtab cover="https://s44650.pcdn.co/wp-content/uploads/2023/07/malawi-1200-1621575122-1024x683.jpg" donate_description="Recruiting people to deliver donated devices" donate_value="40%" />
        </div>

        <Copyright />

    </div>
  )
}

export default Donate