import ActionTypes from "./actionTypes";

export const isGlobalAction = (action) => {
  switch (action.type) {
    case ActionTypes.Common.REQUEST_ERROR_STATUS:
    case ActionTypes.Common.RESPONSE_ERROR_STATUS:
    case ActionTypes.Common.REPORT_UNHANDLED_ERROR:
      return true;
    default:
      return false;
  }
};
