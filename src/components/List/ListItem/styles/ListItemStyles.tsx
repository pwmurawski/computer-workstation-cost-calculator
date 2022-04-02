/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const ListItemContainer = styled.li`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 12px 16px 12px 12px;

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
