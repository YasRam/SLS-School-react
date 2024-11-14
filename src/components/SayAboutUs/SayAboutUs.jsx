import React from 'react'
import img from "../../img/logo.png"
import preparing from "../../img/school/preparing.jpg"

export default function SayAboutUs() {
    return (<>
        <h2 className='pt-3'>They said about us</h2>
        <div className='container pb-3'>
            <div className="row align-items-center text-start ">
                <p className='col-12 col-md-8 text-align-left l-text'>
                    The school’s obtaining, and subsequently renewing, the certificate of the General Authority for Quality Assurance and Accreditation is an acknowledgment of this educational institution’s commitment to applying the highest standards of educational quality.
                </p>
                <div className="col-12 col-md-4">
                    <img src={preparing} alt="" className='w-100 rounded-2' />
                </div>
            </div>
        </div>
    </>

    )
}
