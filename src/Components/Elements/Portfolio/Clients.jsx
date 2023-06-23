import React from "react";

function Clients() {
  return (
    <div className="clients">
      <div className="container p-5">
        <div>
          <h6>Our Clients</h6>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <div className="row">
            <div className="col-md-4">
              <img
                className="img-fluid"
                src="assets/TN.png"
                alt=""
                width={400}
              />
            </div>
            <div className="col-md-4">
              <img
                className="img-fluid"
                src="assets/ATH16.png"
                alt=""
                width={400}
              />
            </div>{" "}
            <div className="col-md-4">
              <img
                className="img-fluid"
                src="assets/image0.jpeg"
                alt=""
                width={300}
              />
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <div className="row mt-5">
            <div className="col-md-4">
              <img
                className="img-fluid"
                src="assets/image0.jpeg"
                alt=""
                width={300}
              />
            </div>
            <div className="col-md-4">
              <img
                className="img-fluid"
                src="assets/TN.png"
                alt=""
                width={400}
              />
            </div>
            <div className="col-md-4">
              <img
                className="img-fluid"
                src="assets/ATH16.png"
                alt=""
                width={400}
              />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
