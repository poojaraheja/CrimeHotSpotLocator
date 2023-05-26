import axios from "axios";
import { useState } from "react";
// import { Fragment } from "react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

const AddPayments = () => {
	let history = useNavigate();
	if (sessionStorage.getItem("token")) {
	} else {
		history("/login");
	}
	const [Inputs, setInputs] = useState({});

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setInputs((values) => ({
			...values,
			[name]: value,
		}));
	};
	const submitForm = (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:80/crime_api/addcrimerecord.php", Inputs)
			.then((result) => {
				if (result.data.create === 1) {
					alert("Customer created successfully!");
					history("/records");
				} else {
					alert("Internal Server Error");
				}
			});
	};
	return (
		<div>
			<Header />
			<div>
				<div className="wrapper">
					<div className="inner">
						<form onSubmit={submitForm}>
							<h3>Add Crime Record</h3>
							<label className="form-group">
								<input
									type="text"
									name="crimetitle"
									id="email"
									onChange={handleChange}
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
									onChange={handleChange}
									className="form-control1"
									required
								/>
								<span for="">Crime Address</span>
								<span className="border"></span>
							</label>
							<label className="form-group">
								<input
									type="text"
									name="mode"
									id="mode"
									onChange={handleChange}
									className="form-control1"
									required
								/>
								<span for="">Crime Mode</span>
								<span className="border"></span>
							</label>
							<label className="form-group">
								<input
									className="form-control1"
									type="number"
									onChange={handleChange}
									name="location_map_latitude"
									id="amount_to_pay"
									required
								/>
								<span for="">Location Map Lattitude</span>
								<span className="border"></span>
							</label>
							<label className="form-group">
								<input
									className="form-control1"
									type="number"
									name="location_map_longitude"
									id="discount"
									onChange={handleChange}
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
									onChange={handleChange}
									required
								/>
								<span for="">Crime Description</span>
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
								<span for="">Select Country</span>
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
								<span for="">Select State</span>
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
								<span for="">Select City</span>
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
