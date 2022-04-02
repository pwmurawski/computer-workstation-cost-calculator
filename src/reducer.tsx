import addLocalStorage from "./helpers/addLocalStorage";

export interface IListItemData {
  id: string;
  name: string;
  desc: string;
  price: string;
  category: string;
}

export interface IState {
  listItemData: IListItemData[];
}

interface IAddListItemAction {
  type: "addListItem";
  listItem: IListItemData;
}

interface IDeleteListItemAction {
  type: "deleteListItem";
  id: string;
}

interface IListItemDataAction {
  type: "setListItemData";
  listItemData: IListItemData[];
}

export type Action =
  | IAddListItemAction
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
      throw new Error(`There is no such action`);
  }
};

export const initialState: IState = {
  listItemData: JSON.parse(
    window.localStorage.getItem("listItemData") ?? "null"
  ),
};
