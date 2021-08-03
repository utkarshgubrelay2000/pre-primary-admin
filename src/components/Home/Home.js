import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Home.css";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import { fetchClasses } from "../../Api";
import { useHistory } from 'react-router-dom'
export default function Home() {
  const [isUser,setIsUser]=useState(true)
  const [primaryData, setprimaryData] = useState([
    {
      title: "Lower Kindergarten (LKG)",
      img: "/assets/images/LKG-01.svg", link: { pathname: '/pre-primaryCheckout', state: "LKG" }
    },
    {
      title: "Upper Kindergarten (UKG)",
      img: "/assets/images/UKG-01.svg", link: { pathname:  '/pre-primaryCheckout', state: "UKG" }
    },
    {
      title: "Nursery",
      img: "/assets/images/UKG-01.svg", link: { pathname: 
        '/pre-primaryCheckout', state: "Nursery" }
    },
  ]);
  let history = useHistory()

  return (
    <Layout>
      <div id="page" className="section">

        {/* Slider/Intro Section Start */}
        <div className="intro2-section section">
          <div className="container">
            <div className="row row-cols-lg-2 row-cols-1 max-mb-n30">
              {/* Intro One Content Start */}
              <div className="col align-self-center max-mb-30" data-aos="fade-up">
                <div className="intro2-content text-center text-md-left">
                  <h2 className="title">Introduce your young one to the joys of learning early.</h2>
                  <div className="desc">
                    <p>Pre-primary is just the right time to teach your kids that learning is meant to be fun and not a punishment.
                    </p>
                  </div>
                </div>
              </div>
              {/* Intro One Content End */}
              {/* Intro One Course Start */}
              <div className="col max-mb-30" data-aos="fade-up">
                <div className="contact-image intro2-image">
                  <img src="assets/images/pre-primary-bg.jpg" alt="" />
                  {/* Animation Shape Start */}
                  <div className="shape shape-1 scene">
                    <span data-depth={3}>
                      <img src="assets/images/shape-animation/about-shape-1.png" alt="" />
                    </span>
                  </div>
                  <div className="shape shape-2 scene">
                    <span data-depth={-3}><img src="assets/images/shape-animation/about-shape-1.png" alt="" /></span>
                  </div>
                  <div className="shape shape-3 scene">
                    <span data-depth={4}>shape 3</span>
                  </div>
                  <div className="shape shape-4 scene">
                    <span data-depth={4}><img src="assets/images/shape-animation/shape-1.png" alt="" /></span>
                  </div>
                  <div className="shape shape-5 scene">
                    <span data-depth={4}><img src="assets/images/shape-animation/nwesletter-shape-2.png" alt="" /></span>
                  </div>
                  {/* Animation Shape End */}
                </div>
              </div>
              {/* Intro One Course End */}
            </div>
          </div>
        </div>
        {/* Slider/Intro Section End */}
        {/* Brand Section Start */}
        <div className="brand-section section section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="course-categories">
                  <div className="categories-box">
                    <h3>Pre Primary Learning</h3>
                    <div className="content-courses-row">
                      {primaryData.map(classes=>{return(    
                      <div className="course-card">
                        <p>{classes.title}</p>
                        <div className="card-image">
                          <img src={classes.img} alt="course_card_image" className="course-image" />
                        </div>
                        <div className="card-subtext-container">
                          <div className="course-2">
                            <div className="info arcourse">
                              <div>
                                <p className="course-price"><strike>₹ 40,000</strike> <span> ₹ 24,999</span> </p>
                                <h3 className="title">(Price Inclusive Tab and study material)</h3>
                              </div>
                              {isUser?
                              <Link to={classes.link}
                              className='btn btn-primary btn-hover-secondary bk-course' > Book Now</Link>:
                              <Link to='/login'
                              className='btn btn-primary btn-hover-secondary bk-course' > Login</Link>
                            }
                            </div>
                          </div>
                        </div>
                      </div>
                     )})} </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Learners Section Start */}
        <div className="learners-section section section-padding f5f5f5">
          <div className="container">
            {/* Section Title Start */}
            {/* <div class="section-title text-center" data-aos="fade-up">
                    <span class="sub-title">Maxcoach available courses</span>
                    <h2 class="title">Access <span>Smart Tutoring</span> Program For Benefits.</h2>
                </div> */}
            {/* Section Title End */}
            {/* Feature Wrapper Start */}
            <div className="row row-30 row-cols-xl-3 row-cols-sm-2 row-cols-1 max-mb-n30">
              {/* Feature Start (Icon Box) */}
              <div className="col max-mb-30" data-aos="fade-up">
                <a href="javascript:void(0);" className="icon-box icon-box-left text-left">
                  <div className="icon">
                    <img src="assets/images/course-icon/code1.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3 className="title">Introduction to the world of letters and numbers</h3>
                  </div>
                </a>
              </div>
              {/* Feature Start (Icon Box) */}
              {/* Feature Start (Icon Box) */}
              <div className="col max-mb-30" data-aos="fade-up">
                <a href="javascript:void(0);" className="icon-box icon-box-left text-left">
                  <div className="icon">
                    <img src="assets/images/course-icon/code2.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3 className="title">Fun and interactive videos</h3>
                  </div>
                </a>
              </div>
              {/* Feature Start (Icon Box) */}
              {/* Feature Start (Icon Box) */}
              <div className="col max-mb-30" data-aos="fade-up">
                <a href="javascript:void(0);" className="icon-box icon-box-left text-left">
                  <div className="icon">
                    <img src="assets/images/course-icon/code3.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3 className="title">Over 60 rhymes</h3>
                  </div>
                </a>
              </div>
              {/* Feature Start (Icon Box) */}
              {/* Feature Start (Icon Box) */}
              <div className="col max-mb-30" data-aos="fade-up">
                <a href="javascript:void(0);" className="icon-box icon-box-left text-left">
                  <div className="icon">
                    <img src="assets/images/course-icon/code4.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3 className="title">Activity books included</h3>
                  </div>
                </a>
              </div>
              {/* Feature Start (Icon Box) */}
              {/* Feature Start (Icon Box) */}
              <div className="col max-mb-30" data-aos="fade-up">
                <a href="javascript:void(0);" className="icon-box icon-box-left text-left">
                  <div className="icon">
                    <img src="assets/images/course-icon/code5.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3 className="title">Comes with a Lenovo 10-inch tab with content lock</h3>
                  </div>
                </a>
              </div>
              {/* Feature Start (Icon Box) */}
            </div>
            {/* Feature Wrapper End */}
          </div>
        </div>
        {/* Learners Section End */}
        {/* Faq Section Start */}
        <div className="faq-section section section-padding f5f5f5">
          <div className="container">
            {/* Section Title Start */}
            <div className="section-title text-center" data-aos="fade-up">
              <span className="sub-title secondary-color faq-head">Frequently Asked Questions</span>
            </div>
            {/* Section Title End */}
            <div className="row">
              {/* Start Single Accordion */}
              <div className="col-lg-12">
                <div className="mx-accordion max-mb-n30 mb-sm-30 mb-xs-30" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <a href="#" className="acc-btn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Is this course an alternative to sending your child to school?
                        </a>
                      </h5>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div className="card-body">The main reason our children study is to get good jobs in the future. So shouldn’t what they study now actually be something they are likely to use in the future? The thing is, Coding is the future!<br />
                        Yes. In these uncertain times, a child’s not being able to go to school should not affect their opportunity to learn. Ekluvya’s course has been designed to ensure your child gets the same learning as in a school.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <a href="#" className="acc-btn collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Is the content the same as that of a school?
                        </a>
                      </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                      <div className="card-body">The course is mapped to the school curriculum of pre primary classes and teaches a child everything that they need to know before starting with Grade 1.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <a href="#" className="acc-btn collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Will all the learning be passive?
                        </a>
                      </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                      <div className="card-body">
                        No. The curriculum is designed to help a child’s overall development including motor skills through interactive and active learning. This is why the course is structured around a mix of videos as well as actual activity books.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingfour">
                      <h5 className="mb-0">
                        <a href="#" className="acc-btn" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                          Will all the time spent on the learning videos be harmful for a child’s eyes?
                        </a>
                      </h5>
                    </div>
                    <div id="collapsefour" className="collapse" aria-labelledby="headingfour" data-parent="#accordionExample">
                      <div className="card-body">
                        No. As the learning is based on both books and videos, a child will only spend a part of their day on a screen. Further, the course pack will include anti glare glasses to help reduce strain on the eyes.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingfive">
                      <h5 className="mb-0">
                        <a href="#" className="acc-btn collapsed" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                          What happens if a parent themself is not clear with a part of the course to help their child?
                        </a>
                      </h5>
                    </div>
                    <div id="collapsefive" className="collapse" aria-labelledby="headingfive" data-parent="#accordionExample">
                      <div className="card-body">We are happy to help in any way to make the learning experience smooth for both the parent and the child. In case a parent seeks clarity on any part of the curriculum, they can just reach out  to our customer service, who will in turn connect them to an expert for help.
                      </div>
                    </div>
                  </div>
                  {/*<p style="margin-top: -20px;">Ekluvya Coding is in association with Campk12.</p>*/}
                </div>
              </div>
              {/* End Single Accordion */}
            </div>
          </div>
        </div>
        {/* Faq Section End */}
        <a href="#" className="scroll-top" id="scroll-top">
          <i className="arrow-top fal fa-long-arrow-up" />
          <i className="arrow-bottom fal fa-long-arrow-up" />
        </a>
        {/* Scroll Top End */}
      </div>

    </Layout>

  )
}