import React from 'react'
import img from "../../img/logo.png"
import IMG from "../../img/News/2ndprize.jpg"
import VirticalCard from '../Card/VirticalCard'
import axios from "axios";

export default function News() {


  axios.get("http://127.0.0.1:8000/api/events")
    .then(res => {
      console.log(res.data);
    });


  return (
    <>

      <div className="container">
        <div className="row justify-content-around">
          <div className=" col-lg-6 text-start">
            <h2>News</h2>
            <p className="text-black-50">
              Etiam porttitor risus massa nec condiment gravida nibh vel velit auctor aliquet. Aenean sollicitudinlorem quis bibendum
            </p>


            <VirticalCard />
            <VirticalCard />
            <VirticalCard />

          </div>
          <div className="col-lg-6 text-start">
            {/* <h2>Video</h2> */}
            <p className="text-black-50 text-end ">
              نحن حريصون دائما على خلق بيئة للمنافسة بين الطالبات والاحتكاك بخبرات أخرى ويظهر هذا واضحا في الاشتراك بالمسابقات المختلفة مثل
              عباقرة شرق والحصول على المركز الثاني على مستوى مدارس إداراة شرق
              مسابقات القرآن الكريم والثقافة الإسلامية على مستوى بيننا وبين مدرسة سيدي جابر بنين والأداء المشرف للطالبات
            </p>
            <img src={IMG} alt="" className='w-100 rounded' />

            <p className="text-black-50 text-start tex ">
            We always care about creating a competitive and encouraging environment for our students, helping them learn from different experiences. This can be seen clearly in our participation in several competitions
            </p>

          </div>

        </div>
      </div>

    </>
  )
}
