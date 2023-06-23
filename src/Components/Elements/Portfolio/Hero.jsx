import React from "react";
import CountUp from "react-countup";
function Hero() {
  return (
    <div className="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-3 pt-3">
            <h1>Projects By Numbers</h1>
            <p>
              To meet the business specific needs of our clients, we provide
              them with efficient and scalable solutions.
            </p>
          </div>
          <div className="col-md-4">
            <div className="Counter mt-3">
              <div>
                <img src="assets/briefing.png" alt="" width={50} />
                <p>Projects</p>
              </div>
              <div>
                <CountUp start={0} end={60} duration={2.75}>
                  {({ countUpRef }) => (
                    <div>
                      <span>
                        <span ref={countUpRef} />+
                      </span>
                    </div>
                  )}
                </CountUp>
              </div>
            </div>
            <div className="Counter mt-4">
              <div>
                <img src="assets/stakeholder.png" alt="" width={50} />
                <p>Stackholders</p>
              </div>
              <div>
                <CountUp start={0} end={20} duration={2.75}>
                  {({ countUpRef }) => (
                    <div>
                      <span>
                        <span ref={countUpRef} />+
                      </span>
                    </div>
                  )}
                </CountUp>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="Counter mt-3">
              <div>
                <img src="assets/rating-stars.png" alt="" width={50} />
                <p>Clients</p>
              </div>
              <div>
                <CountUp start={0} end={40} duration={2.75}>
                  {({ countUpRef }) => (
                    <div>
                      <span>
                        <span ref={countUpRef} />+
                      </span>
                    </div>
                  )}
                </CountUp>
              </div>
            </div>
            <div className="Counter mt-4">
              <div>
                <img src="assets/time-management.png" alt="" width={50} />
                <p>Working Hours</p>
              </div>
              <div>
                <CountUp start={0} end={16000} duration={2.75}>
                  {({ countUpRef }) => (
                    <div>
                      <span>
                        <span ref={countUpRef} />+
                      </span>
                    </div>
                  )}
                </CountUp>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
