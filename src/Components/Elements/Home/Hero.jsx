import React from "react";

function Hero() {
  return (
    <div className="hero">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <h6>IT-SOL AI OFFERS</h6>
              <h1>Customized</h1>
              <h1>
                {" "}
                <span>SaaS</span> web apps
              </h1>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <p>
                We would convert your conventional business into Digital and
                automated business by using latest cutting edge tech stacks, an
                end-to-end web based apps development life cycle to meet each
                business’ needs.
              </p>
              <button className="learn-btn mt-4">Learn More</button>
            </div>
          </div>
          <div className="col-md-6">
            <div
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <img
                className="img-fluid pt-5"
                src="assets/Creative design.png"
                width={500}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
