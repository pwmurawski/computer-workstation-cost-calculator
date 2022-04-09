/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Container = styled.button`
  position: fixed;
  bottom: 10px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  padding: 10px;
  border: 0;
  border-radius: 150px;
  background-color: #ff4081;
  cursor: pointer;
  transition: transform 200ms;
  :hover {
    transform: scale(1.2);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;
