import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import {
  Container,
  ExitContainer,
  Arrow,
  ArrowContainer,
} from "./styles/AddCategoryStyles";
import AddCategoryBtn from "./AddCategoryBtn/AddCategoryBtn";
import AddCategoryForm, {
  IFormDataAddCategory,
} from "./AddCategoryForm/AddCategoryForm";
import ReducerContext from "../../context/ReducerContext";

export default function AddCategory() {
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false);
  const reducerCon = useContext(ReducerContext);

  const submitHandler = (category: IFormDataAddCategory) => {
    reducerCon?.dispatch({
      type: "addCategory",
      category: {
        name: category.name,
        value: uuid(),
        icon: category.icon,
      },
    });
    setShowAddCategoryForm(false);
  };

  return (
    <>
      <AddCategoryBtn onClick={() => setShowAddCategoryForm(true)} />
      {showAddCategoryForm ? (
        <>
          <Container>
            <ArrowContainer>
              <Arrow />
              <AddCategoryForm submitHandler={submitHandler} />
            </ArrowContainer>
          </Container>
          <ExitContainer onClick={() => setShowAddCategoryForm(false)} />
        </>
      ) : null}
    </>
  );
}
