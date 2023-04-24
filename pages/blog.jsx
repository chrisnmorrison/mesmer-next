import Link from "next/link";
import Image from "next/image";
import { Layout } from "../components/Layout";
import { SEO } from "../components/Seo";
import { getSortedBlog, getUniqueBlogCategories } from "@utils/posts";
// import { generateRssPostsFeed } from "@utils/rss";
import PageTitle from "@components/PageTitle";
import styled from "styled-components";
import Cta1 from "@components/Cta/Cta1";
import Sidebar from "@components/Sidebar";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoCalendar } from "react-icons/go";
import { getColor } from "../components/utils/heroCategories";

export default function Home({ blog, categories }) {
  console.log(categories)
  return (
    <Styles>
      <PageTitle title="Blog" />
      <SEO title="All of our favourite blog projects" />

      <section className="section blog">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-8 col-12">
              {blog.map(
                ({
                  frontmatter: { title, image, date, categories },
                  slug,
                  excerpt,
                  content,
                }) => (
                  <div
                    className="card card-bg card-shadow recent-article-mb"
                    key={slug}
                  >
                    <Link
                      href={`/blog/${encodeURIComponent(slug)}`}
                      className="image-holder"
                      data-aos="image-reveal"
                    >
                      <div className="blog-item text-center">
                        <div className={"image-container"}>
                          <Image
                            alt="blog item thumbnail"
                            src={`/images/blog/${image}`}
                            fill
                            className={"image img-fluid"}
                          />
                        </div>
                        <div className="card-body">
                          <h3 className="recent-articles-heading">{title}</h3>
                          <ul className="card-meta list-inline">
                            <li className="list-inline-item">
                              <AiOutlineClockCircle />
                              {Math.ceil(content.split(" ").length / 275)} Min
                              Read
                            </li>
                            <li className="list-inline-item">
                              <GoCalendar /> {date}
                            </li>
                            <li className="list-inline-item">
                              <ul className="card-meta-tag list-inline">
                                <li className="list-inline-item">
                                  <div
                                   
                                    className="categories-link"
                                    style={{
                                      color: getColor(categories),
                                      backgroundColor: getColor(categories),
                                    }}
                                  >
                                    <div className="category-text-color">
                                      {categories}
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                         
                            <p className="excerpt">{excerpt}</p>
                          <div className="blog-btn">
                            {" "}
                            <button
                              className="btn btn-outline-primary"
                              href={`/blog/${encodeURIComponent(slug)}`}
                            >
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              )}
            </div>
            <div className="col-12 col-lg-4">
              <Sidebar categories={categories} />
            </div>
          </div>
        </div>
      </section>

      <Cta1 />
    </Styles>
  );
}

export async function getStaticProps() {
  const blog = getSortedBlog();
  const categories = getUniqueBlogCategories();

  return {
    props: {
      blog,
      categories,
    },
  };
}

export const Styles = styled.div`
  .image-holder {
    display: block;
    overflow: hidden;
    margin-bottom: 38px;
  }

  .card-bg {
    background-color: white;
  }

  .card-shadow {
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.04);
  }

  .top-and-popular-img {
    width: 100%;
  }

  .section-title {
    font-size: 20px;
    font-weight: 800;
    position: relative;
    text-transform: uppercase;
    margin-bottom: 35px;
    letter-spacing: 0.2rem;

    &::after {
      position: absolute;
      left: 0;
      bottom: -10px;
      content: "";
      height: 3px;
      width: 65px;
      background-color: var(--primary-7);
    }
  }

  @media screen and (max-width: 767px) {
    .section-title {
      margin-top: 1rem;
    }

    .trending-title {
      margin-top: 2.5rem;
    }
  }

  .card {
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 15px 25px rgba(30, 30, 30, 0.1);
  }
  .card-body {
    padding: 30px 25px;

    h3 {
      font-size: 17px;
      margin-bottom: 1rem;
    }
  }

  .trending-card {
    margin-bottom: 1.4rem;
    display: flex;
    align-items: center;
  }

  .trending-img {
    height: 85px;
    width: 85px;
    object-fit: cover;
  }

  .trending-meta {
    margin-left: 1rem;
  }

  .card-meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 12px;
    color: black;
    margin-bottom: 0;

    li:not(:last-child) {
      border-right: 1px solid #ebebeb;
      padding-right: 8px;
    }
  }

  .list-inline {
    padding-left: 0;
    list-style: none;
  }

  .list-inline-item {
    margin-bottom: 0.8rem;

    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }

  .categories-link {
    padding: 0.2rem 0.6rem;
    border-radius: 30px;
    color: rgb(49, 49, 49);
    display: inline-block;
    box-shadow: 0 3px 25px currentColor;
    font-size: 100%;
    transition: all 0.1s ease;

    &:hover {
      filter: brightness(108%);
    }
  }

  .card-meta-tag {
    margin-bottom: 0;

    li {
      border: 0 !important;
      padding-right: 0 !important;
      margin-bottom: 0 !important;
    }
  }

  .excerpt {
    padding: 5px 0;
  }

  .card-meta svg {
    height: 12px;
    width: 12px;
    margin-right: 0.2rem;
  }

  @media screen and (max-width: 992px) {
    .trending-card {
      flex-direction: column;
    }

    .trending-img {
      margin-bottom: 0.8rem;
    }
  }

  @media screen and (max-width: 768px) {
    .trending-card {
      flex-direction: row;
    }
  }

  @media screen and (max-width: 576px) {
    .trending-img {
      display: none;
    }
  }
`;
