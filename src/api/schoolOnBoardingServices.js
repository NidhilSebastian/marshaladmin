import axios from "axios";
import * as CommonActions from "../store/actions/SchoolOnboarding";


export const getCountres = async () => {
  try {
    const url =
      "http://localhost:9402/country";
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return CommonActions.getRequestErrorAction(
      "Network error occured: Failed to get the images."
    );
  }
};

export const getStates = async () => {
  try {
    const url =
      "http://localhost:9402/state";
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return CommonActions.getRequestErrorAction(
      "Network error occured: Failed to get the images."
    );
  }
};

export const getCites = async () => {
  try {
    const url =
      "http://localhost:9402/city";
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return CommonActions.getRequestErrorAction(
      "Network error occured: Failed to get the images."
    );
  }
};
