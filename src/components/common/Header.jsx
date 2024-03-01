import React from "react";

const Header = ({ title }) => {
  return (
    <header className="header rounded overflow-hidden">
      <div className="overlay" style={{ zIndex: 98 }}></div>
      <div className="container h-100 d-flex justify-content-center align-items-center">
        <h1
          className="header-title text-center"
          style={{ zIndex: 99, color: "white" }}
        >
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Header;
