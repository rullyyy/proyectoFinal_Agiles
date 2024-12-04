import React from "react";
import "./header.css";

export default function Header() {
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="row col-6">
            <div className="navbar-brand">
              <img src="/img/PI_positivo.png" alt="Bootstrap" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
