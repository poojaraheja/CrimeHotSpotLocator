import axios from "axios";
import React, { useState } from "react";
import { Fragment } from "react";
import DashHeader from "./DashHeader";
import Sidebar from "../Sidebar";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const SubAdmin = () => {
  let history = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const showPass = () => {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();

    const sendData = {
      admin_email: sessionStorage.getItem("email"),
      email: user.email,
      password: user.pass,
    };
    axios
      .post("http://localhost:80/CRM-api/subadmin.php", sendData)
      .then((result) => {
        if (result.data.create === 1) {
          alert("Sub Admin created successfully!");
          history("/lead");
        } else if (result.data.error === 0) {
          alert("Don't Exist Admin");
        } else {
          alert("Internal Server Error");
        }
      });
  };
  return (
    <div>
      <div className="dashheader">
        <DashHeader />
      </div>

      <div className="slidebar">
        <Fragment>
          <Sidebar />
        </Fragment>
      </div>
      <div className="wrapper">
        <div className="inner">
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
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                      Success
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    Sub Admin Created Successfully!
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <h3>Create Sub Admin</h3>

            <label className="form-group">
              <input
                type="email"
                className="form-control1"
                name="email"
                id="email"
                onChange={handleChange}
                required
              />
              <span>Email</span>
              <span className="border"></span>
            </label>

            <label className="form-group">
              <input
                type="password"
                name="pass"
                id="pass"
                onChange={handleChange}
                className="form-control1"
                required
              />
              <span for="">Pasoword</span>
              <span className="border"></span>
            </label>

            <div>
              <input type="checkbox" onClick={showPass} />
              <span>&nbsp;Show Password</span>
            </div>

            <button className="button" type="submit">
              create Sub Admin
              <i className="zmdi zmdi-arrow-right"></i>
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default SubAdmin;
