import axios from "axios";
import * as CommonActions from "../store/actions/common";

export const getImages = async () => {
  try {
    const url =
      "https://api.unsplash.com/search/photos?page=1&query=office&client_id=a8LPtd2FV4A-97NVp9LnYEFCrTczbd2KfIcpbrjHFyc";
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return CommonActions.getRequestErrorAction(
      "Network error occured: Failed to get the images."
    );
  }
};
