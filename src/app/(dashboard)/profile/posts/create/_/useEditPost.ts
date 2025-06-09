import { editPostApi } from "@/services/postServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

interface EditPostResponse {
    message: string
}

interface EditPostVariables {
    id: string
    data: FormData;
}

export default function useEditPost() {
    const queryClient = useQueryClient()
    const { isPending: isEditing, mutate: editPost } = useMutation<
        EditPostResponse,
        AxiosError<{ message: string }>,
        EditPostVariables>({
            mutationFn: editPostApi,
            onSuccess: data => {
                toast.success(data.message)
                queryClient.invalidateQueries({
                    queryKey: ["posts"]
                })
            },
            onError: err => toast.error(err?.response?.data?.message)
        })

    return { isEditing, editPost }
}