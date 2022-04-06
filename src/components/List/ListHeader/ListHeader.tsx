/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  ListHeaderContainer,
  NumberItems,
  Value,
  ClearBtn,
  SelectContainer,
} from "./styles/ListHeaderStyles";
import SelectCategory from "../../SelectCategory/SelectCategory";

interface IListHeaderProps {
  numberItems: number;
  clearListHandler: () => void;
  selectedCategoryHandler: (categoryValue: string) => void;
}

export default function ListHeader({
  numberItems,
  clearListHandler,
  selectedCategoryHandler,
}: IListHeaderProps) {
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    selectedCategoryHandler(selectValue);
  }, [selectValue]);

  return (
    <ListHeaderContainer>
      <NumberItems>
        Przedmioty <Value>({numberItems})</Value>
      </NumberItems>
      <SelectContainer>
        <SelectCategory
          isValue={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
        />
      </SelectContainer>
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
