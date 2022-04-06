/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  ListHeaderContainer,
  NumberItems,
  Value,
  ClearBtn,
  SelectContainer,
  SelectSort,
  SortContainer,
  Right,
  Container,
} from "./styles/ListHeaderStyles";
import SelectCategory from "../../SelectCategory/SelectCategory";

interface IListHeaderProps {
  numberItems: number;
  clearListHandler: () => void;
  selectedCategoryHandler: (categoryValue: string) => void;
  selectedSortHandler: (sortValue: string) => void;
}

export default function ListHeader({
  numberItems,
  clearListHandler,
  selectedCategoryHandler,
  selectedSortHandler,
}: IListHeaderProps) {
  const [selectValue, setSelectValue] = useState({ filter: "", sort: "" });

  useEffect(() => {
    selectedCategoryHandler(selectValue.filter);
  }, [selectValue.filter]);

  useEffect(() => {
    selectedSortHandler(selectValue.sort);
  }, [selectValue.sort]);

  return (
    <ListHeaderContainer>
      <NumberItems>
        Przedmioty <Value>({numberItems})</Value>
      </NumberItems>
      <Right>
        <Container>
          <SortContainer>
            Sortuj po:
            <SelectSort
              value={selectValue.sort}
              onChange={(e) =>
                setSelectValue({ ...selectValue, sort: e.target.value })
              }
            >
              <option value="">Wybierz</option>
              <option value="name">Nazwie</option>
              <option value="desc">Opisie</option>
              <option value="category">Kategori</option>
              <option value="price">Cenie</option>
            </SelectSort>
          </SortContainer>
          <SelectContainer>
            <SelectCategory
              isValue={selectValue.filter}
              onChange={(e) =>
                setSelectValue({ ...selectValue, filter: e.target.value })
              }
            />
          </SelectContainer>
        </Container>
        <ClearBtn
          onClick={() => {
            clearListHandler();
          }}
        >
          Wyczyść
        </ClearBtn>
      </Right>
    </ListHeaderContainer>
  );
}
