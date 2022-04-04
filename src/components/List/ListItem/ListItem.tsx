/* eslint-disable no-unused-vars */
import { useState } from "react";
import getIconCategory from "../../../helpers/getIconCategory";
import {
  ListItemContainer,
  Icon,
  Desc,
  Name,
  Price,
  Left,
  Right,
  Container,
  DeleteBtn,
} from "./styles/ListItemStyles";
import ListItemEditForm from "./ListItemEditForm/ListItemEditForm";
import deleteImg from "../../../assets/delete.png";
import { IListItemData } from "../../../reducer";

interface IListItemProps {
  id: string;
  name: string;
  desc: string;
  price: string;
  category: {
    name: string;
    value: string;
  };
  deleteItemHandler: (id: string) => void;
  editItemHandler: (id: IListItemData) => void;
}

export default function ListItem({
  id,
  name,
  desc,
  price,
  category,
  deleteItemHandler,
  editItemHandler,
}: IListItemProps) {
  const [showListItemEditForm, setshowListItemEditForm] = useState(false);

  const submitHandler = (formData: IListItemData) => {
    setshowListItemEditForm(false);
    editItemHandler(formData);
  };

  if (showListItemEditForm)
    return (
      <ListItemEditForm
        submitHandler={submitHandler}
        defaultValues={{ id, name, desc, price, category }}
      />
    );
  return (
    <ListItemContainer
      onDoubleClick={() => {
        setshowListItemEditForm(true);
      }}
    >
      <Left>
        <Icon
          width="50px"
          height="50px"
          src={getIconCategory(category.value)}
        />
        <Container>
          <Name>{name}</Name>
          <Desc>{desc}</Desc>
        </Container>
      </Left>
      <Right>
        <Price>{price} zł</Price>
        <DeleteBtn onClick={() => deleteItemHandler(id)}>
          <Icon width="100%" height="100%" src={deleteImg} />
        </DeleteBtn>
      </Right>
    </ListItemContainer>
  );
}
