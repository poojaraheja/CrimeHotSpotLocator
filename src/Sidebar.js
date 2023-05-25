import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Sidebar,
  SubMenu,
  Menu,
  MenuItem,
  //useProSidebar
} from "react-pro-sidebar";

function Sidebars() {
  //const { collapseSidebar } = useProSidebar();
  const [collapsed, setCollapsed] = useState(false);

  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div id="sidebar" style={{ display: "none" }}>
      <Sidebar
        className={`app ${toggled ? "toggled" : ""}`}
        style={{ height: "100%", position: "absolute" }}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      >
        <main>
          <Menu>
            <SubMenu
              defaultOpen
              label={"Lead"}
              // icon={<RiTeamLine />}
            >
              <MenuItem
              // icon={<RiUserFollowLine />}
              >
                <Link className="nav-link collapsed" to="/lead">
                  Lead
                </Link>{" "}
              </MenuItem>
              <MenuItem
              // icon={<RiUserFollowLine />}
              >
                <Link className="nav-link collapsed" to="/addleads">
                  Add Leads
                </Link>
              </MenuItem>
            </SubMenu>
            <SubMenu
              defaultOpen
              label={"Customer"}
              // icon={<RiFolder2Line />}
            >
              <MenuItem
              // icon={<RiStackLine />}
              >
                <Link className="nav-link collapsed" to="/customer">
                  Customer
                </Link>
              </MenuItem>
              <MenuItem
              // icon={<RiPlantLine />}
              >
                <Link className="nav-link collapsed" to="/addcustomer">
                  Add Customer
                </Link>
              </MenuItem>
            </SubMenu>
            <SubMenu
              defaultOpen
              label={"Payment"}
              // icon={<RiFolder2Line />}
            >
              <MenuItem
              // icon={<RiStackLine />}
              >
                <Link className="nav-link collapsed" to="/payment">
                  Payments
                </Link>
              </MenuItem>
              <MenuItem
              // icon={<RiPlantLine />}
              >
                <Link className="nav-link collapsed" to="/addpayment">
                  Add Payments
                </Link>
              </MenuItem>
            </SubMenu>
          </Menu>
        </main>
      </Sidebar>
    </div>
  );
}
export default Sidebars;
