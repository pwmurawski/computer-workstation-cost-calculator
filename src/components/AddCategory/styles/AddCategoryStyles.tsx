import styled from "styled-components";

export const ExitContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  position: absolute;
  top: 115%;
  right: 0;
  width: 200px;
  height: fit-content;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 1px 3px 0 black;
  z-index: 1;
`;

export const ArrowContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 20px;
`;

export const Arrow = styled.div`
  position: absolute;
  top: -6px;
  right: 23px;
  width: 14px;
  height: 14px;
  background-color: white;
  transform: rotate(45deg);
  box-shadow: 0 0 5px 1px lightgray;
  z-index: -1;
`;
