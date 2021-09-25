import { createStore } from "redux";
import rootReducer from "./Reducers/rootReducer";
import { devToolsEnhancer } from "redux-devtools-extension";

export default createStore(rootReducer, devToolsEnhancer());
