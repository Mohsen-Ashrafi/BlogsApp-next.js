import { createPostApi } from "@/services/postServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

interface CreatePostResponse {
    message: string
}

type CreatePostVariables = FormData;


export default function useCreatePost() {
    const queryClient = useQueryClient()
    const { isPending: isCreating, mutate: createPost } = useMutation<
        CreatePostResponse,
        AxiosError<{ message: string }>,
        CreatePostVariables
    >({
        mutationFn: createPostApi,
        onSuccess: data => {
            toast.success(data.message)
            queryClient.invalidateQueries({
                queryKey: ["posts"]
            })
        },
        onError: err => toast.error(err?.response?.data?.message)
    })

    return { isCreating, createPost }
}