/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 750px;
  width: 100%;
  height: fit-content;
  margin: 20px;
  padding: 0;
  list-style: none;
`;

export const ListItemContainer = styled.li`
  display: flex;
  align-items: center;
  min-width: 230px;
  height: fit-content;
  min-height: 50px;
  background-color: white;
  cursor: pointer;

  border-left: 1px solid #b8b8b8;
  border-right: 1px solid #b8b8b8;
  border-bottom: 1px solid #b8b8b8;
  :first-of-type {
    border-top: 1px solid #b8b8b8;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  :last-of-type {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
