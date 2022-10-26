import axios from "axios";

export const login = (requestData) => {
  return axios.post("/auth", requestData);
};

