import React from "react";
import { AiFillStar } from "react-icons/ai";
function Winningmanager() {
  return (
    <div className="winning-manager">
      <img
        className="img-fluid"
        src="assets/Rectangle.png"
        width={250}
        alt=""
      />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="star">
              <AiFillStar color="#5280E2" size={35} />
              &nbsp; &nbsp;
              <AiFillStar color="#5280E2" size={35} />
              &nbsp; &nbsp;
              <AiFillStar color="#5280E2" size={35} />
              &nbsp; &nbsp;
              <AiFillStar color="#5280E2" size={35} />
              &nbsp; &nbsp;
              <AiFillStar color="#5280E2" size={35} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="award">
              <h1>
                <strong>Award-winning</strong> manager
              </h1>
              <p>
                Top pick <span>by our customers</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Winningmanager;
