import React from "react";
import Image from 'next/image'

const Contact = () => {
  return (
    <section className="contact section">
      <div className="shape-big">
      
         <img
        alt="background shape"
        src={`/images/shape-big.png`}
   
     
      />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {/* Contact Info */}
            <div className="contact-info">
              <div className="content">
                <h4 id="get-in-touch">Get in Touch</h4>
                <p>Have a question?</p>
                <p>
                  We’d love to hear from you. Send a message and we’ll respond
                  as soon as possible.
                  <br aria-hidden="true" />
                  <br aria-hidden="true" />
                </p>
              </div>

              {/* Contact Form */}
              <div className="contact-form">
                <h4>Contact Form</h4>
                <form
                  name="contact"
                  method="POST"
                  action="{{ .Site.Params.contact_form_action}}"
                  data-netlify="true"
                  netlify-honeypot="beep-boop-protection"
                  className="row"
                >
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      id="name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      required
                      type="email"
                      className="form-control"
                      placeholder="Email *"
                      name="email"
                      id="email"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                      id="subject"
                    />
                  </div>
                  <p className="hidden">
                    <label>
                      Do not check this box if you're human!{" "}
                      <input type="checkbox" name="beep-boop-protection" />
                    </label>
                  </p>
                  <div className="col-12">
                    <textarea
                      required
                      name="message"
                      id="message"
                      className="form-control"
                      placeholder="Your Message Here *"
                      rows={5}
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary" type="submit">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
