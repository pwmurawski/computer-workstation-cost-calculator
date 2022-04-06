import { IListItemData } from "../reducer";
import removeDuplicates from "./removeDuplicates";
import sortByCategory from "./sortByCategory";

const sort = (arr: IListItemData[], sortValue: string) => {
  if (sortValue === "") return arr;

  if (sortValue === "category") {
    return sortByCategory(arr);
  }

  const array = removeDuplicates(
    arr.map((el) =>
      el[sortValue as keyof IListItemData].toString().toLocaleLowerCase()
    )
  );

  const arrSort = array
    .sort(
      sortValue === "price"
        ? (a, b) => parseFloat(b) - parseFloat(a)
        : undefined
    )
    .flatMap((val) =>
      arr.filter((el) =>
        el[sortValue as keyof IListItemData].toString().toLocaleLowerCase() ===
        val
          ? el
          : null
      )
    );

  return arrSort;
};

export default sort;
