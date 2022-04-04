/* eslint-disable no-unused-vars */
import { v4 as uuid } from "uuid";
import { useState } from "react";
import {
  Form,
  Input,
  Select,
  SubmitBtn,
} from "./styles/FormCreateListItemStyles";
import { IListItemData } from "../../reducer";

const initialFormData = {
  id: uuid(),
  name: "",
  desc: "",
  category: {
    name: "",
    value: "",
  },
  price: "",
};

interface IFormCreateListItemProps {
  submitHandler: (formData: IListItemData) => void;
  defaultValues?: IListItemData;
  submitBtnText?: string;
}

const defaultProps = {
  defaultValues: undefined,
  submitBtnText: "Dodaj",
};

export default function FormCreateListItem({
  submitHandler,
  defaultValues,
  submitBtnText,
}: IFormCreateListItemProps) {
  const [formData, setFormData] = useState(defaultValues ?? initialFormData);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    submitHandler(formData);
    setFormData({ ...initialFormData, id: uuid() });
  };

  return (
    <Form onSubmit={submit}>
      <Input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="nazwa"
      />
      <Input
        type="text"
        value={formData.desc}
        onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
        placeholder="opis"
      />
      <Select
        value={formData.category.value}
        onChange={(e) =>
          setFormData({
            ...formData,
            category: {
              value: e.target.value,
              name: e.target.selectedOptions[0].text,
            },
          })
        }
      >
        <option>wybierz kategorie</option>
        <option value="hardware">Podzespoły komputera</option>
        <option value="peripherals">Urządzenia peryferyjne</option>
        <option value="software">Oprogramowanie</option>
        <option value="another">Inne</option>
      </Select>
      <Input
        type="number"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        placeholder="cena"
      />
      <SubmitBtn>{submitBtnText}</SubmitBtn>
    </Form>
  );
}

FormCreateListItem.defaultProps = defaultProps;
