import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../img/598c73df27313.png"

export default function VirticalCard() {
    return (
        <Link to={""} className="col-md-4 col-12 text-decoration-none text-dark">
            <div className=" d-lg-flex my-3">
                <img src={img} className='w-25' alt="" />

                <div >
                    <h3>Spanish Basic</h3>
                    <p className='text-black-50'>Blandit accumsan ei vis, maiorum </p>

                </div>
            </div>
        </Link>
    )
}
