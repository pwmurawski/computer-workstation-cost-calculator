import { useContext, useState } from "react";
import { Wrapper, SummaryContainer } from "./styles/HomeStyles";
import List from "../../components/List/List";
import Summary from "../../components/Summary/Summary";
import ReducerContext from "../../context/ReducerContext";
import ListHeader from "../../components/List/ListHeader/ListHeader";
import summaryAllCategories from "../../helpers/summaryAllCategories";
import { IListItemData } from "../../reducer";
import filterByCategory from "../../helpers/filterByCategory";
import sort from "../../helpers/sort";

export default function Home() {
  const reducerCon = useContext(ReducerContext);
  const [headerListSelected, setHeaderListSelected] = useState({
    filter: "",
    sort: "",
  });

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
            selectedCategoryHandler={(value) =>
              setHeaderListSelected({ ...headerListSelected, filter: value })
            }
            selectedSortHandler={(value) =>
              setHeaderListSelected({ ...headerListSelected, sort: value })
            }
            clearListHandler={clearListHandler}
          />
        }
        listItemData={sort(
          filterByCategory(
            reducerCon?.state.listItemData ?? [],
            headerListSelected.filter
          ),
          headerListSelected.sort
        )}
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
