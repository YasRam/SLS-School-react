import React from 'react'
import VirticalCard from '../Card/VirticalCard'
import img from "../../img/598c73df27313.png"

export default function Detailes() {
    return (
        <>
            <div className="container">
                <div className="row my-3">
                    <div className="col-8">
                        <h2 className='text-start'>Title</h2>
                        <img src={img} className='w-100' alt="" />
                        <h5>About this course</h5>
                        <p>Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosquad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue.
                            Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.</p>

                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex justify-content-start gap-1 align-items-center w-75'>
                                <img src={img} className='w-25' alt="" />
                                <div className='border-end border-3 px-1 '>
                                    <h6>Instructor:</h6>
                                    <p>Melissa Jones</p>
                                </div>
                                <div className='px-1'>
                                    <h6>Categories:</h6>
                                    <p>Melissa Jones</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center gap-3'>
                                <span>210</span>
                                <button className='btn btn-outline-success w-100'>Buy Course</button>
                            </div>
                        </div>


                    </div>
                    <div className="col-4">
                        <h4 className='text-start'>Related Courses</h4>
                        <VirticalCard />
                        <VirticalCard />
                        <VirticalCard />
                        <VirticalCard />
                    </div>
                </div>
            </div>


        </>

    )
}
