import React from 'react'
import img from "../../img/598c73df27313.png"

export default function SayAboutUs() {
    return (<>
        <h2 className='pt-3'>They said about us</h2>
        <div className='container'>
            <div className="row align-items-center text-start ">
                <p className='col-8 text-align-left l-text'>
                    The school’s obtaining, and subsequently renewing, the certificate of the General Authority for Quality Assurance and Accreditation is an acknowledgment of this educational institution’s commitment to applying the highest standards of educational quality.
                </p>
                <div className="col-4">
                    <img src={img} alt="" width="100%" />
                </div>
            </div>
        </div>
    </>

    )
}
