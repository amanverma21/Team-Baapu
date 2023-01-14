import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-6 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link "  to="/">
                 NSE
                </Link>
                {/* <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link className="dropdown-item" to="/">Action</Link>
                    <Link className="dropdown-item" to="/">Action</Link>
                    <Link className="dropdown-item" to="/">Action</Link>
                    
                </div>
                </div> */}
              </li>
              {/* <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link" to="/future">
                  Future
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/options">
                  Options
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/stock">
                  Stock
                </Link>
              </li>
            
              {/* <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
