import React from "react";

function Perks() {
  return (
    <div className="perks">
      <div className="container">
        <div className="row">
          <div className="col-md-3 ">
            <h1>The Perks of working with us</h1>
          </div>
          <div className="col-md-9  mt-4">
            <div data-aos="fade-up" data-aos-duration="1000">
              <hr style={{ border: "1px solid" }} />
            </div>
          </div>
        </div>
        <di className="row justify-content-end">
          <div className="col-md-4">
            <ul>
              <div data-aos="fade-up" data-aos-duration="1000">
                <li className="pb-3">
                  Group life insurance - plus additional voluntary benefits
                </li>
                <li className="pb-3">
                  Wellness - from seminars and health coaching to group classes
                  and fitness challenges{" "}
                </li>
                <li className="pb-3">Target driven bonus scheme </li>
                <li className="pb-3">
                  Tech & Well-being focused Ergonomics (dual screen, stand-up
                  desks){" "}
                </li>
                <li className="pb-3">WFH Flexibility</li>
              </div>
            </ul>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <ul>
              <div data-aos="fade-up" data-aos-duration="1000">
                <li className="pb-3">Up to 27 Days Holidays a year </li>
                <li className="pb-3">
                  Health cover - fully paid health insurance including dental{" "}
                </li>
                <li className="pb-3">Sports clubs and social events </li>
                <li className="pb-3">Accelerated career development </li>
                <li className="pb-3">
                  Educational assistance and professional development programmes{" "}
                </li>
              </div>
            </ul>
          </div>
        </di>
      </div>
    </div>
  );
}

export default Perks;
