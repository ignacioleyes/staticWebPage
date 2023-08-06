import { KeyValuePair } from "./types";
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