import { useReducer, useMemo, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { reducer, initialState } from "../../reducer";
import ReducerContext from "../../context/ReducerContext";
import { Container, SummaryContainer } from "./styles/HomeStyles";
import List from "../../components/List/List";
import SummaryCategories from "../../components/SummaryCategories/SummaryCategories";
import PrintBtn from "../../components/PrintBtn/PrintBtn";
import AddItem from "../../components/AddItem/AddItem";

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const reducerValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  const listRef = useRef<HTMLUListElement>(null);

  const handlePrint = useReactToPrint({
    content: () => listRef.current,
  });

  return (
    <ReducerContext.Provider value={reducerValue}>
      <AddItem />
      <Container>
        <List reff={listRef} />
        <SummaryContainer>
          <SummaryCategories />
        </SummaryContainer>
        <PrintBtn onClick={handlePrint} />
      </Container>
    </ReducerContext.Provider>
  );
}
