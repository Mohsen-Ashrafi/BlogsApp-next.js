import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import { getAllUsersApi } from "./authService";
import { getAllCommentsApi } from "./commentService";
import { getPosts } from "./postServices";

export interface CardData {
    numberOfUsers: number;
    numberOfComments: number;
    numberOfPosts: number;
}



export async function fetchCardData(): Promise<CardData> {
    const cookieStore = await cookies();
    const options = setCookieOnReq(cookieStore)

    try {
        const data = await Promise.all([
            getAllUsersApi(options),
            getAllCommentsApi(options),
            getPosts(),
        ]);

        const numberOfUsers = Number(data[0].users.length ?? "0");
        const numberOfComments = Number(data[2].posts.length ?? "0");
        const numberOfPosts = Number(data[1].commentsCount ?? "0");

        return {
            numberOfComments,
            numberOfPosts,
            numberOfUsers
        }
    } catch (error) {
        console.error("Error", error.response.data.message);
        throw new Error("Error loading information");
    }
}

