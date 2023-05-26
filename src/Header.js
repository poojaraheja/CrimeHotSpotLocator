import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Header = () => {
	let history = useNavigate();
	return (
		// <nav className="navbar navbar-expand-lg bg-body-tertiary">
		// 	<div className="container-fluid">
		// 		<span
		// 			className="navbar-brand"
		// 			href="#"></span>
		// 		<button
		// 			className="navbar-toggler"
		// 			type="button"
		// 			data-bs-toggle="collapse"
		// 			data-bs-target="#navbarSupportedContent"
		// 			aria-controls="navbarSupportedContent"
		// 			aria-expanded="false"
		// 			aria-label="Toggle navigation">
		// 			<span className="navbar-toggler-icon"></span>
		// 		</button>
		// 		<div
		// 			className="collapse navbar-collapse"
		// 			id="navbarSupportedContent">
		// 			<ul className="navbar-nav me-auto mb-2 mb-lg-0">
		// 				<li className="nav-item">
		// 					<Link
		// 						className="nav-link active"
		// 						to="/">
		// 						Find City Crime Locations
		// 					</Link>
		// 				</li>
		// 				<li className="nav-item">
		// 					<Link
		// 						className="nav-link active"
		// 						to="/">
		// 						About Us
		// 					</Link>
		// 				</li>
		// 				<li className="nav-item dropdown">
		// 					<Link
		// 						className="nav-link active"
		// 						to="/">
		// 						Contact Us
		// 					</Link>
		// 				</li>
		// 				<li className="nav-item dropdown">
		// 					<Link
		// 						className="nav-link active"
		// 						to="/login">
		// 						Admin Login
		// 					</Link>
		// 				</li>
		// 				<li className="nav-item dropdown">
		// 					<Link
		// 						className="nav-link active"
		// 						to="/">
		// 						Post My Crime Issue
		// 					</Link>
		// 				</li>
		// 			</ul>
		// 		</div>
		// 	</div>
		// </nav>
		<nav class="navbar">
			<div class="navbar-container container">
				<input
					type="checkbox"
					name=""
					id=""
				/>
				<div class="hamburger-lines">
					<span class="line line1"></span>
					<span class="line line2"></span>
					<span class="line line3"></span>
				</div>
				<ul class="menu-items">
					<li>
						<Link
							className="nav-link active"
							to="/">
							Find City Crime Locations
						</Link>
					</li>
					<li>
						<Link
							className="nav-link active"
							to="/">
							About Us
						</Link>
					</li>
					<li>
						<Link
							className="nav-link active"
							to="/">
							Contact Us
						</Link>
					</li>
					<li>
						<Link
							className="nav-link active"
							to="/login">
							Admin Login
						</Link>
					</li>
					<li>
						<Link
							className="nav-link active"
							to="/">
							Post My Crime Issue
						</Link>
					</li>
				</ul>
				<h1 class="logo">Crime HotSpot Locator</h1>
			</div>
		</nav>
	);
};

export default Header;
