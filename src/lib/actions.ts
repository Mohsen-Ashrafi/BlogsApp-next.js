"use server"

import { createCommentApi } from "@/services/commentService"
import setCookieOnReq from "@/utils/setCookieOnReq"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"


type StateType = {
    error?: string;
    message?: string;
};



export async function createComment(
    prevState: StateType,
    formData: FormData
): Promise<StateType> {
    const cookieStore = await cookies()
    const options = setCookieOnReq(cookieStore)


    const postId = formData.get("postId") as string;
    const parentId = formData.get("parentId") as string | null;
    const text = formData.get("text") as string;

    if (!postId || !text) {
        return {
            error: "Missing post ID or comment text.",
        };
    }


    try {
        const { message }: { message: string } = await createCommentApi({ postId, parentId, text }, options)
        revalidatePath("/blogs/[slug]")
        return {
            message
        }

    } catch (err) {
        const error: string = err?.response?.data?.message;
        return {
            error
        }
    }
}