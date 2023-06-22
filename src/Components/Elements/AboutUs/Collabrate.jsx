import React from "react";
import { Link } from "react-router-dom";
function Collabrate() {
  return (
    <div className="collaborate">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <span>Lets Collaborate</span>
            <h1>
              Do you want to meet your business's needs with an ideal solution?
            </h1>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-end pt-5">
              <Link to="/contactus">
            <button className="letstalk">Lets Talk</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collabrate;
