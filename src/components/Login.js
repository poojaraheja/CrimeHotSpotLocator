import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import axios from "axios";

const Login = () => {
	var admin = "";
	let history = useNavigate();

	const [user, setUser] = useState({});
	const [error, setError] = useState("");
	const [error1, setError1] = useState("");

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	const showPass = () => {
		var x = document.getElementById("pass");
		if (x.type === "password") {
			x.type = "text";
		} else {
			x.type = "password";
		}
	};
	const errorRemoveEmail = () => {
		setError("");
	};
	const errorRemovePass = () => {
		setError1("");
	};
	const submitForm = (e) => {
		e.preventDefault();

		if (
			document.getElementById("email").value === "" ||
			document.getElementById("pass").value === ""
		) {
			if (document.getElementById("email").value === "") {
				setError("Field Required");
			}
			if (document.getElementById("pass").value === "") {
				setError1("Field Required");
			}
		} else {
			const sendData = {
				email: user.email,
				password: user.password,
				user: user.type,
			};

			axios
				.post("http://localhost:80/Crime/login.php", sendData)
				.then((result) => {
					if (result.data.logged === 1) {
						sessionStorage.setItem("email", result.data.email);
						history("/addcrimerecord");
					} else {
						if (result.data.password === 0) {
							alert("Incorrect password. Please try Again");
						} else if (result.data.register === 0) {
							alert("Email does not exist. Please Register");
						}
					}
				});
		}
	};

	return (
		<div>
			<div className="wrapper">
				<div className="flex-box ">
					<div className="img-box ">
						<img
							className="side-img"
							src="img-1.gif"
						/>
					</div>
					<div className="main-box-login">
						<form onSubmit={submitForm}>
							<div className="row">
								<div className="col-md-12 text-center">
									<a
										className="navbar-brand"
										href="#"></a>
									<h1>Login</h1>
									<hr />
								</div>
							</div>

							<div className="row">
								<div className="col-md-6 col-lg-6">
									<i className="fa fa-envelope me-2"></i>Username
								</div>{" "}
								<div className="col-md-6 col-lg-6">
									<input
										onInput={errorRemoveEmail}
										id="email"
										type="text"
										name="email"
										className="form-control input-box"
										onChange={handleChange}
										// value={user.email}
									/>
									{error ? <span style={{ color: "red" }}>{error}</span> : ""}
								</div>
							</div>

							<div className="row">
								<div className="col-md-6 col-lg-6">
									<i className="fa fa-key icon me-2"></i>Password
								</div>{" "}
								<div className="col-md-6 col-lg-6">
									<input
										onInput={errorRemovePass}
										id="pass"
										type="password"
										name="password"
										className="form-control "
										onChange={handleChange}
										// value={user.password}
									/>
									{error1 ? <span style={{ color: "red" }}>{error1}</span> : ""}
									<div
										style={{
											marginTop: "5px",
										}}>
										<input
											type="checkbox"
											onClick={showPass}
										/>
										<span
											style={{
												color: "black",
											}}>
											&nbsp;Show Password
										</span>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-6 col-lg-6">
									<div class="wrapper1">
										<input
											type="radio"
											name="type"
											id="option-1"
											value="admin"
											onChange={handleChange}
										/>
										<input
											type="radio"
											name="type"
											id="option-2"
											value="sub_admin"
											onChange={handleChange}
										/>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-12 text-center">
									<input
										type="Submit"
										name="submit"
										defaultValue="Login"
										className="btn btn-primary buzz-button"
									/>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
