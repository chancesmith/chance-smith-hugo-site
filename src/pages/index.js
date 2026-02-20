import React from "react";
import { Link, graphql } from "gatsby";

// components
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";

class Homepage extends React.Component {
  // componentDidMount() {
  //   const script = document.createElement("script");
  //   script.src = "https://skilled-knitter-7266.ck.page/65c4f812b4/index.js";
  //   script.async = true;
  //   this.instance.appendChild(script);
  // }

  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Team building. Skilling up and showing off your team."
          keywords={[`chance smith`]}
        />
        <div>
          <div>
            <h1
              style={{
                marginTop: "0",
                fontSize: "2.5rem",
                marginBottom: "0.5rem",
              }}
            >
              Less hectic, more impactful, on-time software
            </h1>
            <p style={{ fontSize: "1.3rem", color: "#777" }}>
              Accelerate you and your team to confidently delivering valuable
              software and building software teams.
            </p>

            {/* <div>
              <h2
                style={{
                  marginTop: "0",
                  marginBottom: "0.5rem",
                  fontSize: "1.2rem",
                }}
              >
                First time here?
              </h2>
              <p>
                If it's your first time here, the best way to get setteled is to
                subscribe to my Feature Box Bootcamp. It's a free 3 day email
                course to teach you how to deliver valuable software faster.
                <br />
                <Link to={"/archive"} style={{ textDecoration: "none" }}>
                  Feature Boxing Bootcamp &gt;&gt;
                </Link>
              </p>
            </div> */}

            {/* newsletter signup */}
            {/* <script
              async
              data-uid="65c4f812b4"
              src="https://skilled-knitter-7266.ck.page/65c4f812b4/index.js"
            />
            <div ref={(el) => (this.instance = el)} data-uid="65c4f812b4"></div> */}

            <h2
              style={{
                marginTop: "0",
                marginBottom: "0.5rem",
                fontSize: "1.2rem",
              }}
            >
              Latest Posts
            </h2>
            {[...posts.slice(0, 3)].map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              return (
                <div
                  key={node.fields.slug}
                  style={{
                    marginBottom: rhythm(1),
                  }}
                >
                  <h2
                    className="gradient-text"
                    style={{
                      margin: 0,
                    }}
                  >
                    <Link
                      style={{ boxShadow: `none`, textDecoration: "none" }}
                      to={node.fields.slug}
                      title={title}
                    >
                      {title}
                    </Link>
                  </h2>
                  {/* <p
                    style={{
                      ...scale(-1 / 5),
                      display: `block`,
                      marginBottom: rhythm(1),
                      marginTop: rhythm(-1),
                    }}
                  >
                    By{" "}
                    <a href="/about" style={{ textDecoration: "none" }}>
                      Chance Smith
                    </a>
                  </p>
                  <div dangerouslySetInnerHTML={{ __html: node.html }} /> */}
                  <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                  <Link
                    style={{ boxShadow: `none`, textDecoration: "none" }}
                    to={node.fields.slug}
                    title={title}
                  >
                    Continue Reading &gt;&gt;
                  </Link>
                </div>
              );
            })}
            {/* <div style={{ textAlign: "center" }}>
              <Link to={"/archive"} style={{ textDecoration: "none" }}>
                See All Posts &gt;&gt;
              </Link>
            </div> */}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Homepage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;
