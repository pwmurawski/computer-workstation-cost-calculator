import { Container, Info, Text, Title, Value } from "./styles/CategoryStyles";
import getTotalAmount from "../../../helpers/getTotalAmount";
import { IListItemData } from "../../../reducer";

interface ICategoryProps {
  name: string;
  items: IListItemData[];
}

export default function Category({ name, items }: ICategoryProps) {
  return (
    <Container>
      <Title>{name}</Title>
      <Info>
        <Text>Liczba przedmiotów</Text>
        <Value>{items.length}</Value>
      </Info>
      <Info>
        <Text>Łączna kwota</Text>
        <Value>{getTotalAmount(items)} zł</Value>
      </Info>
    </Container>
  );
}
