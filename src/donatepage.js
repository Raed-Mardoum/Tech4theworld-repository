import React from 'react'

import { Content, Copyright, Donationtab, Navigation, Contact, Form, Slideshow } from './components'
import './donatepage.css'

const Donate = () => {
  return (
    <div>
        <Navigation />
        <div className='donate-container'>
          <Donationtab cover="https://media.wired.com/photos/64daad6b4a854832b16fd3bc/191:100/w_1280,c_limit/How-to-Choose-a-Laptop-August-2023-Gear.jpg" donate_description="Laptops for students" donate_value="60%" />
        </div>
        <Copyright />
    </div>
  )
}

export default Donate