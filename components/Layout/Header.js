import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Header = () => {
  return (
    <Styles>
      <header className="navigation">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <nav className="navbar fixed-top navbar-expand-lg">
                <Link className="navbar-brand anchor" href="/">
                  <div className={"image-container"}>
                    <img
                      src="/images/icon.png"
                      className={"image img-fluid"}
                      alt="logo"
                      height="40"
                      width="40"
                    />
                  </div>
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#main-nav"
                >
                  <span className="navbar-toggler-icon">
                    <img
                      src="images/hamburger-icon.png"
                      className="img-fluid"
                      alt="menu"
                      height="50"
                      width="50"
                    />
                  </span>
                </button>
                <div className="collapse navbar-collapse" id="main-nav">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link href="/" className="nav-link">
                        {" "}
                        Home{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/portfolio">
                        Portfolio
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/faq">
                        FAQs
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/services">
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </Styles>
  );
};

export default Header;

export const Styles = styled.div`
  .nav-colored {
    background-color: black;
  }

  .nav-transparent {
    background-color: transparent;
  }
`;
