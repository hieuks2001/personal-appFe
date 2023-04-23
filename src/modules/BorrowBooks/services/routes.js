import axios from "axios";

export const getUserBorrow = () => {
  return axios.get(`/TblBorrowers`);
};
export const getUserBorrowBooks = (id) => {
  return axios.get(`/TblBorrowers/${id}/loan`);
};
export const getLibrary = () => {
  return axios.get(`/TblLibraryBranches`);
};

export const returnBook = (data, token) => {
  return axios.post(
    `/TblBorrowers/${data.bookLoansCardNo}/Return/${data.bookLoansLoansId}`,
    "",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );
};
export const postBorrower = (data) => {
  return axios.post(`/TblBorrowers`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + data.token,
    },
  });
};

export const updateSpending = (id, data, token) => {
  return axios.put(`/TblBorrowers/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
};

export const addBookLoan = ( data, token) => {
  return axios.post(`/TblBorrowers/${data.borrowerCardNo}/Loan`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
};

export const deleteBorrower = (token, id) => {
  return axios.delete(`/TblBorrowers/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
};
