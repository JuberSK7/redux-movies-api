import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <Maindiv>Movies App </Maindiv>
      <Subdiv>@2022 All Right Reserves</Subdiv>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  background: #34495e;
  height: 98px;
`;
const Maindiv = styled.div``;
const Subdiv = styled.div``;
