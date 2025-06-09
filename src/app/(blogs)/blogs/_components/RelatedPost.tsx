import { PostListType } from "types/ApiTypes";
import Author from "./Author";
import CoverImage from "./CoverImage";

interface RelatedPostProps {
  posts: PostListType[];
}

function RelatedPost({ posts }: RelatedPostProps) {
  return (
    <div className=" mb-10">
      <p className="text-xl mb-4">Related posts</p>
      <div className="grid gap-4 grid-cols-6">
        {posts.map((item) => {
          return (
            <div
              key={item._id}
              className="col-span-6 md:col-span-3 lg:col-span-2"
            >
              <CoverImage {...item} />
              <div className="flex items-center justify-between mt-1">
                <Author {...item.author} />
                <p className="text-sm">{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default RelatedPost;
