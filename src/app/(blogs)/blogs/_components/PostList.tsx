import React, { JSX } from "react";
import CoverImage from "./CoverImage";
import Link from "next/link";
import { ClockIcon } from "@heroicons/react/24/outline";
import Author from "./Author";
import PostInteraction from "./PostInteraction";

interface Author {
  name: string;
  avatarUrl: string;
}

interface PostListType {
  _id: string;
  title: string;
  coverImageUrl: string;
  slug?: string;
  author?: Author;
  readingTime?: number;
  commentsCount: number;
  isLiked: boolean;
  isBookmarked: boolean;
}

interface PostListProps {
  posts: PostListType[];
}

async function PostList({ posts }: PostListProps): Promise<JSX.Element | null> {
  return posts.length > 0 ? (
    <div className="grid grid-cols-12 gap-8">
      {posts.map((post) => (
        <div
          className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-300 shadow-md p-2 rounded-lg
          hover:shadow-[0_8px_30px_rgba(139,92,246,0.5)] transition-all duration-300
          "
          key={post._id}
        >
          <CoverImage {...post} />
          <div>
            <Link href={`/blogs/${post.slug}`}>
              <h2 className="my-2 font-bold text-secondary-700 hover:text-primary-900 transition-all ease-out">
                {post.title}
              </h2>
            </Link>
            <div className="flex items-center justify-between mb-4">
              <Author {...post.author} />
              <div className="flex items-center text-[12px] text-secondary-500">
                <ClockIcon className="w-4 h-4 stroke-secondary-500 mr-1" />
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
