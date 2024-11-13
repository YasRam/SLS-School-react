import React from 'react'
import img from "../../img/logo.png"
import logo from "../../img/logo2.png"
import { Link } from 'react-router-dom'


export default function Footer() {
  return (< div className=''>

    <div className="p-3 m-0 mt-3 bg-opacity-75 bg-dark text-light w-100 row justify-content-between align-items-center">

      <div className="col-2">
        <img src={img} alt="" width="100%" />
      </div>

      <div className="col-3">
        <h4>Quick links</h4>
        <div className="row">
          <div className="col-6">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Events">Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="news">News</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="courses">Courses</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="upcoming">UpComing</Link>
              </li>
            </ul>          
            </div>

          <div className="col-6">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex">
              <li className="nav-item">
                <Link className="nav-link" to="aboutus">Aboutus</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">Contact us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="detailes">Detailes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="sayAboutUs">SayAboutUs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="link">edit</Link>
              </li>
            </ul>          </div>
        </div>
      </div>

      <div className="col-2">
        <img src={logo} alt="" width="100%" />
      </div>

    </div>
    <footer className="pb-0 m-0 text-center bg-dark">

      <p className="p-0 m-0">copyrightd</p>
    </footer>
  </div>

  )
}
