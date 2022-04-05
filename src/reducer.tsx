import addLocalStorage from "./helpers/addLocalStorage";
import getLocalStorage from "./helpers/getLocalStorage";

export interface IListItemData {
  id: string;
  name: string;
  desc: string;
  price: string;
  category: {
    name: string;
    value: string;
  };
}

export interface ICategory {
  name: string;
  value: string;
  icon: string;
}

interface IAddListItemAction {
  type: "addListItem";
  listItem: IListItemData;
}

interface IEditListItemAction {
  type: "editListItem";
  listItemNewData: IListItemData;
}

interface IDeleteListItemAction {
  type: "deleteListItem";
  id: string;
}

interface IListItemDataAction {
  type: "setListItemData";
  listItemData: IListItemData[];
}

interface IAddCategoryAction {
  type: "addCategory";
  category: ICategory;
}

export interface IState {
  listItemData: IListItemData[];
  categories: ICategory[];
}

export type Action =
  | IAddListItemAction
  | IEditListItemAction
  | IDeleteListItemAction
  | IListItemDataAction
  | IAddCategoryAction;

export const reducer = (state: IState, action: Action) => {
  let newListItemData: IListItemData[];
  let newCategories: ICategory[];

  switch (action.type) {
    case "addListItem":
      newListItemData = [...state.listItemData, action.listItem];

      addLocalStorage("listItemData", newListItemData);
      return {
        ...state,
        listItemData: newListItemData,
      };

    case "editListItem":
      newListItemData = state.listItemData.map((el) =>
        el.id === action.listItemNewData.id ? action.listItemNewData : el
      );

      addLocalStorage("listItemData", newListItemData);
      return {
        ...state,
        listItemData: newListItemData,
      };

    case "deleteListItem":
      newListItemData = [
        ...state.listItemData.filter((el) => el.id !== action.id),
      ];

      addLocalStorage("listItemData", newListItemData);
      return {
        ...state,
        listItemData: newListItemData,
      };

    case "setListItemData":
      addLocalStorage("listItemData", action.listItemData);
      return { ...state, listItemData: action.listItemData };

    case "addCategory":
      newCategories = [...state.categories, action.category];

      addLocalStorage("categories", newCategories);
      return { ...state, categories: newCategories };

    default:
      throw new Error("There is no such action");
  }
};

export const initialState: IState = {
  listItemData: getLocalStorage("listItemData") ?? [],
  categories: getLocalStorage("categories") ?? [],
};
