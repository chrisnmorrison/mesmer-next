import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Title from './Title'
import SidebarCard from './SidebarCard'

const partners = [
  {
    name: 'Open Mastery',
    logo: '/images/open-mastery-logo.png',
    logoAlt: 'Logo for other site',
    url: 'https://example.com',
  },
  //
  // {
  //   name: 'Open Journal',
  //   logo: '',
  //   logoAlt: 'Logo for Open Journal',
  //   url: '#',
  // },
]

const Recent = () => {
  return (
    <SidebarCard>
      <Wrapper>
        <Title title="Our Partners" className="sidebar-title" />
        {/* <p>Building an open internet together.</p> */}
        {partners.map(partner => {
          return (
            <div key={partner.name} className="partner">
               <a target='_blank' rel='noopener noreferrer' className="partner-name" href={partner.url}>
               <Image
          alt="blog item thumbnail"
          src={partner.logo}
          width={200}
          height={200}
          className={"image-fluid om-logo"}
        />
              
             
                {partner.name}
              </a>
            </div>
          )
        })}
      </Wrapper>
    </SidebarCard>
  )
}

const Wrapper = styled.div`
  text-align: center;

  .post:hover {
    h5 {
      color: var(--primary-5);
    }
  }
  .partner {
    display: flex;
    align-items: center;
    margin: 1rem 0 1.2rem -1rem;
    justify-content: center;
  }

  .partner-img {
    overflow: visible;
    width: 35px;
    height: auto;
  }

  .partner-name {
    margin-left: 1rem;

    color: #515151;
    font-weight: 500;
    transition: all 0.3s;

    &:hover{
      color: #333333;
    }
  }

  .om-logo{
    width: 2rem;
    height: 100%;
    margin-right: .8rem;
  }

  @media screen and (max-width: 1085px) {
    .partner-name {
     font-size: 14px;
    }
  }

  @media screen and (max-width: 991px) {
    .partner {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1rem auto 1.2rem auto;
    }
  }
`

export default Recent
