import { getPostSlug, getPosts } from "@/services/postServices";
import Image from "next/image";
import { JSX } from "react";
import { Post } from "types/ApiTypes";
import RelatedPosts from "../_components/RelatedPosts";
import PostComment from "../_components/comment/PostComment";
import NotFound from "./not-found";

interface SinglePostProps {
  params: Promise<{ postSlug: string }>;
}

export async function generateMetadata({ params }: SinglePostProps) {
  const { postSlug } = await params;
  const post: Post = await getPostSlug(postSlug);

  return {
    title: post ? post.title : "Post not found",
  };
}

export async function generateStaticParams() {
  const { posts } = await getPosts();
  if (!posts || posts.length === 0) return [];
  return posts.slice(0, 2).map((post) => ({ postSlug: post.slug }));
}

async function SinglePost({ params }: SinglePostProps): Promise<JSX.Element> {
  const { postSlug } = await params;
  const post: Post = await getPostSlug(postSlug);

  if (!post) return NotFound();

  const isExternalImage =
    post.coverImage.startsWith("http://") || post.coverImage.startsWith("https://");

  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">{post.title}</h1>
      <p className="mb-8">{post.text}</p>

      <div className="relative w-full h-[450px] overflow-hidden rounded-lg mb-10">
        <Image
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
          src={post.coverImage}
          alt={post.briefText || post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          unoptimized={!isExternalImage} 
        />
      </div>

      {post.related && post.related.length > 0 && <RelatedPosts posts={post.related} />}
      <PostComment post={post} />
    </div>
  );
}

export default SinglePost;
