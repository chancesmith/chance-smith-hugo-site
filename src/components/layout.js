import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { rhythm, scale } from "../utils/typography";

// components
import FooterAd from "./FooterAd";

// #region Styled Components
const NavLink = styled(Link)`
  margin: 1.2rem 0.5rem 0.4rem;
  box-shadow: ${(props) => (props.isActive ? null : "none")};
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: #999;
  &:hover {
    box-shadow: 0 1px 0 0 currentColor;
  }
`;
// #endregion

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const isRootPath = location.pathname === `${__PATH_PREFIX__}/`;
    const isAboutPath = location.pathname === `${__PATH_PREFIX__}/about`;
    const isHireMeKitPath =
      location.pathname === `${__PATH_PREFIX__}/hire-me-kit`;
    const isLevelUpMastermindPath =
      location.pathname === `${__PATH_PREFIX__}/level-up-mastermind`;
    const isArchivePath = location.pathname === `${__PATH_PREFIX__}/archive`;
    const isCoachingPath = location.pathname === `${__PATH_PREFIX__}/workshops`;
    let header;

    if (isRootPath) {
      header = (
        <div
          style={{
            marginBottom: "0",
          }}
        >
          <Link
            to={`/`}
            style={{
              textDecoration: `none`,
              boxShadow: "none",
            }}
          >
            <span>
              <img
                src="/chancesmith_s.png"
                alt="chance smith"
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                }}
              />
            </span>
          </Link>
        </div>
      );
    } else if (
      isArchivePath ||
      isAboutPath ||
      isLevelUpMastermindPath ||
      isHireMeKitPath
    ) {
      header = (
        <>
          <Link
            to={`/`}
            style={{
              textDecoration: `none`,
              boxShadow: "none",
            }}
          >
            <span>
              <img
                src="/chancesmith_s.png"
                alt="chance smith"
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                }}
              />
            </span>
          </Link>
          <h1
            style={{
              ...scale(1.4),
              fontFamily: `Montserrat, sans-serif`,
              // fontFamily: `Major Mono Display, monospace`,
              // textTransform: "uppercase",
              marginTop: "0px",
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={location.pathname}
            >
              {title}
            </Link>
          </h1>
        </>
      );
    } else {
      header = (
        <div
          style={{
            display: `flex`,
            marginTop: "12px",
          }}
        >
          <Link
            to={`/`}
            style={{
              textDecoration: `none`,
              boxShadow: "none",
            }}
          >
            <span>
              <StaticQuery
                query={authorPhoto}
                render={(data) => (
                  <Image
                    fixed={data.avatar.childImageSharp.fixed}
                    alt="chance smith"
                    style={{
                      marginRight: rhythm(1 / 2),
                      marginBottom: 0,
                      minWidth: 50,
                      borderRadius: `100%`,
                    }}
                    imgStyle={{
                      borderRadius: `50%`,
                    }}
                  />
                )}
              />
            </span>
          </Link>
        </div>
      );
    }
    return (
      <>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(21),
            padding: `${rhythm(0.4)} ${rhythm(3 / 4)} ${rhythm(1.5)}`,
          }}
        >
          <div
            style={{
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                position: "absolute",
                right: 0,
              }}
            >
              {/* <NavLink to={`/about`} isActive={isAboutPath}>
                About
              </NavLink> */}
              <NavLink to={`/archive`} isActive={isArchivePath}>
                Insights
              </NavLink>
              {/* <NavLink to={`/coaching`} isActive={isCoachingPath}>
                Coaching
              </NavLink> */}
            </div>
          </div>
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <div style={{ background: "#f5f5f5" }}>
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              // maxWidth: rhythm(21),
              padding: `${rhythm(0.4)} ${rhythm(3 / 4)} ${rhythm(1.5)}`,
              textAlign: "center",
            }}
          >
            {/* <FooterAd /> */}
            <footer>
              <div
                style={{
                  padding: "1rem 0 0 0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <NavLink to={`/about`} isActive={isAboutPath}>
                    About
                  </NavLink>
                  <NavLink to={`/archive`} isActive={isArchivePath}>
                    Insights
                  </NavLink>
                  {/* <NavLink to={`/coaching`} isActive={isCoachingPath}>
                    Coaching
                  </NavLink> */}
                </div>
              </div>
            </footer>
          </div>
        </div>
      </>
    );
  }
}

export default Layout;

const authorPhoto = graphql`
  query AuthorPhotoQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
