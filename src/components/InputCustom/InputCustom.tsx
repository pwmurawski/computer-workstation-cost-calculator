import { useRef } from "react";
import { InputCustomContainer, Input, Label } from "./styles/InputCustomStyles";

interface IInputCustomProps {
  type?: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
}

const defaultProps = {
  type: undefined,
  value: undefined,
  onChange: undefined,
  placeholder: null,
};

export default function InputCustom({
  type,
  value,
  onChange,
  placeholder,
}: IInputCustomProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <InputCustomContainer>
      <Input
        type={type}
        ref={inputRef}
        value={value}
        onChange={onChange}
        placeholder=" "
      />
      <Label onClick={() => inputRef.current?.focus()}>{placeholder}</Label>
    </InputCustomContainer>
  );
}

InputCustom.defaultProps = defaultProps;
