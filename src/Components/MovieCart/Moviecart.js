import React from "react";
import styled from "styled-components";

const Moviecart = (props) => {
  const data = props;
  return (
    <CartItem>
      <CartInner>
        <CartTop>
          <img src={data.Poster} />
        </CartTop>
        <CartBottom>
          <CartInfo>
            <h1>{data.Title}</h1>
            <p>{data.Year}</p>
          </CartInfo>
        </CartBottom>
      </CartInner>
    </CartItem>
  );
};

export default Moviecart;

const CartItem = styled.div`
  background: #fff;
  cursor: pointer;
`;

const CartInner = styled.div``;

const CartTop = styled.div`
  height: 300px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const CartBottom = styled.div`
  padding: 22px;
`;
const CartInfo = styled.div`
  color: #fff;
  h1 {
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 10px;
  }

  h1 {
  }

  p {
  }
`;
