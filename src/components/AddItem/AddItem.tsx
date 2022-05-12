import { useContext } from "react";
import ReducerContext from "../../context/ReducerContext";
import { IListItemData } from "../../reducer";
import FormCreateListItem from "../FormCreateListItem/FormCreateListItem";
import { Container, FormContainer } from "./styles/AddItemStyles";
import AddCategory from "../AddCategory/AddCategory";

export default function AddItem() {
  const reducerCon = useContext(ReducerContext);

  const submitHandler = (formData: IListItemData) => {
    reducerCon?.dispatch({ type: "addListItem", listItem: formData });
  };

  return (
    <Container>
      <FormContainer>
        <FormCreateListItem
          addCategory={<AddCategory />}
          submitHandler={submitHandler}
        />
      </FormContainer>
    </Container>
  );
}
