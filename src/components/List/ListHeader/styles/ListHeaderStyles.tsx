import styled from "styled-components";

export const ListHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const NumberItems = styled.header`
  font-size: 26px;
  font-weight: 600;
`;

export const Value = styled.span`
  color: gray;
`;

export const ClearBtn = styled.button`
  border: 0;
  padding: 10px 12px;
  background: transparent;
  font-size: 14px;
  color: gray;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    background-color: whitesmoke;
  }
`;
