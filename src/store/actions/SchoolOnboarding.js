import * as schoolOnBoardingServices from "../../api/schoolOnBoardingServices";
import ActionTypes from "../../utils/actionTypes";
import * as CommonActions from "../actions/common";

import * as modelConverter from "../../models/api/schoolOnboarding";

export const saveSchoolOnboarding = async (schoolonboarding) => {
  try {
    let onboardingApimodel = modelConverter.mapToApiModel(schoolonboarding);
    let response = schoolOnBoardingServices.saveSchoolOnboarding(
      onboardingApimodel
    );
    return {
      type: ActionTypes.SchoolOnboarding.SAVE_SCHOOL_ONBOARDING,
      data: response,
    };
  } catch (error) {
    return CommonActions.getRequestErrorAction(
      "Network error occured: Failed to get the images.."
    );
  }
};
