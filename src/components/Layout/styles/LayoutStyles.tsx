import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: fit-content;
`;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 100px;

  @media (max-width: 700px) {
    height: 160px;
  }
`;

export const Main = styled.main`
  margin-top: 100px;
  min-height: 70vh;
  height: fit-content;

  @media (max-width: 700px) {
    margin-top: 160px;
  }
`;

export const Footer = styled.footer`
  height: fit-content;
`;
