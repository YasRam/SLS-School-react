import React from 'react'

import img from "../../img/logo.png"
import French from "../../img/course/French.webp"
import Italian from "../../img/course/Italian.jpeg"
import English from "../../img/course/english.jpg"
import main from "../../img/course/default.jpg"
import german from "../../img/course/german.jpeg"

import "./CoursesStyle.css"
import Card from '../Card/Card'
export default function Courses() {
    return (
        <>
            <h2>Popular Courses</h2>

            <div className='d-flex bg-body-secondary my-4'>
                <div className='col-6'>
                    <img src={img} alt="" width={"100%"} />

                </div>
                <div className='col-6 text-start '>
                    <div className='w-75 mx-auto my-5'>
                        <h2>Committed to educating and nurturing all students</h2>
                        <p className='text-black-50'>
                            Etiam porttitor risus massa nec condiment gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequatipsutis sem nibh id eis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                        </p>
                        <h5>Follow us</h5>
                        <div className='input-group'>
                            <input type="email" placeholder='Enter Your Mail' className='form-control' />
                            <input type="button" value="Submit" className='btn btn-info' />
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row justify-content-around">
                    <Card cImg={French} cName='French' cDetailes='basic of french' cPrice='200' cTeacher='naglaa amer' />
                    <Card cImg={Italian} cName='French' cDetailes='basic of french' cPrice='200' cTeacher='mona amer' />
                    <Card cImg={English} cName='French' cDetailes='basic of french' cPrice='200' cTeacher='saad amer' />
                    <Card cImg={german} cName='French' cDetailes='basic of german' cPrice='200' cTeacher='ali amer' />

                </div>
            </div>

        </>
    )
}
