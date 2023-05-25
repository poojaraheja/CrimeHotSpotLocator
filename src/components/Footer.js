import React from "react";

const Footer = () => {
  return (
    <div
      className="container my-20"
      style={{
        height: "70px",
        marginTop: "30px",
        maxWidth: "100%",
        padding: "0px",
        bottom: "0",
        position: "relative",
      }}
    >
      <footer
        className="text-lg footer"
        style={{
          height: "100%",
          // paddingTop: "30px",
        }}
      >
        <div
          className="text-center text-white p-3"
          style={{ fontSize: "20px" }}
        >
          © 2023 Copyright By Mag Cloud Solutions
        </div>
      </footer>
    </div>
  );
};

export default Footer;
