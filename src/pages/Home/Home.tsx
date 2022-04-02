import { useContext } from "react";
import { Wrapper, SummaryContainer } from "./styles/HomeStyles";
import List from "../../components/List/List";
import Summary from "../../components/Summary/Summary";
import ReducerContext from "../../context/ReducerContext";
import ListHeader from "../../components/List/ListHeader/ListHeader";
import getTotalAmount from "../../helpers/getTotalAmount";

export default function Home() {
  const reducerCon = useContext(ReducerContext);

  const clearListHandler = () => {
    reducerCon?.dispatch({ type: "setListItemData", listItemData: [] });
  };

  return (
    <Wrapper>
      <List
        listHeader={
          <ListHeader
            numberItems={reducerCon?.state.listItemData.length ?? 0}
            clearListHandler={clearListHandler}
          />
        }
        listItemData={reducerCon?.state.listItemData ?? []}
      />
      <SummaryContainer>
        <Summary
          numberItems={reducerCon?.state.listItemData.length ?? 0}
          totalAmount={getTotalAmount(reducerCon?.state.listItemData ?? [])}
        />
      </SummaryContainer>
    </Wrapper>
  );
}
