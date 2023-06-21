import React from "react";

function Tech() {
  return (
    <div className="tech">
      <div className="container mt-5">
        <h3>Technology Stacks</h3>
        <div className="p-3">
          <p>Front-End</p>
          <span>
            Our goal is to create a seamless and enjoyable experience for your
            users, so they can fully immerse themselves in your website's
            offerings. We diligently attend to every intricate detail of your
            project, ensuring that your website is captivating and
            user-friendly.
          </span>
          <div className="mt-5">
            <p>Technologies</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-6">
            <img
              className="img-fluid mb-2"
              src="assets/react.png"
              alt=""
              width={150}
            />
          </div>
          <div className="col-md-3 col-6">
            <img
              className="img-fluid mb-2"
              src="assets/Redux.png"
              alt=""
              width={150}
            />
          </div>
          <div className="col-md-3 col-6 ">
            <img
              className="img-fluid mb-2"
              src="assets/bootstrap.png"
              alt=""
              width={150}
            />
          </div>
          <div className="col-md-3 col-6">
            <img
              className="img-fluid"
              src="assets/sass.png"
              alt=""
              width={120}
            />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="p-3">
          <p>Back-End</p>
          <span>
            For your web application, we integrate cutting-edge technologies to
            create a customized, secure, and scalable architecture. By combining
            these advanced technologies, we ensure your web application
            maintains extensive functionality while prioritizing customization,
            security, and scalability.
          </span>
          <div className="mt-5">
            <p>Technologies</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 col-6">
            <img
              className="img-fluid"
              src="assets/JavaScript.png"
              alt=""
              width={120}
            />
          </div>
          <div className="col-md-2 col-6">
            <img
              className="img-fluid"
              src="assets/paython.png"
              alt=""
              width={150}
            />
          </div>
          <div className="col-md-2 col-6 mb-2 ">
            <img
              className="img-fluid"
              src="assets/php.png"
              alt=""
              width={130}
            />
          </div>
          <div className="col-md-2 col-6">
            <img
              className="img-fluid"
              src="assets/laravel.png"
              alt=""
              width={120}
            />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="p-3">
          <div>
            <p>Database</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 col-6">
            <img src="assets/postgre-1.png" alt="" width={120} />
          </div>
          <div className="col-md-2 col-6">
            <img
              className="img-fluid"
              src="assets/mysql.png"
              alt=""
              width={120}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tech;
