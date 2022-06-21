import { API_BASE_URL } from "../constants/apis";


export const getAPICompleteURL = (url?: string, version?: number) => {
    return `${API_BASE_URL}/v${version}${url}`;
}