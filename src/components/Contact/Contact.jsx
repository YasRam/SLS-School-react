import React from 'react'
import img from "../../img/598c73df27313.png"

export default function Contact() {
  return (
    <section class=" text-center container">
      <h2 class="p-3" id="contact_us">Contact us</h2>

      <div class="row m-3">
        <div class="col-6 text-start m-auto">
          <div class="pb-1">
            <h5 class="d-inline-block">Phone 1:</h5>
            <p class="d-inline-block">alkdj fjaskl fdslj </p>
          </div>
          <div class="pb-1">
            <h5 class="d-inline-block">Phone 2:</h5>
            <p class="d-inline-block">alkdj fjaskl fdslj </p>
          </div>
          <div class="pb-1">
            <h5 class="d-inline-block">Phone 3:</h5>
            <p class="d-inline-block">alkdj fjaskl fdslj </p>
          </div>
          <div class="pb-1">
            <h5 class="d-inline-block">Address</h5>
            <p class="d-inline-block">alkdj fjaskl fdslj </p>
          </div>
          <div class="pb-1">
            <h5 class="d-inline-block">Address</h5>
            <p class="d-inline-block">alkdj fjaskl fdslj </p>
          </div>
        </div>
        <div class="col-6 event mb-3">
          {/* <div class="desc d-flex justify-content-center align-items-end mx-2">
            العاب
          </div>
          <img src={img} class="w-100" alt="" /> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1072.9128759973187!2d29.945251182890587!3d31.211496470465615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c38a02d00cbd%3A0xf78a55e7b4c2a09b!2z2YXYr9in2LHYsyDYs9mK2K_ZiSDYrNin2KjYsSDZhNmE2LrYp9iqINio2YbYp9iq!5e0!3m2!1sen!2seg!4v1721300031726!5m2!1sen!2seg" width="600" height="450" style={{"border":0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>

      </div>
    </section>
  )
}
