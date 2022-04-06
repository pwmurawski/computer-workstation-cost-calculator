import { v4 as uuid } from "uuid";
import { IListItemData } from "../reducer";
import removeDuplicates from "./removeDuplicates";

const summaryAllCategories = (arr: IListItemData[]) => {
  const categories = removeDuplicates(arr.map(({ category }) => category));

  const summary = categories.map(({ name, value }) => ({
    id: uuid(),
    name,
    value,
    items: arr.filter(({ category }) => category.name === name),
  }));

  return summary;
};

export default summaryAllCategories;
