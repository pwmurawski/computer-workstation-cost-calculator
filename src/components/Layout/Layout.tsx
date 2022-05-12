import { ReactElement } from "react";
import { Wrapper, Footer, Main } from "./styles/LayoutStyles";

interface ILayoutProps {
  main: ReactElement;
  footer: ReactElement;
}

export default function Layout({ main, footer }: ILayoutProps) {
  return (
    <Wrapper>
      <Main>{main}</Main>
      <Footer>{footer}</Footer>
    </Wrapper>
  );
}
