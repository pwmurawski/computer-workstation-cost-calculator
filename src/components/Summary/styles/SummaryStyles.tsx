import styled from "styled-components";

export const Container = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  max-width: inherit;
  width: 100%;
  max-height: calc(100% - 150px);
  height: fit-content;
  border-radius: 10px;
  border: 1px solid #b8b8b8;
  background-color: white;
  overflow-y: auto;
  @media (max-width: 1195px) {
    position: static;
  }
`;

export const Header = styled.header`
  display: flex;
  padding: 20px;
`;
