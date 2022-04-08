import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
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

export const ContainerInfo = styled.div`
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
