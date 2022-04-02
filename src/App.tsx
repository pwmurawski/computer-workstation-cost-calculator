import { useReducer, useMemo } from "react";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { reducer, initialState } from "./reducer";
import ReducerContext from "./context/ReducerContext";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const reducerValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  const header = <Header />;

  const main = <Home />;

  const footer = <Footer />;

  return (
    <ReducerContext.Provider value={reducerValue}>
      <Layout header={header} main={main} footer={footer} />
    </ReducerContext.Provider>
  );
}
