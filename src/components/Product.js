import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

// utils
import { rhythm } from "../utils/typography";

// components
import Price from "./Price";

// #region Styled Components
const Styles = styled.div`
  background: white;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  width: 45%;
  /* margin: ${rhythm(1)}; */
  margin-bottom: ${rhythm(1)};
  padding: ${rhythm(1)};
  text-align: center;
  &:hover {
    color: #333;
    text-decoration: none;
    border: none;
    transition: all .3s linear;
    box-shadow: 0 30px 50px 0 rgba(0, 0, 0, 0.10);
  }
`;
// #endregion

const Product = ({
  isAdBlock,
  title,
  price,
  orgPrice,
  subTitle,
  link,
  image,
}) => {
  return (
    <>
      {isAdBlock ? (
        <Styles>
          <Link style={{ boxShadow: `none` }} to={link}>
            <div>
              <p
                style={{
                  marginTop: rhythm(1 / 4),
                  marginBottom: rhythm(1 / 4),
                  fontSize: rhythm(1),
                }}
              >
                {!!image ? <img src={image} alt={image} /> : title}
                <br />
                {!!price && <Price price={price} orgPrice={orgPrice} />}
              </p>
              <small>{subTitle}</small>
            </div>
          </Link>
        </Styles>
      ) : (
        <div
          style={{
            marginBottom: rhythm(1),
          }}
        >
          <p
            style={{
              marginTop: rhythm(1 / 4),
              marginBottom: rhythm(1 / 4),
              display: "inline-block",
            }}
          >
            <Link style={{ boxShadow: `none` }} to={link}>
              {title}
            </Link>
            {!!price && <Price price={price} orgPrice={orgPrice} />}
          </p>
          {` — `}
          <small>{subTitle}</small>
        </div>
      )}
    </>
  );
};

export default Product;
