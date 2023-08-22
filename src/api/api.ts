import { ApiListResponse, KeyValuePair } from "./types";
import axios from "axios";

export const client = axios.create({
    baseURL: import.meta.env["VITE_API_URL"],
});

export const postResource = async (
    resource: string,
    authHeader: string,
    data: KeyValuePair | KeyValuePair[]
) => {
    return await client.post(`/${resource}`, data, {
        headers: { Authorization: authHeader },
    });
};

export const getResourceList = async <T>(
    resource: string,
    authHeader: string
) => {
    return await client.get<ApiListResponse<T>>(resource, {
        headers: { Authorization: authHeader },
        params: {
            "range.Start": 0,
            "range.End": 10000,
        },
    });
};