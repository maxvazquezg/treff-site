import BaseApi from "./BaseApi";

const FREELANCER_ENDPOINT = "/Freelancer";

class FreelancerApi extends BaseApi {

    async getFreelancerById(id){
        try{
            const data = await this.get(`${FREELANCER_ENDPOINT}/${id}`);
            return data.data;
        } catch (error){
            throw new Error(error);
        }
    }

    async getServicesByFreelancerId(id){
        try{
            const data = await this.get(`${FREELANCER_ENDPOINT}/services/${id}`);
            return data.data;
        } catch (error){
            throw new Error(error);
        }
    }

}

export default new FreelancerApi();