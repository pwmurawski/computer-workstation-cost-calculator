import { useContext } from "react";
import { Wrapper, SummaryContainer } from "./styles/HomeStyles";
import List from "../../components/List/List";
import Summary from "../../components/Summary/Summary";
import ReducerContext from "../../context/ReducerContext";
import ListHeader from "../../components/List/ListHeader/ListHeader";
import summaryAllCategories from "../../helpers/summaryAllCategories";
import { IListItemData } from "../../reducer";

export default function Home() {
  const reducerCon = useContext(ReducerContext);

  const clearListHandler = () => {
    reducerCon?.dispatch({ type: "setListItemData", listItemData: [] });
  };

  const editItemHandler = (listItemNewData: IListItemData) => {
    reducerCon?.dispatch({ type: "editListItem", listItemNewData });
  };

  const deleteItemHandler = (id: string) => {
    reducerCon?.dispatch({ type: "deleteListItem", id });
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
        deleteItemHandler={deleteItemHandler}
        editItemHandler={editItemHandler}
      />
      <SummaryContainer>
        <Summary
          listItemData={reducerCon?.state.listItemData ?? []}
          categories={summaryAllCategories(
            reducerCon?.state.listItemData ?? []
          )}
        />
      </SummaryContainer>
    </Wrapper>
  );
}
