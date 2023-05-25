import React, { Fragment } from "react";
import Home from "./components/Home";
import OTP from "./components/OTP";
import OtpForgetPass from "./components/OtpForgetPass";
import Login from "./components/Login";
import Register from "./components/Register";
import Forget from "./components/Forget";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Newpass from "./components/Newpass";
import Leads from "./components/Leads";
import { Navigate } from "react-router-dom";
import AddLeads from "./components/AddLeads";
import AddCustomer from "./components/AddCustomer";
import Customer from "./components/Customer";
import Payment from "./components/Payment";
import AddPayments from "./components/AddPayments";
import EditProfile from "./components/EditProfile";
import SubAdmin from "./components/SubAdmin";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/forgetpass" element={<OtpForgetPass />} />
          <Route path="/newpass" element={<Newpass />} />
          <Route
            exact
            path="/lead"
            element={
              sessionStorage.getItem("email") ? (
                <Leads />
              ) : (
                <Navigate replace to={"/login"} />
              )
            }
          />
          <Route path="/addleads" element={<AddLeads />} />
          <Route path="/addcustomer" element={<AddCustomer />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/addpayment" element={<AddPayments />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/subadmin" element={<SubAdmin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
