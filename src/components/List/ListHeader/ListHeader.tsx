/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
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
import ReducerContext from "../../../context/ReducerContext";

export default function ListHeader() {
  const [selectValue, setSelectValue] = useState({ filter: "", sort: "" });
  const reducerCon = useContext(ReducerContext);
  const numberItems = reducerCon?.state.listItemData.length ?? 0;

  const clearList = () => {
    reducerCon?.dispatch({ type: "setListItemData", listItemData: [] });
  };

  useEffect(() => {
    reducerCon?.dispatch({ type: "setFilter", value: selectValue.filter });
  }, [selectValue.filter]);

  useEffect(() => {
    reducerCon?.dispatch({ type: "setSort", value: selectValue.sort });
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
        <ClearBtn onClick={clearList}>Wyczyść</ClearBtn>
      </Right>
    </ListHeaderContainer>
  );
}
