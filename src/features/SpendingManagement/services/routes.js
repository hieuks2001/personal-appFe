import axios from 'axios';

export const getTypeSpeding = (status) => {
    return axios.get(`/spending-management/type/${status}`)
}

export const getOneSpeding = (id) => {
    return axios.get(`/spending-management/${id}`)
}
export const postSpending = (data) => {
    return axios.post(`/spending-management`, data)
}

export const updateSpending = (id, data) => {
    return axios.patch(`/spending-management/${id}`, data)
}

export const deleteSpending = (id) => {
    return axios.delete(`/spending-management/${id}`)
}