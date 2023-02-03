import BaseApi from "./BaseApi";
import { trackPromise } from "react-promise-tracker";

const PROJECT_ENDPOINT = "/Project";

class ProjectApi extends BaseApi {
  async createService(project) {
    try {
      const data = await trackPromise(this.post(PROJECT_ENDPOINT, project));
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new ProjectApi();
