import { HomeInitialState } from "../initialState";
import * as Actions from "../actions/home";
import ActionTypes from "../../utils/actionTypes";
import * as GlobalStore from "../global";

export const ImageDetails = {
  url: "",
};

export const actionCreators = {
  getImages: () => async (dispatch, getState) => {
    let response = await Actions.getImages();
    dispatch(response);
  },
};

export const HomeReducer = (state = HomeInitialState, action) => {
  if (GlobalStore.isGlobalAction(action)) {
    return GlobalStore.globalReducer(state, action);
  } else {
    switch (action.type) {
      case ActionTypes.Home.GET_IMAGE_LIST:
        return { ...state, ...action.data };
      default:
        return { ...state, errorMessage: null };
    }
  }
};
