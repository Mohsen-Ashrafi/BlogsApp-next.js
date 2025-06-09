"use client";

import { createComment } from "@/lib/actions";
import SubmitButton from "@/ui/SubmitButton";
import TextArea from "@/ui/TextArea";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CommentFormState } from "types/ApiTypes";

const initiaState: CommentFormState = {
  error: "",
  message: "",
};

interface CommentPayload {
  postId: string;
  parentId?: string | null;
  onClose: () => void;
}

function CommentForm({ postId, parentId, onClose }: CommentPayload) {
  const [text, setText] = useState("");
  const [state, formAction] = useActionState(createComment, initiaState);

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
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md w-full">
          <form
            action={async (formData) => {
              formData.append("postId", postId);
              if (parentId) formData.append("parentId", parentId);
              await formAction(formData);
            }}
            className="space-y-7"
          >
            <TextArea
              name="text"
              label="Comment text"
              value={text}
              isRequired
              onChange={(e) => setText(e.target.value)}
            />
            <SubmitButton variant="primary">Confirm</SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommentForm;
