/* eslint-disable no-unused-vars */
import { useContext } from "react";
import ReducerContext from "../../context/ReducerContext";
import { Select } from "./styles/SelectCategoryStyles";

interface ISelectProps {
  isValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const defaultProps = {
  isValue: undefined,
  onChange: undefined,
};

export default function SelectCategory({ isValue, onChange }: ISelectProps) {
  const reducerCon = useContext(ReducerContext);

  return (
    <Select value={isValue} onChange={onChange}>
      <option value="">Wybierz kategorie</option>
      <option value="hardware">Podzespoły komputera</option>
      <option value="peripherals">Urządzenia peryferyjne</option>
      <option value="software">Oprogramowanie</option>
      {reducerCon?.state.categories?.map(({ name, value }) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
      <option value="another">Inne</option>
    </Select>
  );
}

SelectCategory.defaultProps = defaultProps;
