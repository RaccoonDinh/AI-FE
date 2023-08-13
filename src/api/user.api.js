import axiosService from "./axios-service";

const API = "/api/v1";

const ENDPOINT = "users";
const URL = `${API}/${ENDPOINT}`;

export const userApi = {
  getUser: async () => {
    const response = await axiosService.get(`${URL}/get-user`);

    return response.data.data;
  },
  getAllUser: async () => {
    const response = await axiosService.get(`${URL}/get-all-user`);

    return response.data.data;
  },
  // updateUserInfo: async (body) => {
  //   const response = await axiosService.put(`${URL}/setting`, body);

  //   return response.data.data;
  // },
  getUserByPhone: async (body) => {
    const response = await axiosService.get(`${URL}/find-user-by-phone`, body);

    return response.data.data;
  },
  activeUser: async (id) => {
    const response = await axiosService.put(`${URL}/${id}`);

    return response.data.data;
  },
};
