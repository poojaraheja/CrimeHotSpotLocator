import axios from "axios";
import React, { useState } from "react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
const CreateUser = () => {
  let history = useNavigate();

  const [Inputs, setInputs] = useState({});

  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");

  const removeErrorFirstName = () => {
    setError("");
  };
  const removeErrorlastName = () => {
    setError1("");
  };
  const removeErrorEmail = () => {
    setError2("");
  };
  const removeErrorPass = () => {
    setError3("");
  };
  const removeErrorconPass = () => {
    setError4("");
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

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (
      document.getElementById("first_name").value === "" ||
      document.getElementById("last_name").value === "" ||
      document.getElementById("Email").value === "" ||
      document.getElementById("pass").value === "" ||
      document.getElementById("con_pass").value === ""
    ) {
      if (document.getElementById("first_name").value === "") {
        setError("Field Required");
      }
      if (document.getElementById("last_name").value === "") {
        setError1("Field Required");
      }
      if (document.getElementById("Email").value === "") {
        setError2("Field Required");
      }
      if (document.getElementById("pass").value === "") {
        setError3("Field Required");
      }
      if (document.getElementById("con_pass").value === "") {
        setError4("Field Required");
      }
    } else if (!/\S+@\S+\.\S+/.test(document.getElementById("Email").value)) {
      setError2("Invalid Email");
    } else if (
      !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
        document.getElementById("pass").value
      )
    ) {
      setError3("Invalid Password Format");
    } else if (
      !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
        document.getElementById("con_pass").value
      )
    ) {
      setError4("Invalid Confirm Password");
    } else if (
      document.getElementById("pass").value !==
      document.getElementById("con_pass").value
    ) {
      setError4("Password do not Match");
    } else {
      axios
        .post("http://localhost:80/CRM-api/index.php", Inputs)
        .then((result) => {
          if (result.data.exist === 1) {
            alert("Email Already Exist!");
          } else {
            if (result.data.create === 1) {
              // alert("Account Created Successfully!");
              document.getElementById("clickButton").click();
              history("/otp", {
                state: { id: 1, email: document.getElementById("Email").value },
              });
            } else {
              alert("Internal Server Error");
            }
          }
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="flex-box">
          <div className="img-box">
            <img className="side-img" src="img-1.gif" />
          </div>
          <div className="main-box">
            <form onSubmit={submitForm}>
              <button
                style={{
                  display: "none",
                }}
                id="clickButton"
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              ></button>

              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="staticBackdropLabel">
                        Success!
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      Account Created Successfully!
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      {/* <button type="button" className="btn btn-primary">
                      Continue
                    </button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <a className="navbar-brand" href="#">
                    <img className="logo1" src="Mag.png" alt="images" />
                  </a>
                  <h1>Register</h1>

                  <hr />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <i className="fa fa-user icon me-2"></i>First Name
                </div>{" "}
                <div className="col-md-6 col-lg-6">
                  <input
                    id="first_name"
                    type="text"
                    name="first_name"
                    className="form-control input-box"
                    onChange={handleChange}
                    onInput={removeErrorFirstName}
                    //   value={data.first_name}
                  />
                  {error ? <span style={{ color: "red" }}>{error}</span> : ""}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <i className="fa fa-user icon me-2"></i>Last Name
                </div>{" "}
                <div className="col-md-6 col-lg-6">
                  <input
                    id="last_name"
                    type="text"
                    name="last_name"
                    className="form-control input-box"
                    onChange={handleChange}
                    onInput={removeErrorlastName}
                    //   value={data.last_name}
                  />
                  {error1 ? <span style={{ color: "red" }}>{error1}</span> : ""}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <i className="fa fa-phone icon me-2"></i>Phone No.
                </div>{" "}
                <div className="col-md-6 col-lg-6">
                  <input
                    id="phone"
                    type="number"
                    name="phone"
                    className="form-control input-box"
                    onChange={handleChange}
                    onInput={removeErrorFirstName}
                    //   value={data.first_name}
                  />
                  {error ? <span style={{ color: "red" }}>{error}</span> : ""}
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
                    //   value={data.email}
                    onInput={removeErrorEmail}
                  />

                  {error2 ? <span style={{ color: "red" }}>{error2}</span> : ""}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <i className="fa fa-key icon me-2"></i>Password
                </div>{" "}
                <div className="col-md-6 col-lg-6">
                  <input
                    id="pass"
                    type="password"
                    name="password"
                    className="form-control input-box"
                    onChange={handleChange}
                    //   value={data.password}
                    onInput={removeErrorPass}
                  />
                  {error3 ? <span style={{ color: "red" }}>{error3}</span> : ""}
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
                <div className="col-md-6">
                  <i className="fa fa-key icon me-2"></i>Confirm Password
                </div>
                <div className="col-md-6">
                  <input
                    id="con_pass"
                    type="password"
                    name="confirm_password"
                    className="form-control input-box"
                    onChange={handleChange}
                    // value={data.confirm_password}
                    onInput={removeErrorconPass}
                  />
                  {error4 ? <span style={{ color: "red" }}>{error4}</span> : ""}
                  <div
                    style={{
                      marginTop: "5px",
                    }}
                  >
                    <input type="checkbox" onClick={showConPass} />
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
                <div className="col-md-12 text-center">
                  <div>
                    <input
                      className="btn btn-primary my-4 buzz-button"
                      type="submit"
                      name="submit"
                      value="Register"
                    />
                  </div>
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

export default CreateUser;
