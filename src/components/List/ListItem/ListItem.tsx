/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import getIconCategory from "../../../helpers/getIconCategory";
import {
  Container,
  Icon,
  Desc,
  Name,
  Price,
  Left,
  Right,
  ContainerInfo,
  DeleteBtn,
} from "./styles/ListItemStyles";
import ListItemEditForm from "./ListItemEditForm/ListItemEditForm";
import deleteImg from "../../../assets/delete.png";
import { IListItemData } from "../../../reducer";
import useIconCategory from "../../../hook/useIconCategory";
import ReducerContext from "../../../context/ReducerContext";

interface IListItemProps {
  id: string;
  name: string;
  desc: string;
  price: string;
  category: {
    name: string;
    value: string;
  };
}

export default function ListItem({
  id,
  name,
  desc,
  price,
  category,
}: IListItemProps) {
  const reducerCon = useContext(ReducerContext);
  const [showListItemEditForm, setshowListItemEditForm] = useState(false);
  const iconCategory = useIconCategory(category.value);

  const deleteItemHandler = () => {
    reducerCon?.dispatch({ type: "deleteListItem", id });
  };

  const submitHandler = (formData: IListItemData) => {
    setshowListItemEditForm(false);
    reducerCon?.dispatch({ type: "editListItem", listItemNewData: formData });
  };

  if (showListItemEditForm)
    return (
      <ListItemEditForm
        submitHandler={submitHandler}
        defaultValues={{ id, name, desc, price, category }}
      />
    );
  return (
    <Container onDoubleClick={() => setshowListItemEditForm(true)}>
      <Left>
        <Icon
          width="50px"
          height="50px"
          src={getIconCategory(category.value) ?? iconCategory}
        />
        <ContainerInfo>
          <Name>{name}</Name>
          <Desc>{desc}</Desc>
        </ContainerInfo>
      </Left>
      <Right>
        <Price>{price} zł</Price>
        <DeleteBtn onClick={deleteItemHandler}>
          <Icon width="100%" height="100%" src={deleteImg} />
        </DeleteBtn>
      </Right>
    </Container>
  );
}
