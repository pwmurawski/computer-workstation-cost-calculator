import {
  Container,
  Body,
  Header,
  Info,
  Text,
  Value,
} from "./styles/SummaryStyles";

interface ISummaryProps {
  numberItems: number;
  totalAmount: number;
}

export default function Summary({ numberItems, totalAmount }: ISummaryProps) {
  return (
    <Container>
      <Header>Podsumowanie</Header>
      <Body>
        <Info>
          <Text>Liczba przedmiotów</Text>
          <Value>{numberItems}</Value>
        </Info>
        <Info>
          <Text>Łączna kwota</Text>
          <Value>{totalAmount} zł</Value>
        </Info>
      </Body>
    </Container>
  );
}
