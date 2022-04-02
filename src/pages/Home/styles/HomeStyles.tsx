/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 20px 30px;
  @media (max-width: 1195px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SummaryContainer = styled.div`
  display: flex;
  max-width: 350px;
  width: 100%;
  height: fit-content;
  margin: 20px;
`;
