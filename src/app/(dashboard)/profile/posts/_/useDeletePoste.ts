import { deletePostApi } from "@/services/postServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

interface DeletePostResponse {
    message: string
}

interface DeletePostVariables {
    id: string
}

export default function useDeletePost() {
    const queryClient = useQueryClient()
    const { isPending: isDeleting, mutate: deletePost } = useMutation<
        DeletePostResponse,
        AxiosError<{ message: string }>,
        DeletePostVariables

    >({
        mutationFn: deletePostApi,
        onSuccess: data => {
            toast.success(data.message)
            queryClient.invalidateQueries({
                queryKey: ["posts"]
            })
        },
        onError: err => toast.error(err?.response?.data?.message)
    })

    return { isDeleting, deletePost }
}