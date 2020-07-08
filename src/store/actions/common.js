import ActionTypes from "../../utils/actionTypes";
import { NotificationManager } from "react-notifications";

export const getRequestErrorAction = (errorMessage) => {
  NotificationManager.warning(errorMessage, "Warning message!", 2000);
  return {
    type: ActionTypes.Common.REQUEST_ERROR_STATUS,
    data: {
      errorMessage: errorMessage,
    },
  };
};

export const getResponseErrorAction = (errorMessage) => {
  NotificationManager.warning(errorMessage, "Warning message!", 2000);
  return {
    type: ActionTypes.Common.RESPONSE_ERROR_STATUS,
    data: {
      errorMessage: errorMessage,
    },
  };
};

export const clearErrorStatus = () => {
  return {
    type: ActionTypes.Common.REQUEST_ERROR_STATUS,
    data: {
      errorMessage: null,
    },
  };
};

export const reportUnhandlerErrors = async (errorMessage) => {
  NotificationManager.error(errorMessage, "Error message!", 5000);
  return {
    type: ActionTypes.Common.REPORT_UNHANDLED_ERROR,
    data: { errorMessage: "Something went wrong." },
  };
};
