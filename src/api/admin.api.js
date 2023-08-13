import axiosService from "./axios-service";

const API = "/api/v1";

const ENDPOINT = "admin";
const URL = `${API}/${ENDPOINT}`;

const adminApi = {
  login: async (data) => {
    const response = await axiosService.post(URL + "/login", data);

    return response.data.data;
  },
};

export default adminApi;
