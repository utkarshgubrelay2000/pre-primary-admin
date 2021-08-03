import React, { useState, useEffect } from "react";
import { forgotPasswordOTP,resetPassword } from "../../Api";
import { Link, useHistory } from "react-router-dom";
import Layout from "../Layout";
import loginImage from "../../assets/login.png";
import { Dots } from "react-activity";
import "react-activity/dist/react-activity.css";

export default function ForgotPassword() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();
  const [showLoading, setshowLoading] = useState(false);
  const [loginError, setloginError] = useState(false);
  const [otp, setotp] = useState(false);

  const [serverOTP, setserverOTP] = useState(null);
  const [customerOTP, setcustomerOTP] = useState("");

const [showResetEmail, setshowResetEmail] = useState(false)


const [newPassword, setnewPassword] = useState(null)
const [newConfirmPassword, setnewConfirmPassword] = useState(null)
const [passwordnotmatch, setpasswordnotmatch] = useState(false)


  useEffect(() => {
    var currentUser = JSON.parse(localStorage.getItem("eklavyaStudent"));


if(!newConfirmPassword){
  setpasswordnotmatch(false)
}

    if (currentUser) {
      // history.push("/dashboard");
    }

    return () => {
      // console.log("Cleanup");
    };
  }, []);

  const submitEmail = async (e) => {
    e.preventDefault();
    setshowLoading(true);

    try{
    const res = await forgotPasswordOTP(email);
    // console.log("res is", res.data);
    setotp(true);
    setserverOTP(res.data.otp);
    }catch(error){
      // console.log('Error is ',(error.response.data.error))
      setloginError(true)
      setshowLoading(false)
    }
    
  
    return setshowLoading(false);
  };

  const submitOTP = async (e) => {
    e.preventDefault();
    setshowLoading(true);

    if (serverOTP === customerOTP) {
      // history.push("/newpassword");

      setshowLoading(false);
      setshowResetEmail(true)
    } else {
      setloginError(true);
      setshowLoading(false);
    }
  };



const submitNewPassword=async(e)=>{
  e.preventDefault()

var data = {
  email : email,
  password : newPassword,
}

if(newPassword==newConfirmPassword){
const res = await resetPassword(data);
// console.log('rest password line 79',res.data)

history.push('/login')
}else{
  setpasswordnotmatch(true)
  setshowLoading(false);
}


}


  return (
    <Layout>
      <div>
        <div className="container">
          <div className="row" style={{ marginTop: "10vh" }}>
            <div className="col-xl-5 col-lg-6">
              {/* Login Form Start */}
              <div className="login-form-wrapper">
                <h3 className="title">Reset Password</h3>

                {!otp && (
                  <form className="login-form" onSubmit={(e) => submitEmail(e)}>
                    <div className="single-input mb-30">
                      <label htmlFor="username">
                        Enter your Registered Email
                      </label>

                      <input
                        type="email"
                        required
                        id="username"
                        onChange={(e) => setemail(e.target.value)}
                        name="username"
                        placeholder="Email"
                      />
                    </div>
                    <div className="single-input mb-30">
                      {loginError && (
                        <span
                          style={{
                            color: "red",
                            padding: "10px",
                          }}
                        >
                          Email is Not registered.Try Again with different email.
                        </span>
                      )}
                    </div>
                    <div className="single-input mb-30">
                      <div className="row">
                        <div className="col-sm-6 remember-me-wrap">
                          {/* <div className="checkbox-input">
                              <input type="checkbox" name="login-form-remember" id="login-form-remember" />
                              <label htmlFor="login-form-remember">Remember me</label>
                            </div> */}
                        </div>
                      </div>
                    </div>

                    {showLoading ? (
                      <center>
                        <Dots size={20} />
                      </center>
                    ) : (
                      <div className="single-input">
                        <button
                          className="btn btn-primary btn-hover-secondary btn-width-100"
                          type="submit"
                        >
                          Get Code
                        </button>
                      </div>
                    )}
                  </form>
                )}

                {otp  && !showResetEmail && (
                  <form className="login-form" onSubmit={(e) => submitOTP(e)}>
                    <div className="single-input mb-30">
                      <label htmlFor="username">
                        Enter OTP sent to {email}
                      </label>

                      <input
                        type="text"
                        required
                        id="username"
                        onChange={(e) => setcustomerOTP(e.target.value)}
                        name="username"
                        placeholder="OTP"
                      />
                    </div>
                    <div className="single-input mb-30">
                      {loginError && (
                        <span
                          style={{
                            color: "red",
                            padding: "10px",
                          }}
                        >
                          OTP is wrong.Try Again.
                        </span>
                      )}
                    </div>
                    <div className="single-input mb-30">
                      <div className="row">
                        <div className="col-sm-6 remember-me-wrap">
                          {/* <div className="checkbox-input">
                              <input type="checkbox" name="login-form-remember" id="login-form-remember" />
                              <label htmlFor="login-form-remember">Remember me</label>
                            </div> */}
                        </div>
                      </div>
                    </div>

                    {showLoading ? (
                      <center>
                        <Dots size={20} />
                      </center>
                    ) : (
                      <div className="single-input">
                        <button
                          className="btn btn-primary btn-hover-secondary btn-width-100"
                          type="submit"
                        >
                          Submit OTP
                        </button>
                      </div>
                    )}
                  </form>
                )}






{otp  && showResetEmail && (
                  <form className="login-form" onSubmit={(e) => submitNewPassword(e)}>
                    <div className="single-input mb-30">
                      <label htmlFor="username">
                        Enter New Password
                      </label>

                      <input
                        type="password"
                        required
                        id="username"
                        onChange={(e) => setnewPassword(e.target.value)}
                        name="username"
                        placeholder="New password"
                      />
                    </div>
                    <div className="single-input mb-30">
                      <label htmlFor="username">
                        Enter New Password
                      </label>

                      <input
                        type="password"
                        required
                        id="username"
                        onChange={(e) => setnewConfirmPassword(e.target.value)}
                        name="username"
                        placeholder="Re-enter New Password"
                      />
                    </div>
                    <div className="single-input mb-30">
                      {passwordnotmatch && (
                        <span
                          style={{
                            color: "red",
                            padding: "10px",
                          }}
                        >
                          Password Do not match.
                        </span>
                      )}
                    </div>
                    <div className="single-input mb-30">
                      <div className="row">
                        <div className="col-sm-6 remember-me-wrap">
                          {/* <div className="checkbox-input">
                              <input type="checkbox" name="login-form-remember" id="login-form-remember" />
                              <label htmlFor="login-form-remember">Remember me</label>
                            </div> */}
                        </div>
                      </div>
                    </div>

                    {showLoading ? (
                      <center>
                        <Dots size={20} />
                      </center>
                    ) : (
                      <div className="single-input">
                        <button
                          className="btn btn-primary btn-hover-secondary btn-width-100"
                          type="submit"
                        >
                          Reset Password
                        </button>
                      </div>
                    )}
                  </form>
                )}















              </div>

              {/* Login Form End */}
            </div>

            <div className="col-xl-5 xol-lg-6">
              <img src={loginImage} style={{ marginLeft: "5vw" }} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
