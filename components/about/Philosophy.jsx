import React from "react";
import Image from "next/image";

const Philosophy = () => {
  return (
    <section className="philosophy section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 my-auto item-order-mob">
            <div className="philosophy-image mb-5 mb-lg-0 mt-5 mt-lg-1">
              <div className={"image-container"}>
                <Image
                  alt="philosophy"
                  src="/images/philosophy-image.jpg"
                  fill
                  className={"image img-fluid"}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5 align-self-center ml-auto">
            <div className="philosophy-content">
              <div className="section-title">
                <p className="sub">
                  <span>Our Philosophy</span>
                </p>
                <h2>
                  <span>
                    We put the user
                    <br />
                    first, by building
                    <br />
                    people-centric products
                  </span>
                </h2>
              </div>
              <div className="content">
                Site usability and user experience are the most important
                features of modern websites. User experience research has shown
                that{" "}
                <a
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://www.websitebuilderexpert.com/building-websites/website-load-time-statistics/"
                >
                  poor website performance contributes to significant business
                  loss
                </a>
                . <br />
                <br /> Many modern websites serve too much information to the
                client, contain excessively large images, and perform too many
                HTTP requests to achieve strong performance, even when hosted on
                high-performance servers. <br />
                <br /> At Mesmer Design, we strive to reduce this overhead, and
                work hard to serve the highest performance websites. With our
                sites, you no longer have to worry about slow load times or poor
                website experience affecting your business. Focus on what
                matters, and use your website as a tool for success rather than
                a burden.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
