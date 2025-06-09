import Table from "@/ui/Table";
import Empty from "@/ui/Empty";
import { getAllCommentsApi } from "@/services/commentService";
import CommentRow from "./CommentRow";
import { Fragment } from "react";
import { CommentRowData } from "types/ApiTypes";

type RawComment = {
  _id: string;
  content?: { text: string };
  text?: string;
  user?: { name: string };
  userName?: string;
  status?: string;
  createdAt: string;
  answers?: RawComment[];
};

async function CommentsTable() {
  const { comments }: { comments: RawComment[] } = await getAllCommentsApi();
  if (!comments.length) return <Empty resourceName="Comments" />;

  let index = 1;

  const normalizeComment = (comment: RawComment): CommentRowData => {
    index++;
    return {
      index,
      comment: {
        _id: comment._id,
        content: { text: comment.content?.text ?? comment.text ?? "" },
        user: { name: comment.user?.name ?? comment.userName ?? "Unknown" },
        createdAt: comment.createdAt,
        status: comment.status,
        answers: comment.answers?.map(normalizeComment),
      },
    };
  };

  const normalizedComments: CommentRowData[] = comments.map(normalizeComment);

  return (
    <Table>
      <Table.Header>
        <th className="w-4 text-center">#</th>
        <th>Text</th>
        <th>Author</th>
        <th>Created At</th>
        <th>Status</th>
        <th>Actions</th>
      </Table.Header>
      <Table.Body>
        {normalizedComments.map((commentData) => (
          <Fragment key={commentData.comment._id}>
            <CommentRow {...commentData} />
            {commentData.comment.answers?.map((answerData) => (
              <CommentRow key={answerData.comment._id} {...answerData} />
            ))}
          </Fragment>
        ))}
      </Table.Body>
    </Table>
  );
}
export default CommentsTable;
