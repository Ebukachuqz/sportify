import { Box, styled } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

// image import
import BackgroundImg from "../../assets/images/header-bg.jpg";
import logo from "../../assets/images/logo.png";

const HeaderBackground = styled("div")`
  background-image: url(${BackgroundImg});
  position: relative;
  min-height: 300px;
  background-position: 50%;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const LogoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled(Box)`
  max-width: 200px;
`;
const Img = styled("img")`
  width: 100%;
`;

const Header = () => {
  return (
    <HeaderBackground>
      <Container maxWidth="md">
        <LogoContainer>
          <Logo>
            <Img src={logo} alt="Logo" />
          </Logo>
        </LogoContainer>
      </Container>
    </HeaderBackground>
  );
};

export default Header;
