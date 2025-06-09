import { APIResponse, Post, PostListResponse } from "types/ApiTypes";
import http from "./httpService";
import { AxiosRequestConfig } from "axios";


export async function getPostBySlug(slug: string): Promise<Post | null> {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`
    );
    const { data }: APIResponse = await res.json();
    const { post } = data || {};
    return post
}

export async function getPosts(queries: string = "", options?: RequestInit): Promise<PostListResponse> {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${queries}`,
        options
    );
    const { data }: { data: PostListResponse } = await res.json();
    const { posts, totalPages } = data || {}
    return { posts, totalPages };
}

interface ActionResponse {
    message: string;
}

export async function likePostApi(postId: string): Promise<ActionResponse> {
    return http.post(`/post/like/${postId}`).then(({ data }) => data.data)
}

export async function bookmarkPostApi(postId: string): Promise<ActionResponse> {
    return http.post(`/post/bookmark/${postId}`).then(({ data }) => data.data)
}

export async function createPostApi(data: FormData): Promise<ActionResponse> {
    return http.post(`/post/create`, data).then(({ data }) => data.data)
}

export async function editPostApi({ id, data }: { id: string; data: FormData }): Promise<ActionResponse> {
    return http.patch(`/post/update/${id}`, data).then(({ data }) => data.data)
}

export async function getPostById(id: number | string): Promise<{ post: Post }> {
    return http.get(`/post/${id}`).then(({ data }) => data.data)
}

export async function deletePostApi({ id, options }: { id: string; options?: AxiosRequestConfig }) {
    return http.delete(`/post/remove/${id}`, options).then(({ data }) => data.data)
}