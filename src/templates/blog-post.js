import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";
import bmcButtonSvg from "../../content/assets/download-assets-sm-2.svg";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    var ctaList = [
      <p>
        Did this help or save you time?
        <br />
        <a href="https://bit.ly/2O1eTBn">Reward me with a {`☕️❤️`}.</a>
      </p>,
      <p>
        Did I help or save you time?
        <br />
        <a href="https://bit.ly/36QVlIj">Buy me a {`☕️❤️`}.</a>
      </p>,
      <p>
        Did I help or save you time?
        <br />
        <a href="https://bit.ly/34OpqXm" className="decoration-none">
          <img src={bmcButtonSvg} width="180px" alt="Buy Me Coffee" />
        </a>
      </p>,
    ];

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1 className="gradient-text">{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {/* {post.frontmatter.date} */}
          by Chance Smith
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        {/* {ctaList[Math.floor(Math.random() * ctaList.length)]} */}

        {/* <Bio /> */}

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            margin: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
