import React from 'react'
import img from "../../img/logo.png"
import Intro from '../intro/Intro'
import Contact from '../Contact/Contact'
import SayAboutUs from '../SayAboutUs/SayAboutUs'


export default function AboutUs() {
  return (
    <>
      <Intro />
      <div className='bg-body-secondary'>
        <SayAboutUs/>
      </div>
      <Contact />

    </>
  )
}
