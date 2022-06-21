import axios, { AxiosRequestConfig, HeadersDefaults } from 'axios';

import { API_BASE_URL } from '../constants/apis';
import { getAPICompleteURL } from '../utils/api';

const fetchAPI = axios.create({
    baseURL: API_BASE_URL,
});

(<any> fetchAPI.defaults.headers) = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
};


fetchAPI.interceptors.request.use(
    (config: AxiosRequestConfig & { version?: number, url?: string }) => {
        const version = config.version || 1;
        config.url = getAPICompleteURL(config.url, version);

        return config;
    },
);

export default fetchAPI;