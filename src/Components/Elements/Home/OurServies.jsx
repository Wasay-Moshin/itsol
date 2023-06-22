import React from "react";

function OurServies() {
  return (
    <div className="ourservices">
      <div className="container">
        <div className="text-center">
          <h1>Our Services</h1>
        </div>
        <div className="services-card">
          <div className="row justify-content-center mt-5">
            <div className="col-md-3">
              <div data-aos="fade-up"
                data-aos-duration="500">
                <div class="card">
                  <img
                    className="img-fluid"
                    src="assets/Infographic screen.png"
                    width={220}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title text-center mt-3">Web based apps</h5>
                    <p class="card-text text-center">
                      Zoom Consultation We would help you turn your ideas into a
                      SaaS web apps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div data-aos="fade-up"
                data-aos-duration="1000">
                <div class="card">
                  <img
                    className="img-fluid mt-5"
                    src="assets/Card2.png"
                    width={230}
                    alt="..."
                  />
                  <div class="card-body mt-4">
                    <h5 class="card-title text-center mt-3">Our UI/UX Team</h5>
                    <p class="card-text text-center mt-3 mb-4">
                      We are specialized in UI and front end Design
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-3">
              <div data-aos="fade-up"
                data-aos-duration="1500">
                <div class="card">
                  <img
                    className="img-fluid"
                    src="assets/Working remotely.png"
                    width={200}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title text-center mt-4">
                      SaaS and White label apps
                    </h5>
                    <p class="card-text text-center">
                      Dynamic Development IT-sol would provide a dynamic, high
                      performing web based apps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServies;
