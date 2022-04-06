import { IListItemData } from "../reducer";
import removeDuplicates from "./removeDuplicates";

const sortByCategory = (arr: IListItemData[]) => {
  const categoriesName = removeDuplicates(
    arr.map((el) => el.category.name.toLocaleLowerCase())
  );
  const arrSort = categoriesName
    .sort()
    .flatMap((val) =>
      arr.filter((el) =>
        el.category.name.toLocaleLowerCase() === val ? el : null
      )
    );

  return arrSort;
};

export default sortByCategory;
