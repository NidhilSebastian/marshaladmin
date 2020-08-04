import * as CommonService from "../../api/commonServices";
import ActionTypes from "../../utils/actionTypes";
import * as CommonActions from "../actions/common";

export const getCountries = async () => {
  try {
    let response = CommonService.getCountries();
    if (response.status == 200) {
      let countryResponse = {
        countryList: response.records,
      };
      return {
        type: ActionTypes.AddressInfo.GET_COUNTRY_LIST,
        data: countryResponse,
      };
    }
  } catch (error) {
    return CommonActions.getRequestErrorAction(
      "Network error occured: Failed to get the images.."
    );
  }
};
export const getStates = async () => {
  try {
    let response = CommonService.getStates();
    return {
      type: ActionTypes.AddressInfo.GET_STATE_LIST,
      data: response,
    };
  } catch (error) {
    return CommonActions.getRequestErrorAction(
      "Network error occured: Failed to get the images.."
    );
  }
};
export const getCites = async () => {
  try {
    let response = CommonService.getCites();
    return {
      type: ActionTypes.AddressInfo.GET_CITY_LIST,
      data: response,
    };
  } catch (error) {
    return CommonActions.getRequestErrorAction(
      "Network error occured: Failed to get the images.."
    );
  }
};
