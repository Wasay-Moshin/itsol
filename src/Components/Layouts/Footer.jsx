import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p>
              we are skilled web developers dedicated to creating visually
              appealing, user-friendly, and functional websites that meet the
              unique needs of our clients.
            </p>
          </div>
          <div className="col-md-3">
            <div>
              <h4>Address</h4>
              <ul className="list-unstyled">
                <li>Adress Address: Johar Town Lahore</li>
                <li>+92 317 6063309</li>
                <li>info@digitalisolutions.net</li>
                <li>Interactive Tech Solution</li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <h4>Info</h4>
            <ul className="list-unstyled">
              <li>Linked in</li>
              <li>upwork</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div className="col-md-3">
            <img src="assets/logo.png" width={130} alt="" />
            <p>© 2023 Interactive-Tech Solutions All Rights Revered</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
