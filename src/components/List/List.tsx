/* eslint-disable no-unused-vars */
import { ReactElement } from "react";
import { ListContainer } from "./styles/ListStyles";
import ListItem from "./ListItem/ListItem";
import { IListItemData } from "../../reducer";

interface IListProps {
  listHeader?: ReactElement;
  listItemData: IListItemData[];
  deleteItemHandler: (id: string) => void;
  editItemHandler: (listItemNewData: IListItemData) => void;
}

const defaultProps = {
  listHeader: undefined,
};

export default function List({
  listHeader,
  listItemData,
  deleteItemHandler,
  editItemHandler,
}: IListProps) {
  return (
    <ListContainer>
      {listHeader}
      {listItemData.map(({ id, name, desc, price, category }) => (
        <ListItem
          key={id}
          id={id}
          name={name}
          desc={desc}
          price={price}
          category={category}
          deleteItemHandler={deleteItemHandler}
          editItemHandler={editItemHandler}
        />
      ))}
    </ListContainer>
  );
}

List.defaultProps = defaultProps;
