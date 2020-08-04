import * as ImageService from "../../api/imageService";
import ActionTypes from "../../utils/actionTypes";
import * as CommonActions from "../actions/common";

export const getCountry = async () => {
  try {
    let imageResponse = {
      imageList: [],
    };
    let response = await ImageService.getCountry();
    if (response.data != null && response.data.results.length > 0) {
      response.data.results.forEach((element) => {
        const image = {
          imageUrl: element.urls.small,
          title: element.alt_description,
          description: element.description,
          author: element.user.first_name,
        };
        imageResponse.imageList.push(image);
      });
    }
    return {
      type: ActionTypes.SchoolOnboarding.GET_COUNTRY_LIST,
      data: imageResponse,
    };
  } catch (error) {
    return CommonActions.getRequestErrorAction(
      "Network error occured: Failed to get the images.."
    );
  }
};


export const getState = async () => {
    try {
      let imageResponse = {
        imageList: [],
      };
      let response = await ImageService.getState();
      if (response.data != null && response.data.results.length > 0) {
        response.data.results.forEach((element) => {
          const image = {
            imageUrl: element.urls.small,
            title: element.alt_description,
            description: element.description,
            author: element.user.first_name,
          };
          imageResponse.imageList.push(image);
        });
      }
      return {
        type: ActionTypes.SchoolOnboarding.GET_STATE_LIST,
        data: imageResponse,
      };
    } catch (error) {
      return CommonActions.getRequestErrorAction(
        "Network error occured: Failed to get the images.."
      );
    }
  };

  export const getCity = async () => {
    try {
      let imageResponse = {
        imageList: [],
      };
      let response = await ImageService.getCity();
      if (response.data != null && response.data.results.length > 0) {
        response.data.results.forEach((element) => {
          const image = {
            imageUrl: element.urls.small,
            title: element.alt_description,
            description: element.description,
            author: element.user.first_name,
          };
          imageResponse.imageList.push(image);
        });
      }
      return {
        type: ActionTypes.SchoolOnboarding.GET_CITY_LIST,
        data: imageResponse,
      };
    } catch (error) {
      return CommonActions.getRequestErrorAction(
        "Network error occured: Failed to get the images.."
      );
    }
  };
  