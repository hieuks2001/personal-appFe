import axios from "axios";


export const getItem = (p) => {
  return axios.get(`/TblBooks`);
};
export const getPublisher = (p) => {
  return axios.get(`/TblPublishers`);
};
export const getOneSpeding = (id) => {
  return axios.get(`/spending-management/${id}`);
};
export const postSpending = (data) => {
  return axios.post(`/TblBooks`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + data.token,
    },
  });
};

export const updateItem = (data) => {
  return axios.put(
    `/TblBooks/${data?.bookBookId}`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.token,
      },
    }
  );
};

export const deleteItem = (port, token, id) => {
  console.log(id);
  return axios.delete(`https://localhost:${port}/api/TblBooks/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
};
