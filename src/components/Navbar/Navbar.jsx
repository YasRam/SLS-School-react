import React from 'react'
import logo from "../../img/logo.png"

import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light  w-100">
        <div className="container">
            <Link className="navbar-brand" to="home"><img src={logo} className="w-100" alt=""/></Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
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
                </ul>
            </div>
        </div>
    </nav>

  )
}
