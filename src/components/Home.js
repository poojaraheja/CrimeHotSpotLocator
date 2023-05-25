import React from "react";
import Header from "../Header";

import { Link } from "react-router-dom";
const Home = () => {
	return (
		<div>
			<Header />
			<section
				id="hero"
				className="d-flex align-items-center">
				<div
					className="container"
					data-aos="zoom-out"
					data-aos-delay="100">
					<div className="d-flex"></div>
				</div>
			</section>
			<div className="d-flex">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id nihil
				libero maxime a voluptatum similique praesentium adipisci eum blanditiis
				expedita qui quisquam consectetur saepe nostrum, placeat impedit
				laboriosam, aut quaerat!
			</div>
		</div>
	);
};

export default Home;
