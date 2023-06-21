import React from "react";
import { FaFacebookF } from "react-icons/fa";

function Newletters() {
  return (
    <div className="newletters">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h1>Subscribe for our Newsletter</h1>
            <p>
              we are skilled web developers dedicated to creating visually
              appealing, user-friendly, and functional websites that meet the
              unique needs of our clients.
            </p>
          </div>
          <div className="col-md-7">
            <div className=" d-flex justify-content-end">
              <img
                className="img-fluid"
                src="assets/newletters.png"
                width={280}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center pt-4">
          <div className="col-md-4">
            <p className="text-center">Follow Us On:</p>
            <div className="flow">
              <img src="assets/facebook.png" width={30} alt="" />
              &nbsp;
              <img src="assets/twitter.png" width={30} alt="" />
              &nbsp;
              <img src="assets/upwork.png" width={30} alt="" />
              &nbsp;
              <img src="assets/instagram.png" width={30} alt="" />
              &nbsp;
              <img src="assets/linked.png" width={30} alt="" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-2">
            <div class="card">
              <div class="card-body">
                <FaFacebookF className="logo" />
                <span class="text">Facebook</span>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div class="card">
              <div class="card-body">
                <FaFacebookF className="logo" />
                <span class="text">Facebook</span>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-2">
            <div class="card">
              <div class="card-body">
                <FaFacebookF className="logo" />
                <span class="text">Facebook</span>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-2">
            <div class="card">
              <div class="card-body">
                <FaFacebookF className="logo" />
                <span class="text">Facebook</span>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-2">
            <div class="card">
              <div class="card-body">
                <FaFacebookF className="logo" />
                <span class="text">Facebook</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newletters;
