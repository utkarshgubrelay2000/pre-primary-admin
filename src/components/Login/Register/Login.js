import React, { useState, useEffect } from "react";
import { loginStudent } from "../../../Api";
import { Link, useHistory } from "react-router-dom";
import Layout from "../../Layout";
import loginImage from "../../../assets/login.png";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();
  const [showLoading, setshowLoading] = useState(false);
  const [loginError, setloginError] = useState(false);

  useEffect(() => {
    var currentUser = JSON.parse(localStorage.getItem("eklavyaStudent"));

    if (currentUser) {
      history.push("/");
    }

    return () => {
      // console.log("Cleanup");
    };
  }, []);

  const submitLoginCredentials = async (e) => {
    setloginError(false);
    e.preventDefault();

    var loginCredentials = {
      email,
      password,
    };

    try {
      const resData = await loginStudent(loginCredentials);

      // console.log("Login data", resData);

      // console.log("token : ", resData.data.token);

      var eklavyaStudent = {
        token: resData.data.token,
        name: resData.data.name,
        studentId: resData.data.studentId,
      };

      localStorage.setItem("eklavyaStudent", JSON.stringify(eklavyaStudent));
    } catch (e) {
      // console.log("Login error", e);
      setloginError(true);
    }

    var currentUser = JSON.parse(localStorage.getItem("eklavyaStudent"));

    if (currentUser) {
      history.push("/");
    }
  };

  return (
    <Layout>
      <div>
        <div className="container">
          <div className="row" style={{ }}>
            <div className="col-xl-5 col-lg-6">
              {/* Login Form Start */}
              <div className="login-form-wrapper mt-xs-50">
                <h3 className="title">Login</h3>
                <form className="login-form" onSubmit={submitLoginCredentials}>
                  <div className="single-input mb-30">
                    <label htmlFor="username">Email</label>
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
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      minLength={8}
                      required
                      id="password"
                      onChange={(e) => setpassword(e.target.value)}
                      name="password"
                      placeholder="Password"
                    />

                    {loginError && (
                      <span
                        style={{
                          color: "red",
                          padding: "10px",
                        }}
                      >
                        Email/Password is wrong.Try Again.
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
                      <div className="col-sm-6 lost-your-password-wrap">
                        <p>
                          <a href="/forgotpassword" className="lost-your-password">
                           forgot password?
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="single-input">
                    <button
                      className="btn btn-primary btn-hover-secondary btn-width-100"
                      type="submit"
                    >
                      Log In
                    </button>
                  </div>
                </form>

                <p style={{ marginTop: "2vh" }}>
                  {" "}
                  New On Ekluvya? &nbsp;
                  <a href="/register" style={{ color: "#EB5019" }}>
                     Register Here
                  </a>
                </p>
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
