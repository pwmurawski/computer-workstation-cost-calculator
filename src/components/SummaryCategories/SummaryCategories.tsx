import { useContext } from "react";
import { Container, Header } from "./styles/SummaryStyles";
import Category from "./Category/Category";
import ReducerContext from "../../context/ReducerContext";
import getCategories from "../../helpers/getCategories";
import getTotalAmount from "../../helpers/getTotalAmount";

export default function SummaryCategories() {
  const reducerCon = useContext(ReducerContext);
  const listItemData = reducerCon?.state.listItemData ?? [];
  const categoriesInList = getCategories(listItemData);

  return (
    <Container>
      <Header>Podsumowanie</Header>
      {categoriesInList.map(({ id, name, items }) => (
        <Category
          key={id}
          name={name}
          value={getTotalAmount(items)}
          length={items.length}
        />
      ))}
      <Category
        name="Razem"
        value={getTotalAmount(listItemData)}
        length={listItemData.length}
      />
    </Container>
  );
}
