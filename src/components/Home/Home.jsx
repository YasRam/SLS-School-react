import React from 'react'
import img from "../../img/logo.png"
import AboutUs from '../AboutUs/AboutUs'
import SayAboutUs from '../SayAboutUs/SayAboutUs'
import Contact from '../Contact/Contact'
import Intro from '../intro/Intro'

export default function Home() {
  return (
    <>
      <section class="main_sec ">
        <div className="layer vh-100 d-flex align-items-center pt-5">
          <div class="container">
            <div class="main_info">
              <h1>مدرسة سيدي جابر للغات بنات</h1>
              <h1>Sidi Gaber Language School For Girls</h1>
              <a class="btn btn-danger" href="#contact_us"> contact us</a>
            </div>
          </div>
        </div>
      </section>

      <Intro />

      <h2>انجازات</h2>

      <div className='bg-body-secondary'>
        <SayAboutUs />
      </div>

      <Contact />

    </>
  )
}
