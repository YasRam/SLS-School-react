import React, { useState } from 'react'

import img from "../../img/logo.png"

import main from "../../img/course/default.jpg"
import French from "../../img/course/French.webp"
import Italian from "../../img/course/Italian.jpeg"
import English from "../../img/course/english.jpg"
import german from "../../img/course/german.jpeg"

import "./CoursesStyle.css"
import Card from '../Card/Card'

export default function Courses() {

    const courses =  [
        {
            cImg: { French },
            cName: 'French',
            cDetailes: 'basic of french',
            cPrice: '200',
            cTeacher: 'naglaa amer'
        },
        {
            cImg: { French },
            cName: 'French',
            cDetailes: 'basic of french',
            cPrice: '200',
            cTeacher: 'naglaa amer'
        },
        {
            cImg: { French },
            cName: 'French',
            cDetailes: 'basic of french',
            cPrice: '200',
            cTeacher: 'naglaa amer'
        },
    ];
    // const cards = courses.forEach(course => {
    //     <Card cImg={French} cName='French' cDetailes='basic of french' cPrice='200' cTeacher='naglaa amer' />
    // })
    // console.log("courses", cards);

    return (
        <>
            <h2>Popular Courses</h2>

            <div className='d-flex bg-body-secondary my-4'>
                <div className='col-6'>
                    <img src={main} alt="" width={"100%"} />

                </div>
                <div className='col-6 text-start '>
                    <div className='w-75 mx-auto my-5'>
                        <h2>our strategy is prepare our students to future</h2>
                        <p className='text-black-50'>

                            You will find many subjects and excellent teachers who are dedicated and put in the effort to improve your son.
                            Great teachers often possess qualities such as strong communication skills, empathy, and a passion
                            for lifelong learning.
                            They create a positive and engaging classroom environment, inspiring students to reach their full potential.
                            <br />
                            <strong>or</strong>
                            <br />
                            At our school, we offer a diverse range of subjects and have a team of dedicated teachers committed to enhancing your child’s education. Our educators are known for their strong communication skills, empathy, and passion for lifelong learning. They work tirelessly to create a positive and engaging classroom environment, inspiring students to reach their full potential.
                            We are proud of our commitment to academic excellence and the supportive community we foster. Thank you for choosing our school for your child’s educational journey.
                            <br />
                            <strong>or</strong>
                            <br />
                            في مدرستنا، نقدم مجموعة متنوعة من المواد ولدينا فريق من المعلمين المتفانين الملتزمين بتعزيز تعليم طفلك. يُعرف المعلمون لدينا بمهارات الاتصال القوية والتعاطف والشغف بالتعلم مدى الحياة. إنهم يعملون بلا كلل لخلق بيئة صفية إيجابية وجذابة، وإلهام الطلاب لتحقيق إمكاناتهم الكاملة.
                            نحن فخورون بالتزامنا بالتميز الأكاديمي والمجتمع الداعم الذي نعززه. شكرًا لاختيارك مدرستنا لرحلة طفلك التعليمية.
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
                    <Card cImg={Italian} cName='Italian' cDetailes='basic of french' cPrice='200' cTeacher='mona amer' />
                    <Card cImg={English} cName='English' cDetailes='basic of french' cPrice='200' cTeacher='saad amer' />
                    <Card cImg={german} cName='german' cDetailes='basic of german' cPrice='200' cTeacher='ali amer' />

                </div>
            </div>

        </>
    )
}
