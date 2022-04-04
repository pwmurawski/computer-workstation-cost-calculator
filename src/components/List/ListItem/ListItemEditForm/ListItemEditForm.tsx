/* eslint-disable no-unused-vars */
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
  const submitHandlerFormCreate = (formData: IListItemData) => {
    submitHandler(formData);
  };

  return (
    <ListItemContainer>
      <FormContainer>
        <FormCreateListItem
          submitHandler={submitHandlerFormCreate}
          defaultValues={defaultValues}
          submitBtnText="Edytuj"
        />
      </FormContainer>
    </ListItemContainer>
  );
}
