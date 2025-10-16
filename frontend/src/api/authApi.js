import api from "./axiosConfig";

export const authApi = {
    login: (credentials) => api.post('/users/login', credentials),
}