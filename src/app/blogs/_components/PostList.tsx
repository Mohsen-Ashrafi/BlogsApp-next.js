import React, { JSX } from "react";
import CoverImage from "./CoverImage";

interface Post {
  _id: string;
  title: string;
  coverImageUrl: string;
  slug: string;
}

async function PostList(): Promise<JSX.Element | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  }: { data: { posts: Post[] } } = await res.json();

  return posts.length > 0 ? (
    <>
      <div className="grid grid-cols-12 gap-8">
        {posts.map((post) => (
          <div
            className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-300 shadow-md p-2 rounded-lg"
            key={post._id}
          >
            <CoverImage {...post} />
          </div>
        ))}
      </div>
    </>
  ) : null;
}

export default PostList;

// ta avale 56 khonde shod
