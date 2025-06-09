import { AxiosRequestConfig } from "axios";
import http from "./httpService";
import { Category } from "types/ApiTypes";

export async function getCategoryApi(options: AxiosRequestConfig = {}): Promise<{ categories: Category[] }> {
    return http.get(`/category/list`, options).then(({ data }) => data.data);
}
