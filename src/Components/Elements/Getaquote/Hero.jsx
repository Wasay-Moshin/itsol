import React from "react";

function Hero() {
  return (
    <div className="getaquote">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card">
              <div className="row">
                <div className="col-md-4">
                  <div className="pt-3">
                    <label className="form-label"> Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="pt-3">
                    <label className="form-label">Company Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="pt-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="pt-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="phone number"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="pt-3">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="pt-3">
                    <div class="mb-3">
                      <label for="formFile" class="form-label">
                        Select Your Docs
                      </label>
                      <input class="form-control" type="file" id="formFile" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-3 pb-3">
                <label className="form-label">Project Descripition</label>
                <textarea
                  className="form-control"
                  placeholder="Brief Detail of your project"
                />
              </div>
              <button type="submit" value="Send" className="send">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
