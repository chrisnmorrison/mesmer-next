import React from "react";
// import SocialLinks from "../../constants/socialLinks";
import Image from "next/image";
import Title from "./Title";
import styled from "styled-components";
import SidebarCard from "./SidebarCard";

const About = () => {
  return (
    <SidebarCard>
      <Wrapper>
        <Title title="Who We Are" />
        <Image
          alt="blog item thumbnail"
          src={`/images/icon.png`}
          width={200}
          height={200}
          className={"image img-fluid sidebar-img"}
        />
        <p>Find the best free educational resources on your favourite topic.</p>
        <p>Revista is free and open-source forever.</p>
        {/* <SocialLinks className="sidebar-icons" /> */}
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

  .sidebar-img{
    width: 5rem;
    height: 100%;
  }
`;
export default About;
