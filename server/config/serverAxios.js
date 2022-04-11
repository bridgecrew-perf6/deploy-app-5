import axios from 'axios';

const serverAxios = axios.create({
    baseURL: process.env.APP_BACKEND_URL
})

export default serverAxios;