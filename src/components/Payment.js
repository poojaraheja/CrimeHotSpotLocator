import React, { Fragment } from "react";
import DashHeader from "./DashHeader";
import { useEffect } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

const Payment = () => {
  useEffect(() => {
    const sendData = {
      payment_id: sessionStorage.getItem("payment_id"),
      admin_email: sessionStorage.getItem("email"),
    };
    axios
      .post("http://localhost:80/CRM-api/payment.php", sendData)
      .then((result) => {
        document.getElementById("payment_table").innerHTML = result.data;
      });
  });
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
          <div className="leadbox" id="leadbox">
            <Link
              type="button"
              className="btn btn-primary"
              style={{ marginRight: "20px" }}
              to="/addleads"
            >
              Add Leads +
            </Link>

            <div id="payment_table" className="lead_table "></div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Payment;
