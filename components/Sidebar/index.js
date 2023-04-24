import React from 'react'
import styled from 'styled-components'
import About from './About'
import Partners from './Partners'
import SidebarCategories from './SidebarCategories'


const Sidebar = (props) => {
  return (
    <div className=" blog-sidebar">
      <SidebarStyles>
        <About />
        <Partners />
        <SidebarCategories categories={props} />
        {/* <SidebarImage/> */}
      </SidebarStyles>
    </div>
  )
}

const SidebarStyles = styled.aside`
  display: grid;
  grid-template-columns: 200px;
  justify-content: center;
  row-gap: 1rem;
  @media (min-width: 576px) {
    & {
      grid-template-columns: repeat(auto-fit, 100%);
      column-gap: 3rem;
    }
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: calc(100vw - 30px);

    margin-bottom: 3rem;
  }
`

export default Sidebar
