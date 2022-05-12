/* eslint-disable no-unused-expressions */
import { useContext } from "react";
import ReducerContext from "../context/ReducerContext";

const useIconCategory = (categoryValue: string) => {
  const reducerCon = useContext(ReducerContext);

  let returnIcon: string | undefined;
  reducerCon?.state.categories.forEach(({ value, icon }) => {
    value === categoryValue ? (returnIcon = icon) : null;
  });

  return returnIcon;
};

export default useIconCategory;
