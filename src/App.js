import React, { Fragment } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Leads from "./components/Leads";
import { Navigate } from "react-router-dom";
import Customer from "./components/Customer";
import AddCrimeRecord from "./components/AddCrimeRecord";
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
						path="/login"
						element={<Login />}
					/>

					<Route
						exact
						path="/lead"
						element={
							sessionStorage.getItem("email") ? (
								<Leads />
							) : (
								<Navigate
									replace
									to={"/login"}
								/>
							)
						}
					/>

					<Route
						path="/customer"
						element={<Customer />}
					/>
					<Route
						path="/addcrimerecord"
						element={<AddCrimeRecord />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
