import { getPostSlug, getPosts } from "@/services/postServices";
import Image from "next/image";
import RelatedPosts from "../_components/RelatedPost";
import PostComment from "../_components/comment/PostComment";
import NotFound from "./not-found";
import { JSX } from "react";
import { GetPostSlugResponse, Post } from "types/ApiTypes";

interface SinglePostProps {
  params: Promise<{ slug: string }>;
}

// export async function generateMetadata({ params }: SinglePostProps) {
//   const post = await getPostSlug(params.postSlug);

//   return {
//     title: `${post.title}`,
//   };
// }

export async function generateMetadata({ params }: SinglePostProps) {
  const { slug } = await params;
  const post = await getPostSlug(slug);
  // const post = response.post;

  return {
    title: post ? `${post.title}` : "Post not found",
  };
}

export async function generateStaticParams() {
  const { posts } = await getPosts();
  if (!posts || posts.length === 0) return [];
  // return posts.slice(0, 2).map((post) => ({ postSlug: post.slug }));
  return posts.slice(0, 2).map((post) => ({ slug: post.slug }));
}

async function SinglePost({ params }: SinglePostProps): Promise<JSX.Element> {
  const { slug } = await params;
  const post = await getPostSlug(slug);
  // const post: Post | null = response.post;
  
  

  // const post: GetPostSlugResponse  = await getPostSlug(slug);
  // const { slug } = await params;
  // const response: GetPostSlugResponse = await getPostSlug(slug);
  // const post: Post | null = response.post;

  if (!post) return NotFound();

  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">
        {post.title}
      </h1>
      <p className="mb-8">{post.text}</p>
      <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
        <Image
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
          fill
          src={post?.coverImage}
          alt={post.briefText}
        />
      </div>
      {/* {post.related.length > 0 && <RelatedPosts posts={post.related} />} */}
      {post.related && post.related.length > 0 && (
        <RelatedPosts posts={post.related} />
      )}
      <PostComment post={post} />
    </div>
  );
}

export default SinglePost;
