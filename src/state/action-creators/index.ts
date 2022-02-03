import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../actions-types";
import { Action } from "../actions/index";

//will need help from ReduxThunk to make network request
export const searchRepositories = (term: string) => {
  //this is where we will dispatch action to the store and get
  //processed by reducer
  return async (dispatch: Dispatch<Action>) => {
    //dispatch action of user init search
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES
    });

    //trying to start search and dispatch search success
    //or else dispatch fail search with error message attached
    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search/",
        {
          params: {
            text: term
          }
        }
      );
      //array of package name
      const names = data.objects.map((result) => result.package.name);
      //success? then dispatch success
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names
      });
    } catch (error) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: error.message
      });
    }
  };
};
