import React from 'react'

const History = () => {
  return (
    <section className="history section">
  <div className="shape-big">
    <img src="https://d33wubrfki0l68.cloudfront.net/b8cb851f42c5bbe9b08799ce32e8996c1ae8d728/74a10/images/shape-big.png" className="img-fluid" alt="big-shape" width={500} height={500} />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-6 align-self-center">
        <div className="history-content">
          <div className="section-title">
            <p className="sub mb-3"><span>About Us</span></p>
            <h2><span>Mesmer Design is a<br />proudly Canadian company</span></h2>
          </div>
          <div className="content">
            <p>✅ We use modern best practices to ensure the success of your small business website.</p>
            <p>✅ We utilize modern development tools to maximize the beauty, speed, and effectiveness of your website.</p>
            <p>✅ We love creating unique, powerful digital designs that we are proud of.</p>
            <p>✅ We maintain clear communication throughout the development process, so that we reach a common goal.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 my-auto p-5">
        <div className="history-image">
          <img src="https://d33wubrfki0l68.cloudfront.net/da526900213518c1e660d4bb8eb35da83029df3d/42562/images/creative1.jpeg" className="w-100" alt="history" />
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default History