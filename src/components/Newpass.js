import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../Header";
import Footer from "./Footer";
const Newpass = () => {
  let history = useNavigate();
  let myLocation = useLocation();
  const [user, setUser] = useState({
    pass: "",
  });
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };
  const showPass = () => {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  const showConPass = () => {
    var x = document.getElementById("con_pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  const removeErrorConPass = () => {
    setError("");
  };
  const removeErrorPass = () => {
    setError1("");
  };
  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      email: myLocation.state.email,
      pass: document.getElementById("pass").value,
    };
    // console.log(sendData);
    if (
      document.getElementById("con_pass").value === "" ||
      document.getElementById("pass").value === ""
    ) {
      setError("This field is Required");
      setError1("This field is Required");
    } else if (
      !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
        document.getElementById("pass").value
      )
    ) {
      setError1("Invalid Password");
    } else if (
      !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
        document.getElementById("con_pass").value
      )
    ) {
      setError("Invalid Confirm Password");
    } else if (
      document.getElementById("pass").value !==
      document.getElementById("con_pass").value
    ) {
      setError("Password do not match");
    } else {
      axios
        .post("http://localhost:80/CRM-api/updatepass.php", sendData)
        .then((result) => {
          if (result.data.updated === 1) {
            alert("Password Updated Successfully!");
            history("/login");
          } else if (result.data.updated === 0) {
            alert("Error Occured! Please try again");
          }
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="flex-box">
        <div className="img-box">
          <img className="side-img" src="img-1.gif" />
        </div>
        <div className="main-box-login">
          <form onSubmit={submitForm}>
            <div className="row">
              <div className="col-md-12 text-center">
                <a className="navbar-brand" href="#">
                  <img className="logo1" src="Mag.png" alt="images" />
                </a>
                <h1>Create Password</h1>
                <hr />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-lg-6">
                <i className="fa fa-key icon me-2"></i>Password
              </div>{" "}
              <div className="col-md-6 col-lg-6">
                <input
                  onInput={removeErrorPass}
                  id="pass"
                  type="password"
                  name="password"
                  className="form-control"
                  onChange={handleChange}
                />
                <div
                  style={{
                    marginTop: "5px",
                  }}
                >
                  <input type="checkbox" onClick={showPass} />
                  <span
                    style={{
                      color: "black",
                    }}
                  >
                    &nbsp;Show Password
                  </span>
                </div>
                {error1 ? <label>{error1}</label> : ""}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-lg-6">
                <i className="fa fa-key icon me-2"></i>Confirm Password
              </div>{" "}
              <div className="col-md-6 col-lg-6">
                <input
                  onInput={removeErrorConPass}
                  id="con_pass"
                  type="password"
                  name="password"
                  className="form-control"
                  onChange={handleChange}
                  // value={user.password}
                />
                <div>
                  <input type="checkbox" onClick={showConPass} />
                  <span>&nbsp;Show Password</span>
                </div>
                {error ? <label>{error}</label> : ""}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <input
                  type="Submit"
                  name="submit"
                  value="Update"
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
export default Newpass;
