import { useContext, useState } from "react";
import ReducerContext from "../../context/ReducerContext";
import { Form, Input, Select, SubmitBtn } from "./styles/HeaderStyles";

export default function Header() {
  const reducerCon = useContext(ReducerContext);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    desc: "",
    category: "",
    price: "",
  });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({
      ...formData,
      id: reducerCon?.state.listItemData.length.toString() ?? "0",
    });
    reducerCon?.dispatch({ type: "addListItem", listItem: formData });
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="nazwa"
      />
      <Input
        value={formData.desc}
        onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
        placeholder="opis"
      />
      <Select
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </Select>
      <Input
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        placeholder="cena"
      />
      <SubmitBtn>Dodaj</SubmitBtn>
    </Form>
  );
}
