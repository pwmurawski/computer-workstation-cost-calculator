import { useContext, useState } from "react";
import { DropResult } from "react-beautiful-dnd";
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

  const onDragEnd = (param: DropResult) => {
    const srcI = param.source.index;
    const desI = param.destination?.index;
    const newList = reducerCon?.state.listItemData;

    if (newList) {
      newList.splice(desI ?? 0, 0, newList.splice(srcI, 1)[0]);
      reducerCon.dispatch({ type: "setListItemData", listItemData: newList });
    }
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
        onDragEnd={onDragEnd}
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
