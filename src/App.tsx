import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

export default function App() {
  const main = <Home />;
  const footer = <Footer />;

  return <Layout main={main} footer={footer} />;
}
