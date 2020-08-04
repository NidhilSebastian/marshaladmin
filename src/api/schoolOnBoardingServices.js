import axios from "axios";
import * as CommonActions from "../store/actions/SchoolOnboarding";

export const saveSchoolOnboarding = async (schoolonboarding) => {
  try {
    const url = "http://localhost:9402/school";
    const response = await axios.post(url, schoolonboarding);
    return response;
  } catch (error) {
    return CommonActions.getRequestErrorAction(
      "Network error occured: Failed to get the images."
    );
  }
};
