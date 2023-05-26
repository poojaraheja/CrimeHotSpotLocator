import React, { Fragment } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Customer from "./components/Customer";
import AddCrimeRecord from "./components/AddCrimeRecord";
import CrimeIssue from "./components/CrimeIssue";
import CrimeLocation from "./components/CrimeLocation";
function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>

					<Route
						path="/records"
						element={<Customer />}
					/>
					<Route
						path="/addcrimerecord"
						element={<AddCrimeRecord />}
					/>
					<Route
						path="/crimeissue"
						element={<CrimeIssue />}
					/>
					<Route
						path="/crimelocation"
						element={<CrimeLocation />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
