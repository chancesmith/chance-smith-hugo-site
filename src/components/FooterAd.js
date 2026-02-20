import React from "react";
import styled from "styled-components";

// components
import Product from "./Product";

// #region Styled Components
const Styles = styled.div`
  display: flex;
  padding: 2.5em 0;
  justify-content: space-evenly;
  /* align-items: center; */
  flex-wrap: nowrap;
  @media only screen and (max-width: 715px) {
    display: block;
    & > div {
      width: 100%;
      margin: 0 0 1.2em;
    }
  }
`;
// #endregion

const FooterAd = () => {
  return (
    <>
      {/* <h2 style={{ textAlign: "center" }}>Resources to change your career</h2>
      <Styles>
        <Product
          isAdBlock
          title={`Hire Me! Kit 📒`}
          image={`/hire-me-ad-3.jpg`}
          link="/hire-me-kit"
          subTitle="A proven template to catch their attention and get hired."
        />
        <Product
          isAdBlock
          title={`Level-Up Mastermind 💪`}
          image={`/level-up-ad-3.jpg`}
          link="/level-up-mastermind"
          subTitle={`Join our monthly mastermind to connect and help you take actionable steps to ownership.`}
        />
      </Styles> */}
    </>
  );
};

export default FooterAd;
