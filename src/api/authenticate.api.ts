import axiosService from "./axios-service";

const API = "/api/v1";
const ENDPOINT = "authenticate";
const URL = `${API}/${ENDPOINT}`;

export const authenticateApi = {
  login: async (body) => {
    const response = await axiosService.post(`${URL}/login`, body);
    return response.data.data;
  },

  sendCode: async (body) => {
    const response = await axiosService.post(`${URL}/send-code-email`, body);
    console.log(response.data);
    return response.data.data;
  },

  register: async (body) => {
    const response = await axiosService.post(`${URL}/register`, body);
    console.log(response);
    return response.data.data;
  },
};
