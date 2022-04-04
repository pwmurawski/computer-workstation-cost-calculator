/* eslint-disable react/no-array-index-key */
import { Container, Header } from "./styles/SummaryStyles";
import Category from "./Category/Category";
import { IListItemData } from "../../reducer";

interface ISummaryProps {
  listItemData: IListItemData[];
  categories: {
    id: string;
    name: string;
    items: IListItemData[];
  }[];
}

export default function Summary({ listItemData, categories }: ISummaryProps) {
  return (
    <Container>
      <Header>Podsumowanie</Header>
      {categories.map(({ id, name, items }) => (
        <Category key={id} name={name} items={items} />
      ))}
      <Category name="Razem" items={listItemData} />
    </Container>
  );
}
