import Link from "next/link";
import { SEO } from "../components/Seo";
import { getSortedPosts } from "@utils/posts";
// import { generateRssPostsFeed } from "@utils/rss";
import HomeHero from "@components/home/HomeHero";
import Services from "@components/home/Services";
import Cta1 from "@components/Cta/Cta1";
import { getSortedPortfolio } from "@utils/posts";
import Image from "next/image";

export default function Home({ portfolio }) {
  return (
    <>
      <SEO title="Home" />
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
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
        <div className="col-12 mt-3 text-center">
          <Link prefetch={false} href="/portfolio" className="btn btn-primary">
            More Projects
          </Link>
        </div>{" "}
      </section>{" "}
      <Cta1 />
    </>
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
