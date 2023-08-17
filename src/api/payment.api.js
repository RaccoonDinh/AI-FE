import axiosService from "./axios-service";

const API = "/api/v1";

const ENDPOINT = "payments";
const URL = `${API}/${ENDPOINT}`;

const paymentApi = {
  getClientID: async () => {
    const response = await axiosService.get(`${URL}/get-client-id`);

    return response.data.data;
  },
};

export default paymentApi;
