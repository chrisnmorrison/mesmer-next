import React from "react";
import styled from "styled-components";
import Title from "./Title";
import SidebarCard from "./SidebarCard";
import Link from "next/link";

const SidebarCategories = ({ categories }) => {
  const categoryList = categories.categories;
  return (
    <SidebarCard>
      <Wrapper>
        <Title title="categories" className="sidebar-title"></Title>
        <ul>
          {categoryList.map((category) => (
            <li>
              <Link className="category" href="#">
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </Wrapper>
    </SidebarCard>
  );
};

const Wrapper = styled.div`
  .category {
    font-size: 1rem;
    color: var(--grey-5);
    text-transform: capitalize;
    display: block;
    padding: 0.5rem 0 0.5rem 3rem;
    letter-spacing: 1.5px;
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    border-radius: 0.25rem;
    cursor: pointer;
    position: relative;

    &::after {
      content: "»";
      font-size: 22px;
      color: var(--grey-5);
      position: absolute;
      opacity: 0;
      top: 1px;
      right: -10px;
      transition: 0.5s;
    }
  }
  .category:hover {
    /* background: var(--primary-5); */
    padding-right: 24px;
    padding-left: 3.3rem;

    &::after {
      opacity: 1;
      right: 10px;
    }
  }

  @media screen and (max-width: 1263px) {
    .category {
      padding: 0.5rem 0 0.5rem 2rem;
    }

    .category:hover {
      padding-left: 1.3rem;
    }
  }

  @media screen and (max-width: 1015px) {
    .category {
      padding: 0.5rem 0 0.5rem 2rem;
    }

    .category:hover {
      padding-left: 0.8rem;
    }
  }

  @media screen and (max-width: 991px) {
    ul {
      padding: 0 !important;
    }

    .category {
      font-size: 1rem;
      color: var(--grey-5);
      text-transform: capitalize;
      display: block;
      padding: 0.5rem 0 0.5rem 0;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      border-radius: var(--radius);
      cursor: pointer;
      position: relative;
      text-align: center;

      &::after {
        content: "";
      }
    }
    .category:hover,
    .category:active {
      padding-right: unset;
      padding-left: unset;
      color: var(--grey-8);

      &::after {
      }
    }
  }
`;
export default SidebarCategories;
