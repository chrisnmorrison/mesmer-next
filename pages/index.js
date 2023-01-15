import Link from "next/link";
import { SEO } from "../components/Seo";
import { getSortedPosts } from "@utils/posts";
import { generateRssPostsFeed } from "@utils/rss";
import HomeHero from "@components/home/HomeHero";
import Services from "@components/home/Services";
import Cta1 from "@components/Cta/Cta1";
import { getSortedPortfolio } from "@utils/posts";

export default function Home({ portfolio }) {
  return (
    <>
      <SEO title="Home" />
      <HomeHero />
      <Services />
      <div className="col-12 text-center">
        <div className="section-title">
          <p className="sub">
            <span>Portfolio</span>
          </p>
          <h1>
            <span>Our Favourite Works</span>
          </h1>
        </div>
      </div>
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
                    <img
                      src={image}
                      className="img-fluid"
                      alt={title}
                      width={600}
                      height={400}
                    />
                    <p className="sm product-name">{title}</p>
                  </div>
                </a>{" "}
              </div>
            ))}
          </div>
        </div>
    <div className="col-12 mt-3 text-center">
         <Link href="/portfolio" className="btn btn-primary">
          More Projects
        </Link>
      </div>{" "} </section>{" "}
      
      <Cta1 />
    </>
  );
}

export async function getStaticProps() {
  generateRssPostsFeed();
  const portfolio = getSortedPortfolio();

  return {
    props: {
      portfolio,
    },
  };
}
