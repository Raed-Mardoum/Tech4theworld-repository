import React from 'react'

import { Content, Copyright, Donationtab, Navigation, Contact, Form, Slideshow } from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <img className="background" src="https://t3.ftcdn.net/jpg/04/49/30/30/360_F_449303038_AcLRKrgDBGlb4li8b6ddImLxRPWJW0sZ.jpg" />
        <Navigation />
        <Slideshow />
        <Content header="World-wide Crisis" text="Approximately 700 million people suffer from poverty. This causes individuals to lack access to electronic equipment. Technology has become a priority in today's modern world, electronics are considered a human need." link="https://media.pri.org/s3fs-public/story/images/olpc-2007.jpg" />
        <Content />
        <Content />
        <Copyright />
    </div>
  )
}

export default App