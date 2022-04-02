import styled from "styled-components";

export const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color: white;
  box-shadow: 0 1px 3px #b8b8b8;
`;

export const Input = styled.input`
  box-sizing: border-box;
  display: flex;
  width: 300px;
  min-width: 30px;
  height: 30px;
  margin-right: 20px;
  border-radius: 10px;
  border: 1px solid #b8b8b8;

  @media (max-width: 700px) {
    margin-bottom: 10px;
  }
`;

export const Select = styled.select`
  box-sizing: border-box;
  display: flex;
  width: 300px;
  min-width: 30px;
  height: 30px;
  margin-right: 20px;
  border-radius: 10px;
  border: 1px solid #b8b8b8;

  @media (max-width: 700px) {
    margin-bottom: 10px;
  }
`;

export const SubmitBtn = styled.button``;
