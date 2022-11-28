import BaseApi from "./BaseApi";
import { trackPromise } from 'react-promise-tracker';

const CATEGORY_ENDPOINT = "/Service";

class ServiceApi extends BaseApi {
    async getHighlightServices(limit){
        try{
            const data = await trackPromise(this.get(CATEGORY_ENDPOINT+"/highlightLimit/" + limit));
            return data.data;
        } catch (error){
            throw new Error(error);
        }
    }

    async getServices(limit){
        try{
            const data = await trackPromise(this.get(CATEGORY_ENDPOINT+"/limit/" + limit));
            return data.data;
        } catch (error){
            throw new Error(error);
        }
    }

    async getServicesByCategoryId(categoryId){
        try{
            const data = await trackPromise(this.get(CATEGORY_ENDPOINT+"/category/" + categoryId));
            return data.data;
        } catch (error){
            throw new Error(error);
        }
    }

    async getHighlightServicesByCategoryId(categoryId){
        try{
            const data = await trackPromise(this.get(CATEGORY_ENDPOINT+"/categoryPremium/" + categoryId));
            return data.data;
        } catch (error){
            throw new Error(error);
        }
    }

    async getBadgeById(id){
        try{
            const data = await this.get(`${CATEGORY_ENDPOINT}/${id}`);
            return data.data;
        } catch (error){
            throw new Error(error);
        }
    }

    async createBadges(request){
        try{
            const data = await this.post(`${CATEGORY_ENDPOINT}`, request);
            return data.data;
        } catch (error){
            throw new Error(error);
        }
    }

    async updateBadges(id, request){
        try{
            const data = await this.put(`${CATEGORY_ENDPOINT}/Update?id=${id}`, request);
            return data.data;
        } catch (error){
            throw new Error(error);
        }
    }

    async deleteBadges(id){
        try{
            const data = await this.delete(`${CATEGORY_ENDPOINT}/${id}`);
            return data.data;
        } catch (error){
            throw new Error(error);
        }
    }
}

export default new ServiceApi();