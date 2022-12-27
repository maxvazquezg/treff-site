import BaseApi from "./BaseApi";

const FREELANCER_ENDPOINT = "/Freelancer";

class FreelancerApi extends BaseApi {
  async getFreelancerById(id) {
    try {
      const data = await this.get(`${FREELANCER_ENDPOINT}/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getServicesByFreelancerId(id) {
    try {
      const data = await this.get(`${FREELANCER_ENDPOINT}/services/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async createFreelancer(request) {
    try {
      const data = await this.post(`${FREELANCER_ENDPOINT}`, request);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async loginFreelancer(request) {
    try {
      const data = await this.post(`${FREELANCER_ENDPOINT}/login`, request);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new FreelancerApi();
