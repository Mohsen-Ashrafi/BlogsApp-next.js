import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const app: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    withCredentials: true,
});

app.interceptors.request.use(
    (res: InternalAxiosRequestConfig) => res,
    (err: AxiosError) => Promise.reject(err)
)

app.interceptors.response.use(
    (res: AxiosResponse) => res,
    async (err: AxiosError) => {
        const originalConfig = err.config as AxiosRequestConfig & { _retry?: boolean };
        if (err.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;
            try {
                const { data } = await axios.get(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/user/refresh-token`,
                    { withCredentials: true }
                )
                if (data) return app(originalConfig)
            } catch (error) {
                return Promise.reject(error)
            }
        }
        return Promise.reject(err)
    }
)



const http = {
    get: app.get,
    post: app.post,
    delete: app.delete,
    put: app.put,
    patch: app.patch,
};

export default http;