import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../img/598c73df27313.png"

export default function Card() {
    return (
        <Link to={""} className="col-md-4 mb-2 col-12 text-decoration-none text-dark">
            <div className="courseCard">
                <img src={img} alt="" width={"100%"} />
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h3>Spanish Basic</h3>
                        <p>Melissa Jones</p>
                    </div>
                    <span className='price'>250$</span>
                </div>
                <p>Blandit accumsan ei vis, maiorum epicurei at mei nibh viderer ius pri te fabulas molestiae necess</p>
            </div>
        </Link>
    )
}
