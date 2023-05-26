import React from "react";
// import { Fragment } from "react";
import Header from "../Header";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
const Customer = () => {
	// const sendData = {
	// 	email: sessionStorage.getItem("email"),
	// };
	axios.get("http://localhost:80/crime_api/records.php").then((result) => {
		document.getElementById("customer_table").innerHTML = result.data;
	});

	return (
		<div>
			<Header />
			<div>
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
