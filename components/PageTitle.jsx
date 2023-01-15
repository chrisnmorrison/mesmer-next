import React from 'react'

const PageTitle = ({title}) => {
  return (
<section className="page-title">
  <div className="container">
    <div className="row">
      <div className="col-12 text-center">
        <h1>{title}</h1>
      
      </div>
    </div>
  </div>
</section>

  )
}

export default PageTitle