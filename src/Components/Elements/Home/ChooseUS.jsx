import React from "react";

function ChooseUS() {
  return (
    <div className="chooseus">
      <div className="container-fluid">
        <div className="text-center">
        <h1>Why You Choose US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum
          debitis officia rerum laboriosam <br /> quos nihil at eum laudantium
          neque? Minus fugit unde rem inventore, <br /> porro facere neque
          voluptatum quaerat?
        </p>
        </div>
        <div className="card-bg">
        <div className="row justify-content-center mt-5">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <img src="assets/startup.png" width={60} alt="..." />
                <h5 className="card-title mt-3">Card title</h5>
                <p className="card-text text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-1">
            <div className="vr"></div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <img src="assets/group-chat.png" width={60} alt="..." />
                <h5 className="card-title mt-3">Card title</h5>
                <p className="card-text text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-1">
            <div className="vr"></div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <img src="assets/high-quality.png" width={60} alt="..." />
                <h5 className="card-title mt-3">Card title</h5>
                <p className="card-text text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUS;
