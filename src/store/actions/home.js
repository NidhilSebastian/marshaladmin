import * as ImageService from "../../api/imageService";
import ActionTypes from "../../utils/actionTypes";
import * as CommonActions from "../actions/common";

export const getImages = async () => {
  try {
    let imageResponse = {
      imageList: [],
    };
    let response = await ImageService.getImages();
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
      type: ActionTypes.Home.GET_IMAGE_LIST,
      data: imageResponse,
    };
  } catch (error) {
    return CommonActions.getRequestErrorAction(
      "Network error occured: Failed to get the images.."
    );
  }
};
