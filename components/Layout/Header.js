import React from 'react'

const Header = () => {
  return (
    <header className="navigation">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <nav className="navbar fixed-top navbar-expand-lg headroom headroom--pinned headroom--top">
            <a className="navbar-brand anchor" href="/">
              <img src="https://d33wubrfki0l68.cloudfront.net/391d9b1861f0f4d3feb487e08ee0080633da313f/b0b88/images/icon.png" className="img-fluid" alt="logo" width={50} height={50} />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-nav">
              <span className="navbar-toggler-icon">
                <img src="https://d33wubrfki0l68.cloudfront.net/8738ceda79cbcaa989e626da93e0ff87bb3fa8c3/d2653/images/hamburger-icon.png" className="img-fluid" alt="menu" width={50} height={50} />
              </span>
            </button>
            <div className="collapse navbar-collapse" id="main-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="/" className="nav-link"> Home </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/faq">FAQs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/services">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
  
  )
}

export default Header