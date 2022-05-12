import { IListItemData } from "../reducer";

const filter = (arr: IListItemData[], category: string) => {
  if (category === "") return arr;
  return arr.filter((el) => (el.category.value === category ? el : null));
};

export default filter;
