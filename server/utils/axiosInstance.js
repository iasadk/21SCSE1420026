const axios = require('axios');
const { refreshMyToken } = require('./util');
const axiosInstance = axios.create({
    baseURL: "http://20.244.56.144"
});

axiosInstance.interceptors.request.use(
    async (config) => {
        console.log(await refreshMyToken(),"TOKEN")
        config.headers.Authorization = 'Bearer ' + await refreshMyToken();

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


module.exports = axiosInstance