import React from "react";
import { Fragment } from "react";
import DashHeader from "./DashHeader";
import Sidebar from "../Sidebar";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Customer = () => {
	sessionStorage.removeItem("payment_id");
	const search = () => {
		const sendData = {
			date1: document.getElementById("date1").value,
			date2: document.getElementById("date2").value,
			date_select: document.getElementById("dropdown_date").value,

			order_by: document.getElementById("order_by").value,

			input: document.getElementById("search").value,
			type_select: document.getElementById("dropdown_type").value,

			email: sessionStorage.getItem("email"),
		};
		axios
			.post("http://localhost:80/CRM-api/customersearch.php", sendData)
			.then((result) => {
				document.getElementById("customer_table").innerHTML = result.data;
			});
	};
	useEffect(() => {
		const sendData = {
			email: sessionStorage.getItem("email"),
		};
		axios
			.post("http://localhost:80/crime_api/records.php", sendData)
			.then((result) => {
				document.getElementById("customer_table").innerHTML = result.data;
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
					<div
						className="leadbox"
						id="leadbox">
						<div id="customer_table"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Customer;
