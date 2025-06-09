"use server";

import { updateCommentApi } from "@/services/commentService";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

type UpdateCommentFormData = {
  commentId: string
  formData: FormData
}

type State = {
  message?: string
  error?: string
}

export default async function updateComment(
  prevState,
  { commentId, formData }: UpdateCommentFormData
): Promise<State> {
  const cookieStore = await cookies();

  const data = {
    status: formData.get("status") as string,
  };

  try {
    const options = setCookiesOnReq(cookieStore);
    const { message } = await updateCommentApi(
      { id: commentId, data },
      options
    );

    revalidatePath("/profile/comments");

    return {
      message,
    };
  } catch (err) {
    const error = err?.response?.data?.message;
    // console.log({ error });
    return {
      error,
    };
  }
}
