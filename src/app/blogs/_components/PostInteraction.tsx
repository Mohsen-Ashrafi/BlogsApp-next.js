import ButtonIcon from "@/ui/ButtonIcon";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { JSX } from "react";


interface Post {
    commentsCount: number;
  }
  
  interface Props {
    post: Post;
  }

  function PostInteraction({ post }: Props): JSX.Element {
  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant="secondary">
        <ChatBubbleOvalLeftEllipsisIcon />
        <span>{post.commentsCount}</span>
      </ButtonIcon>
      <ButtonIcon variant="red">
        <HeartIcon />
      </ButtonIcon>
      <ButtonIcon variant="primary">
        <BookmarkIcon />
      </ButtonIcon>
    </div>
  );
}

export default PostInteraction;
