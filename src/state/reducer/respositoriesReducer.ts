import { Action, RespositoriesState } from "../actions";
import { ActionType } from "../actions-types";

//reducer is a function that recieve state+action and return state
const reducer = (
  state: RespositoriesState,
  action: Action
): RespositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: true, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
