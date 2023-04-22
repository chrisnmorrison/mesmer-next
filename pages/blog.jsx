import Link from "next/link";
import Image from "next/image";
import { Layout } from "../components/Layout";
import { SEO } from "../components/Seo";
import { getSortedBlog, getBlogSlugs } from "@utils/posts";
// import { generateRssPostsFeed } from "@utils/rss";
import PageTitle from "@components/PageTitle";
import styled from "styled-components";
import Cta1 from "@components/Cta/Cta1";
import Sidebar from "@components/Sidebar";

export default function Home({ blog }) {
  return (
    <Layout>
      <Styles>
        <PageTitle title="Blog" />
        <SEO title="All of our favourite blog projects" />

        <section className="section blog">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-8 col-12">
                {blog.map(
                  ({ frontmatter: { title, image }, slug, excerpt }) => (
                    <div className="col-12" key={slug}>
                      <a
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
                          <p className="sm product-name">{title}</p>
                          <p>{excerpt}</p>
                        </div>
                      </a>
                    </div>
                  )
                )}
               
              </div>
              <div className="col-12 col-lg-4"><Sidebar /></div> 
            </div>
          </div>
        </section>

        <Cta1 />
      </Styles>
    </Layout>
  );
}

export async function getStaticProps() {
  // generateRssPostsFeed();
  const blog = getSortedBlog();

  return {
    props: {
      blog,
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
