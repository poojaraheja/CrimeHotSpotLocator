import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import DashHeader from "./DashHeader";
import Sidebar from "../Sidebar";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
const EditProfile = () => {
  let history = useNavigate();
  const [Inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({
      admin_email: sessionStorage.getItem("email"),

      ...values,
      // admin_email: sessionStorage.getItem("email"),

      [name]: value,
    }));
  };
  const submitForm = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:80/CRM-api/editprofile.php", Inputs)
      .then((result) => {
        if (result.data.updated === 1) {
          alert("Profile Updated Successfully");

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
      <div className="flex-box-main">
        <div className="slidebar">
          <Fragment>
            <Sidebar />
          </Fragment>
        </div>
        <div className="leadbox" id="leadbox">
          <form id="survey-form" onSubmit={submitForm}>
            <div className="flex-div">
              <label id="name-label" for="name">
                First Name
              </label>
              <input
                style={{ backgroundColor: "white" }}
                className="form-control"
                type="text"
                name="first_name"
                id="first_name"
                onChange={handleChange}
                placeholder="Edit first_name"
                required
              />
            </div>
            <div className="flex-div">
              <label id="name-label" for="name">
                Last Name
              </label>
              <input
                className="form-control"
                type="text"
                name="last_name"
                id="last_name"
                onChange={handleChange}
                placeholder="Edit last_name"
                required
              />
            </div>

            <div className="flex-div">
              <label id="dropdown-label" for="dropdown">
                Phone
              </label>
              <input
                className="form-control"
                type="number"
                onChange={handleChange}
                name="phone"
                id="phone"
                placeholder="Edit phone number"
              />
            </div>

            <button className="button my-4" type="submit" id="submit">
              Edit Profile
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfile;
