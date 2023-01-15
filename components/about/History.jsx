import React from "react";
import Image from "next/image";

const History = () => {
  return (
    <section className="history section">
      <div className="shape-big">
        <Image
          src="/images/shape-big.png"
          alt="background shape "
          width={500}
          height={500}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="history-content">
              <div className="section-title">
                <p className="sub mb-3">
                  <span>About Us</span>
                </p>
                <h2>
                  <span>
                    Mesmer Design is a<br />
                    proudly Canadian company
                  </span>
                </h2>
              </div>
              <div className="content">
                <p>
                  ✅ We use modern best practices to ensure the success of your
                  small business website.
                </p>
                <p>
                  ✅ We utilize modern development tools to maximize the beauty,
                  speed, and effectiveness of your website.
                </p>
                <p>
                  ✅ We love creating unique, powerful digital designs that we
                  are proud of.
                </p>
                <p>
                  ✅ We maintain clear communication throughout the development
                  process, so that we reach a common goal.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-5">
            <div className="history-image">
              <div className={"image-container"}>
                <Image src="/images/creative1.jpeg" fill className={"image p-5"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
