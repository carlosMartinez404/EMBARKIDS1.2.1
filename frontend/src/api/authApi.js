import api from "./axiosConfig";

export const authApi = {
    login: (credentials) => api.post('/login', credentials),
}