import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export default function setCookieForFetch(cookies: ReadonlyRequestCookies): RequestInit {
    const accessToken = cookies.get("accessToken");
    const refreshToken = cookies.get("refreshToken");

    return {
        method: "GET",
        credentials: "include",
        headers: {
            cookie: `${accessToken?.name}=${accessToken?.value}; ${refreshToken?.name}=${refreshToken?.value}`,
        },
    };
}
