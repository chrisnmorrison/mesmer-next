import React from 'react'

const HomeHero = () => {
  return (
    <section className="hero-area" data-parallax="scroll" data-z-index={1} data-speed="0.4">
  <div className="container">
    <div className="row">
      <div className="col-lg-5">
        <div className="content">
          <h1 className="text-white" data-aos="fade-up">Mesmer Design</h1>
          <p className="text-white" style={{margin: '2rem 0 2.2rem!important'}} data-aos="fade-up" data-aos-delay={200}>Expert web design and development services. We specialize in 100% hand-coded, optimized static sites.</p>
          <a href="/portfolio" className="btn btn-primary" data-aos="fade-up" data-aos-delay={200}>See Our Work</a>
        </div>
      </div>
    </div>
  </div>
  <div className="scroll-down">
    <a href="#services" className="page-scroll"><i className="fa fa-angle-left" />Scroll</a>
  </div>
  <div className="social-links">
    <ul className="list-inline">
      <li className="list-inline-item"><a href="https://www.facebook.com/msmrdesign" target="_blank" /></li>
      <li className="list-inline-item"><a href="https://www.instagram.com/mesmerdesign" target="_blank" /></li>
      <li className="list-inline-item"><a href="https://github.com/chrisnmorrison" target="_blank" /></li>
    </ul>
  </div>
</section>

  )
}

export default HomeHero