import styled from "styled-components";

export const ListHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const NumberItems = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  font-weight: 600;
  @media (max-width: 450px) {
    font-size: 5vw;
  }
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
  @media (max-width: 450px) {
    font-size: 3vw;
  }
`;

export const SelectContainer = styled.div`
  max-width: 150px;
  width: 100%;
  height: 20px;
  padding: 1px 5px;
  font-size: 13px;
  @media (max-width: 450px) {
    font-size: 3vw;
  }
`;

export const SortContainer = styled.div`
  display: flex;
  white-space: nowrap;
  font-size: 14px;
  height: 20px;
  padding: 1px 5px;
`;

export const SelectSort = styled.select`
  max-width: 70px;
  min-width: 18px;
  width: 100%;
  border-radius: 10px;
  margin-left: 5px;
  @media (max-width: 450px) {
    font-size: 3vw;
  }
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
`;
