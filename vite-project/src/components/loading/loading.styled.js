import styled from "styled-components";

export const LoadingDiv = styled.div`
height: 600px;
  background-color: #eaeef6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Circles = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  -webkit-animation: rotation 5s linear infinite;
  animation: rotation 5s linear infinite;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    right: 0;
    margin: -40px 0 0 0;
    display: inline-block;
    width: 0;
    height: 0;
    border: 40px solid #565eef;
    border-radius: 50%;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.09);
    -webkit-animation: pulse-right 2s infinite cubic-bezier(0.8, 0.2, 0.2, 0.8);
    animation: pulse-right 2s infinite cubic-bezier(0.8, 0.2, 0.2, 0.8);
  }
  &::before {
    right: auto;
    left: 0;
    -webkit-animation: pulse-left 2s infinite cubic-bezier(0.9, 0.1, 0.1, 0.9);
    animation: pulse-left 2s infinite cubic-bezier(0.9, 0.1, 0.1, 0.9);
  }
  @-webkit-keyframes pulse-left {
    0% {
      height: 0;
      width: 0;
      margin: -40px 0 0 0;
      left: 0px;
      z-index: 1;
    }
    25% {
      width: 100px;
      height: 100px;
      margin: -90px 0 0 0;
      left: -90px;
      z-index: 2;
    }
    50% {
      width: 100px;
      height: 100px;
      margin: -90px 0 0 0;
      left: 120px;
      z-index: 2;
    }
    75% {
      height: 0;
      width: 0;
      margin: -40px 0 0 0;
      left: 120px;
      z-index: 1;
    }
    100% {
      height: 0;
      width: 0;
      margin: -40px 0 0 0;
      left: 0px;
      z-index: 1;
    }
  }
  @keyframes pulse-left {
    0% {
      height: 0;
      width: 0;
      margin: -40px 0 0 0;
      left: 0px;
      z-index: 1;
    }
    25% {
      width: 100px;
      height: 100px;
      margin: -90px 0 0 0;
      left: -90px;
      z-index: 2;
    }
    50% {
      width: 100px;
      height: 100px;
      margin: -90px 0 0 0;
      left: 120px;
      z-index: 2;
    }
    75% {
      height: 0;
      width: 0;
      margin: -40px 0 0 0;
      left: 120px;
      z-index: 1;
    }
    100% {
      height: 0;
      width: 0;
      margin: -40px 0 0 0;
      left: 0px;
      z-index: 1;
    }
  }
  @-webkit-keyframes pulse-right {
    0% {
      height: 100px;
      width: 100px;
      margin: -90px 0 0 0;
      right: -90px;
      z-index: 2;
    }
    25% {
      width: 0px;
      height: 0px;
      margin: -40px 0 0 0;
      right: 0px;
      z-index: 1;
    }
    50% {
      width: 0px;
      height: 0px;
      margin: -40px 0 0 0;
      right: 120px;
      z-index: 1;
    }
    75% {
      height: 100px;
      width: 100px;
      margin: -90px 0 0 0;
      right: 120px;
      z-index: 2;
    }
    100% {
      height: 100px;
      width: 100px;
      margin: -90px 0 0 0;
      right: -90px;
      z-index: 2;
    }
  }
  @keyframes pulse-right {
    0% {
      height: 100px;
      width: 100px;
      margin: -90px 0 0 0;
      right: -90px;
      z-index: 2;
    }
    25% {
      width: 0px;
      height: 0px;
      margin: -40px 0 0 0;
      right: 0px;
      z-index: 1;
    }
    50% {
      width: 0px;
      height: 0px;
      margin: -40px 0 0 0;
      right: 120px;
      z-index: 1;
    }
    75% {
      height: 100px;
      width: 100px;
      margin: -90px 0 0 0;
      right: 120px;
      z-index: 2;
    }
    100% {
      height: 100px;
      width: 100px;
      margin: -90px 0 0 0;
      right: -90px;
      z-index: 2;
    }
  }
  @-webkit-keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
