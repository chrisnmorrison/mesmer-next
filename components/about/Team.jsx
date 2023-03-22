import React from 'react'
import Image from 'next/image'

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
            <div className={"image-container"}>
            <Image alt="team-member-image" src="/images/team/profile.jpg" fill className={"image img-fluid"} />
              </div>
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