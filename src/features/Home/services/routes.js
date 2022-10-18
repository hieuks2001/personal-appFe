import axios from 'axios';

export const getTodo = (status) => {
    return axios.get(`/todo/${status}`)
}

export const postTodo = (todo) => {
    return axios.post(`/todo`, todo)
}

export const updateTodo = (id) => {
    return axios.patch(`/todo/${id}`)
}

export const deleteTodo = (id) => {
    return axios.delete(`/todo/${id}`)
}