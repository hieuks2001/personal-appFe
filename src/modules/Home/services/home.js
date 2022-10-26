import axios from 'axios';

export const getTodo = async () => {
    return await axios.get(`/todo`)
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