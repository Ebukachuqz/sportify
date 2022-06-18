import { keyframes, styled } from "@mui/material";
import React from "react";

const ripple = keyframes`
  0% {
    top: 96px;
    left: 96px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 18px;
    left: 18px;
    width: 156px;
    height: 156px;
    opacity: 0;
  }
`;

const PlaceHolder = styled("div")`
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Ripple = styled("div")`
  position: relative;
  width: 200px !important;
  height: 200px !important;
  transform: translate(-100px, -100px) scale(1) translate(100px, 100px);

  div {
    box-sizing: content-box;
    position: absolute;
    border-width: 4px;
    border-style: solid;
    border-radius: 50%;
    opacity: 1;
    animation: ${ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  div:nth-of-type(1) {
    border-color: #88d4e4;
  }
  div:nth-of-type(2) {
    border-color: #5e96c0;
    animation-delay: -0.5s;
  }
`;

const Loading = () => {
  return (
    <>
      <PlaceHolder>
        <Ripple>
          <div></div>
          <div></div>
        </Ripple>
      </PlaceHolder>
    </>
  );
};

export default Loading;
