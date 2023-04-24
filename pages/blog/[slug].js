import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";
import Image from "next/image";
import { Layout } from "@components/Layout";
import { SEO } from "../../components/Seo/Seo";
import remarkGfm from "remark-gfm";
import PageTitle from "@components/PageTitle";
import styled from "styled-components";

import { getBlogBySlug, getBlogSlugs } from "@utils/posts";

export default function Post({ post, frontmatter, nextPost, previousPost }) {
  return (
    <Wrapper>
      <article>
        <SEO
          title={frontmatter.title}
          description={frontmatter.description || post.excerpt}
        />
        <PageTitle title={frontmatter.title} />

        <section className="work-single section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="top-img-wrapper">
                  <Image
                    className="img-fluid blog-single-top-img"
                    src={`/images/blog/${frontmatter.image}`}
                    alt="Revista"
                    width={730}
                    height={540}
                  />
                </div>
                <div className="blog-single-content">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {post.content}
                  </ReactMarkdown>
                </div>
                <hr />
              </div>
              <div className="col-12">
                <div
                  className="blog-single-info"
                  data-aos="fade-up"
                  data-aos-duration={500}
                >
                  <div className="gridA">
                    <h5>Date</h5>
                    <p>{frontmatter.date}</p>
                  </div>

                  <div className="gridB">
                    <h5>Category</h5>
                    <p>{frontmatter.categories}</p>
                  </div>
                  <div className="gridC">
                    <h5 className="mt-5 mb-4">
                      Interested in a free estimate for an optimized static
                      website?
                    </h5>
                    <Link
                      prefetch={false}
                      href="/contact"
                      className="btn btn-primary"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </Wrapper>
  );
}

export async function getStaticPaths() {
  const paths = getBlogSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const postData = getBlogBySlug(slug);

  if (!postData.previousPost) {
    postData.previousPost = null;
  }

  if (!postData.nextPost) {
    postData.nextPost = null;
  }

  return { props: postData };
}

const Wrapper = styled.div`
  hr {
    margin: 1rem 0;
    color: var(--primary-5);
  }

  hr {
    margin: 2.2em auto;
    position: relative;
    height: 12px;
    width: 12px;
    border: transparent;
    overflow: visible;
    background-image: url('data:image/svg+xml;utf8,<svg width="12" height="12" viewBox="0 0 10 9" xmlns="http://www.w3.org/2000/svg"><path d="M3.91043 1.29752C4.30449 0.688518 5.19551 0.688519 5.58957 1.29752L9.25143 6.95675C9.68196 7.62211 9.20436 8.5 8.41186 8.5H1.08814C0.29564 8.5 -0.181954 7.62211 0.248574 6.95675L3.91043 1.29752Z" fill="%234CB0A8" /></svg>');
  }
  hr:before {
    position: absolute;
    height: 12px;
    width: 12px;
    content: "";
    background-image: url('data:image/svg+xml;utf8,<svg width="12" height="12" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.5" width="8" height="8" rx="4" fill="%23EF6056" /></svg>');
    left: -35px;
  }

  hr:after {
    position: absolute;
    height: 12px;
    width: 12px;
    content: "";
    background-image: url('data:image/svg+xml;utf8,<svg width="12" height="12" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.5" width="8" height="8" rx="1" fill="%23EFAF44" /></svg>');
    right: -35px;
  }

  .blog-single-info {
    margin-top: 2rem;
    display: grid;
    text-align: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "a b"
      "c c";

    p {
      font-size: 1.2rem;
    }
  }

  .gridA {
    grid-area: a;
  }

  .gridB {
    grid-area: b;
  }

  .gridC {
    grid-area: c;
  }

  .top-img-wrapper {
    text-align: center;
    margin-bottom: 3rem;
  }

  .blog-single-top-img {
  }

  .blog-single-content {
    font-size: 1.5em;
    margin-left: auto;
    margin-right: auto;
    font-weight: 400;
    line-height: 2.2rem;

    p,
    a,
    ul,
    ol,
    li {
      font-size: 1.25rem;
    }
  }

  @media screen and (max-width: 855px) {
    .blog-single-info {
      margin-top: 2rem;
      display: grid;
      text-align: center;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1.8fr;
      grid-template-areas:
        "a"
        "b"
        "c";
    }
  }

  @media screen and (max-width: 460px) {
    .blog-single-content {
      padding: 0 0.4rem;
      p,
      a,
      ul,
      ol,
      li {
        font-size: 1.05rem;
      }
    }
  }
`;
