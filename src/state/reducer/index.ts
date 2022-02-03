//Wire up everything tgt and setup redux store

import { combineReducers } from "redux";
import repositoriesReducer from "./respositoriesReducer";

//combine all reducers together

const reducers = combineReducers({
  repositories: repositoriesReducer
});

export default reducers;
