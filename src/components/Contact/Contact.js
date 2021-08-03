import React from "react";
import Layout from "../Layout";

export default function Contact() {
  return (
    <Layout>
      <div>
        {/* page-title */}
        <div className="ttm-page-title-row">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title-box ttm-textcolor-white">
                  <div className="page-title-heading">
                    <h1 className="title">Contact Us</h1>
                  </div>
                  {/* /.page-title-captions */}
                  <div className="breadcrumb-wrapper">
                    <span>
                      <a title="Homepage" href="index.html">
                        <i className="ti ti-home" />
                        &nbsp;&nbsp;Home
                      </a>
                    </span>
                    <span className="ttm-bread-sep">&nbsp; | &nbsp;</span>
                    <span>Contact Us</span>
                  </div>
                </div>
              </div>
              {/* /.col-md-12 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* page-title end*/}
        {/*site-main start*/}
        <div className="site-main">
          {/* map-section */}
          <div className="ttm-row map-section clearfix">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-12 justify-content-center">
                  {/*map-start*/}
                  {/* <div className="map-wrapper">
                    <div id="map_canvas" />
                  </div> */}
                  {/*map-end*/}

                  {/* <div style={{ marginBottom: "10vh" }}>
                  <div>
                    <iframe
                      width={1280}
                      height={500}
                      frameBorder={0}
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?width=1280&height=500&hl=en&q=%20JAIPUR+(MEHR%20GLOBAL%20CONSULTANCY)&t=&z=12&ie=UTF8&iwloc=B&output=embed"
                    />
                    <a href="https://www.embedmap.net/"></a>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* map-section end */}
          {/* contact-form-section */}
          <section className="ttm-row contact-form-section clearfix">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="spacing-6 clearfix">
                    {/* section title */}
                    <div className="section-title clearfix">
                      <div className="title-header">
                        <h3 className="title">
                          We’re Happy to Discuss Your Project and Answer any
                          Question
                        </h3>
                      </div>
                    </div>
                    {/* section title end */}
                    <ul className="ttm_contact_widget_wrapper">
                      <li>
                        <h6>Address</h6>
                        <i className="ttm-textcolor-skincolor ti ti-location-pin" />
                        <span>
                          77408 Satterfield Motorway Suite 469 New
                          <br />
                          Antonetta, BC K3L6P6
                        </span>
                      </li>
                      <li>
                        <h6>Email</h6>
                        <i className="ttm-textcolor-skincolor ti ti-comment" />
                        <span>
                          <a href="mailto:info@boldman.com">info@boldman.com</a>
                        </span>
                      </li>
                      <li>
                        <h6>Toll Free Number</h6>
                        <i className="ttm-textcolor-skincolor ti ti-mobile" />
                        <span>+1800 200 14523</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="map-col-bg ttm-bgcolor-skincolor spacing-7">
                    {/* section title */}
                    <div className="section-title text-left with-desc clearfix">
                      <div className="title-header">
                        <h2 className="title">
                          Let’s Start <br /> The Conversation.
                        </h2>
                      </div>
                    </div>
                    {/* section title end */}
                    <form
                      id="ttm-contactform"
                      className="ttm-contactform wrap-form clearfix"
                      method="post"
                      action="#"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <label>
                            <span className="text-input">
                              <input
                                name="your-name"
                                type="text"
                                placeholder="Your Name"
                                required="required"
                              />
                            </span>
                          </label>
                        </div>
                        <div className="col-md-6">
                          <label>
                            <span className="text-input">
                              <input
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                required="required"
                              />
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>
                            <span className="text-input">
                              <input
                                name="your-phone"
                                type="text"
                                placeholder="Your Phone"
                                required="required"
                              />
                            </span>
                          </label>
                        </div>
                        <div className="col-md-6">
                          <label>
                            <span className="text-input">
                              <input
                                name="venue"
                                type="text"
                                placeholder="Subject"
                                required="required"
                              />
                            </span>
                          </label>
                        </div>
                      </div>
                      <label>
                        <span className="text-input">
                          <textarea
                            name="message"
                            cols={40}
                            rows={3}
                            placeholder="Message"
                            required="required"
                            defaultValue={""}
                          />
                        </span>
                      </label>
                      <input
                        name="submit"
                        type="submit"
                        id="submit"
                        className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-bgcolor-darkgrey"
                        defaultValue="MAKE A RESERVATION"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* contact-form-section END*/}
        </div>
        {/*site-main end*/}

        <div className="container">
          <div
            className="row"
            style={{ paddingBottom: "10vh", paddingTop: "5vh" }}
          >
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="section-title clearfix">
                <div className="title-header">
                  <h3 className="title">UAE Office</h3>
                </div>
              </div>
              {/* section title end */}
              <ul className="ttm_contact_widget_wrapper">
                <li>
                  <h6>Address</h6>
                  <i className="ttm-textcolor-skincolor ti ti-location-pin" />
                  <span>
                    6-Al Zamil Commercial Center, 2nd Floor, New Industrial
                    Area, Al Kharj Road <br />
                    Riyadh-11583, Saudi Arabia
                  </span>
                </li>
                <li>
                  <h6>Email</h6>
                  <i className="ttm-textcolor-skincolor ti ti-comment" />
                  <span>
                    <a href="mailto:info@boldman.com">
                      ksa@mehrconsultants.com | info@mehrconsultants.com
                    </a>
                  </span>
                </li>
                <li>
                  <h6>Toll Free Number</h6>
                  <i className="ttm-textcolor-skincolor ti ti-mobile" />
                  <span>+966-11-2655604, +966-534583177, +966-507985330</span>
                </li>
              </ul>
            </div>

            <div
              className="col-lg-6 col-md-6 col-sm-12"
              style={{ overflow: "hidden" }}
            >
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width={800}
                    height={400}
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=New%20Industrial%20Area%2C%20Al%20Kharj%20Road&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                  />
                  <a href="https://yts-mx.net" />
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".mapouter{position:relative;text-align:right;height:400px;width:800px;}.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:800px;}",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="row" style={{ paddingBottom: "10vh" }}>
            <div
              className="col-lg-6 col-md-6 col-sm-12"
              style={{ overflow: "hidden" }}
            >
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width={800}
                    height={400}
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=D-4%2C%20Bharat%20Nagar%2C%20Behind%20Bank%20of%20Baroda%2C%20New%20Friends%20Colony%20New%20Delhi-110025%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                  />
                  <a href="https://yts-mx.net" />
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".mapouter{position:relative;text-align:right;height:400px;width:800px;}.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:800px;}",
                  }}
                />
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 col-sm-12"
              style={{ paddingLeft: "5vw" }}
            >
              <div className="section-title clearfix">
                <div className="title-header">
                  <h3 className="title">New Delhi Office</h3>
                </div>
              </div>
              {/* section title end */}
              <ul className="ttm_contact_widget_wrapper">
                <li>
                  <h6>Address</h6>
                  <i className="ttm-textcolor-skincolor ti ti-location-pin" />
                  <span>
                    D-4, Bharat Nagar, Behind Bank of Baroda, New Friends Colony{" "}
                    <br />
                    New Delhi-110025 India
                  </span>
                </li>
                <li>
                  <h6>Email</h6>
                  <i className="ttm-textcolor-skincolor ti ti-comment" />
                  <span>
                    <a href="mailto:info@boldman.com">
                      info@mehrconsultants.com
                    </a>
                  </span>
                </li>
                <li>
                  <h6>Toll Free Number</h6>
                  <i className="ttm-textcolor-skincolor ti ti-mobile" />
                  <span>+91-8094000255 , +91-9811195322</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="row" style={{ paddingBottom: "10vh" }}>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="section-title clearfix">
                <div className="title-header">
                  <h3 className="title">Jaipur Office</h3>
                </div>
              </div>
              {/* section title end */}
              <ul className="ttm_contact_widget_wrapper">
                <li>
                  <h6>Address</h6>
                  <i className="ttm-textcolor-skincolor ti ti-location-pin" />
                  <span>
                    A-25, Nandpuri,Lane-6, Near Baees Godam, Hawa Sadak <br />
                    Jaipur : 302006 (Rajasthan) India
                  </span>
                </li>
                <li>
                  <h6>Email</h6>
                  <i className="ttm-textcolor-skincolor ti ti-comment" />
                  <span>
                    <a href="mailto:info@mehrconsultants.com">
                      info@mehrconsultants.com
                    </a>
                  </span>
                </li>
                <li>
                  <h6>Toll Free Number</h6>
                  <i className="ttm-textcolor-skincolor ti ti-mobile" />
                  <span> +91-8094000255, +91-9829833394</span>
                </li>
              </ul>
            </div>

            <div
              className="col-lg-6 col-md-6 col-sm-12"
              style={{ overflow: "hidden" }}
            >
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width={600}
                    height={500}
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=%20Nandpuri%2Chawa%20sadak&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                  />
                  <a href="https://www.embedgooglemap.net">
                    embedgooglemap.net
                  </a>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".mapouter{position:relative;text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
