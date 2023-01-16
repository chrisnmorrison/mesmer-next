import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <section className="service section" id="services">
      <div className="shape-big">
        <img
          src="/images/shape-big.png"
          alt="background shape"
        
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <p className="sub">
                <span>Why Choose Us</span>
              </p>
              <h2 aria-hidden="true">
                <span>Industry Innovation</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item">
              <div className="icon">
                <Image
                  src="/images/ui-design.png"
                  alt="UI Design icon"
                  width={55}
                  height={55}
                />
              </div>
              <div className="content">
                <h6 className="sm">Modern Design</h6>
                <p>
                  We use the latest design methods to create beautiful and
                  relevant websites
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item">
              <div className="icon">
              <Image
                  src="/images/bandwidth.png"
                  alt="Bandwidth icon"
                  width={55}
                  height={55}
                />
              </div>
              <div className="content">
                <h6 className="sm">Speed</h6>
                <p>
                  We ensure our websites are as fast as possible, providing
                  usability and excellent SEO
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item">
              <div className="icon">
              <Image
                  src="/images/responsive-design.png"
                  alt="responsive Design icon"
                  width={55}
                  height={55}
                />
              </div>
              <div className="content">
                <h6 className="sm">Search Engine Optimization</h6>
                <p>
                  We stay on top of SEO trends to ensure that search engines
                  love your website
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
