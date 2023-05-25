import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "../Header";
import axios from "axios";
import Footer from "./Footer";
const Login = () => {
  var admin = "";
  let history = useNavigate();

  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const showPass = () => {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  const errorRemoveEmail = () => {
    setError("");
  };
  const errorRemovePass = () => {
    setError1("");
  };
  const submitForm = (e) => {
    e.preventDefault();

    if (
      document.getElementById("email").value === "" ||
      document.getElementById("pass").value === ""
    ) {
      if (document.getElementById("email").value === "") {
        setError("Field Required");
      }
      if (document.getElementById("pass").value === "") {
        setError1("Field Required");
      }
    } else if (!/\S+@\S+\.\S+/.test(document.getElementById("email").value)) {
      setError("Email is wrong");
    } else if (
      !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
        document.getElementById("pass").value
      )
    ) {
      setError1("Password is wrong");
    } else {
      const sendData = {
        email: user.email,
        password: user.password,
        user: user.type,
      };

      axios
        .post("http://localhost:80/CRM-api/login.php", sendData)
        .then((result) => {
          if (result.data.logged === 1) {
            sessionStorage.setItem("email", result.data.email);
            sessionStorage.setItem("token", result.data.token);
            history("/lead");
          } else {
            if (result.data.password === 0) {
              alert("Incorrect password. Please try Again");
            } else if (result.data.register === 0) {
              alert("Email does not exist. Please Register");
            }
          }
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="flex-box ">
          <div className="img-box ">
            <img className="side-img" src="img-1.gif" />
          </div>
          <div className="main-box-login">
            <form onSubmit={submitForm}>
              <div className="row">
                <div className="col-md-12 text-center">
                  <a className="navbar-brand" href="#">
                    <img className="logo1" src="Mag.png" alt="images" />
                  </a>
                  <h1>Login</h1>
                  <hr />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <i className="fa fa-envelope me-2"></i>Email
                </div>{" "}
                <div className="col-md-6 col-lg-6">
                  <input
                    onInput={errorRemoveEmail}
                    id="email"
                    type="text"
                    name="email"
                    className="form-control input-box"
                    onChange={handleChange}
                    // value={user.email}
                  />
                  {error ? <span style={{ color: "red" }}>{error}</span> : ""}
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <i className="fa fa-key icon me-2"></i>Password
                </div>{" "}
                <div className="col-md-6 col-lg-6">
                  <input
                    onInput={errorRemovePass}
                    id="pass"
                    type="password"
                    name="password"
                    className="form-control "
                    onChange={handleChange}
                    // value={user.password}
                  />
                  {error1 ? <span style={{ color: "red" }}>{error1}</span> : ""}
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
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div class="wrapper1">
                    <input
                      type="radio"
                      name="type"
                      id="option-1"
                      value="admin"
                      onChange={handleChange}
                    />
                    <input
                      type="radio"
                      name="type"
                      id="option-2"
                      value="sub_admin"
                      onChange={handleChange}
                    />
                    <label for="option-1" class="option option-1">
                      <div class="dot"></div>
                      <span id="admin">Admin</span>
                    </label>
                    <label for="option-2" class="option option-2">
                      <div class="dot"></div>
                      <span id="sub_admin">Sub Admin</span>
                    </label>
                  </div>
                </div>
                <Link className="forget-pass" to="/forget">
                  Forget Password?
                </Link>
              </div>

              <div className="row">
                <div className="col-md-12 text-center">
                  <input
                    type="Submit"
                    name="submit"
                    defaultValue="Login"
                    className="btn btn-primary buzz-button"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
