import Table from "@/ui/Table";
import { DeletePosts, UpdatePost } from "./Buttons";

const typeStyle = {
  free: {
    label: "free",
    className: "badge--success",
  },
  premium: {
    label: "paid",
    className: "badge--secondary",
  },
};

interface PostRowProps {
  index: number;
  post: {
    _id: string;
    title: string;
    category: {
      title: string;
    };
    author: {
      name: string;
    };
    createdAt: string;
    type: keyof typeof typeStyle;
  };
}

function PostRow({ index, post }: PostRowProps) {
  const { title, category, author, createdAt, type } = post;
  return (
    <Table.Row>
      <td className="px-2 py-2 w-4 text-center">{index + 1}</td>
      <td className="max-w-[100px] truncate">{title}</td>
      <td className="max-w-[100px] truncate">{category.title}</td>
      <td className="max-w-[100px] truncate">{author.name}</td>
      <td className="min-w-[90px] text-nowrap">
        {new Date(createdAt).toLocaleDateString("en-US")}
      </td>
      <td>
        <span className={`badge ${typeStyle[type].className}`}>
          {typeStyle[type].label}
        </span>
      </td>
      <td>
        <div className="flex items-center justify-start gap-x-3">
          <UpdatePost id={post._id} />
          <DeletePosts post={post} />
        </div>
      </td>
    </Table.Row>
  );
}

export default PostRow;
