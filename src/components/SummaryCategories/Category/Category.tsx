import { Container, Info, Text, Title, Value } from "./styles/CategoryStyles";

interface ICategoryProps {
  name: string;
  value: number;
  length: number;
}

export default function Category({ name, value, length }: ICategoryProps) {
  return (
    <Container>
      <Title>{name}</Title>
      <Info>
        <Text>Liczba przedmiotów</Text>
        <Value>{length}</Value>
      </Info>
      <Info>
        <Text>Łączna kwota</Text>
        <Value>{value} zł</Value>
      </Info>
    </Container>
  );
}
