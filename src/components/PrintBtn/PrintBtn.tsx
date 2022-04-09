import { Container, Img } from "./styles/PrintBtnStyles";
import icon from "../../assets/print.png";

interface IPrintBtnProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const defaultProps = {
  onClick: undefined,
};

export default function PrintBtn({ onClick }: IPrintBtnProps) {
  return (
    <Container onClick={onClick}>
      <Img src={icon} alt="print" />
    </Container>
  );
}

PrintBtn.defaultProps = defaultProps;
