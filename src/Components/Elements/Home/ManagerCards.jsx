import React from "react";

function ManagerCards() {
  return (
    <div className="manager-cards">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div class="card">
              <img src="assets/team.png" width={80} alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title">Emily-Rose</h5>
                <p class="card-text">
                  "Hasnain and his team are loyal, reliable, and willing to
                  follow instructions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img src="assets/team.png" width={80} alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title">Emily-Rose</h5>
                <p class="card-text">
                  "Hasnain and his team are loyal, reliable, and willing to
                  follow instructions.
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-3">
            <div class="card">
              <img src="assets/team.png" width={80} alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title">Emily-Rose</h5>
                <p class="card-text">
                  "Hasnain and his team are loyal, reliable, and willing to
                  follow instructions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagerCards;
