import React from 'react'

const Services = () => {
  return (
    <section className="service section" id="services">
  <div className="shape-big">
    <img src="https://d33wubrfki0l68.cloudfront.net/b8cb851f42c5bbe9b08799ce32e8996c1ae8d728/74a10/images/shape-big.png" className="img-fluid" alt="big-shape" width={500} height={500} />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="section-title">
          <p className="sub"><span>Why Choose Us</span></p>
          <h2 aria-hidden="true"><span>Industry Innovation</span></h2>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="service-item">
          <div className="icon">
            <img src="https://d33wubrfki0l68.cloudfront.net/005948f15e1a68065e9d876aef96d2008613494a/f658a/images/ui-design.png" alt="" />
          </div>
          <div className="content">
            <h6 className="sm">Modern Design</h6>
            <p>We use the latest design methods to create beautiful and relevant websites</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="service-item">
          <div className="icon">
            <img src="https://d33wubrfki0l68.cloudfront.net/89f34968f823ab096c8769b0e44de8a9909fc4a5/dd347/images/bandwidth.png" alt="" />
          </div>
          <div className="content">
            <h6 className="sm">Speed</h6>
            <p>We ensure our websites are as fast as possible, providing usability and excellent SEO</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="service-item">
          <div className="icon">
            <img src="https://d33wubrfki0l68.cloudfront.net/b82247e4a897855cf494cb5c7de145d48561157c/b4c6b/images/responsive-design.png" alt="" />
          </div>
          <div className="content">
            <h6 className="sm">Search Engine Optimization</h6>
            <p>We stay on top of SEO trends to ensure that search engines love your website</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Services