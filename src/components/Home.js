import React from "react";
import Header from "../Header";

import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Header />
      <section id="hero" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <h1>
            Welcome to <span>Mag Cloud Solutions</span>
          </h1>
          <h2>We are team of talented designers making websites.</h2>
          <div className="d-flex">
            <Link to="/login" className="btn btn-primary me-2">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary">
              Register
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
