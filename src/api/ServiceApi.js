import BaseApi from "./BaseApi";
import { trackPromise } from 'react-promise-tracker';

const CATEGORY_ENDPOINT = "/Service";

class ServiceApi extends BaseApi {
    async getServiceById(id){
        try{
            const data = await trackPromise(this.get(CATEGORY_ENDPOINT+"/" + id));
            return data.data;
        } catch (error){
            throw new Error(error);
        }
    }

    async getHighlightServices(limit, byFreelancer){
        try{
            const data = await trackPromise(this.post(CATEGORY_ENDPOINT+"/highlightLimit/", {limit, byFreelancer}));
            return data.data;
        } catch (error){
            throw new Error(error);
        }
    }

    async getServices(limit, byFreelancer){
        try{
            const data = await trackPromise(this.post(CATEGORY_ENDPOINT+"/limit/", {limit, byFreelancer}));
            return data.data;
        } catch (error){
            throw new Error(error);
        }
    }

    async getServicesByCategoryId(categoryId, byFreelancer){
        try{
            const data = await trackPromise(this.post(CATEGORY_ENDPOINT+"/category/", {categoryId, byFreelancer}));
            return data.data;
        } catch (error){
            throw new Error(error);
        }
    }

    async getHighlightServicesByCategoryId(categoryId, byFreelancer){
        try{
            const data = await trackPromise(this.post(CATEGORY_ENDPOINT+"/categoryPremium/", {categoryId, byFreelancer}));
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