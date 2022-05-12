import { useReducer, useMemo, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { reducer, initialState } from "../../reducer";
import ReducerContext from "../../context/ReducerContext";
import { Wrapper, SummaryContainer } from "./styles/HomeStyles";
import List from "../../components/List/List";
import SummaryCategories from "../../components/SummaryCategories/SummaryCategories";
import filterByCategory from "../../helpers/filterByCategory";
import sort from "../../helpers/sort";
import PrintBtn from "../../components/PrintBtn/PrintBtn";
import AddItem from "../../components/AddItem/AddItem";

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const listRef = useRef<HTMLUListElement>(null);
  const reducerValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  const listItemData = state.listItemData ?? [];
  const filterValue = state.filter ?? "";
  const sortValue = state.sort ?? "";

  const handlePrint = useReactToPrint({
    content: () => listRef.current,
  });

  return (
    <ReducerContext.Provider value={reducerValue}>
      <AddItem />
      <Wrapper>
        <List
          reff={listRef}
          listItemData={sort(
            filterByCategory(listItemData, filterValue),
            sortValue
          )}
        />
        <SummaryContainer>
          <SummaryCategories />
        </SummaryContainer>
        <PrintBtn onClick={handlePrint} />
      </Wrapper>
    </ReducerContext.Provider>
  );
}
