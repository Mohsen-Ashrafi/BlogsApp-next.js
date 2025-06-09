import { AxiosRequestConfig } from "axios";
import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export default function setCookieOnReq(cookies: ReadonlyRequestCookies): AxiosRequestConfig {
    const accessToken = cookies.get("accessToken");
    const refreshToken = cookies.get("refreshToken");

    return {
        method: "GET",
        withCredentials: true,
        headers: {
            cookie: `${accessToken?.name}=${accessToken?.value}; ${refreshToken?.name}=${refreshToken?.value}`,
        },
    };
}
