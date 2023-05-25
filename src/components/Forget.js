import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Header";
const Forget = () => {
  let history = useNavigate();
  const [user, setUser] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };
  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      email: user.email,
    };
    console.log(sendData);

    axios
      .post("http://localhost:80/CRM-api/verify.php", sendData)
      .then((result) => {
        if (result.data.exist === 1) {
          alert("Mail Sent");
          history("/forgetpass", {
            state: { id: 1, email: document.getElementById("Email").value },
          });
        } else {
          if (result.data.exist === 0) {
            alert("Email doesn't Exist");
          }
        }
      });
  };

  return (
    <div>
      <Header />
      <div className="wrapper">
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
                  <h1>Reset Password</h1>
                  <hr />
                  <h6>Please Enter Your Registered Mail Id</h6>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <i className="fa fa-envelope me-2"></i>Email
                </div>{" "}
                <div className="col-md-6 col-lg-6">
                  <input
                    id="Email"
                    type="text"
                    name="email"
                    className="form-control input-box"
                    onChange={handleChange}
                    value={user.email}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 text-center">
                  <input
                    type="Submit"
                    name="submit"
                    value="Send OTP"
                    className="btn btn-primary buzz-button"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forget;
