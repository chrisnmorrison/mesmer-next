import Link from "next/link";
import Image from "next/image";
import { Layout } from "../components/Layout";
import { SEO } from "../components/Seo";
import { getSortedPortfolio, getSortedPosts } from "@utils/posts";
// import { generateRssPostsFeed } from "@utils/rss";
import PageTitle from "@components/PageTitle";
import styled from "styled-components";
import Cta1 from "@components/Cta/Cta1";

export default function Home({ portfolio }) {
  return (
    <Styles>
      <PageTitle title="Portfolio" />
      <SEO title="All of our favourite portfolio projects" />

      <section className="section portfolio">
        <div className="container">
          <div className="row align-items-center">
            {portfolio.map(({ frontmatter: { title, image }, slug }) => (
              <div className="col-12 col-md-6" key={slug}>
                <a
                  href={`/portfolio/${encodeURIComponent(slug)}`}
                  className="image-holder"
                  data-aos="image-reveal"
                >
                  <div className="portfolio-item text-center">
                    <div className={"image-container"}>
                      <Image
                        alt="portfolio item thumbnail"
                        src={`/${image}`}
                        fill
                        className={"image img-fluid"}
                      />
                    </div>
                    <p className="sm product-name">{title}</p>
                  </div>
                </a>{" "}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta1 />
    </Styles>
  );
}

export async function getStaticProps() {
  // generateRssPostsFeed();
  const portfolio = getSortedPortfolio();

  return {
    props: {
      portfolio,
    },
  };
}

export const Styles = styled.div`
  .image-holder {
    display: block;
    overflow: hidden;
    margin-bottom: 38px;
  }
`;
