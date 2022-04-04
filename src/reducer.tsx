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

export interface IState {
  listItemData: IListItemData[];
}

export type Action =
  | IAddListItemAction
  | IEditListItemAction
  | IDeleteListItemAction
  | IListItemDataAction;

export const reducer = (state: IState, action: Action) => {
  let newListItemData: IListItemData[];

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

    default:
      throw new Error("There is no such action");
  }
};

export const initialState: IState = {
  listItemData: getLocalStorage("listItemData"),
};
