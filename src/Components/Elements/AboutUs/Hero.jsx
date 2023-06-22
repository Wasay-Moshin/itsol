import React from "react";

function Hero() {
  return (
    <div className="aboutus">
      <div className="container pt-3">
        <div className="row">
          <div className="col-md-6">
            <div data-aos="fade-right" data-aos-duration="1000">
              <span>About Us</span>
              <h1>Empowering Businesses with Cutting-Edge Solutions</h1>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000">
              <p>
                We are a leading software company dedicated to delivering
                innovative solutions for businesses of all sizes. With a strong
                focus on cutting-edge technologies, we strive to provide
                high-quality software products and services that meet the
                evolving needs of our clients.
              </p>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="d-flex justify-content-center mt-4">
            <div data-aos="fade-left" data-aos-duration="1000">
            <img
                className="img-fluid"
                src="assets/Infographic screen.png"
                alt=""
              />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
