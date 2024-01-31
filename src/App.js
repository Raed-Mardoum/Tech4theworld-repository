import React from 'react'

import { Content, Copyright, Donationtab, Navigation, Contact, Form, Slideshow } from './components'
import './App.css'

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
          <Navigation />
          <Slideshow />
        </div>
        <Content />
        <Content />
        <Content />
        <Copyright />
    </div>
  )
}

export default App