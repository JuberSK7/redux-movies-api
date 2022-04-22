import React from "react";
import user from "../../Images/user.png";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Movies App</Logo>
      <UsarImage>
        <Img src={user} alt="user" />
      </UsarImage>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  aling-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background: #34495e;
  height: 72px;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
`;

const UsarImage = styled.div``;

const Img = styled.img`
  width: 68px;
  height: 68px;
  cursor: pointer;
`;
