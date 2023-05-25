import React, { Fragment } from "react";
import DashHeader from "./DashHeader";
import Sidebar from "../Sidebar";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Leads = () => {
	sessionStorage.removeItem("payment_id");
	const [dates, setDates] = useState([]);
	// console.log(dates);

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
			.post("http://localhost:80/CRM-api/search.php", sendData)
			.then((result) => {
				document.getElementById("lead_table").innerHTML = result.data;
			});
	};
	useEffect(() => {
		const sendData = {
			email: sessionStorage.getItem("email"),
		};
		axios
			.post("http://localhost:80/CRM-api/lead.php", sendData)
			.then((result) => {
				document.getElementById("lead_table").innerHTML = result.data;
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
						<Link
							type="button"
							className="btn btn-primary"
							style={{ marginRight: "20px" }}
							to="/addleads">
							Add Leads +
						</Link>

						<form className="example">
							<div className="input-group category">
								<input
									id="search"
									type="text"
									className="form-control search_input input-group-text"
									placeholder="Search.."
									name="search"
									onInput={search}
								/>
								<select
									onInput={search}
									name="dropdown"
									id="dropdown_type"
									className="btn btn-outline-dark
                   ">
									<option value="">Select</option>
									<option value="name">Name</option>
									<option value="email">Email</option>
									<option value="contact_no">Contact No.</option>
									<option value="lead_source">Lead Source</option>
									<option value="lead_agent">Lead Agent</option>
								</select>
							</div>

							<select
								name="dropdown"
								id="order_by"
								className="btn btn-outline-dark
                 search_dropdown "
								onInput={search}>
								<option value="">By Order</option>
								<option value="DESC">Latest</option>
								<option value="ASC">Oldest </option>
								{/* <option value="all">All Entries</option> */}
							</select>

							<div className="input-group date_search">
								<span className="input-group-text">From :</span>
								<input
									type="date"
									id="date1"
									className="btn btn-outline-dark
                   form-control"
								/>
								<span className="input-group-text">To :</span>
								<input
									type="date"
									id="date2"
									onInput={search}
									className="btn btn-outline-dark
                   form-control"
								/>
								<select
									name="dropdown"
									id="dropdown_date"
									className="btn btn-outline-dark"
									onInput={search}>
									<option value="">By Date</option>
									<option value="walking_date">Walking Date</option>
									<option value="created_at">Created At</option>
									{/* <option value="all">All Entries</option> */}
								</select>
							</div>
						</form>

						<div
							id="lead_table"
							className="lead_table "></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Leads;
