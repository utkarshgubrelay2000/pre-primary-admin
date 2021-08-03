import React, { useState, useEffect } from "react";
import firebase from "../../../firebase";
import { useLastLocation } from "react-router-last-location";
import { checkEmailExists, registerStudent, loginStudent } from "../../../Api";
import Layout from "../../Layout";
import { Link, useHistory } from "react-router-dom";
import Modal from "../../Modal/Modal";

export default function Register(props) {
  const [name, setname] = useState("");

  const [email, setemail] = useState("");

  const [phone, setphone] = useState("");

  const [password, setpassword] = useState("");

  const [registerDone, setregisterDone] = useState(false);

  const [customConfirmation, setcustomConfirmation] = useState(null);

  const [OTP, setOTP] = useState(0);

  const [emailExist, setemailExist] = useState(true);

  const [emailChecked, setemailChecked] = useState(false);
  const [emailCheckedCount, setemailCheckedCount] = useState(0);

  const [showOTPBox, setshowOTPBox] = useState(false);

  const [emailMsg, setemailMsg] = useState("");

  const history = useHistory();

  const [showModal, setshowModal] = useState(false);

  var paymentPage = props.match.params.paymentPage;

  const [modalText, setmodalText] = useState({
    heading: "",
    content: "",
    buttonText: "",
  });

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("eklavyaStudent"));
    if (currentUser) {
      history.push("/");
    }

    return () => {
      console.log("Cleanup");
    };
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();

    var userData = {
      username: name,
      email: email,
      phone: phone,
      passsword: password,
    };

    console.log("Submit Data", userData);

    const checkingEmail = async () => {
      const res = await checkEmailExists(email, phone);
      // console.log("email or phone exists", res.data.response);
      setemailMsg(res.data.message);
      // console.log(res.data.message)
      const ee = await setemailExist(res.data.response);
      const pp = await setemailChecked(true);
      setemailCheckedCount(1);
    };

    checkingEmail();
  };

  useEffect(() => {
    console.log("Email checked", emailCheckedCount);
    if (emailExist !== true && emailChecked == true) {
      setUp();
    } else {
      if (emailCheckedCount > 0) {
        setmodalText({
          heading: "Already Registered.",
          content: emailMsg,
          buttonText: "Okay",
        });
        setshowModal(true);
        setemailCheckedCount(0);
      }
    }

    return () => {};
  }, [emailCheckedCount]);

  const setUp = () => {
    console.log("hello");
    setregisterDone(true);

    // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      }
    );

    setshowOTPBox(true);

    onSignInSubmit();
  };

  const onSignInSubmit = () => {
    // event.preventDefault();
    console.log("i am running", phone);

    var phoneNumber = `+91${phone}`;
    var appVerifier = window.recaptchaVerifier;

    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).

        setcustomConfirmation(confirmationResult);

        // window.confirmationResult = confirmationResult;
        // if(OTP.toString.length>5){
        //   var code = OTP ;
        // }
        var code = OTP;

        console.log(confirmationResult);
      })
      .catch(function (error) {
        // Error; SMS not sent
        // ...
      });
  };

  const signupStudent = async (studentData) => {
    const resData = await registerStudent(studentData);
    console.log(resData);

    setmodalText({
      heading: "Yayyy Registeration Successful.",
      content: "Now You can Login with your Email & Password.",
      buttonText: "I understood",
    });
    setshowModal(true);

    var eklavyaStudent = {
      token: resData.data.token,
      name: resData.data.name,
      studentId: resData.data.studentId,
    };

    localStorage.setItem("eklavyaStudent", JSON.stringify(eklavyaStudent));

    var currentUser = JSON.parse(localStorage.getItem("eklavyaStudent"));

    if (currentUser) {
      history.push("/");
    }

  };

  const myFunc = () => {
    var code = OTP;

    window.confirmationResult = customConfirmation;

    customConfirmation
      .confirm(code)
      .then(function (result) {
        // User signed in successfully.
        var user = result.user;

        console.log(result);

        var userData = {
          name: name,
          email: email,
          mobileNumber: phone,
          password: password,
          modeOfRegistration: "phone",
          uId: result.user.uid,
        };

        console.log("Submitted Data", userData);
        signupStudent(userData);

        // ...
      })
      .catch(function (error) {
        // User couldn't sign in (bad verification code?)
        console.log(error);

        // ...
      });
  };

  const onOTPSubmit = (e) => {
    e.preventDefault();
    console.log("OTP is", OTP);

    myFunc();
  };

  const OTPBOX = showOTPBox ? (
    <div>
      <form className="register-form" onSubmit={onOTPSubmit}>
        <div className="single-input mb-30">
          <label htmlFor="phoneNumber">
            One Time Password sent to : {phone} . It may take upto 5 mins.
          </label>
          <input
            type="number"
            id="phoneNumber"
            required
            name="phoneNumber"
            placeholder="Ex : 124-456"
            onChange={(e) => setOTP(e.target.value)}
          />
          <p className="description"></p>
        </div>

        <div className="single-input">
          {customConfirmation ? (
            <button
              className="btn btn-primary btn-hover-secondary btn-width-100"
              type="submit"
            >
              Submit OTP
            </button>
          ) : (
            <button
              className="btn btn-secondary  btn-width-100"
              disabled={true}
              type="submit"
              style={{ cursor: "not-allowed" }}
            >
              Submit OTP
            </button>
          )}
        </div>
      </form>
    </div>
  ) : (
    <div></div>
  );

  return (
    <Layout>
      <div style={{ position: "relative" }}>
        {showModal && (
          <Modal
            heading={modalText.heading}
            content={modalText.content}
            buttonText={modalText.buttonText}
            showModal={showModal}
            setshowModal={setshowModal}
          />
        )}

        <div
          id="recaptcha-container"
          style={{
            position: "absolute",
            zIndex: 99,
            marginTop: "20vh",
            marginLeft: "10vw",
          }}
        ></div>

        {registerDone ? (
          <div>
            {/*Login Register section start*/}
            <div
              className="login-register-section section section-padding-bottom"
              style={{ marginTop: "0vh" }}
            >
              <div className="container">
                <div className="row ">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-xl-6  col-lg-6">
                        {/* Register Form Start */}
                        <div className="login-form-wrapper mt-sm-50 mt-xs-50">
                          {/* <h3 className="title">INPUT OTP</h3> */}

                          {OTPBOX}

                          <p style={{ marginTop: "5vh" }}>
                            Already a User? &nbsp;
                            <a href="/login" style={{ color: "#EB5019" }}>
                              Login Here
                            </a>
                          </p>
                        </div>
                        {/* Register Form End */}
                      </div>

                      <div className="col-xl-5 xol-lg-6">
                        <img src="https://image.freepik.com/free-vector/two-step-authentication-vector-illustration_100456-2148.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/*Login Register section start*/}
            <div
              className="login-register-section section section-padding-bottom"
              style={{ marginTop: "0vh" }}
            >
              <div className="container">
                <div className="row ">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-xl-6  col-lg-6">
                        {/* Register Form Start */}
                        <div className="login-form-wrapper mt-sm-50 mt-xs-50">
                          <h3 className="title">Register</h3>

                          <form
                            className="register-form"
                            onSubmit={onFormSubmit}
                          >
                            <div className="single-input mb-10">
                              <label htmlFor="Name">Name</label>
                              <input
                                type="text"
                                id="Name"
                                required
                                name="Name"
                                placeholder="Your Name"
                                onChange={(e) => setname(e.target.value)}
                              />
                            </div>
                            <div className="single-input mb-10">
                              <label htmlFor="email">Email</label>
                              <input
                                type="email"
                                id="email"
                                required
                                name="email"
                                placeholder="Your Email"
                                onChange={(e) => setemail(e.target.value)}
                              />
                              <p
                                style={{
                                  color: "red",
                                  textTransform: "capitalize",
                                }}
                              >
                                {/* {emailMsg} */}
                              </p>
                            </div>
                            <div className="single-input mb-10">
                              <label htmlFor="phoneNumber">Phone Number</label>
                              <input
                                type="text"
                                id="phoneNumber"
                                required
                                minLength={10}
                                maxLength={10}
                                name="phoneNumber"
                                placeholder="Your PhoneNumber"
                                onChange={(e) => setphone(e.target.value)}
                              />
                            </div>

                            <div className="single-input mb-10">
                              <label htmlFor="password">Password</label>
                              <input
                                type="password"
                                id="password"
                                minLength={8}
                                required
                                name="password"
                                placeholder="*******"
                                onChange={(e) => setpassword(e.target.value)}
                              />
                              <p className="description"></p>
                            </div>
                            <div className="single-input">
                              <button
                                className="btn btn-primary btn-hover-secondary btn-width-100"
                                type="submit"
                              >
                                Register
                              </button>
                            </div>
                          </form>

                          <p style={{ marginTop: "2vh" }}>
                            {" "}
                            Already a User? &nbsp;
                            <a href="/login" style={{ color: "#EB5019" }}>
                              Login Here
                            </a>
                          </p>
                        </div>
                        {/* Register Form End */}
                      </div>

                      <div className="col-xl-5 xol-lg-6">
                        <img src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-2650.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
