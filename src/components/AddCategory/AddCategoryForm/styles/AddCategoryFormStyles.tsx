import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid #b8b8b8;
  margin-bottom: 10px;
  width: 100%;
  font-size: 15px;
`;

export const InputFile = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 50px;
  height: auto;
  margin: 20px;
`;

export const AddImgBtn = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #b8b8b8;
  font-size: 14px;
  color: #696969;
`;

export const SubmitBtn = styled.button`
  width: 50px;
  height: 25px;
  border-radius: 20px;
  border: 0;
  color: white;
  background-color: rgb(17, 158, 0);
  cursor: pointer;
  :hover {
    background-color: rgb(13, 128, 0);
  }
`;
