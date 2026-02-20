import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

// components
import Layout from "../components/layout";
import SEO from "../components/seo";

// #region Styled Components
const CoverWrapStyles = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em 0 2em 0;

  .bookCover {
    box-shadow: 5px 5px 20px #444;
  }
`;
// #endregion

const HireMeKitPage = (props) => {
  return (
    <StaticQuery
      query={HireMeKitQuery}
      render={(data) => (
        <Layout location={props.location}>
          <SEO
            title="Hire Me!: Guide and Tools to Enter the Work You Love"
            keywords={[`Hire Me! Kit`, "chance hire me kit"]}
          />
          <div>
            <h1 style={{ textAlign: "center" }}>
              Hire Me! Guide and Tools to Enter the Work You Love
            </h1>
            <p style={{ textAlign: "center" }}>by Chance Smith</p>
            <CoverWrapStyles>
              <Image
                className="bookCover"
                fixed={data.file.childImageSharp.fixed}
                alt="hire me kit cover"
              />
            </CoverWrapStyles>

            <p>
              Today I'm early releasing the Hire-Me Kit. A collection: email
              template, email example, and a video for interns. There will be
              updates along the way.
            </p>

            <p>
              After a big career switch from restaurant/retail to creative and
              software work, I've experienced a role. Also, I've conducted
              hundreds of interviews and hires. Over my career, I've have
              collected a fine-tuned way of getting hired.
            </p>

            <p>
              We are often aware of our wants, but rarely know what the next
              step is to getting reach those goals. When it comes to getting a
              job, our mental patterns are:
            </p>

            <ul>
              <li>"I'm not ready just yet."</li>
              <li>"They(company) aren't ready to hire now"</li>
              <li>"I'm not skilled enough."</li>
              <li>"That company isn't hiring."</li>
              <li>"We're in a rough economy, I'll just wait."</li>
              <li>"I don't have anything to offer that company."</li>
              <li>"I have no experience. There is no way..."</li>
              <li>"I don't have a profile of work."</li>
              <li>"Just one more can of Pringles."</li>
              <li>"I'll just send my resume and cover letter."</li>
              <li>"Just one more Netflix/Hulu/Prime episode."</li>
              <li>"The company doesn't have any jobs posted."</li>
              <li>"This video game sure is fun."</li>
            </ul>

            <p>
              Oh, stop it! You are great. You might need to improve. Don't we
              all. With this kit, I'll show you how you can standout with what
              you have and where you are.
            </p>

            <p>
              Please don't buy this toolkit if you aren't ready to back this up
              with some hard work. No one wants to hire a great interview-actor.
            </p>

            <p>
              Please purchase this toolkit if you are excited about a company or
              gig and ready to show off. {`💪`}
            </p>

            <p>
              It's not just a toolkit, but a mental model. ...A different way of
              thinking.
            </p>

            <p>
              For those that see a job and are ready to dive in, this toolkit is
              for you.
            </p>

            <h3 style={{ textAlign: "center" }}>
              <a href="https://www.buymeacoffee.com/l/internhireme?rel=csio">
                Pre-Order the Hire Me! Kit
              </a>
            </h3>

            <p>
              p.s. As always, there’s a 100% guarantee — request a full refund
              and you’ll get it, no questions asked.
            </p>
          </div>
        </Layout>
      )}
    />
  );
};

export default HireMeKitPage;

export const HireMeKitQuery = graphql`
  query {
    file: file(absolutePath: { regex: "/Hire-Me-Kit-Cover.png/" }) {
      childImageSharp {
        fixed(width: 350) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
