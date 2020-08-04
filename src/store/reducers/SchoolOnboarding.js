import { HomeInitialState } from "../initialState";
import * as Actions from "../actions/SchoolOnboarding";
import ActionTypes from "../../utils/actionTypes";
import * as GlobalStore from "../global";



export const actionCreators = {
    getCountry: () => async (dispatch, getState) => {
    let response = await Actions.getCountry();
    dispatch(response);
  },
};

export const CountryReducer = (state = CountryInitialState, action) => {
  if (GlobalStore.isGlobalAction(action)) {
    return GlobalStore.globalReducer(state, action);
  } else {
    switch (action.type) {
      case ActionTypes.SchoolOnboarding.GET_COUNTRY_LIST:
        return { ...state, ...action.data };
      default:
        return { ...state, errorMessage: null };
    }
  }
};


export const CountryReducer = (state = CountryInitialState, action) => {
    if (GlobalStore.isGlobalAction(action)) {
      return GlobalStore.globalReducer(state, action);
    } else {
      switch (action.type) {
        case ActionTypes.SchoolOnboarding.GET_STATE_LIST:
          return { ...state, ...action.data };
        default:
          return { ...state, errorMessage: null };
      }
    }
  };

  export const CountryReducer = (state = CountryInitialState, action) => {
    if (GlobalStore.isGlobalAction(action)) {
      return GlobalStore.globalReducer(state, action);
    } else {
      switch (action.type) {
        case ActionTypes.SchoolOnboarding.GET_CITY_LIST:
          return { ...state, ...action.data };
        default:
          return { ...state, errorMessage: null };
      }
    }
  };