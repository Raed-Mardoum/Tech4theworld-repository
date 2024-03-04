import React from 'react'

import { Content, Copyright, Donationtab, Navigation, Contact, Form, Slideshow } from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className="background"></div>
        <Navigation />
        <Slideshow />
        <Content header="World-wide Crisis" text1="Approximately 700 million people suffer from poverty. This causes individuals to lack access to electronic equipment. Technology has become a priority in today's modern world, electronics are considered a human need." text2="In a 2021 UN report, approximately 46 countries have been identified to lack access to technology. Approximately 660 million people are living in extreme poverty, this equates to 8.5% of the population." text3="Help individuals escape the grasp of poverty by providing used electronics to people in need. With your positive collaboration, we can strive and push to extinguish poverty in the world." link="https://media.pri.org/s3fs-public/story/images/olpc-2007.jpg" hide_list="none" />
        <Content header="Our initiative" contentbullet1="Ending poverty globally" contentbullet2="Providing electronics to people in need" contentbullet3="Inspiring individuals to donate" contentbullet4="Endorsing reusing products instead of disposing products" link="https://st4.depositphotos.com/12982378/i/600/depositphotos_206385620-stock-photo-smiling-african-american-delivery-man.jpg" />
        <Content header="Your contribution" text1="Everyone has a goal. However, for some people their ambitious goals are blocked by their financial state. Your donation will help individuals reach their goals, either educational, financial, or personal goals." text2="With your donation of old or used electronics, individuals who suffer financially are able to reach a better life, or are able to escape the grasp of poverty." text3="Help us build:" contentbullet1="A sustainable future" contentbullet2="A positive future" contentbullet3="A poverty free future" contentbullet4_hidden="none" content_text_reposition="75px 0px 0px 0px" link="https://img.freepik.com/free-photo/two-confident-business-man-shaking-hands-during-meeting-office-success-dealing-greeting-partner-concept_1423-185.jpg" />
        <Copyright />
    </div>
  )
}

export default App