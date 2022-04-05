import { Container, Icon } from "./styles/AddCategoryBtnStyles";
import addIcon from "../../assets/addBtnIcon.png";

interface IAddCategoryBtnProps {
  onClick: () => void;
}

export default function AddCategoryBtn({ onClick }: IAddCategoryBtnProps) {
  return (
    <Container type="button" onClick={onClick}>
      <Icon src={addIcon} />
    </Container>
  );
}
