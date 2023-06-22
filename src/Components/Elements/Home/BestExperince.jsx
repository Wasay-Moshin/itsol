import React from "react";

function BestExperince() {
  return (
    <div className="BestExp">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div>
                <img
                  className="img-fluid"
                  src="assets/Multitasking.png"
                  alt=""
                  width={500}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1>Enjoy The Best Experience</h1>
          
            <p>
              Our web development service creates high-quality, custom websites
              that meet your unique business needs. Our team of skilled web
              developers works closely with you to understand your goals and
              deliver a responsive, user-friendly website that stands out from
              the crowd.
            </p>
            <button className="learn-btn mt-2">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestExperince;
