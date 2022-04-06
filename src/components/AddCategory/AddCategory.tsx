import { useContext, useState } from "react";
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
        value: category.name.toLocaleLowerCase(),
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
