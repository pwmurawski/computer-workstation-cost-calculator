import { v4 as uuid } from "uuid";
import { IListItemData } from "../reducer";
import removeDuplicates from "./removeDuplicates";

const getCategories = (listItem: IListItemData[]) => {
  const categories = removeDuplicates(listItem.map(({ category }) => category));

  const summary = categories.map(({ name, value }) => ({
    id: uuid(),
    name,
    value,
    items: listItem.filter(({ category }) => category.name === name),
  }));

  return summary;
};

export default getCategories;
