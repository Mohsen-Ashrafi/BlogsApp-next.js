import type { NextRequest } from 'next/server'


type User = {
    id: string;
    name: string;
    email: string;
};

type ApiResponse = {
    data?: {
        user?: User;
    };
};

export async function middlewareAuth(request: NextRequest): Promise<User | undefined> {
    const accessToken = request.cookies.get("accessToken")
    const refreshToken = request.cookies.get("refreshToken")

    const options: RequestInit = {
        method: "GET",
        credentials: "include",
        headers: {
            cookie: `${accessToken?.name}=${accessToken?.value};${refreshToken?.name}=${refreshToken?.value}`,
        }
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`, options)
    const { data }: ApiResponse = await res.json()
    const { user } = data || {}
    return user
}


// export async function middlewareAuth(request: NextRequest): Promise<User | undefined> {
//     const accessToken = request.cookies.get("accessToken")
//     const refreshToken = request.cookies.get("refreshToken")

//     const options: RequestInit = {
//         method: "GET",
//         credentials: "include",
//         headers: {
//             cookie: `${accessToken?.name}=${accessToken?.value};${refreshToken?.name}=${refreshToken?.value}`,
//         }
//     }

//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`, options)

//     // if (!res.ok) {
//     //     console.error(`Fetch failed with status ${res.status}`);
//     //     return undefined;
//     // }

//     // const contentType = res.headers.get("content-type");
//     // if (!contentType || !contentType.includes("application/json")) {
//     //     console.error("Expected JSON but got:", contentType);
//     //     return undefined;
//     // }

//     const { data }: ApiResponse = await res.json()
//     const { user } = data || {}
//     return user
// }
