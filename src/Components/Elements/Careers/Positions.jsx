import React from "react";
import { Link } from "react-router-dom";

function Positions() {
  return (
    <div className="position">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h1>Open Positions</h1>
          </div>
          <div className="col-md-6 mt-5">
            <div className="d-flex justify-content-between mt-4">
              <h5> Front End Developer</h5>
              <Link to="/contactus" style={{textDecoration:"none"}}>
                <h6>Apply</h6>
              </Link>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <h5>Back End Developer</h5>
              <Link to="/contactus" style={{textDecoration:"none"}}>
                <h6>Apply</h6>
              </Link>
            </div>{" "}
            <div className="d-flex justify-content-between mt-4">
              <h5> Laravel Developer</h5>
              <Link to="/contactus" style={{textDecoration:"none"}}>
                <h6>Apply</h6>
              </Link>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <h5>Graphic Designer</h5>
              <Link to="/contactus" style={{textDecoration:"none"}}>
                <h6>Apply</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Positions;
