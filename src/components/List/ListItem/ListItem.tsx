import { ListItemContainer } from "./styles/ListItemStyles";

interface IListItemProps {
  name: string;
  desc: string;
  price: string;
  category: string;
}

export default function ListItem({
  name,
  desc,
  price,
  category,
}: IListItemProps) {
  return <ListItemContainer>list item</ListItemContainer>;
}
