import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../Header";
import Footer from "./Footer";
const OTP = () => {
  let history = useNavigate();
  let myLocation = useLocation();

  const [user, setUser] = useState({
    otp: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      email: myLocation.state.email,
      otp: user.otp,
    };

    axios
      .post("http://localhost:80/CRM-api/otp.php", sendData)
      .then((result) => {
        if (result.data.verified === 1) {
          alert("Verification Successful!");
          history("/login");
        } else {
          alert("Incorrect OTP");
        }
      });
  };

  return (
    <div>
      <Header />
      <div className="flex-box">
        <div className="img-box">
          <img className="side-img" src="img-1.gif"></img>
        </div>
        <div className="main-box-login">
          <form onSubmit={submitForm}>
            <div className="row">
              <div className="col-md-12 text-center">
                <a className="navbar-brand" href="#">
                  <img className="logo1" src="Mag.png" alt="images" />
                </a>
                <h1>Enter OTP </h1>
                <hr />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-lg-6">
                <i className="fa fa-check me-2"></i>OTP
              </div>{" "}
              <div className="col-md-6 col-lg-6">
                <input
                  type="text"
                  name="otp"
                  className="form-control"
                  onChange={handleChange}
                  value={user.otp}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 text-center">
                <input
                  type="Submit"
                  name="submit"
                  value="Verify"
                  className="btn btn-primary buzz-button"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OTP;
