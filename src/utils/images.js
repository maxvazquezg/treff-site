import { vars } from "./vars";

export const getURLImage = (imageName, local) => {
  if (local) {
    const url = process.env.PUBLIC_URL;
    return url + "/" + imageName;
  } else {
    const url = vars.BACKEND_URL + "Images/";
    return url + imageName;
  }
};
