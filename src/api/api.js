import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {
        "API-KEY": "6cf71137-6ca5-4ed8-98f9-85111c1fb4b7"
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
};