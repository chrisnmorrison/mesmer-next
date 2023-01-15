import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-dividers">
    <div className="divider" />
    <div className="divider" />
    <div className="divider" />
    <div className="divider" />
  </div>
  <div className="shape-small">
    <img src="https://d33wubrfki0l68.cloudfront.net/33d37943742d6b089a8da0ad23b1e4ed64b9de1f/1b7a5/images/shape-small.png" alt="small-shape" width={512} height={512} />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-2">
        <div className="navbar-brand" style={{marginBottom: '1.5rem', marginRight: 0}}> 
          <a href="/">
            <img className="footer-logo" src="https://d33wubrfki0l68.cloudfront.net/391d9b1861f0f4d3feb487e08ee0080633da313f/b0b88/images/icon.png" alt="logo" width={45} height={45} />
          </a>
        </div>
      </div>
      <div className="col-lg-10">
        <div className="content">
          <nav className="footer-nav nav-bg">
            <ul className="list-inline">
              <li className="list-inline-item"><a href="/">Home</a></li>
              <li className="list-inline-item"><a href="/about">About</a></li>
              <li className="list-inline-item"><a href="/portfolio">Portfolio</a></li>
              <li className="list-inline-item"><a href="/faq">FAQ</a></li>
              <li className="list-inline-item"><a href="/services">Services</a></li>
              <li className="list-inline-item"><a href="/contact">Contact</a></li>
            </ul>
          </nav>
          <p>We specialize in high-end, modern Web Design and Development.</p>
          <ul className="social-links list-inline">
            <li className="list-inline-item"><a aria-label="Link to our Facebook page" href="https://www.facebook.com/msmrdesign" target="_blank"><i className="fa fa-facebook" /></a></li>
            <li className="list-inline-item"><a aria-label="Link to our Instagram page" href="https://www.instagram.com/mesmerdesign" target="_blank"><i className="fa fa-instagram" /></a></li>
            <li className="list-inline-item"><a aria-label="Link to our Github page" href="https://github.com/chrisnmorrison" target="_blank"><i className="fa fa-github" /></a></li>
          </ul>
        </div>
      </div>
      <div style={{textAlign: 'center', fontSize: '12px', zIndex: 99999, margin: '0 auto', color: '#fff'}}>
        Technology icons created by <a style={{textAlign: 'center', fontSize: '12px', color: '#a3ceff'}} href="https://www.flaticon.com/authors/juicy-fish">juicy_fish</a> at <a style={{textAlign: 'center', fontSize: '12px', color: '#a3ceff'}} href="https://www.flaticon.com">Flaticon</a>  </div>
    </div>
  </div>
</footer>

  )
}

export default Footer