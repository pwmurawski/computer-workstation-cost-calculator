/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  Form,
  Input,
  InputFile,
  Icon,
  AddImgBtn,
  SubmitBtn,
} from "./styles/AddCategoryFormStyles";

const initialFormData = {
  name: "",
  icon: "",
};

export interface IFormDataAddCategory {
  name: string;
  icon: string;
}

interface IAddCategoryFormProps {
  submitHandler: (categoryName: IFormDataAddCategory) => void;
}

export default function AddCategoryForm({
  submitHandler,
}: IAddCategoryFormProps) {
  const [formData, setFormData] = useState(initialFormData);

  const clickHandler = () => {
    submitHandler(formData);
    setFormData(initialFormData);
  };

  const changeImgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const render = new FileReader();
    render.addEventListener("load", () => {
      setFormData({
        ...formData,
        icon: typeof render.result === "string" ? render.result : "",
      });
    });
    if (e.target.files) {
      render.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Form>
      <Input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Nazwa kategorii"
      />
      <AddImgBtn>
        Dodaj ikone kategorii
        <Icon src={formData.icon} />
        <InputFile type="file" onChange={changeImgHandler} />
      </AddImgBtn>
      <SubmitBtn type="button" onClick={clickHandler}>
        Dodaj
      </SubmitBtn>
    </Form>
  );
}
