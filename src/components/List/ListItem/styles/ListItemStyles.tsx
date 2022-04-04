/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const ListItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 230px;
  height: fit-content;
  min-height: 50px;
  padding: 12px 16px 12px 12px;
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

export const Icon = styled.img``;

export const Name = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  text-transform: capitalize;
`;

export const Desc = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;

  @media (max-width: 720px) {
    font-size: calc(8px + 1vw);
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10px;
  word-wrap: break-word;
`;

export const DeleteBtn = styled.button`
  background: transparent;
  border: 0;
  border-radius: 20px;
  padding: 10px;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  cursor: pointer;
  :hover {
    background-color: whitesmoke;
  }
`;
