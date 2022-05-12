import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 10px;
  border-radius: 10px;
  border-top: 1px solid #b8b8b8;
  :last-of-type {
    background-color: whitesmoke;
    padding: 20px;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  border-bottom: 1px solid #b8b8b8;
  padding-bottom: 2px;
  margin-bottom: 10px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const Text = styled.div`
  font-weight: 600;
  margin-right: 10px;
`;

export const Value = styled.div``;
