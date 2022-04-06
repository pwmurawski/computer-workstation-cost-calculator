import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: inherit;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  min-width: 30px;
  height: 100%;
  margin: 0 5px;
  border-radius: 10px;
  border: 1px solid #b8b8b8;

  @media (max-width: 700px) {
    margin-bottom: 2px;
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 5px;
  font-size: 13px;
  @media (max-width: 700px) {
    margin-bottom: 2px;
  }
`;

export const SubmitBtn = styled.button`
  background-color: rgb(17, 158, 0);
  color: white;
  border: 0;
  border-radius: 20px;
  padding: 5px 10px;
  margin-left: 5px;
  cursor: pointer;
  :hover {
    background-color: rgb(10, 104, 0);
  }
`;
