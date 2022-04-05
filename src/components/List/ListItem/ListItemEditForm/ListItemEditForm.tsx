/* eslint-disable no-unused-vars */
import { useContext } from "react";
import ReducerContext from "../../../../context/ReducerContext";
import { IListItemData } from "../../../../reducer";
import FormCreateListItem from "../../../FormCreateListItem/FormCreateListItem";
import { ListItemContainer } from "../styles/ListItemStyles";
import { FormContainer } from "./styles/ListItemEditFormStyles";

interface IListItemEditFormProps {
  defaultValues: IListItemData;
  submitHandler: (formData: IListItemData) => void;
}

export default function ListItemEditForm({
  defaultValues,
  submitHandler,
}: IListItemEditFormProps) {
  const reducerCon = useContext(ReducerContext);

  const submitHandlerFormCreate = (formData: IListItemData) => {
    submitHandler(formData);
  };

  return (
    <ListItemContainer>
      <FormContainer>
        <FormCreateListItem
          categories={reducerCon?.state.categories}
          submitHandler={submitHandlerFormCreate}
          defaultValues={defaultValues}
          submitBtnText="Edytuj"
        />
      </FormContainer>
    </ListItemContainer>
  );
}
