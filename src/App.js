import "./App.css";

import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, Container, CssBaseline, styled } from "@mui/material";
import Home from "./pages/Home/Home";

const MainContainer = styled("div")`
  width: 100%;
`;

const Containerr = styled(Box)`
  width: 100%;
  margin: auto;
  max-width: 700px;
`;

const BodyContainer = styled("div")`
  margin-top: -50px;
  padding: 0 20px;
  z-index: 10;
  position: relative;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`;

const App = () => {
  return (
    <div>
      <CssBaseline />
      <MainContainer>
        <Header />
        <Containerr>
          <BodyContainer>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </BrowserRouter>
          </BodyContainer>
        </Containerr>
      </MainContainer>
    </div>
  );
};

export default App;
