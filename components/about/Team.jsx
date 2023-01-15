import React from 'react'

const Team = () => {
  return (
    <section className="team section">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mb-5-lg">
          <div className="section-title">
            <p className="sub"><span>Our Strength</span></p>
            <h1><span>Meet The Team</span></h1>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-6">
          <div className="team-member">
            <div className="team-member-image" style={{backgroundImage: 'url(/)'}}>
              <img src="https://d33wubrfki0l68.cloudfront.net/d006fb492e75e48e6c2e8dd746ed3b87f0370eea/2bcaa/images/team/profile.png" alt="team-member-image" />
            </div>
            <div className="team-member-content text-center">
              <h6 className="sm">Chris Morrison</h6>
              <span>Founder and Sole Proprietor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Team