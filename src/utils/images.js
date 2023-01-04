import { vars } from "./vars";

export const getURLImage = (imageName, local) => {
  if (local) {
    const url = process.env.PUBLIC_URL;
    return url + "/" + imageName;
  } else {
    let baseUrl = process.env.REACT_APP_IMAGES_URL;
    const url = baseUrl;
    return url + imageName;
  }
};
