import React from 'react'
import img from "../../img/logo.png"
import VirticalCard from '../Card/VirticalCard'

export default function News() {
  return (
    <>

      <div className="container">
        <div className="row justify-content-around">
          <div className=" col-lg-6 text-start">
            <h2>News</h2>
            <p className="text-black-50">
              Etiam porttitor risus massa nec condiment gravida nibh vel velit auctor aliquet. Aenean sollicitudinlorem quis bibendum
            </p>

            
            <VirticalCard/>
            <VirticalCard/>
            <VirticalCard/>

          </div>
          <div className="col-lg-6 text-start">
            <h2>Video</h2>
            <p className="text-black-50">
              Etiam porttitor risus massa nec condiment gravida nibh vel velit auctor aliquet. Aenean sollicitudinlorem quis bibendum
            </p>
            <img src={img} alt="" width={"100%"} />

          </div>

        </div>
      </div>

    </>
  )
}
