import React from "react";
import { Link } from "react-router-dom";

const Slidebar = () => {
  return (
    <div>
      <aside id="sidebar" class="sidebar">
        <ul class="sidebar-nav" id="sidebar-nav">
          <li class="nav-item">
            <div class="dropdown">
              <a
                class="dropdown-toggle nav-link collapsed"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5>Lead Section</h5>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item">
            <Link class="nav-link collapsed" to="/customer">
              <h5>Customer</h5>
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link collapsed" to="">
              <h5>Payments</h5>
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link collapsed" to="">
              <h5>Jobs</h5>
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link collapsed" to="">
              <h5>Reports</h5>
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link collapsed" to="">
              <h5>Verify</h5>
            </Link>
          </li>
          {/* <!-- End verify Nav --> */}
        </ul>
      </aside>
    </div>
  );
};

export default Slidebar;
