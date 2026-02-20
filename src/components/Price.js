import React from "react";

const Price = ({ price, orgPrice }) => {
  return (
    <span style={{ color: "#444" }}>
      {" "}
      {!!orgPrice && <strike style={{ color: "#777" }}>${orgPrice}</strike>} $
      {price}
    </span>
  );
};

export default Price;
