import { getPosts } from "@/services/postServices";
import Empty from "@/ui/Empty";
import Table from "@/ui/Table";
import PostRow from "./PostRow";
import { DisplayPost, PostListType } from "types/ApiTypes";

interface PostTableProps {
  query?: string;
}

function mapPostListToDisplay(post: PostListType): DisplayPost {
  return {
    _id: post._id,
    title: post.title,
    category: {
      title: post.category?.title ?? "Uncategorized",
    },
    author: {
      name: post.author?.name ?? "Unknown",
    },
    createdAt: new Date().toISOString(),
    type: "free",
  };
}

async function PostTable({ query = "" }: PostTableProps) {
  const { posts } = await getPosts(query);

  if (!posts.length) return <Empty resourceName="post"></Empty>;

  const displayPosts = posts.map(mapPostListToDisplay);

  return (
    <div className="overflow-x-auto w-full">
      <Table>
        <Table.Header>
          <th className="w-4 text-center">#</th>
          <th className="max-w-[100px]">Title</th>
          <th className="max-w-[100px]">Category</th>
          <th className="max-w-[100px]">Author</th>
          <th className="max-w-[100px]">createdAt</th>
          <th className="max-w-[100px]">Type</th>
          <th className="max-w-[100px]">Actions</th>
        </Table.Header>
        <Table.Body>
          {displayPosts.map((post, index) => (
            <PostRow key={post._id} post={post} index={index} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default PostTable;
