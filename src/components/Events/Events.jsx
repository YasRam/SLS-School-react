import React from 'react'
import img from "../../img/598c73df27313.png"
export default function Events() {
  return (
    <section class="pb-4 text-center container" id="events">
        <h2 class="p-3">Last events</h2>
        <div class="row ">
            <div class="col-4 event mb-3">
                <div class="desc d-flex justify-content-center align-items-end mx-2">
                    العاب
                </div>
                <img src={img} class="w-100" alt=""/>
            </div>
            <div class="col-4 event mb-3">
                <div class="desc d-flex justify-content-center align-items-end mx-2">
                    العاب
                </div>
                <img src={img} class="w-100" alt=""/>
            </div>
            <div class="col-4 event mb-3">
                <div class="desc d-flex justify-content-center align-items-end mx-2">
                    العاب
                </div>
                <img src={img} class="w-100" alt=""/>
            </div>
            <div class="col-4 event mb-3">
                <div class="desc d-flex justify-content-center align-items-end mx-2">
                    العاب
                </div>
                <img src={img} class="w-100" alt=""/>
            </div>
            <div class="col-4 event mb-3">
                <div class="desc d-flex justify-content-center align-items-end mx-2">
                    العاب
                </div>
                <img src={img} class="w-100" alt=""/>
            </div>
            <div class="col-4 event mb-3">
                <div class="desc d-flex justify-content-center align-items-end mx-2">
                    العاب
                </div>
                <img src={img} class="w-100" alt=""/>
            </div>
            <div class="col-4 event mb-3">
                <div class="desc d-flex justify-content-center align-items-end mx-2">
                    العاب
                </div>
                <img src={img} class="w-100" alt=""/>
            </div>
            <div class="col-4 event mb-3">
                <div class="desc d-flex justify-content-center align-items-end mx-2">
                    العاب
                </div>
                <img src={img} class="w-100" alt=""/>
            </div>

        </div>
        <button className='btn btn-info'>All Event</button>
    </section>
  )
}
