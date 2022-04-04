import styled from "styled-components";

export const Container = styled.section`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color: white;
  box-shadow: 0 1px 3px #b8b8b8;
`;

export const FormContainer = styled.div`
  width: 90%;
  height: 40px;
  @media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
    height: 95%;
  }
`;
