import React from 'react'

import { Content, Copyright, Donationtab, Navigation, Contact, Form, Slideshow } from './components'
import './donatepage.css'

const Donate = () => {
  return (
    <div>
        <Navigation />
        <Donationtab />
        <Copyright />
    </div>
  )
}

export default Donate