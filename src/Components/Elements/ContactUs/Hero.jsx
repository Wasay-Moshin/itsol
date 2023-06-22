import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Hero = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_to5g1g8",
        "template_xqc2szx",
        form.current,
        "OoAEpxI8Soo4fWDaJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactus pb-5">
      <form ref={form} onSubmit={sendEmail}>
        <div className="container">
          <div className="text-center pt-5">
            <h1>Contact Us</h1>
            <p className="pt-3">
              Leave us a little info, and we’ll be in touch.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="card">
                  <div className="pt-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="user_name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
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
                  <div className="pt-3 pb-3">
                    <label className="form-label">Message</label>
                    <textarea name="message" className="form-control" />
                  </div>
                  {/* <input type="submit" value="Send" className="form-control" /> */}
                  <button type="submit" value="Send" className="send">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
