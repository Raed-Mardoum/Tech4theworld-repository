import React from 'react'

import { Content, Copyright, Donationtab, Navigation, Contact, Form, Slideshow } from './components'
import './contactpage.css'

const Contactpage = () => {
  return (
    <div className='contactpage'>
        <div className='contactbackground' ></div>
        <Navigation />
        <Contact />
        <Form />
        <Copyright />
    </div>
  )
}

export default Contactpage