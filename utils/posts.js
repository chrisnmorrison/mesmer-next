import matter from "gray-matter";
import fs from "fs";

// Get day in format: Month day, Year. e.g. April 19, 2020
function getFormattedDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}

///////////////////////////
// BLOG
///////////////////////////

export function getBlogFolder() {
  // Get all posts folders located in `content/portfolio`
  const blogFolders = fs
    .readdirSync(`${process.cwd()}/content/blog`)
    .map((folderName) => ({
      directory: folderName,
      filename: `${folderName}.md`,
    }));

  return blogFolders;
}

export function getSortedBlog() {
  const postFolders = getBlogFolder();

  const posts = postFolders
    .map(({ filename, directory }) => {
      // Get raw content from file
      const markdownWithMetadata = fs
        .readFileSync(`content/blog/${directory}/${filename}`)
        .toString();

      // Parse markdown, get frontmatter data, excerpt and content.
      const { data, excerpt, content } = matter(markdownWithMetadata);

      const frontmatter = {
        ...data,
        date: getFormattedDate(data.date),
      };

      // Remove .md file extension from post name
      const slug = filename.replace(".md", "");

      return {
        slug,
        frontmatter,
        excerpt,
        content,
      };
    })
    .sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );

  return posts;
}

export function getBlogSlugs() {
  const blogFolders = getBlogFolder();

  const paths = blogFolders.map(({ filename }) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return paths;
}

export function getBlogBySlug(slug) {
  const posts = getSortedBlog();

  const postIndex = posts.findIndex(({ slug: postSlug }) => postSlug === slug);

  const { frontmatter, content, excerpt } = posts[postIndex];

  const previousPost = posts[postIndex + 1];
  const nextPost = posts[postIndex - 1];

  return { frontmatter, post: { content, excerpt }, previousPost, nextPost };
}


///////////////////////////
// PORTFOLIO
///////////////////////////

export function getPortfolioFolder() {
  // Get all posts folders located in `content/portfolio`
  const portfolioFolders = fs
    .readdirSync(`${process.cwd()}/content/portfolio`)
    .map((folderName) => ({
      directory: folderName,
      filename: `${folderName}.md`,
    }));

  return portfolioFolders;
}

export function getSortedPortfolio() {
  const postFolders = getPortfolioFolder();

  const posts = postFolders
    .map(({ filename, directory }) => {
      // Get raw content from file
      const markdownWithMetadata = fs
        .readFileSync(`content/portfolio/${directory}/${filename}`)
        .toString();

      // Parse markdown, get frontmatter data, excerpt and content.
      const { data, excerpt, content } = matter(markdownWithMetadata);

      const frontmatter = {
        ...data,
        date: getFormattedDate(data.date),
      };

      // Remove .md file extension from post name
      const slug = filename.replace(".md", "");

      return {
        slug,
        frontmatter,
        excerpt,
        content,
      };
    })
    .sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );

  return posts;
}

export function getPortfolioSlugs() {
  const postFolders = getPortfolioFolder();

  const paths = postFolders.map(({ filename }) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return paths;
}

export function getPortfolioBySlug(slug) {
  const posts = getSortedPortfolio();

  const postIndex = posts.findIndex(({ slug: postSlug }) => postSlug === slug);

  const { frontmatter, content, excerpt } = posts[postIndex];

  const previousPost = posts[postIndex + 1];
  const nextPost = posts[postIndex - 1];

  return { frontmatter, post: { content, excerpt }, previousPost, nextPost };
}