import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import DashHeader from "./DashHeader";
import Sidebar from "../Sidebar";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
const AddPayments = () => {
  let history = useNavigate();
  const [Inputs, setInputs] = useState({});

  useEffect(() => {
    const sendData = {
      payment_id: sessionStorage.getItem("payment_id"),
    };

    axios
      .post("http://localhost:80/CRM-api/paymentinfo.php", sendData)
      .then((result) => {
        if (result.data.error === 1) {
          alert("No Customer Detected, Please Navigate Correctly");
          history("/customer");
        } else {
          document.getElementById("name").value = result.data.name;
        }
      });
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({
      admin_email: sessionStorage.getItem("email"),
      payment_id: sessionStorage.getItem("payment_id"),
      mode: document.getElementById("mode").value,
      name: document.getElementById("name").value,

      ...values,
      // admin_email: sessionStorage.getItem("email"),

      [name]: value,
    }));
  };
  const submitForm = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:80/CRM-api/addpayment.php", Inputs)
      .then((result) => {
        if (result.data.create === 1) {
          alert("Customer created successfully!");
          history("/payment");
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
                    <div className="modal-body">Lead Created Successfully!</div>
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

              <h3>Add Payment</h3>
              <span style={{ color: "#00ade6" }}>Customer Name</span>

              <label className="form-group">
                <input
                  type="text"
                  className="form-control1"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  required
                  disabled
                />

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
              <span style={{ color: "#00ade6" }}>Payment Date</span>
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
                <select
                  className="form-control1 "
                  // aria-label="Default select example"
                  name="mode"
                  id="mode"
                  type="number"
                  required
                >
                  {" "}
                  <option value=""></option>
                  <option value="Cash">Cash</option>
                  <option value="Paytm">Paytm</option>
                  <option value="NEFT">NEFT</option>
                  <option value="Cheque">Cheque</option>
                </select>
                <span for="">Payment Mode</span>
                <span className="border"></span>
              </label>
              <label className="form-group">
                <input
                  className="form-control1"
                  type="number"
                  onChange={handleChange}
                  name="amount_to_pay"
                  id="amount_to_pay"
                  required
                />
                <span for="">Amount To Pay</span>
                <span className="border"></span>
              </label>
              <label className="form-group">
                <input
                  className="form-control1"
                  type="number"
                  name="discount"
                  id="discount"
                  onChange={handleChange}
                  required
                />
                <span for="">Discount ($)</span>
                <span className="border"></span>
              </label>
              <label className="form-group">
                <input
                  className="form-control1"
                  type="number"
                  name="paid"
                  id="paid"
                  onChange={handleChange}
                  required
                />
                <span for="">Paid</span>
                <span className="border"></span>
              </label>
              <label className="form-group">
                <input
                  className="form-control1"
                  type="number"
                  name="remaining_balance"
                  id="remaining_balance"
                  onChange={handleChange}
                  required
                />
                <span for="">Remaining Balance</span>
                <span className="border"></span>
              </label>

              <button className="button">
                Add Payment
                <i className="zmdi zmdi-arrow-right"></i>
              </button>
            </form>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AddPayments;
