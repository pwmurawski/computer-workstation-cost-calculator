import { createContext } from "react";
import { Action, IState } from "../reducer";

interface IReducerContext {
  state: IState;
  dispatch: React.Dispatch<Action>;
}

const ReducerContext = createContext<IReducerContext | null>(null);

export default ReducerContext;
