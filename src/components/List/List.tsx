import { ReactElement } from "react";
import { ListContainer } from "./styles/ListStyles";
import ListItem from "./ListItem/ListItem";
import { IListItemData } from "../../reducer";

interface IListProps {
  listHeader?: ReactElement;
  listItemData: IListItemData[];
}

const defaultProps = {
  listHeader: undefined,
};

export default function List({ listHeader, listItemData }: IListProps) {
  return (
    <ListContainer>
      {listHeader}
      {listItemData.map(({ id, name, desc, price, category }) => (
        <ListItem
          key={id}
          name={name}
          desc={desc}
          price={price}
          category={category}
        />
      ))}
    </ListContainer>
  );
}

List.defaultProps = defaultProps;
