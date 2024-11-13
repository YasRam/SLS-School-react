import React from 'react'
import img from "../../img/logo.png"
import vision from "../../img/school/vision.jpg"
import mission from "../../img/school/mission.jpg"

export default function Intro() {
  return (
    <section class=" text-center container">
      <h2 class="p-3" id="about_us">Intro</h2>

      <div className='vision text-start row align-items-center mb-5 bg-vc_btn-success justify-content-between'>
        <div className="content col-12 col-md-8 ">
          <h3 className='l-text'>Vision</h3>
          <p className='ps-5 l-text'>Bringing up our girls to represent religion in the way they behave and take knowledge as a route, technology as a method, cooperation as their spirit and belonging as their motto and path</p>
          <p className='ps-5 pt-4 l-text'>Elever les apprenantes à representer la religion commeactes, l’enseignementcommeméthôde, la technologiecommefaçon de vivre, la culture commemanièred’âgir, la coopérationcomme esprit etl’apparterancecommesigne et comme travail.</p>
        </div>
        <div className='col-12 col-md-3'>
          <img src={vision} alt="" width={"100%"} />
        </div>
      </div>

      {/* massage */}
      <div className='vision text-end row flex-row-reverse align-items-center mb-5 justify-content-between'>
        <div className="content col-12 col-md-8">
          <h3 className=''>الرســـــــالة</h3>
          <ul className='pe-3 l-text'>
            <ol>استخدام استراتيجيات حديثة في التدريس وتفعيل التكنولوجيا بالمدرسة لتحقيق نواتج التعلم.</ol>
            <ol>اشتراك الطالبة في أنشطة تنمي لديها حب المعرفة والانتماء والابتكار وحب الوطن.</ol>
            <ol>استثمار المبنى المدرسي لتفعيل الانشطة التربوية.</ol>
            <ol>تدريب الطالبة على كيفية توظيف المعلومات لخدمتها وخدمة مجتمعها.</ol>
            <ol>تفعيل أنشطة وبرامج وحدة التدريب والجودة لإحداث التنمية المهنية للعاملين.</ol>
            <ol>تفعيل أنشطة وبرامج خطة المشاركة المجتمعية لتوطيد العلاقة بين المدرسة والأسرة والمجتمع المحيط.</ol>
            <ol>متابعة التزام العاملين بالعمل لرفع الكفاءة وتحسين الأداء.</ol>
          </ul>
        </div>
        <div className='col-12 col-md-3'>
          <img src={mission} alt="" width={"100%"} />
        </div>
      </div>
    </section>
  )
}
