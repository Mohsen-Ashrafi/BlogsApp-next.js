import { CommentPayload, CommentTypeService, CommentUpdatePayload } from "types/ApiTypes";
import http from "./httpService";
import { AxiosRequestConfig } from "axios";

export async function createCommentApi(
    data: CommentPayload,
    options?: AxiosRequestConfig
): Promise<{ message: string }> {
    return http.post(`/comment/add`, data, options).then(({ data }) => data.data);
}

export async function getAllCommentsApi(
    options: AxiosRequestConfig = {}
): Promise<CommentTypeService> {
    return http.get(`/comment/list`, options).then(({ data }) => data.data);
}

export async function deleteCommentApi(
    { id, options }: { id: string, options?: AxiosRequestConfig }): Promise<{ message: string }> {
    return http
        .delete(`/comment/remove/${id}`, options)
        .then(({ data }) => data.data);
}

export async function updateCommentApi(
    { id, data }: CommentUpdatePayload,
    options: AxiosRequestConfig = {}
): Promise<{ message: string }> {
    return http
        .patch(`/comment/update/${id}`, data, options)
        .then(({ data }) => data.data);
}


const commentApi = {
    createCommentApi,
    getAllCommentsApi,
    updateCommentApi,
    deleteCommentApi
};

export default commentApi;
