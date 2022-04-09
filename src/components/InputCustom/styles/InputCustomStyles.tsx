import styled from "styled-components";

export const InputCustomContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  min-width: 30px;
  height: 100%;
  margin: 0 5px;
  background: transparent;
`;

export const Label = styled.label`
  --height: 20px;
  position: absolute;
  height: var(--height);
  top: calc(50% - var(--height) / 2);
  left: 5px;
  font-size: 13px;
  text-transform: capitalize;
  padding: 0 2px;
  color: gray;
  cursor: text;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #b8b8b8;

  :focus ~ ${Label}, :not(:placeholder-shown) ~ ${Label} {
    top: -9px;
    background-color: white;
    font-size: 12px;
  }

  @media (max-width: 700px) {
    margin-bottom: 2px;
  }
`;