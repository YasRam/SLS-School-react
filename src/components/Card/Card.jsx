import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {

    // console.log(props.course);
    
    return (
        <Link to={""} className="col-md-4 mb-2 col-12 text-decoration-none text-dark h-100">
            <div className="courseCard h-100">
                <img src={props.cImg} alt="" className='w-100' style={{"height":"225px"}} />
                <div className="d-flex justify-content-between align-items-center h-100">
                    <div style={{"height":"75px"}}>
                        <h3>{props.cName}</h3>
                        <p>{props.cTeacher}</p>
                    </div>
                    <span className='price'>{props.cPrice}$</span>
                </div>
                <p>{props.cDetailes}</p>
            </div>
        </Link>
    )
}
