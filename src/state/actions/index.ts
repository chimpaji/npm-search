//Contain all Actions {type,payload}

import { ActionType } from "../actions-types";

export interface RespositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRespositoriesErrorAction;

export interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

export interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

export interface SearchRespositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}
