import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
function OffcanvasNav() {
  useEffect(() => {
    const offcanvasNavbar = document.getElementById("offcanvasNavbar");
    const offcanvas = new bootstrap.Offcanvas(offcanvasNavbar);

    const handleMenuClick = () => {
      if (offcanvasNavbar.classList.contains("show")) {
        offcanvas.hide();
      }
    };

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", handleMenuClick);
    });

    return () => {
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.removeEventListener("click", handleMenuClick);
      });
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="offcanvasnav">
      <nav className="navbar bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="assets/logo.png" alt="" width={100} />
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button> */}
          <button
            className={`menu-button ${isOpen ? "open" : ""}`}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            onClick={handleClick}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header d-flex justify-content-end">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              {/* <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Aboutus" style={{ textDecoration: "none" }}>
                    <a className="nav-link active" href="#">
                      About Us
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Contactus" style={{ textDecoration: "none" }}>
                    <a className="nav-link active " href="/">
                      <p>Contact Us</p>
                    </a>
                  </Link>
                </li>
              </ul> */}
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <a className="nav-link active " href="/">
                      <p>Home</p>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Aboutus" style={{ textDecoration: "none" }}>
                    <a className="nav-link active " href="/">
                      <p>About Us</p>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/privacy" style={{ textDecoration: "none" }}>
                    <a className="nav-link active " href="/">
                      <p>Privacy</p>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/portfolio" style={{ textDecoration: "none" }}>
                    <a className="nav-link active " href="/">
                      <p>Projects</p>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/career" style={{ textDecoration: "none" }}>
                    <a className="nav-link active " href="/">
                      <p>Careers</p>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/getaquote" style={{ textDecoration: "none" }}>
                    <a className="nav-link active " href="/">
                      <p>Get a Quote</p>
                    </a>
                  </Link>
                </li>{" "}
                <li className="nav-item">
                  <Link to="/Contactus" style={{ textDecoration: "none" }}>
                    <a className="nav-link active " href="/">
                      <p>Contact Us</p>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default OffcanvasNav;
