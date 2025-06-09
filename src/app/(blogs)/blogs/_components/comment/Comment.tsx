import Avatar from "@/ui/Avatar";
import Button from "@/ui/Button";
import { CommentType } from "types/ApiTypes";

interface CommentProps {
  comment: CommentType;
  onAddComment?: () => void;
}

function Comment({ comment, onAddComment }: CommentProps) {
  return (
    <>
      <div className="flex items-center justify-between mb-5 border-b border-b-secondary-300/60 pb-2">
        <div className="flex items-center ">
          <Avatar
            height={34}
            width={34}
            alt={comment.user?.name || "-"}
            src={comment.user.avatarUrl}
          />
          <div className="text-sm w-full text-secondary-600 ml-4">
            <span className="font-bold block mb-1">{comment.user.name}</span>
            <span className="block text-secondary-500 text-xs">
              {comment.createdAt}
            </span>
          </div>
        </div>
        <div>
          {comment.openToComment && (
            <Button
              onClick={onAddComment}
              variantType="secondary"
              className="text-sm flex gap-x-1 p-2 rounded-lg text-secondary-500 bg-secondary-200 hover:bg-secondary-300"
            >
              Answer
            </Button>
          )}
        </div>
      </div>
      <p className="text-secondary-700 leading-loose lg:leading-8 text-xs lg:text-base">
        {comment.content.text}
      </p>
    </>
  );
}
export default Comment;
