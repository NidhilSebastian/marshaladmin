import { AddressInitialState } from "../initialState";
import * as Actions from "../actions/addressInfo";
import ActionTypes from "../../utils/actionTypes";
import * as GlobalStore from "../global";

export const actionCreators = {
  getCountries: () => async (dispatch, getState) => {
    let response = await Actions.getCountries();
    dispatch(response);
  },

  getStates: () => async (dispatch, getState) => {
    let response = await Actions.getStates();
    dispatch(response);
  },
  getCites: () => async (dispatch, getState) => {
    let response = await Actions.getCites();
    dispatch(response);
  },
};

export const AddressReducer = (state = AddressInitialState, action) => {
  if (GlobalStore.isGlobalAction(action)) {
    return GlobalStore.globalReducer(state, action);
  } else {
    switch (action.type) {
      case ActionTypes.AddressInfo.GET_COUNTRY_LIST:
        return { ...state, ...action.data };
      case ActionTypes.AddressInfo.GET_STATE_LIST:
        return { ...state, ...action.data };
      case ActionTypes.AddressInfo.GET_CITY_LIST:
        return { ...state, ...action.data };
      default:
        return { ...state, errorMessage: null };
    }
  }
};
