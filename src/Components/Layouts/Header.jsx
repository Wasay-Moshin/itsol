import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
            <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="assets/itsol-logo.png" alt=" logo here" width={"140px"} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mt-3">
              <li className="nav-item">
              <Link to='/' style={{textDecoration:"none"}}>
                <a className="nav-link active " href="/">
                  <p>Home</p>
                </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/Aboutus' style={{textDecoration:"none"}}>
                <a className="nav-link active " href="/">
                  <p>About Us</p>
                </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                  <p>Privacy</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                  <p>Terms</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                  <p>FAQ</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                  <p>Pricing</p>
                </a>
              </li>{" "}
              <li className="nav-item">
                <a className="nav-link active " href="/">
                  <p>Contact Us</p>
                </a>
              </li>
            </ul>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <div>
              <button className="started-btn">Get Started</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
