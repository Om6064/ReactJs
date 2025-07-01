import { createStore } from "redux";
import ReduxCounter from "./reducer";

const Store = createStore(ReduxCounter)

export default Store;