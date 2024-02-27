import React from 'react'

import { Content, Copyright, Donationtab, Navigation, Contact, Form, Slideshow } from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <img className="background" src="https://t3.ftcdn.net/jpg/04/49/30/30/360_F_449303038_AcLRKrgDBGlb4li8b6ddImLxRPWJW0sZ.jpg" />
        <Navigation />
        <Slideshow />
        <Content header="World-wide Crisis" text1="Approximately 700 million people suffer from poverty. This causes individuals to lack access to electronic equipment. Technology has become a priority in today's modern world, electronics are considered a human need." text2="In a 2021 UN report, approximately 46 countries have been identified to lack access to technology. Approximately 660 million people are living in extreme poverty, this equates to 8.5% of the population." text3="Help individuals escape the grasp of poverty by providing used electronics to people in need. With your positive collaboration, we can strive and push to extinguish poverty in the world." link="https://media.pri.org/s3fs-public/story/images/olpc-2007.jpg" />
        <Content header="Our initiatives" link="https://st4.depositphotos.com/12982378/i/600/depositphotos_206385620-stock-photo-smiling-african-american-delivery-man.jpg" />
        <Content />
        <Copyright />
    </div>
  )
}

export default App