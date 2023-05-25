import axios from "axios";
import React, { useState } from "react";
import { Fragment } from "react";
import DashHeader from "./DashHeader";
import Sidebar from "../Sidebar";
import sideimage from "./side.gif";
import Footer from "./Footer";

import { useNavigate } from "react-router-dom";
const AddLeads = () => {
  sessionStorage.removeItem("payment_id");

  let history = useNavigate();
  const [Inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({
      ...values,
      admin_email: sessionStorage.getItem("email"),
      [name]: value,
    }));
  };
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:80/CRM-api/addlead.php", Inputs)
      .then((result) => {
        if (result.data.create === 1) {
          document.getElementById("clickButton").click();
          history("/lead");
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
      <div>
        <div className="slidebar">
          <Fragment>
            <Sidebar />
          </Fragment>
        </div>
        <div>
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
                        <h1
                          className="modal-title fs-5"
                          id="staticBackdropLabel"
                        >
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
                        Lead Created Successfully!
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

                <h3>Create Lead</h3>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p> */}
                <label className="form-group">
                  <input
                    type="text"
                    className="form-control1"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    required
                  />
                  <span>Name</span>
                  <span className="border"></span>
                </label>
                <label className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    className="form-control1"
                    required
                  />
                  <span for="">Email</span>
                  <span className="border"></span>
                </label>
                <span style={{ color: "#00ade6" }}>Walking Date</span>
                <label className="form-group">
                  <input
                    className="form-control1"
                    type="date"
                    onChange={handleChange}
                    name="date"
                    id="date"
                    required
                  />
                  <span for=""></span>
                  <span className="border"></span>
                </label>
                <label className="form-group">
                  <input
                    className="form-control1"
                    type="number"
                    onChange={handleChange}
                    name="contactnumber"
                    id="contactnumber"
                    required
                  />
                  <span for="">Contact No.</span>
                  <span className="border"></span>
                </label>
                <label className="form-group">
                  <input
                    className="form-control1"
                    type="text"
                    name="leadsource"
                    id="leadsource"
                    onChange={handleChange}
                    required
                  />
                  <span for=""> Lead Source</span>
                  <span className="border"></span>
                </label>
                <label className="form-group">
                  <input
                    className="form-control1"
                    type="text"
                    name="leadagent"
                    id="leadagent"
                    onChange={handleChange}
                    required
                  />
                  <span for=""> Lead Agent</span>
                  <span className="border"></span>
                </label>

                <button className="button">
                  Create Lead
                  <i className="zmdi zmdi-arrow-right"></i>
                </button>
              </form>
            </div>
            <Footer />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default AddLeads;
