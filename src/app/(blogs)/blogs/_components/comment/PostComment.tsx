"use client";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import MuiButton from "@/ui/MuiButton";
import Comment from "./Comment";
import Modal from "@/ui/Modal";
import { useState } from "react";
import CommentForm from "./CommentForm";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { CommentType } from "types/ApiTypes";

interface PostCommentProps {
  post: {
    _id: string;
    comments: CommentType[];
  };
}

function PostComment({ post: { comments, _id: postId } }: PostCommentProps) {
  const [open, setOpen] = useState(false);
  const [parent, setParent] = useState<CommentType | null>(null);
  const { user } = useAuth();
  const router = useRouter();

  const addNewCommentHandler = (parent: CommentType | null) => {
    if (!user) {
      router.push("/signin");
      return;
    }
    setParent(parent);
    setOpen(true);
  };

  return (
    <div className="mb-10">
      <div className="flex flex-row items-center justify-between gap-y-3 mb-8">
        <h2 className="sm:text-2xl text-xl font-bold text-secondary-800">
          Comments
        </h2>
        <MuiButton
          onClick={() => addNewCommentHandler(null)}
          variant="primary"
          className="flex items-center py-2 sm:text-lg text-sm"
        >
          <span>New comment</span>
          <QuestionMarkCircleIcon className="w-4 ml-2" />
        </MuiButton>
        <Modal
          title={parent ? "Reply to comment" : "New comment"}
          description={parent ? parent.user.name : "Enter your comment"}
          open={open}
          onClose={() => setOpen(false)}
        >
          <CommentForm
            postId={postId}
            parentId={parent ? parent._id : null}
            onClose={() => setOpen(false)}
          />
        </Modal>
      </div>
      <div className="space-y-8 post-comments bg-secondary-0 rounded-xl py-6 px-3 lg:px-6 ">
        {comments.length > 0 ? (
          comments.map((comment) => {
            return (
              <div key={comment._id}>
                <div className="border border-secondary-300 rounded-xl p-2 sm:p-4 mb-3">
                  <Comment
                    comment={comment}
                    onAddComment={() => addNewCommentHandler(comment)}
                  />
                </div>
                <div className="post-comments__answer mr-2 sm:mr-8 space-y-3">
                  {comment.answers.map((item, index) => {
                    return (
                      <div key={item._id} className="relative">
                        <div
                          className={classNames(
                            "answer-item border border-secondary-200 bg-secondary-50/80 rounded-xl p-2 sm:p-4",
                            {
                              "last-item": index + 1 === comment.answers.length,
                            }
                          )}
                        >
                          <Comment key={item._id} comment={item} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-secondary-500">
            No comments have been posted for this post
          </p>
        )}
      </div>
    </div>
  );
}

export default PostComment;
