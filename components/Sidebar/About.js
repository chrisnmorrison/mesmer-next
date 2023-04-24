import React from "react";
import SocialLinks from "@components/utils/socialLinks";
import Image from "next/image";
import Title from "./Title";
import styled from "styled-components";
import SidebarCard from "./SidebarCard";

const About = () => {
  return (
    <SidebarCard>
      <Wrapper>
        <Title title="Who We Are" className="sidebar-title" />
        <Image
          alt="blog item thumbnail"
          src={`/images/icon.png`}
          width={200}
          height={200}
          className={"image img-fluid sidebar-img"}
        />
        <p>
        Get the latest on optimized static sites and small business website management, SEO, and more with our web dev blog. 
        </p>
        <p>
        Stay ahead with our informative articles and guides on the latest web technology.
        </p>
        <SocialLinks className="sidebar-icons" />
      </Wrapper>
    </SidebarCard>
  );
};

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--grey-5);
  }
  .img {
    /* border-radius: 50%; */
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  .sidebar-img {
    width: 5rem;
    height: 100%;
    margin: 1rem auto 1.2rem auto;
    background-color: #3a3a3a;
    padding: 1rem;
    border-radius: 14px;
  }
`;
export default About;
