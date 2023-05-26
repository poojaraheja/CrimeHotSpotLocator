import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";

import { useNavigate } from "react-router-dom";

const AddPayments = () => {
	let history = useNavigate();
	const [Inputs, setInputs] = useState({});

	useEffect(() => {
		const sendData = {
			email: sessionStorage.getItem("email"),
		};

		axios
			.post("http://localhost:80/crime_api/addcrimerecord.php", sendData)
			.then((result) => {
				if (result.data.error === 1) {
					alert("No Customer Detected, Please Navigate Correctly");
					history("/login");
				} else {
					document.getElementById("name").value = result.data.name;
				}
			});
	}, []);

	// const handleChange = (e) => {
	// 	const name = e.target.name;
	// 	const value = e.target.value;
	// 	setInputs((values) => ({
	// 		admin_email: sessionStorage.getItem("email"),
	// 		payment_id: sessionStorage.getItem("payment_id"),
	// 		mode: document.getElementById("mode").value,
	// 		name: document.getElementById("name").value,

	// 		...values,
	// 		// admin_email: sessionStorage.getItem("email"),

	// 		[name]: value,
	// 	}));
	// };
	const submitForm = (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:80/Crime/addcrimerecord.php", Inputs)
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
								data-bs-target="#staticBackdrop"></button>

							<div
								className="modal fade"
								id="staticBackdrop"
								data-bs-backdrop="static"
								data-bs-keyboard="false"
								tabindex="-1"
								aria-labelledby="staticBackdropLabel"
								aria-hidden="true">
								<div className="modal-dialog">
									<div className="modal-content">
										<div className="modal-header">
											<h1
												className="modal-title fs-5"
												id="staticBackdropLabel">
												Success
											</h1>
											<button
												type="button"
												className="btn-close"
												data-bs-dismiss="modal"
												aria-label="Close"></button>
										</div>
										<div className="modal-body">Lead Created Successfully!</div>
										<div className="modal-footer">
											<button
												type="button"
												className="btn btn-secondary"
												data-bs-dismiss="modal">
												Close
											</button>
										</div>
									</div>
								</div>
							</div>

							<h3>Add Crime Record</h3>
							<label className="form-group">
								<input
									type="text"
									name="crimetitle"
									id="email"
									// onChange={handleChange}
									className="form-control1"
									required
								/>
								<span style={{ color: "#00ade6" }}>Crime Title</span>
								<span className="border"></span>
							</label>

							<label className="form-group">
								<input
									type="text"
									name="crimeaddress"
									id="email"
									// onChange={handleChange}
									className="form-control1"
									required
								/>
								<span for="">Crime Address</span>
								<span className="border"></span>
							</label>

							<label className="form-group">
								<select
									className="form-control1 "
									// aria-label="Default select example"
									name="mode"
									id="mode"
									type="number"
									required>
									{" "}
									<option value=""></option>
									<option value="Chain Snatching">Chain Snatching</option>
									<option value="Gambling">Gambling</option>
									<option value="Chori">Chori</option>
								</select>
								<span for="">Crime Type</span>
								<span className="border"></span>
							</label>
							<label className="form-group">
								<input
									className="form-control1"
									type="number"
									// onChange={handleChange}
									name="location_map_latitude"
									id="amount_to_pay"
									required
								/>
								<span for="">Location Map Latitude</span>
								<span className="border"></span>
							</label>
							<label className="form-group">
								<input
									className="form-control1"
									type="number"
									name="location_map_longitude"
									id="discount"
									// onChange={handleChange}
									required
								/>
								<span for="">Location Map Longitude</span>
								<span className="border"></span>
							</label>
							<label className="form-group">
								<input
									className="form-control1"
									type="text"
									name="crime_description"
									id="paid"
									// onChange={handleChange}
									required
								/>
								<span for="">Crime Description</span>
								<span className="border"></span>
							</label>

							<button className="button">
								Add Crime Record
								<i className="zmdi zmdi-arrow-right"></i>
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddPayments;
