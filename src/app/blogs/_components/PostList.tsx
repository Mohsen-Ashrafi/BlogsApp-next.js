import React, { JSX } from "react";
import CoverImage from "./CoverImage";
import Link from "next/link";
import { ClockIcon } from "@heroicons/react/24/outline";
import Author from "./Author";
import PostInteraction from "./PostInteraction";
import { getPosts } from "@/services/postServices";

async function PostList(): Promise<JSX.Element | null> {
  const posts = await getPosts();

  return posts.length > 0 ? (
    <div className="grid grid-cols-12 gap-8">
      {posts.map((post) => (
        <div
          className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-300 shadow-md p-2 rounded-lg"
          key={post._id}
        >
          <CoverImage {...post} />
          <div>
            <Link href={`/blogs/${post.slug}`}>
              <h2 className="mb-4 font-bold text-secondary-700 hover:text-primary-900 transition-all ease-out">
                {post.title}
              </h2>
            </Link>
            <div className="flex items-center justify-between mb-4">
              <Author {...post.author} />
              <div className="flex items-center text-[10px] text-secondary-500">
                <ClockIcon className="w-4 h-4 stroke-secondary-500 ml-1" />
                <span>ReadingTime : </span>
                <span>{post.readingTime}</span>
                <span> Minute</span>
              </div>
            </div>
            <PostInteraction post={post} />
          </div>
        </div>
      ))}
    </div>
  ) : null;
}

export default PostList;
