"use client";

import { useForm } from "react-hook-form";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import SubmitButton from "@/ui/SubmitButton";
import updateComment from "../actions/updateComment";
import RHFSelectComment from "@/ui/RHFSelectComment";

interface UpdateCommentFormProps {
  comment: {
    _id: string;
    status: number;
  };
  onClose: () => void;
}

interface FormValues {
  status: number;
}

const options = [
  {
    id: 1,
    label: "Rejected",
    value: 0,
  },
  {
    id: 2,
    label: "Pending Approval",
    value: 1,
  },
  {
    id: 3,
    label: "Approved",
    value: 2,
  },
];

function UpdateCommentForm({ comment, onClose }: UpdateCommentFormProps) {
  const [state, formAction] = useActionState(updateComment, {
    error: "",
    message: "",
  });

  const { register } = useForm<FormValues>({
    defaultValues: { status: comment.status },
  });

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      onClose();
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state, onClose]);

  return (
    <form
      className="form"
      action={async (formData) => {
        await formAction({ formData, commentId: comment._id });
      }}
    >
      <RHFSelectComment
        label="Change status"
        isRequired
        name="status"
        register={register}
        options={options}
      />
      <SubmitButton type="submit" variant="primary" className="w-full">
        Confirm
      </SubmitButton>
    </form>
  );
}
export default UpdateCommentForm;
