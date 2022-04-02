import styled from "styled-components";

export const Container = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 350px;
  height: fit-content;
  border-radius: 10px;
  border: 1px solid #b8b8b8;
  background-color: white;
  @media (max-width: 1195px) {
    position: sticky;
  }
`;

export const Header = styled.header`
  display: flex;
  padding: 20px;
`;

export const Body = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  border-top: 1px solid #b8b8b8;
  background-color: whitesmoke;
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
