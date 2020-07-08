import { globalState } from "./initialState";
import ActionTypes from "../utils/actionTypes";
import * as CommonActions from "./actions/common";

export const globalReducer = (state = globalState, action) => {
  switch (action.type) {
    case ActionTypes.Common.REQUEST_ERROR_STATUS:
      return { ...state, ...action.data };

    case ActionTypes.Common.REQUEST_STATUS_UPDATE:
      return { ...state, ...action.data };

    case ActionTypes.Common.REPORT_UNHANDLED_ERROR:
      return { ...state, ...action.data };

    default:
      return { ...state };
  }
};

export const isGlobalAction = (action) => {
  switch (action.type) {
    case ActionTypes.Common.REPORT_UNHANDLED_ERROR:
    case ActionTypes.Common.REQUEST_ERROR_STATUS:
    case ActionTypes.Common.REQUEST_STATUS_UPDATE:
      return true;
    default:
      return false;
  }
};

export const actionCreators = {
  clearError: () => async (dispatch, getState) => {
    dispatch(CommonActions.clearErrorStatus());
  },
  reportError: (error) => async (dispatch, getState) => {
    dispatch(CommonActions.reportUnhandlerErrors(error));
  },
};
