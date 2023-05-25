import React from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const DashHeader = () => {
	function myFunction() {
		document.getElementById("myDropdown").classList.toggle("show");
	}
	let history = useNavigate();
	const Hideslidebar = () => {
		document.getElementById("sidebar").style.animation =
			"fade-out 1s ease-in-out forwards";
		document.getElementById("barbtn").style.display = "block";
		document.getElementById("closebtn").style.display = "none";
	};
	const showslidebar = () => {
		document.getElementById("sidebar").style.display = "block";
		document.getElementById("sidebar").style.animation = "fadeIn 1s ease";

		document.getElementById("barbtn").style.display = "none";
		document.getElementById("closebtn").style.display = "block";
	};
	useEffect(() => {
		const sendData = {
			email: sessionStorage.getItem("email"),
		};

		axios
			.post("http://localhost:80/CRM-api/session.php", sendData)
			.then((result) => {
				document.getElementById("Name").innerHTML =
					"Hello " + result.data.first_name + " " + result.data.last_name + "!";
			});
	}, []);

	return (
		<nav
			className="navbar navbar-expand-lg bg-body-tertiary"
			style={{
				margin: "0",
				padding: "0",
			}}>
			<div className="container-fluid">
				<img
					className="logo"
					src="Mag.png"
					alt="images"
				/>

				<i
					className="fa fa-bars left-items"
					style={{ fontSize: "28px" }}
					onClick={showslidebar}
					id="barbtn"></i>
				<i
					className="fa fa-close left-items"
					style={{ display: "none", fontSize: "28px" }}
					id="closebtn"
					onClick={Hideslidebar}></i>
				<div
					className=""
					id="">
					<ul className="navbar-nav">
						<li className=" "></li>
						<li
							className="nav-item dropdown"
							style={{ marginLeft: "20px" }}>
							<span
								className="nav-link dropdown-toggle"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
								id="Name"
								style={{
									marginRight: "5px",
								}}></span>
							<ul className="dropdown-menu">
								<li>
									<Link
										className="nav-link active"
										to="/login"
										style={{ paddingLeft: "12px", color: "#585858" }}
										onClick={() => {
											sessionStorage.removeItem("email");
											sessionStorage.removeItem("token");
										}}>
										<i
											className="fa fa-power-off"
											style={{ margin: "3px", padding: "2px" }}></i>
										Sign Out
									</Link>
								</li>
								<li>
									<Link
										className="dropdown-item"
										to="/editprofile">
										<i
											className="fa fa-edit"
											style={{
												margin: "2px",
												padding: "0px",
											}}></i>
										Edit Profile
									</Link>
								</li>
								<li>
									<Link
										className="dropdown-item"
										to="/subadmin">
										<i
											className="fa fa-user"
											style={{
												margin: "2px",
												padding: "0px",
											}}
											aria-hidden="true"></i>
										Create Sub Admin
									</Link>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default DashHeader;
