import React from "react";

export function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample08"
        aria-controls="navbarsExample08"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="navbar-collapse justify-content-md-center collapse"
        id="navbarsExample08"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/home">
             Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          </ul>
      </div>
    </nav>
  );
}
