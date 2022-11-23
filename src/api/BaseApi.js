import axios from "axios";
import { trackPromise } from 'react-promise-tracker';

const url = "https://localhost:44340/api/v1";

export default class BaseApi {
  async get(params) {
    return await trackPromise(axios.get(url + params));
  }

  async post(params, request) {
    return await trackPromise(axios.post(url + params, request));
  }

  async postSilently(params, request) {
    return await axios.post(url + params, request);
  }

  async put(params, request) {
    return await trackPromise(axios.put(url + params, request));
  }

  async delete(params) {
    return await trackPromise(axios.delete(url + params));
  }
}