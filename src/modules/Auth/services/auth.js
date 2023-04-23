import axios from "axios";

export const login = (requestData) => {
  localStorage.setItem("port", JSON.stringify(requestData.port));

  return axios.post(`/TblUsers/Login`, requestData);
};
