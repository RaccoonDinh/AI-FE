import axiosService from "./axios-service";

const API = process.env.REACT_APP_API_URL;

const ENDPOINT = "users";
const URL = `${API}/${ENDPOINT}`;

export const userApi = {
  getUserInfo: async () => {
    const response = await axiosService.get(`${URL}`);

    return response.data.data;
  },
  updateUserInfo: async (body) => {
    const response = await axiosService.put(`${URL}/setting`, body);

    return response.data.data;
  },
};
