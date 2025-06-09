import { SignupInput, SignupResponse, User } from "types/Signup";
import http from "./httpService";
import { AxiosRequestConfig } from "axios";

export async function signupApi(data: SignupInput): Promise<SignupResponse> {
    return http.post<{ data: SignupResponse }>(`/user/signup`, data).then(({ data }) => data.data);
}

export async function signinApi(data: SignupInput): Promise<SignupResponse> {
    return http.post<{ data: SignupResponse }>(`/user/signin`, data).then(({ data }) => data.data);
}

export async function getUserApi() {
    return http.get<{ data: SignupResponse }>(`/user/profile`).then(({ data }) => data.data);
}

export async function getAllUsersApi(options?: AxiosRequestConfig): Promise<{ users: User[] }> {
    return http.get("/user/list", options).then(({ data }) => data.data);
}

export function logoutApi(): Promise<{ message: string }> {
    return http.post(`/user/logout`);
}
const userAuth = {
    signinApi,
    signupApi,
    logoutApi,
    getUserApi,
    getAllUsersApi,
};

export default userAuth;



