import { ReactElement } from "react";
import { Wrapper, Footer, Header, Main } from "./styles/LayoutStyles";

interface ILayoutProps {
  header: ReactElement;
  main: ReactElement;
  footer: ReactElement;
}

export default function Layout({ header, main, footer }: ILayoutProps) {
  return (
    <Wrapper>
      <Header>{header}</Header>
      <Main>{main}</Main>
      <Footer>{footer}</Footer>
    </Wrapper>
  );
}
