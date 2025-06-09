import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateCommentApi } from "@/services/commentService";
import { AxiosError } from "axios";

interface UpdateCommentResponse {
  message: string
}

interface UpdateCommentVariables {
  id: string
}

export default function useUpdateComment() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: updateComment } = useMutation<
    UpdateCommentResponse,
    AxiosError<{ message: string }>,
    UpdateCommentVariables
  >({
    mutationFn: updateCommentApi,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isUpdating, updateComment };
}
