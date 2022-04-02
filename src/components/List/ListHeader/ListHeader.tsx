import {
  ListHeaderContainer,
  NumberItems,
  Value,
  ClearBtn,
} from "./styles/ListHeaderStyles";

interface IListHeaderProps {
  numberItems: number;
  clearListHandler: () => void;
}

export default function ListHeader({
  numberItems,
  clearListHandler,
}: IListHeaderProps) {
  return (
    <ListHeaderContainer>
      <NumberItems>
        Przedmioty <Value>({numberItems})</Value>
      </NumberItems>
      <ClearBtn
        onClick={() => {
          clearListHandler();
        }}
      >
        Wyczyść
      </ClearBtn>
    </ListHeaderContainer>
  );
}
