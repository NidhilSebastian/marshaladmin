import { SchoolonboardingInitialState } from "../initialState";
import * as Actions from "../actions/SchoolOnboarding";
import ActionTypes from "../../utils/actionTypes";
import * as GlobalStore from "../global";

export const actionCreators = {
  saveSchoolOnboarding: (schoolonboarding) => async (dispatch, getState) => {
    let response = await Actions.saveSchoolOnboarding(schoolOnboarding);
    dispatch(response);
  },
};

export const SchoolOnboardingReducer = (
  state = SchoolonboardingInitialState,
  action
) => {
  if (GlobalStore.isGlobalAction(action)) {
    return GlobalStore.globalReducer(state, action);
  } else {
    switch (action.type) {
      case ActionTypes.SchoolOnboarding.SAVE_SCHOOL_ONBOARDING:
        return { ...state, ...action.data };
      default:
        return { ...state, errorMessage: null };
    }
  }
};
