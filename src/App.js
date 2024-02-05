import React from 'react'

import { Content, Copyright, Donationtab, Navigation, Contact, Form, Slideshow } from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <img className="background" src="https://t3.ftcdn.net/jpg/04/49/30/30/360_F_449303038_AcLRKrgDBGlb4li8b6ddImLxRPWJW0sZ.jpg" />
        <Navigation />
        <Slideshow />
        <Content />
        <Content />
        <Content />
        <Copyright />
    </div>
  )
}

export default App