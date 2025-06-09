import { deleteCommentApi } from "@/services/commentService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";


interface DeleteCommentResponse {
    message: string
}

interface DeleteCommentVariables {
    id: string
}

export default function useDeleteComment() {
    const queryClient = useQueryClient()
    const { isPending: isDeleting, mutate: deleteComment } = useMutation<
        DeleteCommentResponse,
        AxiosError<{ message: string }>,
        DeleteCommentVariables
    >({
        mutationFn: deleteCommentApi,
        onSuccess: data => {
            toast.success(data.message)
            queryClient.invalidateQueries({
                queryKey: ["comments"]
            })
        },
        onError: err => toast.error(err?.response?.data?.message)
    })

    return { isDeleting, deleteComment }
}