import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";
import Image from "next/image";
import { Layout } from "@components/Layout";
import { SEO } from "../../components/Seo/Seo";
import remarkGfm from "remark-gfm";
import PageTitle from "@components/PageTitle";

import { getBlogBySlug, getBlogSlugs } from "@utils/posts";

export default function Post({ post, frontmatter, nextPost, previousPost }) {
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
      />

      <article>
        <SEO
          title={frontmatter.title}
          description={frontmatter.description || post.excerpt}
        />
        <PageTitle title={frontmatter.title} />

        <section className="work-single section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="work-single-image">
                  <Image
                    className="img-fluid w-100"
                    src={`/${frontmatter.image}`}
                    alt="Revista"
                    width={730}
                    height={540}
                  />
                </div>
                <div className="work-single-content">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {post.content}
                  </ReactMarkdown>
                  {frontmatter.github ? (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={frontmatter.github}
                    />
                  ) : null}
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="work-single-sidebar bg-gray"
                  data-aos="fade-up"
                  data-aos-duration={500}
                >
                  <h5>Date</h5>
                  <p>{frontmatter.date}</p>
                  <h5>Category</h5>
                  <p>{frontmatter.category}</p>
                  <h5 className="mt-5 mb-4">
                    Interested in a similar service?
                  </h5>
                  <Link href="/contact" className="btn btn-primary">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
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
